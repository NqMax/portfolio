import { icons } from "@/content/icons";

export const projects = [
  {
    title: "Poké Search",
    picture: "/projects/poke-search.png",
    url: "https://poke-search-theta.vercel.app/",
    technologies: [
      { name: "React", icon: icons.React },
      {
        name: "Tailwind",
        icon: icons.Tailwind,
      },
      { name: "Next.js", icon: icons.Next },
      {
        name: "TypeScript",
        icon: icons.TypeScript,
      },
      { name: "HTML", icon: icons.HTML },
      { name: "CSS", icon: icons.CSS },
    ],
    description:
      "Web application that allows users to search for Pokémon through a beautiful interface. Created using the popular PokéAPI restful interface.",
  },
  {
    title: "Personal Blog",
    picture: "/projects/blog.png",
    url: "https://max-blog-ebon.vercel.app/",
    technologies: [
      { name: "MDX", icon: icons.MDX },
      { name: "React", icon: icons.React },
      {
        name: "TypeScript",
        icon: icons.TypeScript,
      },
      { name: "Next.js", icon: icons.Next },
      {
        name: "Tailwind",
        icon: icons.Tailwind,
      },
    ],
    description:
      "Elegant personal blog using Markdown + React (MDX) for content creation. Crafted with Next.js and Tailwind CSS for styling.",
  },
];
