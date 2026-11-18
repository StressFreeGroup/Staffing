/* global process */
/* eslint-disable no-control-regex */
// Relays SFS Talent Portal forms (talent sign-up, client sign-up, booking requests,
// job applications, document requests) to GoHighLevel.
// Set GHL_PORTAL_WEBHOOK in Vercel to a dedicated "SFS Talent Portal" workflow webhook.
// Until it is set, submissions go to the quote workflow tagged with form = "Portal: <type>".
const HOOK = process.env.GHL_PORTAL_WEBHOOK || process.env.GHL_QUOTE_WEBHOOK ||
  'https://services.leadconnectorhq.com/hooks/G7X1stVXNjknttjYwt20/webhook-trigger/4e87c495-6e32-4731-b491-57cbd8953778'
const TYPES = { talent_registration: 'Talent Registration', client_registration: 'Client Registration', booking_request: 'Booking Request', job_application: 'Job Application', document_request: 'Document Request' }
const clean = (v, max = 2000) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max)

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }) }
  let b = req.body
  if (typeof b === 'string') { try { b = JSON.parse(b) } catch { b = {} } }
  b = b || {}
  if (clean(b.website)) return res.status(200).json({ ok: true }) // honeypot
  const type = TYPES[b.type]
  if (!type) return res.status(400).json({ ok: false, error: 'Unknown form.' })
  const email = clean(b.email, 200)
  if ((b.type === 'talent_registration' || b.type === 'client_registration') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ ok: false, error: 'A valid email is required.' })

  const fields = {}
  for (const [k, v] of Object.entries(b)) {
    if (['type', 'website', 'page'].includes(k) || typeof v === 'object') continue
    fields[clean(k, 60)] = clean(v, 4000)
  }
  const full = fields.name || [fields.first_name, fields.last_name].filter(Boolean).join(' ') || fields.contact || ''
  const payload = {
    source: 'stressfreestaffing.com/portal',
    form: `Portal: ${type}`,
    tags: ['STAFFING', `PORTAL-${b.type.toUpperCase().replace(/_/g, '-')}`],
    powered_by: 'Alternative Brand Marketing',
    page_url: clean(b.page, 300),
    full_name: full,
    first_name: fields.first_name || full.split(/\s+/)[0] || '',
    last_name: fields.last_name || full.split(/\s+/).slice(1).join(' '),
    email,
    phone: fields.phone || '',
    company: fields.company || '',
    ...fields,
    submitted_at: new Date().toISOString(),
  }
  try {
    const r = await fetch(HOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!r.ok) throw new Error(`GHL ${r.status}`)
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error('portal relay failed', e)
    return res.status(502).json({ ok: false })
  }
}
