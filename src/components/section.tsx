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
    <section className="flex scroll-mt-24 flex-col lg:gap-y-4" id={id}>
      <div className="sticky top-0 -mx-8 flex items-center py-4 font-bold backdrop-blur lg:static lg:-mx-0 lg:py-0 lg:backdrop-blur-none">
        <span className="ml-8 mr-2 font-mono text-secondary lg:ml-0">
          {number}.
        </span>
        <h3 className="mr-4 text-accent">{title}</h3>
        <hr className="mr-8 grow lg:mr-0" />
      </div>
      {children}
    </section>
  );
}
