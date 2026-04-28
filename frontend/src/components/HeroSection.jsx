import { Link } from 'react-router-dom'

export default function HeroSection({ headline, subheadline, primaryCta, secondaryCta }) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Industrial Instrumentation</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{headline}</h1>
          <p className="mt-5 max-w-xl text-sm text-slate-200 sm:text-base">{subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              {primaryCta}
            </Link>
            <Link
              to="/"
              className="rounded-md border border-slate-400 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-6">
          <div className="rounded-lg border-2 border-dashed border-slate-600 bg-slate-900 p-10 text-center text-sm text-slate-300">
            Product showcase image placeholder
          </div>
        </div>
      </div>
    </section>
  )
}
