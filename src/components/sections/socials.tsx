import { FaGithub } from "react-icons/fa";

export function Socials() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/NqMax",
      icon: FaGithub,
    },
  ];

  return (
    <ul className="flex gap-x-4" aria-label="Social media">
      {socials.map((social) => (
        <li key={social.name}>
          <a href={social.url} target="_blank" rel="noreferrer">
            <span className="sr-only">{social.name}</span>
            <social.icon className="hover:text-accent h-6 w-6 transition-colors" />
          </a>
        </li>
      ))}
    </ul>
  );
}
