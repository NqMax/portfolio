import * as icons from "@/content/icons";

export const projects = [
  {
    title: "Poké Search",
    picture: "/poke-search.png",
    url: "https://poke-search-theta.vercel.app/",
    technologies: [
      { name: "React", icon: icons.ReactIcon },
      {
        name: "Tailwind",
        icon: icons.TailwindIcon,
      },
      { name: "Next.js", icon: icons.NextIcon },
      {
        name: "TypeScript",
        icon: icons.TypeScriptIcon,
      },
      { name: "HTML", icon: icons.HTMLIcon },
      { name: "CSS", icon: icons.CSSIcon },
    ],
    description:
      "Web application that allows users to search for Pokémon through a beautiful interface. Created using the popular PokéAPI restful interface.",
  },
];
