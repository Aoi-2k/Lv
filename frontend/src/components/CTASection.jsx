import { Link } from 'react-router-dom'

export default function CTASection({ headline, button, to = '/contact' }) {
  return (
    <section className="bg-slate-900 py-14 text-white">
      <div className="section-container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-300">Get Expert Guidance</p>
          <h2 className="mt-2 text-2xl font-bold">{headline}</h2>
        </div>
        <Link
          to={to}
          className="rounded-md bg-lime-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-lime-300"
        >
          {button}
        </Link>
      </div>
    </section>
  )
}
