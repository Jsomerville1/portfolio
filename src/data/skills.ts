export interface SkillCategory {
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C#", "C++"],
  },
  {
    label: "Frameworks",
    skills: ["React", "React Native", "Next.js", "Express", "Node.js", "Unity"],
  },
  {
    label: "Cloud & Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "AWS Lambda",
      "API Gateway",
      "S3",
      "RDS",
      "SNS",
    ],
  },
  {
    label: "Tools & Practices",
    skills: [
      "Git / GitHub",
      "Agile",
      "Jira / Confluence",
      "Figma",
      "CI/CD",
      "REST APIs",
    ],
  },
];
