// Icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPlus } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpo,
  SiExpress,
  SiMdx,
} from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

export const icons = {
  JavaScript: <IoLogoJavascript color="#facc15" className="text-yellow-400" />,
  HTML: <FaHtml5 className="text-red-500" />,
  CSS: <FaCss3Alt color="#2563eb" className="text-blue-600" />,
  Tailwind: <SiTailwindcss className="text-sky-400" />,
  React: <FaReact color="#0ea5e9" className="text-sky-500" />,
  Next: <SiNextdotjs className="text-black" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Expo: <SiExpo className="text-black" />,
  Node: <FaNodeJs color="#8cc84b" className="text-green-500" />,
  Express: <SiExpress className="text-black" />,
  SQL: <TbFileTypeSql color="#f97316" className="text-orange-500" />,
  MDX: <SiMdx className="text-yellow-500" />,
  More: <FaPlus className="text-gray-500" />,
};
