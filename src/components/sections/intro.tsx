export function Intro() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-secondary font-medium font-mono">Hi, my name is</div>
      <div className="text-accent flex flex-col gap-y-3 tracking-tight">
        <h1 className="text-5xl font-bold">Max Marroquín</h1>
        <h2 className="text-xl font-medium">Aspiring Full Stack Engineer</h2>
      </div>
      <p>
        Focused on building robust systems <br />
        and dynamic web applications.
      </p>
    </div>
  );
}
