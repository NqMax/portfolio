import { MdArrowOutward } from "react-icons/md";
import { TechnologyPill } from "./TechnologyPill";

export function Project({ title, description, technologies }) {
  return (
    <article className="flex gap-x-5 group">
      {/* Left Container */}
      <div className="w-40 h-16 bg-gray-400 rounded border-slate-200/50 border-[1.5px]" />
      {/* Right Container */}
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex gap-x-2">
          <div className="text-slate-200 font-bold transition-all group-hover:text-secondary">
            {title}
          </div>
          <MdArrowOutward className="group-hover:text-secondary self-center group-hover:translate-x-1 text-sm text-slate-200 group-hover:-translate-y-1 transition-all" />
        </div>
        <div>{description}</div>
        <ul className="flex flex-wrap gap-x-4 gap-y-4 mt-2">
          {technologies.map((technology, index) => (
            <li key={index}>
              <TechnologyPill name={technology.name} icon={technology.icon} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
