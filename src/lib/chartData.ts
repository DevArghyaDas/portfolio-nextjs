export const chartArrey: string[] = [
  "coreconcept",
  "frontend",
  "backend",
  "devtools",
];
export type ChartDataType = {
  [k in string]: {
    tropic: string;
    imgUrl: string;
  }[];
};
export const chartData: ChartDataType = {
  coreconcept: [
    { tropic: "Html", imgUrl: "/media/icons/html-5-logo.svg" },
    { tropic: "CSS", imgUrl: "/media/icons/css-3.svg" },
    { tropic: "JavaScript", imgUrl: "/media/icons/js.svg" },
    { tropic: "TypeScript", imgUrl: "/media/icons/typescript.svg" },
    { tropic: "PHP", imgUrl: "/media/icons/php.svg" },
  ],
  frontend: [
    { tropic: "React", imgUrl: "/media/icons/react-logo.svg" },
    { tropic: "NextJs", imgUrl: "/media/icons/next.svg" },
    { tropic: "Remixjs", imgUrl: "/media/icons/remix.svg" },
    { tropic: "Tailwind", imgUrl: "/media/icons/tailwind.svg" },
    { tropic: "WordPress", imgUrl: "/media/icons/wordpress.svg" },
    { tropic: "Shadcnui(Ui Library)", imgUrl: "/media/icons/shadcnui.svg" },
    { tropic: "Heroui(Ui Library)", imgUrl: "/media/icons//nextui.svg" },
  ],
  backend: [
    { tropic: "nodeJs", imgUrl: "/media/icons/nodejs.svg" },
    { tropic: "Fastify", imgUrl: "/media/icons/fastify.svg" },
    { tropic: "ExpressJS", imgUrl: "/media/icons/express-js.svg" },
    { tropic: "SQLite", imgUrl: "/media/icons/sqlite.svg" },
    { tropic: "PostgreSQL", imgUrl: "/media/icons/postgresql.svg" },
    { tropic: "MySQL", imgUrl: "/media/icons/mysql.svg" },
    { tropic: "Prisma(ORM)", imgUrl: "/media/icons/prisma.svg" },
    { tropic: "Directus(Headless CMS)", imgUrl: "/media/icons/dr.svg" },
  ],
  devtools: [
    { tropic: "Docker", imgUrl: "/media/icons/docker.svg" },
    { tropic: "ESLint", imgUrl: "/media/icons/eslint.svg" },
    { tropic: "GIT", imgUrl: "/media/icons/git.svg" },
    {
      tropic: "GitHub Copilot(AI & Dev-tools)",
      imgUrl: "/media/icons/githubcopilot.svg",
    },
    { tropic: "ChatGPT", imgUrl: "/media/icons/chatgpt.svg" },
    {
      tropic: "Microsoft Copilot",
      imgUrl: "/media/icons/microsoft-copilot.svg",
    },
    { tropic: "Deepseek", imgUrl: "/media/icons/deepseek.svg" },
  ],
};
