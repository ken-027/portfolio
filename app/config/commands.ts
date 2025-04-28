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

interface Command {
  Component?: any;
  description: string;
  shortcut?: string[];
  subCommands?: Record<string, Command>;
}

const COMMANDS: Record<string, Command> = {
  switch: {
    description: "command for switching portfolio to User Interface",
    Component: GUIResponse,
  },
  intro: { description: "command for introduction", Component: IntroResponse },
  help: {
    description: "simple command for help",
    Component: HelpResponse,
    shortcut: ["-h"],
  },
  clear: { description: "clear screen", shortcut: ["cls"] },
  services: {
    description: "list available services",
    Component: ServicesResponse,
    shortcut: ["sv"],
  },
  skills: {
    description: "list available skills and its proficiency",
    Component: SkillsResponse,
    shortcut: ["sk"],
  },
  certificates: {
    description: "list available certificates",
    Component: CertificatesResponse,
    shortcut: ["cert"],
  },
  socials: {
    description: "list available contacts",
    Component: SocialsResponse,
    shortcut: ["sc"],
  },
  project: {
    description: "project list with sub commands",
    shortcut: ["pj"],
    subCommands: {
      help: {
        description: "simple command for help",
        Component: ProjectSubHelpResponse,
        shortcut: ["-h"],
      },
      all: {
        description: "list all projects",
        Component: ProjectsResponse,
        shortcut: ["-a"],
      },
      frontend: {
        description: "list all frontend projects",
        Component: FrontendProjectsResponse,
        shortcut: ["-fe"],
      },
      backend: {
        description: "list all backend projects",
        Component: BackendProjectsResponse,
        shortcut: ["-be"],
      },
      fullstack: {
        description: "list all fullstack projects",
        Component: FullstackProjectsResponse,
        shortcut: ["-fs"],
      },
    },
  },
  experience: {
    description: "experiences list with sub commands",
    shortcut: ["exp"],
    subCommands: {
      help: {
        description: "simple command for help",
        Component: ExperienceSubHelpResponse,
        shortcut: ["-h"],
      },
      all: {
        description: "list all experiences",
        Component: ExperiencesResponse,
        shortcut: ["-a"],
      },
      natcco: {
        description: "description list for natcco",
        Component: ExperienceNATCCOResponse,
        shortcut: ["nc"],
      },
      freelance: {
        description: "description list for freelancing",
        Component: ExperienceFreelanceResponse,
        shortcut: ["fr"],
      },
      cloudpanda: {
        description: "description list for cloud panda ph",
        Component: ExperienceCloudPandaResponse,
        shortcut: ["cp"],
      },
      ipp: {
        description: "description list for international payment processing",
        Component: ExperienceIPPResponse,
      },
    },
  },
};

export default COMMANDS;
