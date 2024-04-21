export function NavItem({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active: boolean;
}) {
  return (
    <a href={href} className="group flex h-8 w-fit items-center gap-x-3">
      <hr
        className={
          active
            ? "w-16 border-slate-200 transition-all"
            : "w-8 border-slate-400 transition-all group-hover:w-16 group-hover:border-slate-200"
        }
      />
      <div
        className={`text-sm font-bold transition-all
          ${active ? " text-slate-200" : "group-hover:text-slate-200"}
        `}
      >
        {title}
      </div>
    </a>
  );
}
