import { useState } from 'react'
import { contactHero, contactInfo, inquiryFocusAreas } from '../data/siteData'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: '', message: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const raw = await response.text()
      let data = {}

      try {
        data = raw ? JSON.parse(raw) : {}
      } catch {
        data = {}
      }

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit inquiry. Please try again.')
      }

      setStatus({
        type: 'success',
        message: 'Inquiry submitted successfully. Our team will contact you shortly.',
      })
      setFormData({ name: '', company: '', email: '', phone: '', requirement: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message || 'Unable to submit right now. Please contact us by phone or email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="bg-slate-900 py-16 text-white">
        <div className="section-container">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact Us</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{contactHero.headline}</h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-200 sm:text-base">{contactHero.subheadline}</p>
        </div>
      </section>

      <section className="section-container py-12 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Email</p>
            <p className="mt-2 text-sm font-semibold text-slate-800 sm:text-base">{contactInfo.email}</p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Phone</p>
            <p className="mt-2 text-sm font-semibold text-slate-800 sm:text-base">{contactInfo.phone}</p>
            {contactInfo.alternatePhone ? (
              <p className="mt-1 text-sm text-slate-600">{contactInfo.alternatePhone}</p>
            ) : null}
          </article>

          <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Office Hours</p>
            <p className="mt-2 text-sm font-semibold text-slate-800 sm:text-base">{contactInfo.officeHours}</p>
          </article>
        </div>
      </section>

      <section className="bg-slate-100 py-12 sm:py-14">
        <div className="section-container grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Inquiry Focus Areas</h2>
            <div className="mt-5 grid gap-3">
              {inquiryFocusAreas.map((item) => (
                <article
                  key={item}
                  className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
                >
                  {item}
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">Send Inquiry</h2>
            <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-cyan-400 focus:ring-2"
              />
              <input
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-cyan-400 focus:ring-2"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-cyan-400 focus:ring-2"
                />
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-cyan-400 focus:ring-2"
                />
              </div>
              <textarea
                name="requirement"
                rows={4}
                value={formData.requirement}
                onChange={handleChange}
                required
                placeholder="Tell us about your requirement"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-cyan-400 focus:ring-2"
              />

              {status.message ? (
                <p
                  className={`text-sm ${
                    status.type === 'success' ? 'text-emerald-700' : 'text-red-700'
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section-container py-12 sm:py-14">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Office Address</h2>
          <div className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
              {contactInfo.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
          </div>
          <div className="mt-6 rounded-lg border-2 border-dashed border-slate-400 bg-slate-50 p-8 text-center text-sm text-slate-500">
            Location map / office image placeholder
          </div>
        </div>
      </section>
    </>
  )
}
