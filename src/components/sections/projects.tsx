import { Section } from "@/components/section";
import { Project } from "@/components/project";
// Icons
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaDocker,
  FaPhp,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export function Projects() {
  const projects = [
    {
      title: "Poké Search",
      picture: "/poke-search.png",
      url: "https://poke-search-theta.vercel.app/",
      technologies: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      ],
      description:
        "Web application that allows users to search for Pokémon through a beautiful interface. Created using the popular PokéAPI restful interface.",
    },
  ];

  return (
    <Section number="03" title="My Projects" id="projects">
      <ul className="flex flex-col gap-y-12">
        {projects.map((project, index) => (
          <li key={index}>
            <Project
              title={project.title}
              picture={project.picture}
              url={project.url}
              technologies={project.technologies}
            >
              {project.description}
            </Project>
          </li>
        ))}
      </ul>
    </Section>
  );
}
