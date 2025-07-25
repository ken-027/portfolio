import {
  createContext,
  useContext,
  useEffect,
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
import TerminalStyledIcon from "../icons/terminal-styled.icon";
import { getTotalExperience } from "~/api/portfolio.api";
import type { Certificate, Experience, Project, Service, Skill } from "~/types";
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
  setIsContact: (_state: boolean) => {},
});

const YearsExperiencesContext = createContext({
  months: 0,
  years: 0,
});

const PortfolioContext = createContext<{
  experiences: Experience[];
  projects: Project[];
  certificates: Certificate[];
  skills: Skill[];
  services: Service[];
}>({
  experiences: [],
  certificates: [],
  skills: [],
  services: [],
  projects: [],
});
interface TerminalLayoutProps {
  services: Service[];
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  certificates: Certificate[];
  loading: boolean;
}

export default function TerminalLayout({
  certificates,
  skills,
  services,
  projects,
  experiences,
  loading,
}: TerminalLayoutProps) {
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);
  const [_historyIndex, setHistoryIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<TerminalLog[]>([]);
  const [cleared, setCleared] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [yearsOfExperience, setYearsOfExperience] = useState<{
    months: number;
    years: number;
  }>({ months: 0, years: 0 });

  const loadExperience = async () => {
    const { months, years } = await getTotalExperience();

    setYearsOfExperience({ months, years });
  };

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

    loadExperience();

    setLogs((prevState) => [
      ...prevState,
      { Response: Node },
      { shell: <Shell /> },
    ]);
  }, []);

  return (
    <SectionUI
      id="terminal-layout"
      className="fixed inset-0 text-light/90 px-2 pt-2! space-y-2! bg-gradient-to-b from-90% from-dark to bg-gray-700"
    >
      <h1 className="text-center flex text-xl font-bold text-blue-300 bg-dark w-fit mx-auto border border-border-dark lg:text-3xl">
        <span className="text-dark flex items-center lg:pl-6 pl-5 relative bg-blue-300 border-r-[1px]  py-1 border-dark">
          <TerminalStyledIcon className="scale-100 lg:scale-150 lg:mr-4 mr-1 terminal-icon text-black/80" />
          Terminal
        </span>
        <span className="text-dark pr-10 bg-green-300 py-1">Styled</span>
      </h1>
      {/* <small className="block text-center text-light/60">
        type -h or help for more commands
      </small> */}
      <TerminalCardUI>
        {loading ? (
          <div className="flex flex-wrap">
            <Shell />
            <div className="flex gap-1 w-full lg:flex-1 lg:ml-1">
              <span className="font-bold lg:hidden">&gt;</span>
              <input
                spellCheck="false"
                disabled
                autoCapitalize="off"
                autoComplete="off"
                className="outline-none border-0 w-full prompt text-yellow-300"
                type="text"
                value="fetching data..."
              />
            </div>
          </div>
        ) : (
          <PortfolioContext
            value={{ experiences, skills, projects, services, certificates }}
          >
            <YearsExperiencesContext value={yearsOfExperience}>
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
            </YearsExperiencesContext>
          </PortfolioContext>
        )}
      </TerminalCardUI>
      <footer className="fixed bottom-0 text-center inset-x-0 flex flex-col pb-2">
        <p className="text-sm lg:text-lg text-shadow-2xs">
          © 2025 Kenneth Andales. Software Developer
        </p>
        <small className="text-light/50 text-xs text-shadow-2xs">
          Built with Tailwind and React JS
        </small>
      </footer>
    </SectionUI>
  );
}

export const useContactContext = () => useContext(ContactContext);
export const usePortfolioContext = () => useContext(PortfolioContext);
export const useYearsExperienceContext = () =>
  useContext(YearsExperiencesContext);
