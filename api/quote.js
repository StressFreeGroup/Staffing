/* global process */
/* eslint-disable no-control-regex */
// Relays StressFreeStaffing.com quote requests to the GoHighLevel workflow
// "Stress Free Staffing - Website Quote Requests" (Stress Free RVs sub-account).
const GHL_WEBHOOK = process.env.GHL_QUOTE_WEBHOOK ||
  'https://services.leadconnectorhq.com/hooks/G7X1stVXNjknttjYwt20/webhook-trigger/4e87c495-6e32-4731-b491-57cbd8953778'

const clean = (v, max = 2000) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max)

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }) }
  let b = req.body
  if (typeof b === 'string') { try { b = JSON.parse(b) } catch { b = {} } }
  b = b || {}
  if (clean(b.website)) return res.status(200).json({ ok: true }) // honeypot: silently drop bots

  const full = clean(b.name, 120)
  const email = clean(b.email, 200)
  if (!full || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ ok: false, error: 'Name and a valid email are required.' })
  const [first, ...rest] = full.split(/\s+/)

  const payload = {
    source: 'stressfreestaffing.com',
    form: 'Quote Request',
    page_url: clean(b.page, 300),
    full_name: full,
    first_name: first,
    last_name: rest.join(' '),
    email,
    phone: clean(b.phone, 40),
    company: clean(b.company, 160) || 'No company given',
    service: clean(b.service, 80) || 'Not specified',
    market: clean(b.market, 160) || 'Not specified',
    dates: clean(b.dates, 160),
    headcount: clean(b.headcount, 40),
    details: clean(b.details, 4000),
    submitted_at: new Date().toISOString(),
  }

  try {
    const r = await fetch(GHL_WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!r.ok) throw new Error(`GHL ${r.status}`)
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error('quote relay failed', e)
    return res.status(502).json({ ok: false })
  }
}
