import type { Command } from "./commands";
import ContactIntroResponse from "~/components/response/contact/contact-intro.response";
import ContactHelpResponse from "~/components/response/contact/help.response";
import NameSubHelpResponse from "~/components/response/contact/help/name-help.response";
import SubjectSubHelpResponse from "~/components/response/contact/help/subject-help.response";
import EmailSubHelpResponse from "~/components/response/contact/help/email-help.response";
import MessageSubHelpResponse from "~/components/response/contact/help/message-help.response";
import SendEmailREsponse from "~/components/response/contact/send-email.response";
import NameShowResponse from "~/components/response/contact/help/name-show.response";
import SubjectShowResponse from "~/components/response/contact/help/subject-show.response";
import EmailShowResponse from "~/components/response/contact/help/email-show.response";
import MessageShowResponse from "~/components/response/contact/help/message-show.response";

const CONTACTCOMMANDS: Record<string, Command> = {
  exit: {
    description: "Exit the contact session and return to the main terminal.",
  },
  help: {
    description:
      "Display a list of available contact commands or show detailed help for a specific command.",
    Component: ContactHelpResponse,
    shortcut: ["-h"],
  },
  intro: {
    description: "Display a brief introduction to the contact interface.",
    Component: ContactIntroResponse,
  },
  name: {
    description: "Set or manage the sender's name.",
    subCommands: {
      help: {
        description: "Show help details for name-related commands.",
        Component: NameSubHelpResponse,
        shortcut: ["-h"],
      },
      show: {
        description: "Display the currently set name.",
        Component: NameShowResponse,
      },
    },
  },
  subject: {
    description: "Set or manage the email subject line.",
    subCommands: {
      help: {
        description: "Show help details for subject-related commands.",
        Component: SubjectSubHelpResponse,
        shortcut: ["-h"],
      },
      show: {
        description: "Display the currently set subject.",
        Component: SubjectShowResponse,
      },
    },
  },
  email: {
    description: "Set or manage the sender's email address.",
    subCommands: {
      help: {
        description: "Show help details for email-related commands.",
        Component: EmailSubHelpResponse,
        shortcut: ["-h"],
      },
      show: {
        description: "Display the currently set email address.",
        Component: EmailShowResponse,
      },
    },
  },
  message: {
    description: "Set or manage the message body to be sent.",
    subCommands: {
      help: {
        description: "Show help details for message-related commands.",
        Component: MessageSubHelpResponse,
        shortcut: ["-h"],
      },
      show: {
        description: "Display the currently set message.",
        Component: MessageShowResponse,
      },
    },
  },
  send: {
    description: "Send the composed message to the specified email address.",
    Component: SendEmailREsponse,
  },
};

export default CONTACTCOMMANDS;
