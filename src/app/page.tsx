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
  return (
    <div className="container mx-auto flex flex-col lg:flex-row min-h-screen xl:max-w-screen-lg">
      {/* Left Container (header) */}
      <header className="lg:sticky top-0 flex max-h-screen lg:w-1/2 flex-col justify-between pt-12 lg:py-24">
        <div className="flex flex-col gap-y-4 lg:gap-y-14">
          <Intro />
          <NavBar />
        </div>
        <Socials />
      </header>
      {/* Right Container (main) */}
      <main className="flex lg:w-1/2 flex-col gap-y-16 md:gap-y-24 py-24">
        <AboutMe />
        <Experience />
        <Projects />
        <Stack />
        <Footer />
      </main>
    </div>
  );
}
