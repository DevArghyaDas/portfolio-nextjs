export const chartArrey: string[] = [
  "coreconcept",
  "frontend",
  "backend",
  "devtools",
];
export type ChartDataType = {
  [k in string]: {
    tropic: string;
    pVal: number;
  }[];
};
export const chartData: ChartDataType = {
  coreconcept: [
    { tropic: "Html", pVal: 95 },
    { tropic: "CSS", pVal: 90 },
    { tropic: "JavaScript", pVal: 70 },
    { tropic: "TypeScript", pVal: 65 },
    { tropic: "PHP", pVal: 68 },
  ],
  frontend: [
    { tropic: "React", pVal: 75 },
    { tropic: "NextJs", pVal: 85 },
    { tropic: "Remixjs", pVal: 70 },
    { tropic: "Tailwind", pVal: 90 },
    { tropic: "WordPress", pVal: 70 },
    { tropic: "Shadcnui(Ui Library)", pVal: 90 },
    { tropic: "Heroui(Ui Library)", pVal: 90 },
  ],
  backend: [
    { tropic: "nodeJs", pVal: 85 },
    { tropic: "Fastify", pVal: 70 },
    { tropic: "ExpressJS", pVal: 70 },
    { tropic: "SQLite", pVal: 75 },
    { tropic: "PostgreSQL", pVal: 75 },
    { tropic: "MySQL", pVal: 75 },
    { tropic: "Prisma(ORM)", pVal: 65 },
    { tropic: "Directus(Headless CMS)", pVal: 85 },
  ],
  devtools: [
    { tropic: "Docker", pVal: 75 },
    { tropic: "ESLint", pVal: 70 },
    { tropic: "GitHub Copilot(AI & Dev-tools)", pVal: 70 },
    { tropic: "ChatGPT", pVal: 85 },
    { tropic: "Microsoft Copilot", pVal: 89 },
    { tropic: "Deepseek", pVal: 70 },
  ],
};
