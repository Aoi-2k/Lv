import AboutOverview from '../components/AboutOverview'
import CapabilitiesSection from '../components/CapabilitiesSection'
import CTASection from '../components/CTASection'
import {
  aboutHero,
  approachPoints,
  capabilities,
  companyOverview,
} from '../data/siteData'

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="section-container">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About Us</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{aboutHero.headline}</h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-200 sm:text-base">{aboutHero.subheadline}</p>
        </div>
      </section>

      <AboutOverview title="Company Overview" content={companyOverview} />
      <CapabilitiesSection title="Our Approach" items={approachPoints} />
      <CapabilitiesSection title="Capabilities" items={capabilities} />
      <CTASection headline="Discuss your instrumentation requirement with our team" button="Start Inquiry" />
    </>
  )
}
