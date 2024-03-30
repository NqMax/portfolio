import Image from "next/image";
// Components
import { TechnologyPill } from "@/components/technologyPill";
// Icons
import { MdArrowOutward } from "react-icons/md";

export function Project({
  title,
  picture,
  url,
  children,
  technologies,
}: {
  title: string;
  picture: string;
  url: string;
  children: React.ReactNode;
  technologies: { name: string; icon: React.ReactNode }[];
}) {
  return (
    <article className="group flex gap-x-4">
      {/* Left Container */}
      <Image
        src={picture}
        alt={`${title} project image`}
        width={120}
        height={70}
        className="h-[70px] w-[120px] shrink-0 rounded border-2 border-accent/10"
      />
      {/* Right Container */}
      <div className="flex flex-col gap-y-2">
        <a href={url} target="_blank" rel="noreferrer noopener" className="flex gap-x-2 text-accent group-hover:text-secondary">
          <div className="font-medium transition-all">{title}</div>
          <MdArrowOutward className="mb-[2px] h-4 w-4 self-end transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
        <div className="text-sm">{children}</div>
        <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-2">
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
