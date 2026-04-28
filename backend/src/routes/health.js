import { Router } from 'express'

const router = Router()

router.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'lv-industrial-solutions-api',
    timestamp: new Date().toISOString(),
  })
})

router.get('/company', (_req, res) => {
  res.json({
    name: 'LV Industrial Solutions',
    scope: ['Home Page', 'About Page', 'Contact Page'],
    stack: 'MERN',
  })
})

router.post('/inquiry', (req, res) => {
  const { name, company, email, phone, requirement } = req.body || {}

  if (!name || !email || !phone || !requirement) {
    return res.status(400).json({
      message: 'Please provide name, email, phone, and requirement.',
    })
  }

  return res.status(200).json({
    message: 'Inquiry received',
    data: {
      name,
      company: company || '',
      email,
      phone,
      requirement,
    },
    note: 'Starter response. Email/CRM integration can be added next.',
  })
})

export default router
