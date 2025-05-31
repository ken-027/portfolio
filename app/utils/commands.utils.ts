import type { Command } from "~/config/commands";

export const getOriginOnSubCommands = (
  command: string,
  parameter: string,
  commands: Record<string, Command>
) => {
  let origin = parameter;

  // @ts-ignore
  for (const key of Object.keys(commands[`${command}`]?.subCommands)) {
    if (
      // @ts-ignore
      commands[`${command}`]?.subCommands[`${key}`].shortcut?.includes(
        parameter
      )
    ) {
      origin = key;
      break;
    }
  }

  return origin;
};

export const getOrigin = (
  command: string,
  commands: Record<string, Command>
) => {
  let origin = command;

  // @ts-ignore
  for (const key of Object.keys(commands)) {
    if (
      // @ts-ignore
      commands[`${key}`]?.shortcut?.includes(command)
    ) {
      origin = key;
      break;
    }
  }

  return origin;
};
