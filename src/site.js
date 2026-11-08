import { services } from './data/services'
import { featured, more } from './data/work'

export const SITE = 'https://www.stressfreestaffing.com'
export const allWork = [...featured, ...more]

export function resolve(path) {
  const p = (path || '/').replace(/\/+$/, '') || '/'
  if (p === '/') return { type: 'home' }
  let m = p.match(/^\/services\/([\w-]+)$/)
  if (m) { const s = services.find((x) => x.slug === m[1]); if (s) return { type: 'service', service: s } }
  m = p.match(/^\/work\/([\w-]+)$/)
  if (m) { const w = allWork.find((x) => x.id === m[1]); if (w) return { type: 'work', work: w } }
  return { type: '404' }
}

export const routes = [
  '/',
  ...services.map((s) => `/services/${s.slug}`),
  ...allWork.map((w) => `/work/${w.id}`),
]
