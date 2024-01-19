export function NavItem({ title, onClick, active }: { title: string; onClick: () => void; active: boolean }) {
  return (
    <div onClick={onClick} className="flex items-center gap-x-3 group w-fit h-8">
      <hr
        className={
          active
            ? "transition-all w-16 border-slate-200"
            : "w-8 border-slate-400 transition-all group-hover:w-16 group-hover:border-slate-200"
        }
      />
      <div
        className={
          active
            ? "font-bold transition-all text-slate-200"
            : "text-sm font-bold transition-all group-hover:text-slate-200"
        }
      >
        {title}
      </div>
    </div>
  );
}
