import { ExperiencePoint } from "@/components/ExperiencePoint";
import { TechnologyPill } from "@/components/technologyPill";
// Icons
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export function Experiences() {
  return (
    <div className="flex gap-x-6 mt-3">
      {/* Left Container */}
      <div className="flex flex-col gap-y-5 border-l border-l-slate-400/50 w-[30%]">
        <div className="pl-5 border-l-2 border-l-secondary bg-secondary/10 py-2 text-sm text-secondary font-bold">
          ACME
        </div>
      </div>
      {/* Right Container */}
      <div className="flex flex-col w-[70%]">
        <div className="font-bold text-slate-200">
          Full Stack Engineer <span className="text-secondary">@ ACME</span>
        </div>
        <div className="text-sm">May 1869 - Present</div>
        <div className="flex flex-col gap-y-5 mt-6">
          <ExperiencePoint>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero
            iusto natus illum, non quidem.
          </ExperiencePoint>
          <ExperiencePoint>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero
            iusto natus illum, non quidem.
          </ExperiencePoint>
          <ExperiencePoint>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero
            iusto natus illum, non quidem.
          </ExperiencePoint>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-4 mt-6">
          <li>
            <TechnologyPill
              name="JavaScript"
              icon={<IoLogoJavascript className="text-yellow-400" />}
            />
          </li>
          <li>
            <TechnologyPill
              name="CSS"
              icon={<FaCss3Alt className="text-blue-600" />}
            />
          </li>
          <li>
            <TechnologyPill
              name="Tailwind"
              icon={<SiTailwindcss className="text-sky-500" />}
            />
          </li>
          <li>
            <TechnologyPill
              name="React"
              icon={<FaReact className="text-sky-500" />}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
