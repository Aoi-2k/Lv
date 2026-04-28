export default function AboutOverview({ title, content }) {
  return (
    <section className="section-container py-14">
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-700 sm:text-base">{content}</p>
    </section>
  )
}
