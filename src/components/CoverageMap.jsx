import { useState } from 'react'
import s from './CoverageMap.module.css'

const tiers = {
  best:    { label: 'Best',    color: '#1e6b4f' },
  better:  { label: 'Better',  color: '#2d8a4e' },
  good:    { label: 'Good',    color: '#5bb07a' },
  limited: { label: 'Limited', color: '#a3d4b5' },
}

const coverage = {
  best: ['NY','NJ','CT','PA','CA','FL','TX','IL','GA','MA'],
  better: ['OH','MI','NC','VA','MD','WA','OR','CO','AZ','TN','MN','WI','MO','IN','SC'],
  good: ['LA','AL','KY','OK','NV','UT','NM','KS','AR','MS','IA','NE','WV','HI','DC','DE','RI','NH','VT','ME'],
  limited: ['MT','WY','ND','SD','ID','AK'],
}

function getTier(abbr) {
  for (const [key, states] of Object.entries(coverage)) {
    if (states.includes(abbr)) return { key, ...tiers[key] }
  }
  return { key: 'good', ...tiers.good }
}

// HQ marker
const HQ = { lat: 32.7157, lng: -117.1611, label: 'HQ: San Diego, CA' }

// Convert lat/lng to SVG coords (Albers-ish projection, simplified)
function project(lat, lng) {
  const x = (lng + 130) * 8.5
  const y = (52 - lat) * 11.5
  return [x, y]
}

const [hqX, hqY] = project(HQ.lat, HQ.lng)

// All 50 states + DC with center points for labels
const states = [
  { ab:'AL', lat:32.8, lng:-86.8 },{ ab:'AK', lat:64, lng:-153 },{ ab:'AZ', lat:34.3, lng:-111.7 },
  { ab:'AR', lat:34.8, lng:-92.4 },{ ab:'CA', lat:37, lng:-119.5 },{ ab:'CO', lat:39, lng:-105.5 },
  { ab:'CT', lat:41.6, lng:-72.7 },{ ab:'DE', lat:39, lng:-75.5 },{ ab:'FL', lat:28.5, lng:-82.5 },
  { ab:'GA', lat:33, lng:-83.5 },{ ab:'HI', lat:20.5, lng:-157 },{ ab:'ID', lat:44.4, lng:-114.7 },
  { ab:'IL', lat:40, lng:-89.2 },{ ab:'IN', lat:39.8, lng:-86.3 },{ ab:'IA', lat:42, lng:-93.5 },
  { ab:'KS', lat:38.5, lng:-98.3 },{ ab:'KY', lat:37.8, lng:-85.7 },{ ab:'LA', lat:31, lng:-92 },
  { ab:'ME', lat:45.4, lng:-69.2 },{ ab:'MD', lat:39.2, lng:-76.7 },{ ab:'MA', lat:42.3, lng:-71.8 },
  { ab:'MI', lat:44.3, lng:-84.5 },{ ab:'MN', lat:46.3, lng:-94.3 },{ ab:'MS', lat:32.7, lng:-89.7 },
  { ab:'MO', lat:38.4, lng:-92.5 },{ ab:'MT', lat:47, lng:-109.6 },{ ab:'NE', lat:41.5, lng:-99.8 },
  { ab:'NV', lat:39.5, lng:-117 },{ ab:'NH', lat:43.7, lng:-71.5 },{ ab:'NJ', lat:40.2, lng:-74.7 },
  { ab:'NM', lat:34.5, lng:-106 },{ ab:'NY', lat:42.5, lng:-75.5 },{ ab:'NC', lat:35.6, lng:-79.4 },
  { ab:'ND', lat:47.5, lng:-100.5 },{ ab:'OH', lat:40.4, lng:-82.8 },{ ab:'OK', lat:35.5, lng:-97.5 },
  { ab:'OR', lat:44, lng:-120.5 },{ ab:'PA', lat:41, lng:-77.6 },{ ab:'RI', lat:41.7, lng:-71.5 },
  { ab:'SC', lat:34, lng:-81 },{ ab:'SD', lat:44.4, lng:-100.2 },{ ab:'TN', lat:35.8, lng:-86.3 },
  { ab:'TX', lat:31.5, lng:-99.5 },{ ab:'UT', lat:39.5, lng:-111.5 },{ ab:'VT', lat:44, lng:-72.6 },
  { ab:'VA', lat:37.5, lng:-78.9 },{ ab:'WA', lat:47.5, lng:-120.5 },{ ab:'WV', lat:38.6, lng:-80.6 },
  { ab:'WI', lat:44.6, lng:-89.8 },{ ab:'WY', lat:43, lng:-107.5 },{ ab:'DC', lat:38.9, lng:-77 },
]

export default function CoverageMap() {
  const [hover, setHover] = useState(null)

  return (
    <section className={`section ${s.section}`} id="coverage">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Coverage</span>
          <h2 className="h2">Nationwide staffing, <em>from coast to coast.</em></h2>
          <p className="lede">We activate in every major U.S. market. Our database of 20,000+ professionals spans all 50 states, with the deepest bench in the markets that matter most.</p>
        </div>
        <div className={`${s.mapWrap} reveal`}>
          <svg viewBox="-20 -10 870 520" className={s.map}>
            {/* US outline approximation */}
            <path
              d="M60,100 L180,80 L180,60 Q200,55 220,65 L260,55 Q350,50 400,55 L500,45 Q560,40 600,55 L680,50 Q720,55 740,70 L760,90 Q780,100 785,120 L790,160 Q795,180 785,200 L780,230 Q770,250 755,260 L745,270 Q730,290 710,310 L690,330 Q680,340 670,350 L660,360 Q640,380 630,400 L620,420 Q600,440 580,445 L540,450 Q500,455 480,450 L440,445 Q400,445 370,450 L330,460 Q300,465 280,460 L240,450 Q200,445 170,440 L140,430 Q110,420 90,400 L70,370 Q55,340 50,310 L45,270 Q40,230 45,200 L50,170 Q55,140 60,120 Z"
              fill="none"
              stroke="var(--line, #d4d0de)"
              strokeWidth="1.5"
              opacity="0.5"
            />

            {/* State circles */}
            {states.filter(st => st.ab !== 'AK' && st.ab !== 'HI').map((st) => {
              const [cx, cy] = project(st.lat, st.lng)
              const tier = getTier(st.ab)
              const isHovered = hover === st.ab
              const r = isHovered ? 18 : 15
              return (
                <g key={st.ab}
                  onMouseEnter={() => setHover(st.ab)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: 'default' }}
                >
                  <circle cx={cx} cy={cy} r={r} fill={tier.color} opacity={isHovered ? 1 : 0.8}
                    stroke={isHovered ? '#1a1a2e' : 'white'} strokeWidth={isHovered ? 2 : 1}
                    style={{ transition: 'all 0.15s' }}
                  />
                  <text x={cx} y={cy + 1} textAnchor="middle" dominantBaseline="central"
                    fill="white" fontSize="8" fontWeight="700" fontFamily="var(--body, sans-serif)"
                    style={{ pointerEvents: 'none' }}
                  >{st.ab}</text>
                </g>
              )
            })}

            {/* HQ marker */}
            <circle cx={hqX} cy={hqY} r={22} fill="none" stroke="var(--purple, #6c3fa0)" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.6" />
            <circle cx={hqX} cy={hqY} r={6} fill="var(--purple, #6c3fa0)" />

            {/* HQ label */}
            <text x={hqX} y={hqY + 32} textAnchor="middle" fill="var(--purple, #6c3fa0)"
              fontSize="9" fontWeight="700" fontFamily="var(--body, sans-serif)"
            >HQ: San Diego, CA</text>

            {/* Alaska and Hawaii indicators */}
            <g transform="translate(80, 420)">
              <circle cx={0} cy={0} r={12} fill={getTier('AK').color} opacity="0.8" stroke="white" strokeWidth="1" />
              <text x={0} y={1} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="7" fontWeight="700" fontFamily="var(--body, sans-serif)">AK</text>
            </g>
            <g transform="translate(140, 440)">
              <circle cx={0} cy={0} r={12} fill={getTier('HI').color} opacity="0.8" stroke="white" strokeWidth="1" />
              <text x={0} y={1} textAnchor="middle" dominantBaseline="central" fill="white" fontSize="7" fontWeight="700" fontFamily="var(--body, sans-serif)">HI</text>
            </g>
          </svg>

          {hover && (
            <div className={s.tooltip}>
              <strong>{hover}</strong> — {getTier(hover).label} coverage
            </div>
          )}

          <div className={s.legend}>
            {Object.values(tiers).map((t) => (
              <div key={t.label} className={s.legendItem}>
                <span className={s.legendDot} style={{ background: t.color }} />
                {t.label}
              </div>
            ))}
            <div className={s.legendItem}>
              <span className={s.legendDot} style={{ background: 'var(--purple, #6c3fa0)', borderRadius: '50%' }} />
              Headquarters
            </div>
          </div>
        </div>
        <div className={s.cta}>
          <p>Don't see your market? We source and deploy teams in any U.S. city.</p>
          <a href="#contact" className="btn btnPrimary">Get a Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
