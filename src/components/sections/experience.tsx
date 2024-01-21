import { Section } from "@/components/section";
import { Experiences } from "@/components/Experiences";

export function Experience({
  experienceRef,
}: {
  experienceRef: React.RefObject<HTMLElement>;
}) {
  return (
    <Section number="02" title="My Experience" reference={experienceRef} id="experience">
      <Experiences />
    </Section>
  );
}
