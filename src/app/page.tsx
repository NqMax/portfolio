"use client";
// React
import { useRef, useState, useEffect } from "react";
// Icons
import { FaGithub } from "react-icons/fa";
// Components
import { NavItem } from "@/components/NavItem";
import { Footer } from "@/components/footer";
import { AboutMe } from "@/components/sections/aboutMe";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  const [lastActiveSection, setLastActiveSection] = useState(1);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  function handleScroll(ref) {
    window.scrollTo(
      0,
      ref.current.getBoundingClientRect().y + window.scrollY - 96
    );
  }

  useEffect(() => {
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
  });

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

  return (
    <div className="flex mx-auto justify-between min-h-screen container xl:max-w-screen-lg">
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
        {/* Socials */}
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
        </ul>
      </header>
      {/* Right Container (main) */}
      <main className="flex flex-col w-1/2 gap-y-24 py-24">
        <AboutMe aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Stack stackRef={stackRef} />
        <Projects projectsRef={projectsRef} />
        <Footer />
      </main>
    </div>
  );
}
