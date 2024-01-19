export function ExperiencePoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-x-2">
      <div className="text-secondary">&#x2023;</div>
      <div className="text-slate-200 text-sm">{children}</div>
    </div>
  );
}
