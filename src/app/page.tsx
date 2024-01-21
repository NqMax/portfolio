"use client";
// React
import { useRef, useState, useEffect } from "react";
// Components
import { Intro } from "@/components/sections/intro";
import { NavBar } from "@/components/sections/navBar";
import { Socials } from "@/components/sections/socials";
import { Footer } from "@/components/footer";
import { AboutMe } from "@/components/sections/aboutMe";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  

  return (
    <div className="flex mx-auto justify-between min-h-screen container xl:max-w-screen-lg">
      {/* Left Container (header) */}
      <header className="flex flex-col w-1/2 justify-between max-h-screen sticky top-0 py-24">
        <div className="flex flex-col gap-y-14">
          <Intro />
          <NavBar />
        </div>
        <Socials />
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
