import { AnimatePresence, motion } from "motion/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { chatStream } from "~/api/chat-stream.api";
import ShareIcon from "../icons/share.icon";
import CloseIcon from "../icons/close.icon";
import { marked } from "marked";
import botSound from "../../assets/sounds/chatbot-sound.mp3";
import useSound from "use-sound";
import generateRandomNumber from "~/utils/generate-random.util";

export default function ChatBotLayout({ onClose }: { onClose?: () => void }) {
  const preMessages = [
    "What services do you offer?",
    "How many experiences do you have?",
    "Can you show some of your past projects?",
    "What technologies are you most proficient in?",
    "Have you worked with clients or teams before?",
    "Do you have experience with mobile or responsive design?",
    "Can you build custom features based on client requirements?",
    "Are you open to freelance or full-time opportunities?",
    "",
  ];
  const [show, setShow] = useState(false);
  const [randomIndex, setRandomIndex] = useState<number>(
    generateRandomNumber(0, preMessages.length)
  );
  const [streaming, setStreaming] = useState(false);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState<string[]>([
    "Welcome 😊! Have questions about my work or skills? Ask me anything",
  ]);
  const [messages, setMessages] = useState<string[]>([]);
  const messageRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [play] = useSound(botSound);

  const toggleChat = () =>
    setShow((prevState) => {
      if (prevState) {
        setRandomIndex(generateRandomNumber(0, preMessages.length));
      }

      return !prevState;
    });

  const onChat = async () => {
    let _reply = "";
    try {
      if (!messageRef?.current) return;

      const message = messageRef.current.value.trim();
      messageRef.current.value = "";

      scrollDown();

      setStreaming(true);
      setMessages((prevState) => [...prevState, message]);

      const stream_replies = await chatStream(message);

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
      setReplies((prevState) => [...prevState, _reply]);
      setReply("");
      setStreaming(false);
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
    if (!messageRef?.current) return;

    const message = messageRef.current.value.trim();

    if (e.key === "Tab" && message === "") {
      messageRef.current.value = preMessages[randomIndex] || "";
    }
  };

  useEffect(scrollDown, [reply]);
  useEffect(handleOutsideClick, [onClose]);

  return (
    <motion.div
      animate={{ y: ["100%", "0%"], opacity: [0, 1], willChange: "transform" }}
      transition={{ type: "spring", delay: 3 }}
      className="fixed bottom-5 lg:bottom-10 lg:w-fit lg:right-10 z-30 inset-x-5 flex justify-end lg:inset-x-[unset]"
    >
      <AnimatePresence initial={false}>
        {show ? (
          <motion.section
            ref={sectionRef}
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: "0%",
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{ type: "tween" }}
            className="border-1 rounded-md border-border dark:border-0 mx-auto min-h-[500px] w-full lg:w-[450px] flex flex-col justify-center overflow-hidden shadow-lg bg-light"
          >
            <form
              className="flex-1 relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="lg:text-xl bg-dark text-light py-3 flex justify-between px-4 items-center">
                <div className="flex gap-2 items-center">
                  <img
                    alt="chatbot"
                    src="/images/chatbot.png"
                    className="h-8 w-8"
                  />
                  <h3>Welcome to my Personal Chatbot</h3>
                </div>
                <button
                  className="hover:text-yellow-300 cursor-pointer"
                  type="button"
                  onClick={toggleChat}
                >
                  <CloseIcon className="transition-colors" />
                </button>
              </div>
              <div
                ref={historyRef}
                className="max-h-[400px] px-2 overflow-y-auto space-y-3 message-history pt-4 pb-10"
              >
                <ReplyCard replyHistory={replies[0]} />
                {messages.map((message, index) => (
                  <Fragment key={index}>
                    <MessageCard messageHistory={message} />
                    {streaming && index === messages.length - 1 ? (
                      reply ? (
                        <ReplyCard replyHistory={reply} />
                      ) : (
                        <ChattingIndicator />
                      )
                    ) : (
                      <ReplyCard replyHistory={marked(replies[index + 1])} />
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="flex border-t-[1px] border-border px-4 py-4 absolute bottom-0 inset-x-0 bg-light rounded-r-xl rounded-l-xl">
                <div className="relative w-full">
                  <input
                    ref={messageRef}
                    type="text"
                    placeholder={
                      preMessages[randomIndex] || "Your question here..."
                    }
                    onKeyDown={onKeyDown}
                    className="w-full outline-none placeholder:italic group border-[1px] border-border pr-10 py-2 px-2 rounded-md transition-colors duration-500 focus:border-dark"
                  />
                  <button
                    className="cursor-pointer w-fit bottom-3 group outline-none absolute right-3"
                    disabled={streaming}
                    type="submit"
                    onClick={onChat}
                    title="Submit"
                  >
                    <ShareIcon className="rotate-[34deg] scale-125 group-focus:text-dark text-dark/70" />
                  </button>
                </div>
              </div>
            </form>
          </motion.section>
        ) : (
          <button
            className="cursor-pointer text-4xl! lg:text-5xl! translate-x-2 wave"
            onClick={toggleChat}
          >
            <img
              alt="chatbot"
              src="/images/chatbot.png"
              className="h-12 w-12 lg:h-16 lg:w-16"
            />
          </button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const ReplyCard = ({
  replyHistory,
}: {
  replyHistory: string | React.ReactNode;
}) => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        y: ["100%", "0%"],
      }}
      className="p-2 w-[80%] flex items-start gap-2"
    >
      <img
        src="/images/avatar.jpg"
        className="w-10 h-10 mt-[1px] rounded-full"
      />
      <div
        className="bg-dark rounded-md border-dark text-light p-2 max-w-[100%] break-words"
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
        opacity: [0, 1],
        y: ["100%", "0%"],
      }}
      transition={{ type: "tween" }}
      className="bg-green-300 mr-2 p-2 max-w-[80%] w-fit rounded-md border-green-500 ml-auto break-words"
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
