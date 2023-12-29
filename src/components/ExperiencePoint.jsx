export function ExperiencePoint({ description }) {
  return (
    <div className="flex gap-x-2">
      <div className="text-secondary">&#x2023;</div>
      <div className="text-slate-300">{description}</div>
    </div>
  );
}
