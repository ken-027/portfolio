import { AnimatePresence, motion } from "motion/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { chatStream } from "~/api/chat-stream.api";
import ShareIcon from "../icons/share.icon";
import CloseIcon from "../icons/close.icon";
import { marked } from "marked";
import botSound from "../../assets/sounds/chatbot-sound.mp3";
import useSound from "use-sound";
import generateRandomNumber from "~/utils/generate-random.util";
import useScreenSize from "~/hooks/useScreenSize";
import {
  getChatbotStyle,
  switchChatbotStyle,
  type ChatbotStyle,
} from "~/shared/local-storage";

export default function ChatBotLayout({ onClose }: { onClose?: () => void }) {
  const preMessages: Record<ChatbotStyle, string[]> = {
    portfolio: [
      "What kind of projects have you worked on before?",
      "Which technologies do you use the most?",
      "What technologies are you most proficient in?",
      "Do you have experience working with clients or teams?",
      "Can I see examples of your design or UI work?",
      "Are you open to new opportunities right now?",
    ],
    github: [
      "What repository are you most proud of?",
      "What tech stack did you use in this project?",
      "Do you accept contributions or collaborate with others?",
      "Are there any live demos available?",
      "Which repo should I check out first?",
    ],
  };

  const initMessage: Record<ChatbotStyle, string> = {
    portfolio:
      "Hey! Thanks for stopping by my portfolio. I'm your personal guide here - ask me about my projects, skills, or anything else you'd like to know. What interests you most?",
    github:
      "Hey! I’m Kenneth Andales. Need help understanding my GitHub projects or recent work?",
  };

  const [show, setShow] = useState(false);

  const [chatbotAgent, setChatbotAgent] = useState(getChatbotStyle());
  const [randomIndex, setRandomIndex] = useState<number>(
    generateRandomNumber(0, preMessages[chatbotAgent || "portfolio"].length)
  );
  const [agentMenu, setAgentMenu] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [reply, setReply] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([
    initMessage[chatbotAgent || "portfolio"],
  ]);
  const historyRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [play] = useSound(botSound);
  const inputRef = useRef<HTMLInputElement>(null);

  const image: Record<ChatbotStyle, string> = {
    portfolio: "/images/chatbot.png",
    github: "/images/github-copilot.svg",
  };

  const { responseSize } = useScreenSize();

  const toggleChat = () => {
    closeAgentMenu();
    setShow((prevState) => {
      if (prevState) {
        setRandomIndex(
          generateRandomNumber(
            0,
            preMessages[chatbotAgent || "portfolio"].length
          )
        );
      }

      return !prevState;
    });
  };

  const renderer = new marked.Renderer();
  renderer.link = function ({ href, text }) {
    return `<a href="${href}" target="_blank" class="text-green-300 dark:text-green-500">${text}</a>`;
  };

  //   renderer.strong = function (strong) {
  //     return `<strong class="italic">${strong.text}</strong>`;
  //   };

  const onChange = (e: any) => setCurrentMessage(e.target.value);

  const onChat = async () => {
    closeAgentMenu();
    let _reply = "";
    try {
      if (currentMessage.trim() === "") return;

      const message = currentMessage.trim();
      setCurrentMessage("");

      scrollDown();

      setStreaming(true);
      setMessages((prevState) => [...prevState, message]);

      const stream_replies = await chatStream(
        message,
        chatbotAgent || "portfolio"
      );

      play();

      const decoder = new TextDecoder("utf-8");
      while (stream_replies) {
        const { value, done } = await stream_replies.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setReply((prevState) => prevState + chunk);
        _reply += chunk;
      }
    } catch (err) {
      play();
      // @ts-ignore
      _reply = err.message;
      console.error(err);
    } finally {
      //   setReplies((prevState) => [...prevState, _reply]);
      setMessages((prevState) => [...prevState, _reply]);
      setReply("");
      setStreaming(false);
      setRandomIndex(
        generateRandomNumber(0, preMessages[chatbotAgent || "portfolio"].length)
      );
    }
  };

  const scrollDown = () => {
    if (!historyRef.current) return;

    historyRef.current.scrollTop = historyRef.current.scrollHeight;
  };

  const handleOutsideClick = () => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sectionRef.current &&
        !sectionRef.current.contains(event.target as Node)
      ) {
        // toggleChat();
        onClose && onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  const onKeyDown = (e: any) => {
    const message = currentMessage.trim();

    if (e.key === "Tab" && message === "") {
      setCurrentMessage(
        preMessages[chatbotAgent || "portfolio"][randomIndex] || ""
      );
    }
  };

  const onOpenAgent = () => setAgentMenu((prev) => !prev);
  const closeAgentMenu = () => setAgentMenu(false);

  const selectPortfolioAgent = () => {
    setChatbotAgent("portfolio");
    switchChatbotStyle("portfolio");
    closeAgentMenu();
  };
  const selectGithubAgent = () => {
    setChatbotAgent("github");
    switchChatbotStyle("github");
    closeAgentMenu();
  };

  const onDoubleClick = (_e: any) => {
    const message = currentMessage.trim();

    if (responseSize.lg || message !== "") return;

    setCurrentMessage(
      preMessages[chatbotAgent || "portfolio"][randomIndex] || ""
    );
  };

  const focusTextInput = () => {
    show && inputRef.current?.focus();
  };

  const changeInitMessage = () => {
    setMessages([initMessage[chatbotAgent || "portfolio"]]);
  };

  useEffect(changeInitMessage, [chatbotAgent]);
  useEffect(scrollDown, [reply]);
  useEffect(handleOutsideClick, [onClose]);
  useEffect(focusTextInput, [show]);
  useEffect(() => {
    setTimeout(() => {
      setShowChatBot(true);
    }, 3000);
  }, []);

  return (
    <>
      <>
        <AnimatePresence>
          {show ? (
            <motion.div
              ref={sectionRef}
              initial={{
                opacity: 0,
                scale: 0,
                x: "50%",
                y: "50%",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: "0%",
                x: "0%",
              }}
              exit={{
                opacity: 0,
                scale: 0,
                y: "50%",
                x: "50%",
              }}
              transition={{ type: "tween" }}
              className="border-1 rounded-md fixed inset-0 dark:bg-dark dark:border-border-dark lg:inset-[unset] lg:right-10 lg:bottom-24 z-40 border-border mx-auto min-h-[500px] lg:min-h-[600px] w-full lg:w-[550px] flex flex-col justify-center overflow-hidden shadow-lg bg-light"
            >
              <form
                className="flex-1 relative"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="lg:text-xl bg-dark dark:bg-light/90 dark:text-dark text-light py-3 flex justify-between px-4 items-center">
                  <div className="flex gap-2 items-center">
                    <img
                      alt="chatbot"
                      src={image[chatbotAgent || "portfolio"]}
                      className="h-8 w-8"
                    />
                    <h3>
                      Welcome to my{" "}
                      <span className="capitalize">{chatbotAgent}</span> Chatbot
                    </h3>
                  </div>
                  <button
                    className="hover:text-yellow-300 lg:hidden cursor-pointer"
                    type="button"
                    onClick={toggleChat}
                  >
                    <CloseIcon className="transition-colors" />
                  </button>
                </div>
                <div
                  ref={historyRef}
                  className="max-h-[85vh] dark:bg-dark lg:max-h-[500px] px-2 overflow-y-auto space-y-3 message-history pt-4 pb-10"
                >
                  {messages.map((message, index) => (
                    <Fragment key={index}>
                      {(index + 1) % 2 === 0 ? (
                        <MessageCard messageHistory={message} />
                      ) : (
                        <ReplyCard
                          replyHistory={marked(message, { renderer })}
                        />
                      )}
                    </Fragment>
                  ))}
                  {streaming && !reply ? (
                    <ChattingIndicator />
                  ) : reply ? (
                    <ReplyCard replyHistory={reply.replaceAll("*", "")} />
                  ) : null}
                </div>
                <div className="flex border-t-[1px] border-border dark:border-border-dark px-4 dark:bg-dark py-4 absolute bottom-0 inset-x-0 bg-light rounded-r-xl rounded-l-xl">
                  <AnimatePresence>
                    {agentMenu ? (
                      <motion.ul
                        initial={{
                          opacity: 0,
                          scale: 0,
                          x: "-30%",
                          y: "50%",
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: "0%",
                          x: "0%",
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                          y: "50%",
                          x: "-30%",
                        }}
                        className="absolute bottom-[100%] mb-2 bg-light dark:bg-dark py-2 rounded-md border left-2 border-border shadow-2xl px-3"
                      >
                        <li>
                          <button
                            className="cursor-pointer outline-none flex gap-3 items-center group"
                            onClick={selectPortfolioAgent}
                          >
                            <img
                              src={image.portfolio}
                              className="w-9 h-9 group-hover:scale-[1.05] duration-300 transition-transform"
                            />
                            <span
                              className={
                                chatbotAgent === "portfolio"
                                  ? "text-secondary font-bold"
                                  : ""
                              }
                            >
                              Portfolio
                            </span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="cursor-pointer outline-none flex gap-3 items-center group"
                            onClick={selectGithubAgent}
                          >
                            <img
                              src={image.github}
                              className="w-9 h-9 group-hover:scale-[1.05] duration-300 transition-transform"
                            />
                            <span
                              className={
                                chatbotAgent === "github"
                                  ? "text-secondary font-bold"
                                  : ""
                              }
                            >
                              Github
                            </span>
                          </button>
                        </li>
                      </motion.ul>
                    ) : (
                      ""
                    )}
                  </AnimatePresence>
                  <div className="relative w-full flex items-center gap-2 lg:gap-3">
                    <button
                      className="cursor-pointer outline-none"
                      type="button"
                      onClick={onOpenAgent}
                    >
                      <img
                        alt="chatbot"
                        src={image[chatbotAgent || "portfolio"]}
                        className="h-10 w-10"
                      />
                    </button>
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder={
                        preMessages[chatbotAgent || "portfolio"][randomIndex] ||
                        "Your question here..."
                      }
                      onKeyDown={onKeyDown}
                      onChange={onChange}
                      value={currentMessage}
                      onDoubleClick={onDoubleClick}
                      className="w-full outline-none placeholder:italic group border-[1px] border-border dark:border-border-dark pr-10 py-2 px-2 rounded-md transition-colors duration-500 focus:border-dark dark:focus:border-light/90 dark:bg-dark dark:text-light/90"
                    />
                    <button
                      className="cursor-pointer w-fit bottom-3 group outline-none absolute right-3"
                      disabled={streaming || currentMessage.trim() === ""}
                      type="submit"
                      onClick={onChat}
                      title="Submit"
                    >
                      <ShareIcon className="rotate-[34deg] scale-125 group-focus:text-dark dark:group-focus:text-light text-dark/70 dark:text-light/60 transition-colors" />
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          ) : null}
        </AnimatePresence>

        {showChatBot ? (
          <motion.div
            animate={{
              x: ["100%", "0%"],
              opacity: [0, 1],
              willChange: "transform",
            }}
            transition={{ type: "tween" }}
            className="fixed bottom-5 right-5 flex gap-2 lg:right-10"
          >
            <GreetingsMessage />
            <motion.button
              className={`cursor-pointer text-4xl! lg:text-5xl! translate-x-2 outline-none group ${
                !show ? "wave" : null
              }`}
              onClick={toggleChat}
            >
              {show ? (
                <CloseIcon className="transition-colors h-12 w-12 lg:h-16 lg:w-16 scale-50 group-hover:text-yellow-300 text-dark dark:text-light/90" />
              ) : (
                <img
                  alt="chatbot"
                  src={image[chatbotAgent || "portfolio"]}
                  className="h-12 w-12 lg:h-16 lg:w-16"
                />
              )}
            </motion.button>
          </motion.div>
        ) : null}
      </>
    </>
  );
}

const GreetingsMessage = () => {
  const [show, setShow] = useState(false);

  const initialLoad = () => {
    setTimeout(() => {
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 2000);
  };

  useEffect(initialLoad, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "70%" }}
          animate={{ opacity: 1, scale: 1, x: "0%" }}
          exit={{ opacity: 0, scale: 0, x: "70%" }}
          transition={{ type: "tween", duration: 0.6, delay: 0.3 }}
          className="relative inline-block dark:bg-light/90 dark:text-dark bg-dark text-light top-1 md:top-1 lg:top-2 text-center h-fit rounded-md py-1 px-2 w-fit shadow-lg"
        >
          👋 What would you like to know?
          <div className="absolute h-4 w-4 bg-dark dark:bg-light/90 rotate-45 scale-110 left-[95%] top-[25%] lg:top-[25%] shadow-lg -z-10" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const ReplyCard = ({
  replyHistory,
}: {
  replyHistory: string | React.ReactNode;
}) => {
  return (
    <motion.div
      animate={{
        // opacity: [0, 1],
        y: ["10px", "0%"],
      }}
      transition={{ type: "tween" }}
      className="p-2 w-[90%] flex items-start gap-2"
    >
      <img
        src="/images/avatar.jpg"
        className="w-10 h-10 mt-[1px] rounded-full"
      />
      <div
        className="bg-dark dark:bg-light/90 dark:text-dark rounded-md border-dark text-light p-2 max-w-[100%] break-words"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: replyHistory }}
      />
    </motion.div>
  );
};

const MessageCard = ({ messageHistory }: { messageHistory: string }) => {
  return (
    <motion.div
      animate={{
        // opacity: [0, 1],
        y: ["10px", "0%"],
      }}
      transition={{ type: "tween" }}
      className="bg-green-300 mr-2 p-2 max-w-[90%] w-fit rounded-md border-green-500 ml-auto break-words"
    >
      {messageHistory}
    </motion.div>
  );
};

const ChattingIndicator = () => {
  return (
    <div className="flex gap-2 w-full p-2">
      <img src="/images/avatar.jpg" className="w-10 h-10 mt-2 rounded-full" />

      <div className="flex items-center gap-1 lg:gap-2">
        <span className="animate-bounce h-3 w-3 lg:h-4 lg:w-4 bg-yellow-300 border-[1px] border-border rounded-full ball-loading" />
        <span className="animate-bounce h-3 w-3 lg:h-4 lg:w-4 bg-green-300 animate-100 border-[1px] border-border rounded-full ball-loading" />
        <span className="animate-bounce h-3 w-3 lg:h-4 lg:w-4 bg-blue-300 delay-200 border-[1px] border-border rounded-full ball-loading" />
      </div>
    </div>
  );
};
