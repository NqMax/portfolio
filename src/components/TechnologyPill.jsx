export function TechnologyPill({ name, icon }) {
  return (
    <div className="flex items-center gap-x-2 py-1 px-3 bg-secondary/20 rounded-full">
      <div className="text-secondary text-xs font-medium">{name}</div>
      {icon}
    </div>
  );
}
