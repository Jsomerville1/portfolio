export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech?: string[];
  type: "work" | "education";
}

export const experience: ExperienceEntry[] = [
  {
    type: "work",
    title: "Full Stack Developer — Defense Innovation Summer Fellow",
    company: "Tatitlek Corporation / NSIN / DIU (US Army Reserve Mercury)",
    location: "Orlando, FL",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      "Delivered 30+ production-ready bug fixes and two new features across React Native (iOS/Android), React web, and Python/AWS APIs, strengthening mission-critical workflows for Army Reserve soldiers and leaders.",
      "Owned full development lifecycle for AFTP Utilization feature — from initial mockups through API integration, cross-platform implementation, and technical documentation.",
      "Built Fiscal Year filtering for Battle Assembly schedule tool with bulk upload support, improving compliance tracking.",
      "Resolved highest-priority production bugs including a calendar crash affecting all mobile users, pay form denial logic errors, and permission assignment bugs.",
      "Refined Python API endpoints (AWS Lambda, API Gateway, RDS/PostgreSQL) to support subordinate unit data access and pay compliance tracking.",
    ],
    tech: ["React Native", "React", "Python", "AWS", "PostgreSQL", "Agile"],
  },
  {
    type: "work",
    title: "Install and Repair Technician",
    company: "Wise Connect, Inc",
    location: "Clermont, FL",
    period: "Nov 2020 – Jul 2021",
    bullets: [
      "Installed and repaired internet and voice networks as a contracted technician for Lumen.",
      "Performed maintenance and repair on outside plant facilities.",
      "Prepared fiber installation sites to ensure timely completion of service activation.",
    ],
  },
];

export const education: ExperienceEntry[] = [
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "University of Central Florida",
    location: "Orlando, FL",
    period: "Aug 2022 – Dec 2025",
    bullets: [],
  },
];
