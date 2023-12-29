export function Technology({ name, icon }) {
  return (
    <div className="flex flex-col w-16 h-16 gap-y-1 items-center">
      {icon}
      <div className="text-sm ">{name}</div>
    </div>
  );
}
