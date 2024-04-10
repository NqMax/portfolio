import * as icons from "@/content/icons";

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "SGI",
    date: "April 2023 - October 2023",
    points: [
      <>
        Responsible for developing{" "}
        <span className="font-medium text-accent">
          end-to-end web applications
        </span>
        , accomplishing in the process the implementation and deployment of both
        front-end and back-end systems using modern technologies, including{" "}
        <span className="font-medium text-accent">
          JavaScript, CSS, Tailwind, React, SQL, NodeJS and Express.
        </span>
      </>,
      <>
        Responsible for developing mobile applications with high emphasis on{" "}
        <span className="font-medium text-accent">
          user experience and responsive interfaces
        </span>
        , developing and implementing in the process a mobile version for a CRM
        and Wallet system for fin-techs using{" "}
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
      {
        name: "JavaScript",
        icon: icons.JavaScriptIcon,
      },
      { name: "CSS", icon: icons.CSSIcon },
      { name: "Tailwind", icon: icons.TailwindIcon },
      { name: "React", icon: icons.ReactIcon },
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "ACME",
    date: "May 1869 - Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero iusto natus illum, non quidem.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero iusto natus illum, non quidem.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero iusto natus illum, non quidem.",
    ],
    technologies: [
      {
        name: "JavaScript",
        icon: icons.JavaScriptIcon,
      },
      { name: "CSS", icon: icons.CSSIcon },
      { name: "Tailwind", icon: icons.TailwindIcon },
      { name: "React", icon: icons.ReactIcon },
    ],
  },
];
