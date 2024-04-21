"use client";
// Hooks
import { useState } from "react";
// Components
import { TechnologyPill } from "@/components/technologyPill";
// Utils
import { cn } from "@/lib/utils";
// Content
import { experiences } from "@/content/experiences";
// Icons
import { IoMdArrowDropright } from "react-icons/io";

export function Experiences() {
  const [currentExperience, setCurrentExperience] = useState(experiences[0]);

  return (
    <div className="flex flex-col gap-x-6 gap-y-6 sm:flex-row">
      {/* Left Container */}
      <div className="flex flex-col sm:w-[30%]">
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
      <div className="flex flex-col sm:w-[70%]">
        <h4 className="font-bold text-accent">
          {currentExperience.title}{" "}
          <span className="text-secondary">@ {currentExperience.company}</span>
        </h4>
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
