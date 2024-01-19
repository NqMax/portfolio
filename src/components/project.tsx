import { MdArrowOutward } from "react-icons/md";
import { TechnologyPill } from "@/components/technologyPill";

export function Project({
  title,
  children,
  technologies,
}: {
  title: string;
  children: React.ReactNode;
  technologies: { name: string; icon: React.ReactNode }[];
}) {
  return (
    <article className="flex gap-x-5 group">
      {/* Left Container */}
      <div className="w-40 h-16 bg-gray-400 rounded border-slate-200/50 border-[1.5px]" />
      {/* Right Container */}
      <div className="flex flex-col gap-y-2 w-full">
        <div className="flex gap-x-2 text-slate-200 group-hover:text-secondary">
          <div className="font-bold transition-all">{title}</div>
          <MdArrowOutward className="self-center group-hover:translate-x-1 text-sm group-hover:-translate-y-1 transition-all" />
        </div>
        <div className="text-sm">{children}</div>
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
