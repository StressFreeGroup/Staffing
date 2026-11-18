import { useState } from 'react'
import s from './CoverageMap.module.css'

// Coverage tiers based on ABM capability deck
const tiers = {
  best: { label: 'Best', color: '#1e6b4f', states: ['NY','NJ','CT','PA','CA','FL','TX','IL','GA','MA'] },
  better: { label: 'Better', color: '#2d8a4e', states: ['OH','MI','NC','VA','MD','WA','OR','CO','AZ','TN','MN','WI','MO','IN','SC'] },
  good: { label: 'Good', color: '#5bb07a', states: ['LA','AL','KY','OK','NV','UT','NM','KS','AR','MS','IA','NE','WV','HI','DC','DE','RI','NH','VT','ME'] },
  limited: { label: 'Limited', color: '#a3d4b5', states: ['MT','WY','ND','SD','ID','AK'] },
}

// Simple US state paths (abbreviated for key states, full SVG inline)
const stateData = {
  AL:{x:628,y:380,w:40,h:50},AK:{x:120,y:460,w:70,h:50},AZ:{x:195,y:340,w:55,h:60},AR:{x:530,y:350,w:45,h:45},
  CA:{x:95,y:240,w:50,h:100},CO:{x:290,y:270,w:55,h:45},CT:{x:770,y:185,w:18,h:18},DE:{x:745,y:245,w:12,h:18},
  FL:{x:665,y:430,w:65,h:60},GA:{x:660,y:360,w:45,h:55},HI:{x:230,y:470,w:50,h:30},ID:{x:195,y:140,w:45,h:70},
  IL:{x:560,y:230,w:35,h:65},IN:{x:600,y:235,w:30,h:55},IA:{x:500,y:210,w:50,h:40},KS:{x:410,y:290,w:60,h:40},
  KY:{x:620,y:290,w:55,h:30},LA:{x:530,y:410,w:45,h:45},ME:{x:790,y:100,w:35,h:50},MD:{x:730,y:245,w:30,h:20},
  MA:{x:775,y:170,w:25,h:15},MI:{x:580,y:155,w:50,h:65},MN:{x:470,y:120,w:50,h:60},MS:{x:570,y:370,w:35,h:55},
  MO:{x:510,y:280,w:55,h:50},MT:{x:250,y:95,w:70,h:50},NE:{x:390,y:230,w:65,h:35},NV:{x:155,y:220,w:45,h:70},
  NH:{x:780,y:135,w:15,h:35},NJ:{x:755,y:220,w:15,h:30},NM:{x:265,y:345,w:55,h:60},NY:{x:720,y:150,w:55,h:50},
  NC:{x:690,y:310,w:60,h:30},ND:{x:390,y:110,w:55,h:40},OH:{x:630,y:225,w:40,h:45},OK:{x:420,y:335,w:60,h:40},
  OR:{x:120,y:130,w:65,h:50},PA:{x:700,y:205,w:50,h:35},RI:{x:785,y:185,w:10,h:12},SC:{x:690,y:345,w:40,h:30},
  SD:{x:390,y:160,w:55,h:40},TN:{x:600,y:320,w:65,h:25},TX:{x:370,y:370,w:90,h:90},UT:{x:225,y:240,w:45,h:60},
  VT:{x:770,y:125,w:15,h:30},VA:{x:700,y:270,w:55,h:35},WA:{x:140,y:75,w:60,h:50},WV:{x:675,y:260,w:30,h:35},
  WI:{x:520,y:140,w:45,h:55},WY:{x:280,y:170,w:55,h:45},DC:{x:740,y:255,w:8,h:8},
}

function getTier(abbr) {
  for (const [key, t] of Object.entries(tiers)) {
    if (t.states.includes(abbr)) return { key, ...t }
  }
  return { key: 'limited', ...tiers.limited }
}

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
          <svg viewBox="60 60 780 440" className={s.map}>
            {Object.entries(stateData).map(([abbr, pos]) => {
              const tier = getTier(abbr)
              const isHovered = hover === abbr
              return (
                <g key={abbr}
                  onMouseEnter={() => setHover(abbr)}
                  onMouseLeave={() => setHover(null)}
                >
                  <rect
                    x={pos.x} y={pos.y}
                    width={pos.w} height={pos.h}
                    rx={4}
                    fill={tier.color}
                    opacity={isHovered ? 1 : 0.85}
                    stroke={isHovered ? '#1a1a2e' : 'white'}
                    strokeWidth={isHovered ? 2 : 1}
                    style={{ transition: 'all 0.15s', cursor: 'default' }}
                  />
                  <text
                    x={pos.x + pos.w / 2}
                    y={pos.y + pos.h / 2 + 1}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="white"
                    fontSize={pos.w < 20 ? 7 : 10}
                    fontWeight="700"
                    fontFamily="var(--body, sans-serif)"
                    style={{ pointerEvents: 'none' }}
                  >
                    {abbr}
                  </text>
                </g>
              )
            })}
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
