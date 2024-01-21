"use client";
import { useState, useEffect } from "react";
// Components
import { NavItem } from "@/components/NavItem";

export function NavBar() {
  const [lastActiveSection, setLastActiveSection] = useState(1);

  useEffect(() => {
    window.onscroll = () => {
      setLastActiveSection(
        isElementInViewport(document.querySelector("#about"))
          ? 1
          : isElementInViewport(document.querySelector("#experience"))
          ? 2
          : isElementInViewport(document.querySelector("#stack"))
          ? 3
          : 4
      );
    };
  });

  function isElementInViewport(ref) {
    const rect = ref.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  return (
    <>
      <nav>
        <ul className="flex flex-col gap-y-6">
          <li>
            <NavItem title="ABOUT" active={lastActiveSection === 1 ? true : false} href="#about" />
          </li>
          <li>
            <NavItem title="EXPERIENCE" active={lastActiveSection === 2 ? true : false} href="#experience" />
          </li>
          <li>
            <NavItem title="STACK" active={lastActiveSection === 3 ? true : false} href="#stack" />
          </li>
          <li>
            <NavItem title="PROJECTS" active={lastActiveSection === 4 ? true : false} href="#projects" />
          </li>
        </ul>
      </nav>
    </>
  );
}
