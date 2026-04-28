export default function IndustryCard({ name }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-5 text-center">
      <p className="text-sm font-semibold text-slate-800">{name}</p>
    </article>
  )
}
