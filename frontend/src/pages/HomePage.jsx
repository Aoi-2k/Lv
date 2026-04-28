import CategoryCard from '../components/CategoryCard'
import CTASection from '../components/CTASection'
import HeroSection from '../components/HeroSection'
import IndustryCard from '../components/IndustryCard'
import WhyChooseUs from '../components/WhyChooseUs'
import {
  automationContent,
  companyPositioning,
  heroContent,
  industriesServed,
  productCategories,
  whyChooseUsPoints,
} from '../data/siteData'

export default function HomePage() {
  return (
    <>
      <HeroSection {...heroContent} />

      <section className="section-container py-14">
        <h2 className="text-2xl font-bold text-slate-900">Product Categories</h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700 sm:text-base">{companyPositioning}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((category) => (
            <CategoryCard key={category} title={category} />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-14">
        <div className="section-container grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Customized Automation Solutions</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{automationContent}</p>
          </div>
          <div className="rounded-lg border-2 border-dashed border-slate-400 bg-white p-8 text-center text-sm text-slate-500">
            Automation solution case image placeholder
          </div>
        </div>
      </section>

      <section className="section-container py-14">
        <h2 className="text-2xl font-bold text-slate-900">Industries Served</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industriesServed.map((industry) => (
            <IndustryCard key={industry} name={industry} />
          ))}
        </div>
      </section>

      <WhyChooseUs items={whyChooseUsPoints} />

      <CTASection headline="Need help selecting the right instrument?" button="Contact Our Team" />
    </>
  )
}
