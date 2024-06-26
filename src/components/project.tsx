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
    <article className="group">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="flex flex-col gap-x-4 gap-y-6 sm:flex-row"
      >
        {/* Left Container */}
        <Image
          src={picture}
          alt={`${title} project image`}
          width={120}
          height={70}
          className="lg:h-[70px] lg:w-[120px] w-[200px] h-[115px] shrink-0 rounded border-2 border-accent/10 order-last sm:order-none"
        />
        {/* Right Container */}
        <div className="flex flex-col gap-y-2">
          <h4 className="flex gap-x-2 text-accent group-hover:text-secondary">
            <div className="font-medium transition-all">{title}</div>
            <MdArrowOutward className="mb-[2px] h-4 w-4 self-end transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
          </h4>
          <div className="text-sm">{children}</div>
          <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-2">
            {technologies.map((technology, index) => (
              <li key={index}>
                <TechnologyPill name={technology.name} icon={technology.icon} />
              </li>
            ))}
          </ul>
        </div>
      </a>
    </article>
  );
}
