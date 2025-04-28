import { useEffect, useRef, useState, type ReactNode } from "react";
import SectionUI from "../ui/section.ui";
import TerminalCardUI from "../ui/terminal-card.ui";
import COMMANDS from "~/config/commands";
import UnknownCommandResponse from "../response/unknown-command";
import UnknownSubCommandResponse from "../response/unknown-sub-command";
import PageLoaderLayout from "./page-loader.layout";

interface TerminalLog {
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

export default function TerminalLayout() {
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<TerminalLog[]>([{ shell: <Shell /> }]);
  const [cleared, setCleared] = useState(false);

  const getOriginOnSubCommands = (command: string, parameter: string) => {
    let origin = parameter;

    // @ts-ignore
    for (const key of Object.keys(COMMANDS[`${command}`]?.subCommands)) {
      if (
        // @ts-ignore
        COMMANDS[`${command}`]?.subCommands[`${key}`].shortcut?.includes(
          parameter
        )
      ) {
        origin = key;
        break;
      }
    }

    return origin;
  };

  const getOrigin = (command: string) => {
    let origin = command;

    // @ts-ignore
    for (const key of Object.keys(COMMANDS)) {
      if (
        // @ts-ignore
        COMMANDS[`${key}`]?.shortcut?.includes(command)
      ) {
        origin = key;
        break;
      }
    }

    return origin;
  };

  const onEnter = (value: string) => {
    let origCommand = (value as string).trim().toLowerCase();
    let command = origCommand;
    let Node;
    const commandParams = command.split(/\s+/);
    command = commandParams[0];

    setCommandsHistory((prevState) => [...prevState, origCommand]);
    setHistoryIndex(commandsHistory.length);

    if (["clear", "cls"].includes(command)) {
      setCleared(true);
      return;
    }

    const origin = getOrigin(command);
    Node = COMMANDS[`${origin}`]?.Component;

    const hasSubCommands = COMMANDS[`${origin}`]?.subCommands;

    if (hasSubCommands) {
      if (commandParams.length === 1) {
        Node = () => <UnknownSubCommandResponse command={origin} />;
      } else {
        const subOrigin = getOriginOnSubCommands(origin, commandParams[1]);
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

    console.log(commandsHistory);
  }, [logs]);

  return (
    <SectionUI className="fixed inset-0 bg-dark text-light/90 px-2 pt-2! space-y-2!">
      <h1 className="text-center font-bold text-lg text-blue-300">
        Welcome to my <span className="text-yellow-300">Terminal</span>
        <span className="text-blue-300">-</span>
        <span className="text-green-300">Styled </span>
        Portfolio
      </h1>
      <small className="block text-center text-light/60">
        type -h or help for more commands
      </small>
      <TerminalCardUI>
        {logs.map(({ shell, Response }, index) => {
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
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
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
