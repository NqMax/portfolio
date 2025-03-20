export function Intro() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="font-mono font-medium text-secondary">Hi, my name is</div>
      <div className="flex flex-col gap-y-3 tracking-tight text-accent">
        <h1 className="text-4xl font-bold sm:text-5xl">Max Marroquín</h1>
        <h2 className="text-lg font-medium sm:text-xl">
          Full Stack Developer
        </h2>
      </div>
      <p>
        Focused on building robust systems <br />
        and dynamic web applications.
      </p>
    </div>
  );
}
