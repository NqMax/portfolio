export function Section({ children, title, number, reference }) {
  return (
    <section className="flex flex-col gap-y-4" ref={reference}>
      <div className="flex gap-x-4 items-center">
        <h3 className="text-lg font-bold text-slate-200">
          <span className="text-secondary mr-2">{number}.</span>
          {title}
        </h3>
        <hr className="grow border-slate-400" />
      </div>
      {children}
    </section>
  );
}
