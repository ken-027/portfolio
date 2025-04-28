import COMMANDS from "~/config/commands";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function HelpResponse() {
  return (
    <ResponseWrapperUI typeSpeed="fast">
      <h2 className="mb-2">Available Commands</h2>

      {Object.keys(COMMANDS)
        .filter((command) => !["-h", "help"].includes(command))
        .map((command, index) => {
          const shortcuts =
            // @ts-ignore
            COMMANDS[`${command}`].shortcut || [];

          const commands = [command, ...shortcuts];

          return (
            <div className="flex gap-1 flex-wrap" key={index}>
              <div className="flex gap-1">
                {commands.map((shortcut, _index) => (
                  <p key={_index} className="text-blue-300">
                    <span className="text-light/90">
                      {_index === commands.length - 1 && _index !== 0
                        ? " | "
                        : _index === 0
                        ? ""
                        : ", "}
                    </span>
                    <strong>{shortcut}</strong>
                  </p>
                ))}
              </div>
              - {COMMANDS[`${command}`]?.description}
            </div>
          );
        })}
    </ResponseWrapperUI>
  );
}
