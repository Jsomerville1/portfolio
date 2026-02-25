export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
  devpost?: string;
  youtubeId?: string;
  featured?: boolean;
  situation: string;
  task: string;
  actions: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "army-reserve-mercury",
    title: "Army Reserve Mercury",
    subtitle: "Defense Innovation Fellowship & Senior Design Capstone",
    summary:
      "Cross-platform application modernizing administrative workflows for 400+ Army Reserve soldiers. Served as Project Manager for an 11-member Agile team and Defense Innovation Summer Fellow.",
    tech: [
      "React Native",
      "React",
      "Python",
      "AWS Lambda",
      "API Gateway",
      "RDS",
      "PostgreSQL",
      "S3",
      "SNS",
      "Agile",
    ],
    image: "/images/projects/mercury/hero.png",
    featured: true,
    situation:
      "The Army Reserve lacked a streamlined system for tracking soldier AFTP and RST utilization, pay form workflows, and training compliance data — leading to data fragmentation and administrative overhead across leaders, soldiers, and pay administrators.",
    task: "As Defense Innovation Summer Fellow (Tatitlek Corp / NSIN / DIU) and Project Manager for Senior Design, architect and deliver new features across a cross-platform application used by 400+ soldiers — from initial mockups through API integration, cross-platform implementation, and deployment.",
    actions: [
      "Engineered AFTP Utilization feature end-to-end (mockups → API → React Native + React web) enabling unit leaders to track soldier flight pay compliance and surface discrepancies between database records and soldier AFTP numbers.",
      "Built RST Utilization dashboard so leaders can see which soldiers have submitted rescheduled training forms per battle assembly date, with missing makeup days surfaced at a glance.",
      "Architected dynamic form field highlighting system: pay admins mark specific fields with comments on denial; soldiers see highlighted errors on resubmission immediately.",
      "Implemented multi-stage audit logging tracking all form approvals, denials, and resubmissions — eliminating confusion when forms re-enter approval queues.",
      "Revamped bulk BA date upload engine with comprehensive validation and error handling.",
      "Standardized timezone logic across the full stack (React Native, React web, Python APIs).",
      "Built interactive user onboarding tutorial system with separate flows for soldiers, leaders, and pay admins — including auto-advance on action completion and persistent tutorial status tracking per user.",
      "Created tutorial video series for each user role to reduce knowledge fade for periodic users.",
      "Led 11-member Agile team through two Senior Design semesters, coordinating sprints and interfacing directly with Army Reserve stakeholders.",
      "Delivered 30+ production bug fixes including a calendar crash affecting all mobile users, pay form denial logic errors, and permission assignment bugs impacting admin workflows.",
    ],
    results: [
      "80+ production tickets delivered across fellowship and Senior Design.",
      "AFTP and RST Utilization features deployed to production, enabling data-driven compliance tracking for flight units.",
      "User tutorial system reduced onboarding time and knowledge fade for periodic users across three distinct user roles.",
      "Application successfully serving 400+ Army Reserve soldiers.",
    ],
  },
  {
    slug: "rail-sweeper",
    title: "Rail Sweeper",
    subtitle: "AI For Game Programming — UCF Fall 2024",
    summary:
      "3D first-person rhythm game built in Unity. MIDI-driven note spawning, object pooling, AI difficulty scaling, and persistent player statistics.",
    tech: ["Unity", "C#", "Blender", "Unity Version Control"],
    image: "/images/projects/railsweeper/hero.png",
    github: "https://github.com/Jsomerville1/RailSweeper",
    live: "https://joeso.itch.io/rail-sweeper",
    youtubeId: "A0G27q6DOSw",
    situation:
      "Course project for AI For Game Programming at UCF requiring integration of game AI systems with an original game concept, complete with a full gameplay loop.",
    task: "Design and build a polished 3D rhythm game featuring MIDI-driven note spawning, AI-based difficulty scaling, and player progression tracking.",
    actions: [
      "Implemented MIDI-driven note spawning using the Melanchall DryWetMIDI library — reading note positions from a custom MIDI file, with BPM-based beat tracking for frame-perfect accuracy without manual note placement.",
      "Built an object pool for note GameObjects to minimize active scene object count and maintain consistent performance.",
      "Integrated game AI that tracks player combo score — higher combos increase note travel distance and speed for dynamic difficulty.",
      "Generated note patterns from a graph structure of predefined patterns (spirals, diagonals, zigzags) for varied, playable challenge.",
      "Designed and scripted all UI including level select with per-difficulty completion stars and end-of-song stat display.",
      "Modeled and integrated all visual assets and audio elements.",
    ],
    results: [
      "Complete gameplay loop with scoring, dynamic difficulty, and persistent player statistics.",
      "Beat synchronization accurate to 1/16 note resolution.",
      "Available for download on itch.io.",
    ],
  },
  {
    slug: "afterwords",
    title: "Afterwords",
    subtitle: "MERN Stack — COP4331 Large Project",
    summary:
      "Web and mobile \"dead man's switch\" app. Users schedule email messages and PDF files to be sent automatically if they fail to check in for a defined period of time.",
    tech: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "JavaScript"],
    image: "/images/projects/afterwords/hero.png",
    github: "https://github.com/Jsomerville1/cop4331largeproject",
    live: "http://copteam22.xyz/",
    situation:
      "Course project requiring a full-stack MERN application with real-world utility — built and shipped within a semester.",
    task: "Lead a team to design and deliver a secure, scheduled message delivery platform triggered by user inactivity.",
    actions: [
      "Served as Project Manager: delegated tasks, tracked progress, and kept the project on timeline through the semester.",
      "Built API endpoints for message scheduling, check-in tracking, and automated email/PDF delivery logic.",
      "Contributed to front-end components and database schema design.",
    ],
    results: [
      "Functional web and mobile app deployed at copteam22.xyz.",
      "Supports scheduled email and PDF delivery triggered by missed check-ins.",
    ],
  },
  {
    slug: "pirate-ships",
    title: "Pirate Ships",
    subtitle: "Knight Hacks 2024 — Hackathon Project",
    summary:
      "Real-time online multiplayer Battleships clone built in 24 hours at UCF's Knight Hacks hackathon. Game server hosted on Google Cloud VM.",
    tech: ["Python", "pygame", "Google Cloud"],
    image: "/images/projects/pirateships/hero.png",
    devpost: "https://devpost.com/software/pirateships",
    youtubeId: "4wrOgf9LXGA",
    situation: "24-hour hackathon (Knight Hacks 2024) at UCF.",
    task: "Build a functional, networked multiplayer game from scratch within the hackathon time limit.",
    actions: [
      "Wrote all primary game logic and client code in Python with pygame.",
      "Built a relay server hosted on a Google Cloud VM to synchronize game state between two clients in real time.",
    ],
    results: [
      "Completed and demoed at Knight Hacks 2024.",
      "Real-time multiplayer Battleships functional over the internet.",
    ],
  },
];
