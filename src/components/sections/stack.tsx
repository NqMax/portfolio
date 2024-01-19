import { Section } from "@/components/section";
import { Technology } from "@/components/technology";
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
    icon: <SiTypescript className="text-blue-500 h-full w-full" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 h-full w-full" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-800 h-full w-full" />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-red-500 h-full w-full" />,
  },
  {
    name: "Node",
    icon: <FaNodeJs className="text-green-500 h-full w-full" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-500 h-full w-full" />,
  },
  {
    name: "Next",
    icon: <SiNextdotjs className="text-black h-full w-full" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 h-full w-full" />,
  },
  {
    name: "SQL",
    icon: <PiFileSql className="text-red-500 h-full w-full" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-yellow-500 h-full w-full" />,
  },
];

export function Stack({
  stackRef,
}: {
  stackRef: React.RefObject<HTMLElement>;
}) {
  return (
    <Section number="03" title="My Stack" reference={stackRef}>
      <ul className="grid-cols-5 grid justify-items-center gap-y-6 p-4 bg-white/10 shadow backdrop-blur rounded">
        {stackList.map((tech) => (
          <li key={tech.name}>
            <Technology name={tech.name} icon={tech.icon} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
