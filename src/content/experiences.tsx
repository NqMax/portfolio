import { icons } from "@/content/icons";

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "GSI",
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
      {
        name: "JavaScript",
        icon: icons.JavaScript,
      },
      { name: "CSS", icon: icons.CSS },
      { name: "Tailwind", icon: icons.Tailwind },
      { name: "React", icon: icons.React },
      { name: "Node.js", icon: icons.Node },
      { name: "Express", icon: icons.Express },
      { name: "SQL", icon: icons.SQL },
      { name: "React Native", icon: icons.React },
      { name: "Expo", icon: icons.Expo },
    ],
  },
];
