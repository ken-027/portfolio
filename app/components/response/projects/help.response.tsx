import COMMANDS from "~/config/commands";
import ResponseWrapperUI from "../../ui/response-wrapper.ui";

export default function ProjectSubHelpResponse() {
  return (
    <ResponseWrapperUI>
      <h2 className="mb-2">available options</h2>

      {/* @ts-ignore */}
      {Object.keys(COMMANDS[`project`]?.subCommands)
        .filter((command) => !["-h", "help"].includes(command))
        .map((command, index) => {
          const shortcuts =
            // @ts-ignore
            COMMANDS[`project`].subCommands[`${command}`].shortcut || [];

          const commands = [command, ...shortcuts];

          return (
            <div className="flex gap-1" key={index}>
              <div className="flex gap-1">
                {commands.map((shortcut, _index) => (
                  <p key={_index} className="text-blue-300">
                    <span className="text-light/90">
                      {_index === commands.length - 1
                        ? " | "
                        : _index === 0
                        ? ""
                        : ", "}
                    </span>
                    <strong>{shortcut}</strong>
                  </p>
                ))}
              </div>{" "}
              - {/* @ts-ignore */}
              {COMMANDS[`project`].subCommands[`${command}`]?.description}
            </div>
          );
        })}
      <p className="mt-3">usage: project [-a | all]</p>
    </ResponseWrapperUI>
  );
}
