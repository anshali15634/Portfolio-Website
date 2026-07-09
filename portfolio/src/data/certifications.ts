export interface Certification {
  id: number;
  title: string;
  courseDescription: string;
  issuer: string;
  issueDate: string;
  logo: string;
  certificateUrl: string;
  featured?: boolean;
}

export const certifications: Certification[] = [
    {
    id: 1,
    title: "Certified Machine Learning Engineer",
    courseDescription: "Covered the end-to-end machine learning workflow, including data preprocessing, feature engineering, supervised and unsupervised learning, model evaluation, deployment fundamentals, and building machine learning solutions with Python and industry-standard libraries.",
    issuer: "DataCamp",
    issueDate: "June 2025",
    logo: "/images/datacamp.jpg",
    certificateUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/1f22fb8b86e21803086c01095723293a9740683c",
  },
  {
    id: 2,
    title: "Develop generative AI apps in Azure",
    courseDescription: "Taught how to build, deploy, and integrate generative AI applications using Azure AI services, including working with large language models, prompt engineering, Azure OpenAI, and responsible AI practices.",
    issuer: "Microsoft",
    issueDate: "Dec 2025",
    logo: "/images/microsoft.png",
    certificateUrl: "https://learn.microsoft.com/en-us/users/anshalimanoharan-5067/achievements/nmkr5qpf?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    featured: true,
  },
  {
    id: 3,
    title: "Advanced Topics: Model Context Protocol",
    courseDescription: "Explored advanced implementation of the Model Context Protocol (MCP), including building MCP servers and clients, managing tools and resources, handling context efficiently, authentication, and integrating AI models with external systems.",
    issuer: "Anthropic",
    issueDate: "May 2026",
    logo: "/images/anthropic.png",
    certificateUrl: "https://verify.skilljar.com/c/7h5r67w8giak",
  },

  {
    id: 4,
    title: "SQL (Intermediate)",
    courseDescription: "Covered intermediate SQL concepts including joins, subqueries, common table expressions (CTEs), window functions, aggregations, and query optimization through practical problem-solving.",
    issuer: "HackerRank",
    issueDate: "May 2026",
    logo: "/images/hackerrank_logo.jpg",
    certificateUrl: "https://www.hackerrank.com/certificates/088b3c290b77",
  },

    {
    id: 5,
    title: "Claude Code 101",
    courseDescription: "Introduced AI-assisted software development with Claude Code, covering project understanding, code generation, debugging, refactoring, testing, and using AI effectively within developer workflows.",
    issuer: "Anthropic",
    issueDate: "May 2026",
    logo: "/images/anthropic.png",
    certificateUrl: "https://verify.skilljar.com/c/6vbchu7cfqkj",
  },

  {
    id: 6,
    title: "SQL (Basic)",
    courseDescription: "Introduced fundamental SQL skills such as querying data, filtering, sorting, selecting columns, basic aggregations, and working with simple database tables.",
    issuer: "HackerRank",
    issueDate: "Sept 2025",
    logo: "/images/hackerrank_logo.jpg",
    certificateUrl: "https://www.hackerrank.com/certificates/9c81b075bb2a",
  },
];