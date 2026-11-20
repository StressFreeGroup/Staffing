import { useState } from 'react'
import s from './CoverageMap.module.css'

const tiers = {
  best:    { label: 'Best',    color: '#6c3fa0' },
  better:  { label: 'Better',  color: '#8257b5' },
  good:    { label: 'Good',    color: '#a380cc' },
  limited: { label: 'Limited', color: '#c9b8e0' },
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

// Grid-based state positions (column, row) for a hex/grid US map
// This avoids overlapping circles by using a tile grid
const grid = {
  AK:[0,0], HI:[0,7],
  WA:[1,1], OR:[1,2], CA:[1,4], NV:[2,3], ID:[2,1], MT:[3,0], WY:[3,1], UT:[2,2],
  CO:[3,2], AZ:[2,4], NM:[3,4], ND:[4,0], SD:[4,1], NE:[4,2], KS:[4,3], OK:[4,4], TX:[4,5],
  MN:[5,0], IA:[5,1], MO:[5,2], AR:[5,3], LA:[5,4], WI:[6,0], IL:[6,1], MS:[6,3],
  MI:[7,0], IN:[6,2], KY:[7,2], TN:[7,3], AL:[7,4], OH:[8,1], WV:[8,2], VA:[8,3],
  NC:[9,3], SC:[8,4], GA:[8,5], FL:[9,5], PA:[9,1], NY:[10,0], NJ:[10,1], MD:[9,2], DC:[9,2.5],
  DE:[10,2], CT:[11,0], RI:[11,1], MA:[11,0.5], VT:[10.5,-0.5], NH:[11,-0.5], ME:[12,-0.5],
}

const CELL = 48
const PAD_X = 60
const PAD_Y = 40
const R = 20

export default function CoverageMap() {
  const [hover, setHover] = useState(null)

  const getPos = (ab) => {
    const [col, row] = grid[ab] || [0,0]
    return { x: PAD_X + col * CELL, y: PAD_Y + row * CELL }
  }

  // HQ position (San Diego = California area, slightly south)
  const hq = { x: PAD_X + 1 * CELL, y: PAD_Y + 5.2 * CELL }

  return (
    <section className={`section ${s.section}`} id="coverage">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Coverage</span>
          <h2 className="h2">Nationwide staffing, <em>from coast to coast.</em></h2>
          <p className="lede">We activate in every major U.S. market. Our database of 20,000+ professionals spans all 50 states, with the deepest bench in the markets that matter most.</p>
        </div>
        <div className={`${s.mapWrap} reveal`}>
          <svg viewBox="0 -20 680 400" className={s.map} role="img" aria-label="U.S. coverage map showing staffing presence in all 50 states">
            {/* HQ radius rings */}
            <circle cx={hq.x} cy={hq.y} r={160} fill="none" stroke="var(--purple, #6c3fa0)" strokeWidth="1" strokeDasharray="6 4" opacity="0.12" />
            <circle cx={hq.x} cy={hq.y} r={100} fill="none" stroke="var(--purple, #6c3fa0)" strokeWidth="1" strokeDasharray="6 4" opacity="0.18" />
            <circle cx={hq.x} cy={hq.y} r={45} fill="none" stroke="var(--purple, #6c3fa0)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" />

            {/* State tiles */}
            {Object.keys(grid).map((ab) => {
              const pos = getPos(ab)
              const tier = getTier(ab)
              const isHovered = hover === ab
              return (
                <g key={ab}
                  onMouseEnter={() => setHover(ab)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: 'default' }}
                >
                  <rect
                    x={pos.x - R} y={pos.y - R}
                    width={R * 2} height={R * 2}
                    rx={6}
                    fill={tier.color}
                    opacity={isHovered ? 1 : 0.88}
                    stroke={isHovered ? 'var(--ink, #1a1a2e)' : 'rgba(255,255,255,0.6)'}
                    strokeWidth={isHovered ? 2 : 0.5}
                    style={{ transition: 'all 0.15s' }}
                  />
                  <text
                    x={pos.x} y={pos.y + 1}
                    textAnchor="middle" dominantBaseline="central"
                    fill="white" fontSize="11" fontWeight="700"
                    fontFamily="var(--body, 'Outfit', sans-serif)"
                    style={{ pointerEvents: 'none' }}
                  >{ab}</text>
                </g>
              )
            })}

            {/* HQ pin */}
            <circle cx={hq.x} cy={hq.y} r={5} fill="var(--purple, #6c3fa0)" stroke="white" strokeWidth="2" />
            <text x={hq.x + 12} y={hq.y + 4} fill="var(--purple, #6c3fa0)" fontSize="9" fontWeight="700" fontFamily="var(--body, sans-serif)">HQ</text>
          </svg>

          {hover && (
            <div className={s.tooltip}>
              <strong>{hover}</strong> — {getTier(hover).label} coverage
            </div>
          )}

          <div className={s.legend}>
            {Object.entries(tiers).map(([, t]) => (
              <div key={t.label} className={s.legendItem}>
                <span className={s.legendDot} style={{ background: t.color }} />
                {t.label}
              </div>
            ))}
            <div className={s.legendItem}>
              <span className={s.legendDot} style={{ background: 'var(--purple, #6c3fa0)' }} />
              HQ: San Diego
            </div>
          </div>
        </div>
        <div className={`${s.cta} reveal`}>
          <p>Don't see your market? We source and deploy teams in any U.S. city.</p>
          <a href="#contact" className="btn btnPrimary">Get a Custom Quote</a>
        </div>
      </div>
    </section>
  )
}
