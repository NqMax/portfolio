export function TechnologyPill({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-x-2 rounded-full bg-secondary/20 px-3 py-1 font-mono">
      <div className="text-xs font-medium text-secondary">{name}</div>
      {icon}
    </div>
  );
}
