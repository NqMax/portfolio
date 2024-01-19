export function Technology({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-16 h-16 gap-y-2 items-center">
      {icon}
      <div className="text-sm">{name}</div>
    </div>
  );
}
