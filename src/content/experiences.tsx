import { icons } from "@/content/icons";

export const experiences = [
  {
    id: "web-developer",
    title: "Web Developer",
    company: "Banco Promerica",
    date: "05/2026 - Present",
    points: [
      <>
        Designed and developed responsive web interfaces using{" "}
        <span className="font-medium text-accent">Tailwind, Astro and React</span>
        , combining content-driven architecture with dynamic client-side interactivity to deliver{" "}
        <span className="font-medium text-accent">scalable, high-performance web experiences</span>.
      </>,
      <>
        Led the implementation of a{" "}
        <span className="font-medium text-accent">unified corporate design system</span>{" "}
        by integrating the company&apos;s branding standards across multiple web properties, establishing consistency in user experience and visual identity where no standardized framework previously existed.
      </>,
      <>
        Maintained and enhanced{" "}
        <span className="font-medium text-accent">technical SEO standards</span>{" "}
        through performance optimization, semantic HTML, metadata management, and{" "}
        <span className="font-medium text-accent">accessibility best practices</span>
        , improving search engine visibility and overall site quality.
      </>,
    ],
    technologies: [
      { name: "React", icon: icons.React },
      { name: "Astro", icon: icons.Astro },
      { name: "Tailwind", icon: icons.Tailwind },
      { name: "JavaScript", icon: icons.JavaScript },
      { name: "SEO", icon: icons.SEO },
      { name: "HTML", icon: icons.HTML },
    ],
  },
  {
    id: "individual-consulting-front-end-developer",
    title: "Front-End Developer",
    company: "Individual Consulting",
    date: "02/2026 - 04/2026",
    points: [
      <>
        Responsible for{" "}
        <span className="font-medium text-accent">front-end architecture</span>
        , defining development standards, project structure, and best
        practices to ensure{" "}
        <span className="font-medium text-accent">
          scalability, maintainability, and consistency
        </span>{" "}
        across the repository.
      </>,
      <>
        Development of responsive and accessible web interfaces, focused on
        <span className="font-medium text-accent">
          user experience and performance optimization
        </span>{" "}
        through techniques such as{" "}
        <span className="font-medium text-accent">
          code splitting, lazy loading, and efficient render management
        </span>{" "}
        with React.
      </>,
      <>
        Integration of services and{" "}
        <span className="font-medium text-accent">REST APIs</span>, managing
        application state and collaborating closely with backend and design
        teams to ensure{" "}
        <span className="font-medium text-accent">
          functional deliverables aligned with business objectives
        </span>
        .
      </>,
    ],
    technologies: [
      {
        name: "React",
        icon: icons.React,
      },
      {
        name: "TypeScript",
        icon: icons.TypeScript,
      },
      {
        name: "JavaScript",
        icon: icons.JavaScript,
      },
      {
        name: "HTML",
        icon: icons.HTML,
      },
      {
        name: "Node.js",
        icon: icons.Node,
      },
      {
        name: "Vite",
        icon: icons.Vite,
      },
      { name: "CSS", icon: icons.CSS },
      { name: "Tailwind", icon: icons.Tailwind },
      
    ],
  },
  {
    id: "gsi-full-stack-developer",
    title: "Full Stack Developer",
    company: "GSI",
    date: "03/2023 - 09/2023, 04/2025 - 01/2026",
    points: [
      <>
        Responsible for developing{" "}
        <span className="font-medium text-accent">
          end-to-end web applications
        </span>
        , accomplishing in the process the implementation and deployment of both
        front-end and back-end systems using modern technologies, including{" "}
        <span className="font-medium text-accent">
          JavaScript, Tailwind CSS, React, SQL, Node.js and Express.
        </span>
      </>,
      <>
        Crafted engaging mobile applications prioritizing{" "}
        <span className="font-medium text-accent">
          user experience and responsive interfaces
        </span>
        . Led the development and implementation of a{" "}
        <span className="font-medium text-accent">mobile version</span> for a
        CRM and Wallet system tailored for fintech companies using{" "}
        <span className="font-medium text-accent">React Native and Expo</span>.
      </>,
      <>
        Successful landing page development for one of the{" "}
        <span className="font-medium text-accent">leading products</span> of the
        company with a flawless quality rating using{" "}
        <span className="font-medium text-accent">React and Tailwind CSS</span>.
      </>,
    ],
    technologies: [
      { name: "React", icon: icons.React },
      {
        name: "TypeScript",
        icon: icons.TypeScript,
      },
      {
        name: "JavaScript",
        icon: icons.JavaScript,
      },
      {
        name: "Vite",
        icon: icons.Vite,
      },
      {
        name: "HTML",
        icon: icons.HTML,
      },
      { name: "CSS", icon: icons.CSS },
      { name: "Tailwind", icon: icons.Tailwind },
      { name: "Node.js", icon: icons.Node },
      { name: "Express", icon: icons.Express },
      { name: "SQL", icon: icons.SQL },
      { name: "React Native", icon: icons.React },
      { name: "Expo", icon: icons.Expo },
    ],
  },
  {
    id: "allied-global-internships",
    title: "Internship",
    company: "Allied Global",
    date: "06/2022 - 07/2022, 06/2024 - 07/2024",
    points: [
      <>
        Involved in the process of{" "}
        <span className="font-medium text-accent">
          digitizing the organization&apos;s physical documents
        </span>
        .
      </>,
      <>
        Used software experience to{" "}
        <span className="font-medium text-accent">
          digitize paperwork efficiently
        </span>
        , improving organizational efficiency.
      </>,
      <>
        Responsible for{" "}
        <span className="font-medium text-accent">
          researching and proposing database solutions
        </span>{" "}
        to optimize operations in existing business systems.
      </>,
    ],
    technologies: [
      {
        name: "SQL",
        icon: icons.SQL,
      },
      {
        name: "Databases",
        icon: icons.Databases,
      },
      {
        name: "Research",
        icon: icons.Research,
      },
    ],
  },
];
