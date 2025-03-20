import { Section } from "@/components/section";
// Icons
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaGithub
} from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { DiScrum } from "react-icons/di";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const stackList = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-full w-full text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="h-full w-full text-yellow-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="h-full w-full text-blue-800" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="h-full w-full text-red-500" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-full w-full text-green-500" />,
  },
  {
    name: "React",
    icon: <FaReact className="h-full w-full text-sky-500" />,
  },
  {
    name: "Next",
    icon: <SiNextdotjs className="h-full w-full text-black" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="h-full w-full text-sky-400" />,
  },
  {
    name: "SQL",
    icon: <PiFileSql className="h-full w-full text-yellow-500" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="h-full w-full text-red-500" />,
  },
  {
    name: "Native",
    icon: <TbBrandReactNative className="h-full w-full text-purple-500" />,
  },
  {
    name: "Docker",
    icon: <FaDocker className="h-full w-full text-blue-500" />,
  },
  {
    name: "Figma",
    icon: <FaFigma className="h-full w-full text-pink-500" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="h-full w-full text-black" />,
  },
  {
    name: "Agile",
    icon: <DiScrum className="h-full w-full text-blue-500" />,
  },
];

export function Stack() {
  return (
    <Section number="04" title="My Stack & Tools" id="stack">
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(64px,_1fr))] justify-items-center gap-x-6 gap-y-6 rounded bg-white/10 p-3 shadow backdrop-blur sm:grid-cols-5">
        {stackList.map((tech) => (
          <li key={tech.name}>
            <Technology name={tech.name} icon={tech.icon} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Technology({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex h-16 w-16 flex-col items-center gap-y-2">
      {icon}
      <div className="text-sm">{name}</div>
    </div>
  );
}
