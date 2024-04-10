"use client";
// Hooks
import { useState } from "react";
// Components
import { TechnologyPill } from "@/components/technologyPill";
// Utils
import { cn } from "@/lib/utils";
// Icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoMdArrowDropright } from "react-icons/io";

export function Experiences() {
  const experiences = [
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
          , accomplishing in the process the implementation and deployment of
          both front-end and back-end systems using modern technologies,
          including{" "}
          <span className="font-medium text-accent">
            JavaScript, CSS, Tailwind, React, SQL, NodeJS and Express.
          </span>
        </>,
        <>
          Responsible for developing mobile applications with high emphasis on{" "}
          <span className="font-medium text-accent">
            user experience and responsive interfaces
          </span>
          , developing and implementing in the process a mobile version for a
          CRM and Wallet system for fin-techs using{" "}
          <span className="font-medium text-accent">React Native and Expo</span>
          .
        </>,
        <>
          Successful landing page development for one of the{" "}
          <span className="font-medium text-accent">leading products</span> of
          the company with a flawless quality rating using{" "}
          <span className="font-medium text-accent">
            React and Tailwind CSS
          </span>
          .
        </>,
      ],
      technologies: [
        {
          name: "JavaScript",
          icon: <IoLogoJavascript className="text-yellow-400" />,
        },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
        { name: "React", icon: <FaReact className="text-sky-600" /> },
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
          icon: <IoLogoJavascript className="text-yellow-400" />,
        },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
        { name: "React", icon: <FaReact className="text-sky-600" /> },
      ],
    },
  ];

  const [currentExperience, setCurrentExperience] = useState(experiences[0]);

  return (
    <div className="flex gap-x-6">
      {/* Left Container */}
      <div className="flex w-[30%] flex-col">
        {experiences.map((experience, index) => (
          <button
            key={index}
            onClick={() => setCurrentExperience(experience)}
            className={cn(
              "border-l-2 border-l-secondary/10 py-2 pl-5 text-start font-mono text-sm font-bold text-secondary",
              currentExperience.company === experience.company &&
                "border-l-secondary bg-secondary/10",
            )}
          >
            {experience.company}
          </button>
        ))}
      </div>
      {/* Right Container */}
      <div className="flex w-[70%] flex-col">
        <div className="font-bold text-accent">
          {currentExperience.title}{" "}
          <span className="text-secondary">@ {currentExperience.company}</span>
        </div>
        <div className="font-mono text-sm">{currentExperience.date}</div>
        <ul className="mt-4 flex flex-col gap-y-4">
          {currentExperience.points.map((point, index) => (
            <ExperiencePoint key={index}>{point}</ExperiencePoint>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
          {currentExperience.technologies.map((technology, index) => (
            <li key={index}>
              <TechnologyPill name={technology.name} icon={technology.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperiencePoint({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-x-2">
      <IoMdArrowDropright className="mt-[1.5px] shrink-0 text-secondary" />
      <div className="text-pretty text-sm">{children}</div>
    </li>
  );
}
