import { Section } from "@/components/section";

export function AboutMe() {
  return (
    <Section number="01" title="About Me" id="about">
      <p className="text-pretty">
        My journey into the world of coding began with a fascination for
        <span className="font-medium text-accent"> problem-solving</span> and a
        desire to create impactful solutions through
        <span className="font-medium text-accent"> technology</span>. I thrive
        on challenges, constantly exploring new frameworks and languages to
        expand my skill set.
      </p>
      <p className="text-pretty">
        With a solid foundation in
        <span className="font-medium text-accent">
          {" "}
          front-end and back-end development
        </span>
        , I am committed to honing my abilities to craft seamless,
        user-centric experiences and
        <span className="font-medium text-accent">
          {" "}
          robust, scalable applications{" "}
        </span>
        that impact our world.
      </p>
    </Section>
  );
}
