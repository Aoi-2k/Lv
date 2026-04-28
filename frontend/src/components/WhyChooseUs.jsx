export default function WhyChooseUs({ items }) {
  return (
    <section className="section-container py-14">
      <h2 className="text-2xl font-bold text-slate-900">Why Choose Us</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
