// Build-time static rendering: writes one fully rendered HTML file per route,
// with page-specific titles, meta, Open Graph, JSON-LD, plus sitemap/robots/llms.txt.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const ssr = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const { render, routes, resolve, SITE, services, homeFaqs, allWork } = ssr
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const today = new Date().toISOString().slice(0, 10)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`

const ORG_ID = `${SITE}/#organization`
const org = {
  '@type': ['ProfessionalService', 'Organization'],
  '@id': ORG_ID,
  name: 'Stress Free Staffing & Events',
  alternateName: ['Stress Free Staffing', 'Stress Free Staffing Nationwide'],
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/brand/logo-full.webp`, width: 900, height: 600 },
  image: `${SITE}/og-image.jpg`,
  description: 'Nationwide event staffing and experiential marketing agency providing brand ambassadors, promotional models, trade show staff, sampling programs, brand activations and mobile marketing tours.',
  slogan: 'Brand teams that show up and deliver — in every market.',
  telephone: '+1-619-663-7262',
  email: 'Mike@StressFreeGroup.com',
  priceRange: '$5,000+ per program',
  areaServed: { '@type': 'Country', name: 'United States' },
  address: { '@type': 'PostalAddress', addressLocality: 'San Diego', addressRegion: 'CA', addressCountry: 'US' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', telephone: '+1-619-663-7262', email: 'Mike@StressFreeGroup.com', areaServed: 'US', availableLanguage: ['English', 'Spanish'] },
  founder: { '@type': 'Person', name: 'Michael Katz', jobTitle: 'Founder', sameAs: ['https://www.linkedin.com/in/mikevertx'] },
  parentOrganization: { '@type': 'Organization', name: 'Stress Free Group LLC', url: 'https://www.stressfreegroup.com' },
  knowsAbout: ['Event staffing', 'Brand ambassadors', 'Promotional models', 'Trade show staffing', 'Product sampling', 'Experiential marketing', 'Brand activations', 'Mobile marketing tours', 'Guerrilla marketing', 'Field marketing'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Event staffing and experiential marketing services',
    itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${SITE}/services/${s.slug}` } })),
  },
}
const website = { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'Stress Free Staffing & Events', publisher: { '@id': ORG_ID }, inLanguage: 'en-US' }
const faqLd = (items, url) => ({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) })
const crumbs = (list) => ({ '@type': 'BreadcrumbList', itemListElement: list.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: url })) })

function head(route, p) {
  const url = p === '/' ? `${SITE}/` : `${SITE}${p}`
  let title, desc, image, graph, type = 'website'
  if (route.type === 'home') {
    title = 'Event Staffing & Experiential Marketing Agency | Stress Free Staffing'
    desc = 'Nationwide event staffing & experiential marketing: brand ambassadors, trade show staff, sampling, activations and mobile tours. 20,000+ vetted staff, all 50 states.'
    image = `${SITE}/og-image.jpg`
    graph = [org, website, { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description: desc, isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': ORG_ID }, primaryImageOfPage: `${SITE}/work/celsius-team.webp` }, faqLd(homeFaqs, url)]
  } else if (route.type === 'service') {
    const s = route.service
    title = s.title; desc = s.description; image = `${SITE}/og/svc-${s.hero}.jpg`
    graph = [
      { '@type': 'Service', '@id': `${url}#service`, name: s.name, serviceType: s.name, description: s.description, url, provider: { '@id': ORG_ID }, areaServed: { '@type': 'Country', name: 'United States' }, image: `${SITE}/work/${s.hero}.webp` },
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description: desc, isPartOf: { '@id': `${SITE}/#website` } },
      faqLd(s.faqs, url),
      crumbs([['Home', `${SITE}/`], ['Services', `${SITE}/#services`], [s.name, url]]),
      { ...org, hasOfferCatalog: undefined },
    ]
  } else if (route.type === 'work') {
    const w = route.work
    title = `${w.brand}: ${w.title} | Stress Free Staffing`
    desc = w.summary.length > 158 ? w.summary.slice(0, 155).replace(/\s\S*$/, '') + '…' : w.summary
    image = `${SITE}/og/${w.id}.jpg`; type = 'article'
    graph = [
      { '@type': 'CreativeWork', '@id': `${url}#casestudy`, name: `${w.brand} — ${w.title}`, headline: `${w.brand}: ${w.title}`, description: w.summary, url, genre: 'Case study', about: { '@type': 'Brand', name: w.brand }, locationCreated: { '@type': 'Place', name: w.where }, creator: { '@id': ORG_ID }, image: w.images.map((i) => `${SITE}${i.src}`), keywords: [w.type, ...w.points].join(', ') },
      crumbs([['Home', `${SITE}/`], ['Past Work', `${SITE}/#work`], [w.brand, url]]),
      { ...org, hasOfferCatalog: undefined },
    ]
  } else {
    title = 'Page not found | Stress Free Staffing'; desc = 'This page could not be found.'; image = `${SITE}/og-image.jpg`
  }
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}" />`,
    route.type === '404' ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${type}" />`,
    '<meta property="og:site_name" content="Stress Free Staffing &amp; Events" />',
    '<meta property="og:locale" content="en_US" />',
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(desc)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(desc)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ]
  if (route.type === 'home') tags.push('<link rel="preload" as="image" href="/work/celsius-team.webp" type="image/webp" fetchpriority="high" />')
  if (graph) tags.push(ld({ '@context': 'https://schema.org', '@graph': graph.map((g) => JSON.parse(JSON.stringify(g))) }))
  return tags.join('\n    ')
}

function write(p, file) {
  const route = resolve(p)
  const html = template
    .replace('<!--head-->', head(route, p))
    .replace('<!--app-->', render(p))
    .replace('<script type="module"', `<script>window.__PATH__=${JSON.stringify(p)}</script>\n    <script type="module"`)
  const out = path.join(dist, file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
}

for (const p of routes) write(p, p === '/' ? 'index.html' : `${p.slice(1)}.html`)
write('/404', '404.html')

// sitemap.xml with image entries
const urlEntry = (p) => {
  const r = resolve(p)
  const imgs = r.type === 'work' ? r.work.images : r.type === 'service' ? [{ src: `/work/${r.service.hero}.webp` }] : [{ src: '/work/celsius-team.webp' }, { src: '/work/hm-dome-night.webp' }, { src: '/work/mtvu-crowd.webp' }]
  const loc = p === '/' ? `${SITE}/` : `${SITE}${p}`
  const pr = p === '/' ? '1.0' : r.type === 'service' ? '0.9' : '0.7'
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${pr}</priority>\n${imgs.map((i) => `    <image:image><image:loc>${SITE}${i.src}</image:loc></image:image>`).join('\n')}\n  </url>`
}
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${routes.map(urlEntry).join('\n')}\n</urlset>\n`)

// robots.txt — welcome search engines and AI answer engines
const bots = ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot', 'Applebot-Extended', 'Google-Extended', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'PerplexityBot', 'Perplexity-User', 'CCBot', 'Amazonbot', 'meta-externalagent']
fs.writeFileSync(path.join(dist, 'robots.txt'), `${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n')}\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)

// llms.txt — plain-language summary for AI engines (llmstxt.org format)
const llms = `# Stress Free Staffing & Events

> Nationwide event staffing and experiential marketing agency based in San Diego, California, and a division of Stress Free Group LLC. Provides brand ambassadors, promotional models, trade show staff and event crews, and plans and runs product sampling programs, brand activations and mobile marketing tours in all 50 states. Founded on 25+ years of field marketing experience by Michael Katz (formerly of Alternative Brand Marketing, New York).

Key facts:
- Coverage: all 50 U.S. states and every major market
- Talent network: 20,000+ vetted event and promotional professionals
- Experience: 25+ years; 75+ brands served, including Celsius, H&M, MTV, McDonald's, MasterCard, PepsiCo, Dunkin', Boost Mobile, Coors Light, AQUAhydrate, Rémy Martin, HP and Bandai Namco
- Minimum program budget: $5,000; all programs custom-quoted from a request for proposal
- Contact: (619) 663-7262 · Mike@StressFreeGroup.com · ${SITE}/#contact

## Services
${services.map((s) => `- [${s.name}](${SITE}/services/${s.slug}): ${s.description}`).join('\n')}

## Case studies
${allWork.map((w) => `- [${w.brand} — ${w.title}](${SITE}/work/${w.id}): ${w.type}, ${w.where}.${w.agency ? ` Agency partner: ${w.agency}.` : ''}`).join('\n')}

## FAQ
${homeFaqs.map(([q, a]) => `- **${q}** ${a}`).join('\n')}

## Optional
- [Stress Free Group (parent company)](https://www.stressfreegroup.com)
- [Stress Free RVs](https://www.stressfreervs.com)
`
fs.writeFileSync(path.join(dist, 'llms.txt'), llms)
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
console.log(`prerendered ${routes.length + 1} pages + sitemap.xml, robots.txt, llms.txt`)
