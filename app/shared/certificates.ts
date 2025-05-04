export interface Certificate {
  name: string;
  platform: string;
  platformLogo?: string;
  dateCompleted: Date | "ongoing";
  description: string;
  certificateLink?: string;
  certificateImage?: string;
  courseLink?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    courseLink:
      "https://www.udemy.com/share/10bOXH3@2gFWjrfB2kscaF1cPlZCL6m_QrMZDFPf_BnNF18QGpwoEMHzRPKaLt3WW15F3eqfFw==",
    name: "LLM Engineering",
    platform: "Udemy",
    dateCompleted: "ongoing",
    description:
      "Mastered core concepts in <b>Generative AI</b>, including <b>Retrieval-Augmented Generation</b> (RAG), <b>Low-Rank Adaptation</b> (LoRA), and AI Agents. Gained hands-on experience with prompt engineering, model fine-tuning, and deploying AI-powered solutions.",
    platformLogo: "/images/certificates/udemy-logo.png",
    // certificateLink: "https://www.udemy.com/",
  },
  {
    courseLink:
      "https://www.udemy.com/share/104Tz63@7P1To3EQcAXMXxYDRpGYDQbhoUKPzgjok3XU6cJRKaSrO5RGltZ_dGX2tAKtAv5UCw==",
    name: "DevOps",
    platform: "Udemy",
    dateCompleted: "ongoing",
    description:
      "Comprehensive training focused on core DevOps tools and practices. Gained hands-on experience with <b>AWS</b>, <b>Linux</b> system administration, <b>shell scripting</b>, <b>Jenkins</b>, <b>Ansible</b>, GitOps workflows, <b>Docker</b>, <b>Kubernetes</b>, and <b>Terraform</b>. Built a strong foundation for CI/CD, infrastructure automation, and cloud-native development.",
    platformLogo: "/images/certificates/udemy-logo.png",
    //   certificateLink: "https://www.udemy.com/",
  },
  {
    name: "Mid-Software Developer",
    platform: "NATCCO",
    dateCompleted: new Date("2025-03-25"),
    description:
      "NATCCO (National Confederation of Cooperatives) – the largest federation of cooperatives in the Philippines, providing training, financial services, and digital tools to empower community-based organizations",
    platformLogo: "/images/companies/natcco-logo.svg",
    // certificateLink: "/images/companies/natcco-logo.svg",
  },
];

export default CERTIFICATES;
