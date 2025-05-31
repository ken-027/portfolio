import GmailIcon from "~/components/icons/gmail.icon";
import LinkedInIcon from "~/components/icons/linkedin.icon";
import MicrosoftTeamsIcon from "~/components/icons/microsoft-teams.icon";
import UpworkIcon from "~/components/icons/upwork.icon";
import type { Contact } from "~/types";

const CONTACTS: Contact[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kenneth-andales",
    Icon: LinkedInIcon,
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~0135c2e932c50f312f",
    Icon: UpworkIcon,
  },
  {
    name: "Gmail",
    link: "mailto:keanolida7296@gmail.com",
    Icon: GmailIcon,
  },
  {
    name: "Teams",
    link: "https://teams.microsoft.com/l/chat/0/0?users=keanolida7296@gmail.com",
    Icon: MicrosoftTeamsIcon,
  },
];

export default CONTACTS;
