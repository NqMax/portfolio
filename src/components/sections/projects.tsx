import { Section } from "@/components/section";
import { Project } from "@/components/project";
// Icons
import { FaCss3Alt, FaHtml5, FaDocker, FaPhp, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export function Projects({
  projectsRef,
}: {
  projectsRef: React.RefObject<HTMLElement>;
}) {
  return (
    <Section number="04" title="My Projects" reference={projectsRef}>
      <div className="flex flex-col gap-y-14 mt-3">
        <Project
          title="Coming Soon!"
          technologies={[
            {
              name: "JavaScript",
              icon: <IoLogoJavascript className="text-yellow-500" />,
            },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-800" /> },
            { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque
          iure, maiores repudiandae voluptate alias reprehenderit cupiditate.
        </Project>
        <Project
          title="Coming Soon!"
          technologies={[
            {
              name: "Docker",
              icon: <FaDocker className="text-blue-500" />,
            },
            { name: "Node", icon: <FaNodeJs className="text-green-500" /> },
            {
              name: "Express",
              icon: <SiExpress className="text-yellow-500" />,
            },
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque
          iure, maiores repudiandae voluptate alias reprehenderit cupiditate.
        </Project>
        <Project
          title="Coming Soon!"
          technologies={[
            {
              name: "Tailwind",
              icon: <SiTailwindcss className="text-sky-400" />,
            },
            { name: "MySQL", icon: <GrMysql className="text-blue-500" /> },
            { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
          ]}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque
          iure, maiores repudiandae voluptate alias reprehenderit cupiditate.
        </Project>
      </div>
    </Section>
  );
}
