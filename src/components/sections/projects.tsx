// Components
import { Section } from "@/components/section";
import { Project } from "@/components/project";
// Content
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section number="03" title="Projects" id="projects">
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
