import { Section } from "@/components/section";
// Icons
import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import {
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

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
    name: "Node",
    icon: <FaNodeJs className="h-full w-full text-green-500" />,
  },
  {
    name: "React",
    icon: <FaReact className="h-full w-full text-blue-500" />,
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
    icon: <PiFileSql className="h-full w-full text-red-500" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="h-16 w-16 text-yellow-500" />,
  },
];

export function Stack() {
  return (
    <Section number="03" title="My Stack" id="stack">
      <ul className="grid grid-cols-5 justify-items-center gap-y-6 rounded bg-white/10 p-3 shadow backdrop-blur">
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
