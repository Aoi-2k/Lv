export default function CapabilitiesSection({ title, items }) {
  return (
    <section className="section-container py-14">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
            {item}
          </article>
        ))}
      </div>
    </section>
  )
}
