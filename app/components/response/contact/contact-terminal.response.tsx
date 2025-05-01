import { createContext, useContext, useEffect, useState } from "react";
import ResponseWrapperUI from "../../ui/response-wrapper.ui";
import {
  useContactContext,
  type TerminalLog,
} from "../../layout/terminal.layout";
import CONTACTCOMMANDS from "~/config/contact-commands";
import { getOrigin, getOriginOnSubCommands } from "~/utils/commands.utils";
import UnknownSubCommandResponse from "../unknown-sub-command";
import UnknownCommandResponse from "../unknown-command";

const Shell = () => {
  return (
    <p>
      <span className="text-yellow-300">guest</span>@
      <span className="text-green-300">terminal</span>
      <span className="text-blue-300">.contact</span>:~$
    </p>
  );
};

export interface Email {
  email: string;
  subject: string;
  name: string;
  message: string;
}

type EmailStruct = Email | null;

const EmailContext = createContext({
  email: "",
  name: "",
  message: "",
  subject: "",
});

const EmailResponseContext = createContext({
  emailSuccess: false,
  setEmailSuccess: (emailSuccess: boolean) => {},
});

export default function ContactTerminalResponse() {
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);
  const [emailHistory, setEmailHistory] = useState<EmailStruct[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const [cleared, setCleared] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const { setIsContact } = useContactContext();
  const [emailStruct, setEmailStruct] = useState<Email>({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const isEmail = (text: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);
  };

  useEffect(() => {
    if (logs.length === 0) {
      setLogs([{ shell: <Shell /> }]);
      setCleared(false);
    }
  }, [logs]);

  useEffect(() => {
    if (cleared) {
      setLogs([]);
    }
  }, [cleared]);

  useEffect(() => {
    if (emailSuccess) {
      setEmailStruct({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    }
  }, [emailSuccess]);

  useEffect(() => {
    const Node = CONTACTCOMMANDS.intro.Component;

    setLogs((prevState) => [
      ...prevState,
      { Response: Node },
      { shell: <Shell /> },
    ]);
    setEmailHistory((prevState) => [...prevState, null, null]);
  }, []);

  return (
    <ResponseWrapperUI typeSpeed="fast" className="text-base!">
      {logs.map(({ shell, Response }, index) => {
        let additionalProps: any = null;

        const onEnter = (value: string) => {
          let origCommand = (value as string).trim().toLowerCase();
          let command = origCommand;
          let Node;
          let _emailStruct: EmailStruct = emailStruct;
          const commandParams = command.split(/ (.+)/);
          command = commandParams[0];

          setCommandsHistory((prevState) => [...prevState, origCommand]);
          setHistoryIndex(commandsHistory.length);

          if (["clear", "cls"].includes(command)) {
            setCleared(true);
            return;
          }

          if (command === "exit") {
            setIsContact(false);
            return;
          }

          const origin = getOrigin(command, CONTACTCOMMANDS);
          Node = CONTACTCOMMANDS[`${origin}`]?.Component;

          const hasSubCommands = CONTACTCOMMANDS[`${origin}`]?.subCommands;

          if (hasSubCommands) {
            if (commandParams.length === 1) {
              Node = () => <UnknownSubCommandResponse command={origin} />;
            } else {
              const secondParam = commandParams[1];
              const hasSingleQuote =
                secondParam.startsWith("'") && secondParam.endsWith("'");
              const hasDoubleQuote =
                secondParam.startsWith('"') && secondParam.endsWith('"');
              if (hasSingleQuote || hasDoubleQuote) {
                const trimmedText = secondParam.substring(
                  1,
                  secondParam.length - 1
                ); // trimmed quotes

                if (command === "email" && !isEmail(trimmedText?.trim())) {
                  Node = () => (
                    <div className="space-y-1">
                      <p className="text-red-300">not a valid email</p>
                    </div>
                  );
                } else {
                  setEmailStruct((prevState) => ({
                    ...prevState,
                    [command]: trimmedText,
                  }));

                  _emailStruct = { ...emailStruct, [command]: trimmedText };

                  Node = () => <p>set successfully</p>;
                }
              } else {
                const subOrigin = getOriginOnSubCommands(
                  origin,
                  commandParams[1],
                  CONTACTCOMMANDS
                );
                Node =
                  CONTACTCOMMANDS[`${origin}`]?.subCommands?.[`${subOrigin}`]
                    ?.Component;
              }
            }
          }

          setLogs((prevState) => [
            ...prevState,
            { Response: Node || UnknownCommandResponse },
            { shell: <Shell /> },
          ]);
          setEmailHistory((prevState) => [...prevState, null, _emailStruct]);
        };

        const keyChange = (e: any) => {
          if (e.key === "Enter") onEnter(e.currentTarget.value);
        };

        if (index === 0 && commandsHistory.length == 0) {
          additionalProps = {
            value: "intro",
          };
        }

        return (
          <div key={index} className="flex flex-wrap">
            <EmailContext.Provider value={{ ...emailStruct }}>
              <EmailResponseContext.Provider
                value={{ setEmailSuccess, emailSuccess }}
              >
                {Response ? (
                  // @ts-expect-error
                  <Response
                    email={emailHistory[index]?.email}
                    subject={emailHistory[index]?.subject}
                    name={emailHistory[index]?.name}
                    message={emailHistory[index]?.message}
                  />
                ) : (
                  <>
                    {shell}
                    <div className="flex gap-1 w-full lg:flex-1 lg:ml-1">
                      <span className="font-bold lg:hidden">&gt;</span>
                      <input
                        spellCheck="false"
                        disabled={index !== logs.length - 1}
                        autoCapitalize="off"
                        autoComplete="off"
                        className="outline-none border-0 w-full prompt"
                        type="text"
                        autoFocus={index === logs.length - 1}
                        onKeyDown={keyChange}
                        {...additionalProps}
                      />
                    </div>
                  </>
                )}
              </EmailResponseContext.Provider>
            </EmailContext.Provider>
          </div>
        );
      })}
    </ResponseWrapperUI>
  );
}

export const useEmailContext = () => useContext(EmailContext);
export const useEmailResponseContext = () => useContext(EmailResponseContext);
