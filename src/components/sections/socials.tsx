import { FaGithub } from "react-icons/fa";

export function Socials() {
  return (
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
  );
}
