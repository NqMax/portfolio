export function Intro() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-secondary">Hi, my name is</div>
      <div className="flex flex-col gap-y-1 tracking-tight text-slate-200">
        <h1 className="text-5xl font-bold">Max Marroquín</h1>
        <h2 className="text-xl font-medium">
          Aspiring Full Stack Engineer
        </h2>
      </div>
      <p>
        Focused on building robust systems and
        <br /> dynamic web applications.
      </p>
    </div>
  );
}
