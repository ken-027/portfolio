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
    dateCompleted: new Date("2025-05-07"),
    description:
      "Mastered core concepts in <strong>Generative AI</strong>, including <strong>Retrieval-Augmented Generation</strong> (RAG), <strong>Low-Rank Adaptation</strong> (LoRA), and AI Agents. Gained hands-on experience with prompt engineering, model fine-tuning, and deploying AI-powered solutions.",
    platformLogo: "/images/certificates/udemy-logo.png",
    certificateLink:
      "https://www.udemy.com/certificate/UC-e1862b94-8f6f-4ba0-8d05-bf0a2023920a",
    certificateImage: "/images/certificates/llm-certificate.jpg",
  },
  {
    courseLink:
      "https://www.udemy.com/share/10dasB3@X0vZ9F0id4qBL8y2SkOwozeRxp70GD7JWR9cWmjIqnpnf4Efp_JSbUjtitd5gB9yfg==/",
    name: "Agentic AI Engineering",
    platform: "Udemy",
    dateCompleted: "ongoing",
    description:
      "Completed an intensive 30-day program focused on building 8 real-world AI agent applications using cutting-edge tools and frameworks including <strong>OpenAI Agents SDK</strong>, <strong>CrewAI</strong>, <strong>LangGraph</strong>, <strong>AutoGen</strong>, and <strong>MCP</strong>. Gained hands-on experience designing, orchestrating, and deploying autonomous agents for complex, real-world tasks.",
    platformLogo: "/images/certificates/udemy-logo.png",
  },
  {
    courseLink:
      "https://www.udemy.com/share/104Tz63@7P1To3EQcAXMXxYDRpGYDQbhoUKPzgjok3XU6cJRKaSrO5RGltZ_dGX2tAKtAv5UCw==",
    name: "DevOps",
    platform: "Udemy",
    dateCompleted: "ongoing",
    description:
      "Comprehensive training focused on core DevOps tools and practices. Gained hands-on experience with <strong>AWS</strong>, <strong>Linux</strong> system administration, <strong>shell scripting</strong>, <strong>Jenkins</strong>, <strong>Ansible</strong>, GitOps workflows, <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>Terraform</strong>. Built a strong foundation for CI/CD, infrastructure automation, and cloud-native development.",
    platformLogo: "/images/certificates/udemy-logo.png",
    //   certificateLink: "https://www.udemy.com/",
  },
  {
    courseLink: "https://www.natcco.coop",
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
