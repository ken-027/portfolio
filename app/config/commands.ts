import CertificatesResponse from "~/components/response/certificates.response";
import HelpResponse from "~/components/response/help.response";
import ProjectsResponse from "~/components/response/projects/projects.response";
import ServicesResponse from "~/components/response/services.response";
import SkillsResponse from "~/components/response/skills.response";
import ProjectSubHelpResponse from "~/components/response/projects/help.response";
import FrontendProjectsResponse from "~/components/response/projects/frontend.response";
import BackendProjectsResponse from "~/components/response/projects/backend.response";
import FullstackProjectsResponse from "~/components/response/projects/fullstack.response";
import ExperienceSubHelpResponse from "~/components/response/experiences/help.response";
import ExperiencesResponse from "~/components/response/experiences/experiences.response";
import ExperienceNATCCOResponse from "~/components/response/experiences/experiences-natcco.response";
import ExperienceFreelanceResponse from "~/components/response/experiences/experiences-freelance.response";
import ExperienceCloudPandaResponse from "~/components/response/experiences/experiences-cloud-panda.response";
import ExperienceIPPResponse from "~/components/response/experiences/experiences-ipp.response";
import SocialsResponse from "~/components/response/socials.response";
import IntroResponse from "~/components/response/intro.response";
import GUIResponse from "~/components/response/gui.response";
import InfoResponse from "~/components/response/info.response";

interface Command {
  Component?: any;
  description: string;
  shortcut?: string[];
  subCommands?: Record<string, Command>;
}

const COMMANDS: Record<string, Command> = {
  exit: {
    description: "Exit the terminal session.",
    Component: GUIResponse,
  },
  info: {
    description: "Display basic personal information.",
    Component: InfoResponse,
  },
  intro: {
    description: "Display an introduction message.",
    Component: IntroResponse,
  },
  help: {
    description:
      "Show a list of available commands or detailed help information.",
    Component: HelpResponse,
    shortcut: ["-h"],
  },
  clear: {
    description: "Clear the terminal screen.",
    shortcut: ["cls"],
  },
  services: {
    description: "Display a list of available services.",
    Component: ServicesResponse,
    shortcut: ["sv"],
  },
  skills: {
    description: "Show a list of skills along with proficiency levels.",
    Component: SkillsResponse,
    shortcut: ["sk"],
  },
  certificates: {
    description: "List all earned certificates.",
    Component: CertificatesResponse,
    shortcut: ["cert"],
  },
  socials: {
    description: "Display available social media or contact links.",
    Component: SocialsResponse,
    shortcut: ["sc"],
  },
  project: {
    description: "Manage and explore project lists through subcommands.",
    shortcut: ["pj"],
    subCommands: {
      help: {
        description: "Show help information for project commands.",
        Component: ProjectSubHelpResponse,
        shortcut: ["-h"],
      },
      all: {
        description: "List all available projects.",
        Component: ProjectsResponse,
        shortcut: ["-a"],
      },
      frontend: {
        description: "List all frontend-related projects.",
        Component: FrontendProjectsResponse,
        shortcut: ["-fe"],
      },
      backend: {
        description: "List all backend-related projects.",
        Component: BackendProjectsResponse,
        shortcut: ["-be"],
      },
      fullstack: {
        description: "List all fullstack (frontend + backend) projects.",
        Component: FullstackProjectsResponse,
        shortcut: ["-fs"],
      },
    },
  },
  experience: {
    description: "Manage and view work experiences through subcommands.",
    shortcut: ["exp"],
    subCommands: {
      help: {
        description: "Show help information for experience commands.",
        Component: ExperienceSubHelpResponse,
        shortcut: ["-h"],
      },
      all: {
        description: "List all work experiences.",
        Component: ExperiencesResponse,
        shortcut: ["-a"],
      },
      natcco: {
        description: "Display detailed experience information at NATCCO.",
        Component: ExperienceNATCCOResponse,
        shortcut: ["nc"],
      },
      freelance: {
        description:
          "Display detailed experience information from freelancing projects.",
        Component: ExperienceFreelanceResponse,
        shortcut: ["fr"],
      },
      cloudpanda: {
        description:
          "Display detailed experience information at Cloud Panda PH.",
        Component: ExperienceCloudPandaResponse,
        shortcut: ["cp"],
      },
      ipp: {
        description:
          "Display detailed experience information at International Payment Processing (IPP).",
        Component: ExperienceIPPResponse,
      },
    },
  },
};

export default COMMANDS;
