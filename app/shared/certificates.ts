export interface Certificate {
  name: string;
  platform: string;
  platformLogo?: string;
  dateCompleted: Date | "ongoing";
  description: string;
  certificateLink?: string;
  certificateImage?: string;
}

const CERTIFICATES: Certificate[] = [
  {
    name: "LLM Engineering",
    platform: "Udemy",
    dateCompleted: "ongoing",
    description:
      "Mastered core concepts in Generative AI, including Retrieval-Augmented Generation (RAG), Low-Rank Adaptation (LoRA), and AI Agents. Gained hands-on experience with prompt engineering, model fine-tuning, and deploying AI-powered solutions.",
    platformLogo: "/images/certificates/udemy-logo.png",
    // certificateLink: "https://www.udemy.com/",
  },
  {
    name: "DevOps",
    platform: "Udemy",
    dateCompleted: "ongoing",
    description:
      "Comprehensive training focused on core DevOps tools and practices. Gained hands-on experience with <b>AWS</b>, <b>Linux</b> system administration, <b>shell scripting</b>, <b>Jenkins</b>, <b>Ansible</b>, GitOps workflows, <b>Docker</b>, <b>Kubernetes</b>, and <b>Terraform</b>. Built a strong foundation for CI/CD, infrastructure automation, and cloud-native development.",
    platformLogo: "/images/certificates/udemy-logo.png",
    //   certificateLink: "https://www.udemy.com/",
  },
];

export default CERTIFICATES;
