"use client";
import { useState, useEffect } from "react";
// Components
import { NavItem } from "@/components/NavItem";

export function NavBar() {
  const [lastActiveSection, setLastActiveSection] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.id;
            if (section === "about") {
              setLastActiveSection(1);
            } else if (section === "experience") {
              setLastActiveSection(2);
            } else if (section === "projects") {
              setLastActiveSection(3);
            } else {
              setLastActiveSection(4);
            }
          }
        });
      },
      {
        rootMargin: "-96px 0% -80% 0%",
        threshold: 0,
      },
    );

    document
      .querySelectorAll("#about, #experience, #stack, #projects")
      .forEach((section) => {
        observer.observe(section);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      <ul className="flex flex-col gap-y-6">
        <li>
          <NavItem
            title="ABOUT"
            active={lastActiveSection === 1}
            href="#about"
          />
        </li>
        <li>
          <NavItem
            title="EXPERIENCE"
            active={lastActiveSection === 2}
            href="#experience"
          />
        </li>
        <li>
          <NavItem
            title="PROJECTS"
            active={lastActiveSection === 3}
            href="#projects"
          />
        </li>
        <li>
          <NavItem
            title="STACK"
            active={lastActiveSection === 4}
            href="#stack"
          />
        </li>
      </ul>
    </nav>
  );
}
