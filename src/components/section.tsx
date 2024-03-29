export function Section({
  children,
  title,
  number,
  id,
}: {
  children: React.ReactNode;
  title: string;
  number: string;
  id: string;
}) {
  return (
    <section className="flex scroll-mt-24 flex-col gap-y-4" id={id}>
      <div className="flex items-center font-bold">
        <span className="mr-2 text-secondary">{number}.</span>
        <h3 className="text-accent mr-4">{title}</h3>
        <hr className="grow" />
      </div>
      {children}
    </section>
  );
}
