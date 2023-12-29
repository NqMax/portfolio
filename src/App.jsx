// React
import { useRef, useState } from "react";
// Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
// Components
import { NavItem } from "./components/NavItem";
import { Section } from "./components/Section";
import { Technology } from "./components/Technology";
import { TechnologyPill } from "./components/TechnologyPill";
import { Project } from "./components/Project";
import { ExperiencePoint } from "./components/ExperiencePoint";

function Experiences() {
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
          <ExperiencePoint
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero
          iusto natus illum, non quidem."
          />
          <ExperiencePoint
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero
          iusto natus illum, non quidem."
          />
          <ExperiencePoint
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vero
          iusto natus illum, non quidem."
          />
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

function App() {
  const [lastActiveSection, setLastActiveSection] = useState(1);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const stackRef = useRef(null);
  const projectsRef = useRef(null);

  function handleScroll(ref) {
    window.scrollTo(
      0,
      ref.current.getBoundingClientRect().y + window.scrollY - 96
    );
  }

  function isElementInViewport(ref) {
    const rect = ref.current.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.onscroll = () => {
    setLastActiveSection(
      isElementInViewport(aboutRef)
        ? 1
        : isElementInViewport(experienceRef)
        ? 2
        : isElementInViewport(stackRef)
        ? 3
        : 4
    );
  };

  return (
    <div className="flex mx-auto justify-between min-h-screen max-w-screen-lg">
      {/* Left Container (header) */}
      <header className="flex flex-col w-1/2 justify-between max-h-screen sticky top-0 py-24">
        <div className="flex flex-col gap-y-14">
          {/* Main Header */}
          <div className="flex flex-col gap-y-4">
            <div className="text-secondary">Hi, my name is</div>
            <h1 className="text-5xl font-bold text-slate-200">Max Marroquín</h1>
            <h2 className="text-xl font-medium text-slate-200">
              Aspiring Full Stack Engineer
            </h2>
            <p>
              I focus on building robust systems and
              <br /> dynamic web applications.
            </p>
          </div>
          {/* Nav Bar */}
          <nav>
            <ul className="flex flex-col gap-y-6">
              <li>
                <NavItem
                  title="ABOUT"
                  active={lastActiveSection === 1 ? true : false}
                  onClick={() => handleScroll(aboutRef)}
                />
              </li>
              <li>
                <NavItem
                  title="EXPERIENCE"
                  active={lastActiveSection === 2 ? true : false}
                  onClick={() => handleScroll(experienceRef)}
                />
              </li>
              <li>
                <NavItem
                  title="STACK"
                  active={lastActiveSection === 3 ? true : false}
                  onClick={() => handleScroll(stackRef)}
                />
              </li>
              <li>
                <NavItem
                  title="PROJECTS"
                  active={lastActiveSection === 4 ? true : false}
                  onClick={() => handleScroll(projectsRef)}
                />
              </li>
            </ul>
          </nav>
        </div>
        <ul className="flex items-end gap-x-4">
          <li>
            <a
              href="https://github.com/NqMax"
              aria-label="Author's GitHub profile"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="w-6 h-6 transition-all hover:text-slate-200" />
            </a>
          </li>
          <li className="group">
            <div className="invisible  group-hover:visible relative z-10 -top-2 -left-8 text-xs text-slate-300 bg-slate-700 py-px px-2 rounded before:absolute before:left-10 before:-z-10 before:top-2 before:bg-slate-700 before:rotate-45 before:w-3 before:h-3">
              Coming soon!
            </div>
            <FaLinkedin
              alt="SJ"
              className="peer w-6 h-6 transition-all hover:text-slate-200"
            />
          </li>
        </ul>
      </header>
      {/* Right Container (main) */}
      <main className="flex flex-col w-1/2 gap-y-24 py-24">
        {/* 1. About Me */}
        <Section number="01" title="About Me" id="About" reference={aboutRef}>
          <p>
            My journey into the world of coding began with a fascination for
            <span className="font-bold text-slate-200">
              {" "}
              problem-solving
            </span>{" "}
            and a desire to create impactful solutions through
            <span className="font-bold text-slate-200"> technology</span>. I
            thrive on challenges, constantly exploring new frameworks and
            languages to expand my skill set. <br />
            <br />
            With a solid foundation in
            <span className="font-bold text-slate-200">
              {" "}
              front-end and back-end development
            </span>
            , I am dedicatedly committed to honing my abilities to craft
            seamless, user-centric experiences and
            <span className="font-bold text-slate-200">
              {" "}
              robust, scalable applications{" "}
            </span>
            that impact our world.
          </p>
        </Section>
        {/* 2. My Experience */}
        <Section
          number="02"
          title="My Experience"
          id="Experience"
          reference={experienceRef}
        >
          <Experiences />
        </Section>
        {/* 3. Section */}
        <Section number="03" title="My Stack" id="Stack" reference={stackRef}>
          <ul className="flex justify-between p-4 bg-white/10 shadow-lg backdrop-blur-sm rounded">
            <li>
              <Technology
                name="JavaScript"
                icon={
                  <IoLogoJavascript className="text-yellow-400 h-full w-full" />
                }
              />
            </li>
            <li>
              <Technology
                name="CSS"
                icon={<FaCss3Alt className="text-blue-500 h-full w-full" />}
              />
            </li>
            <li>
              <Technology
                name="HTML"
                icon={<FaHtml5 className="text-red-500 h-full w-full" />}
              />
            </li>
            <li>
              <Technology
                name="Express"
                icon={<SiExpress className="text-yellow-500 h-full w-full" />}
              />
            </li>
            <li>
              <Technology
                name="Tailwind"
                icon={<SiTailwindcss className="text-sky-400 h-full w-full" />}
              />
            </li>
          </ul>
        </Section>
        {/* 4. My Projects */}
        <Section
          number="04"
          title="My Projects"
          id="Projects"
          reference={projectsRef}
        >
          <div className="flex flex-col gap-y-14 mt-3">
            <Project
              title="Coming Soon!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque
          iure, maiores repudiandae voluptate alias reprehenderit cupiditate.
          Aliquam dolores laboriosam, molestiae libero sunt excepturi labore
          beatae! Itaque placeat veritatis est?"
              technologies={[
                {
                  name: "JavaScript",
                  icon: <IoLogoJavascript className="text-yellow-400" />,
                },
                { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
                { name: "HTML", icon: <FaHtml5 className="text-red-500" /> },
              ]}
            />
            <Project
              title="Coming Soon!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque
          iure, maiores repudiandae voluptate alias reprehenderit cupiditate.
          Aliquam dolores laboriosam, molestiae libero sunt excepturi labore
          beatae! Itaque placeat veritatis est?"
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
            />
            <Project
              title="Coming Soon!"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cumque
          iure, maiores repudiandae voluptate alias reprehenderit cupiditate.
          Aliquam dolores laboriosam, molestiae libero sunt excepturi labore
          beatae! Itaque placeat veritatis est?"
              technologies={[
                {
                  name: "Tailwind",
                  icon: <SiTailwindcss className="text-sky-400" />,
                },
                { name: "MySQL", icon: <GrMysql className="text-blue-500" /> },
                { name: "PHP", icon: <FaPhp className="text-blue-500" /> },
              ]}
            />
          </div>
        </Section>
        <footer>
          <p className="text-sm">
            Made with <span className="text-slate-300">Tailwind</span> and{" "}
            <span className="text-slate-300">React</span>. Inspired by the
            designs of{" "}
            <a
              href="https://github.com/bchiang7"
              className="text-slate-300 hover:text-secondary transition-all"
            >
              Brittany Chiang
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
