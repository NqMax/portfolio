import { Section } from "@/components/section";

export function AboutMe() {
  return (
    <Section number="01" title="About Me" id="about">
      <p>
        My journey into the world of coding began with a fascination for
        <span className="font-bold text-slate-200"> problem-solving</span> and a
        desire to create impactful solutions through
        <span className="font-bold text-slate-200"> technology</span>. I thrive
        on challenges, constantly exploring new frameworks and languages to
        expand my skill set. <br />
        <br />
        With a solid foundation in
        <span className="font-bold text-slate-200">
          {" "}
          front-end and back-end development
        </span>
        , I am dedicatedly committed to honing my abilities to craft seamless,
        user-centric experiences and
        <span className="font-bold text-slate-200">
          {" "}
          robust, scalable applications{" "}
        </span>
        that impact our world.
      </p>
    </Section>
  );
}
