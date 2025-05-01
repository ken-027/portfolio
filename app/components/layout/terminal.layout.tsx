import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import SectionUI from "../ui/section.ui";
import TerminalCardUI from "../ui/terminal-card.ui";
import COMMANDS from "~/config/commands";
import UnknownCommandResponse from "../response/unknown-command";
import UnknownSubCommandResponse from "../response/unknown-sub-command";
import ContactResponse from "../response/contact/contact-terminal.response";
import { getOrigin, getOriginOnSubCommands } from "~/utils/commands.utils";
export interface TerminalLog {
  shell?: ReactNode;
  Response?: ReactNode;
}

const Shell = () => {
  return (
    <p>
      <span className="text-yellow-300">guest</span>@
      <span className="text-green-300">terminal.kandales</span>
      <span className="text-blue-300">.softdev</span>:~$
    </p>
  );
};

const ContactContext = createContext({
  isContact: false,
  setIsContact: (state: boolean) => {},
});

export default function TerminalLayout() {
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const [cleared, setCleared] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const onEnter = (value: string) => {
    let origCommand = (value as string).trim().toLowerCase();
    let command = origCommand;
    let Node;
    const commandParams = command.split(/\s+/);
    command = commandParams[0];

    setCommandsHistory((prevState) => [...prevState, origCommand]);
    setHistoryIndex(commandsHistory.length);

    if (command === "contact") {
      setIsContact(true);
      return;
    }

    if (["clear", "cls"].includes(command)) {
      setCleared(true);
      return;
    }

    const origin = getOrigin(command, COMMANDS);
    Node = COMMANDS[`${origin}`]?.Component;

    const hasSubCommands = COMMANDS[`${origin}`]?.subCommands;

    if (hasSubCommands) {
      if (commandParams.length === 1) {
        Node = () => <UnknownSubCommandResponse command={origin} />;
      } else {
        const subOrigin = getOriginOnSubCommands(
          origin,
          commandParams[1],
          COMMANDS
        );
        Node = COMMANDS[`${origin}`]?.subCommands?.[`${subOrigin}`]?.Component;
      }
    }

    setLogs((prevState) => [
      ...prevState,
      { Response: Node || UnknownCommandResponse },
      { shell: <Shell /> },
    ]);
  };

  const onArrowUp = (e: any) => {
    const input = e.currentTarget;

    setHistoryIndex((prevState) => {
      const index = prevState > 0 ? prevState - 1 : 0;
      const command = commandsHistory[index] || input.value;

      input.value = command;
      return index;
    });
  };

  const onArrowDown = (e: any) => {
    const input = e.currentTarget;

    setHistoryIndex((prevState) => {
      const index =
        prevState < commandsHistory.length - 1 ? prevState + 1 : prevState;
      const command = commandsHistory[index] || input.value;

      input.value = command;
      return index;
    });
  };

  const keyChange = (e: any) => {
    if (e.key === "Enter") onEnter(e.currentTarget.value);
    if (e.key === "ArrowUp") onArrowUp(e);
    if (e.key === "ArrowDown") onArrowDown(e);
  };

  useEffect(() => {
    if (cleared) {
      setLogs([]);
    }
  }, [cleared]);

  useEffect(() => {
    if (logs.length === 0) {
      setLogs([{ shell: <Shell /> }]);
      setCleared(false);
    }
  }, [logs]);

  useEffect(() => {
    const Node = COMMANDS.intro.Component;

    setLogs((prevState) => [
      ...prevState,
      { Response: Node },
      { shell: <Shell /> },
    ]);
  }, []);

  return (
    <SectionUI className="fixed inset-0 text-light/90 px-2 pt-2! space-y-2! bg-gradient-to-b from-90% from-dark to bg-gray-700">
      <h1 className="text-center text-xl font-bold text-blue-300">
        <span className="text-green-300">Terminal</span>
        <span className="text-blue-300">Styled</span>
      </h1>
      {/* <small className="block text-center text-light/60">
        type -h or help for more commands
      </small> */}
      <TerminalCardUI>
        <ContactContext.Provider value={{ isContact, setIsContact }}>
          {!isContact ? (
            logs.map(({ shell, Response }, index) => {
              let additionalProps: any = null;

              if (index === 0 && commandsHistory.length == 0) {
                additionalProps = {
                  value: "intro",
                };
              }

              return (
                <div key={index} className="flex flex-wrap">
                  {Response ? (
                    // @ts-expect-error
                    <Response />
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
                </div>
              );
            })
          ) : (
            <ContactResponse />
          )}
        </ContactContext.Provider>
      </TerminalCardUI>
      <footer className="fixed bottom-0 text-center inset-x-0 flex flex-col pb-2">
        <p className="text-sm lg:text-lg">
          © 2025 Kenneth Andales. Software Developer
        </p>
        <small className="text-light/50 text-xs">
          Built with Tailwind and React JS
        </small>
      </footer>
    </SectionUI>
  );
}

export const useContactContext = () => useContext(ContactContext);
