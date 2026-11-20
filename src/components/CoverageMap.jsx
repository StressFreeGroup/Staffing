import { useState, memo } from 'react'
import { ComposableMap, Geographies, Geography, Marker, Annotation } from 'react-simple-maps'
import s from './CoverageMap.module.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json'

const tiers = {
  best:    { label: 'Best',    color: '#6c3fa0' },
  better:  { label: 'Better',  color: '#8257b5' },
  good:    { label: 'Good',    color: '#a380cc' },
  limited: { label: 'Limited', color: '#c9b8e0' },
}

// FIPS code to tier mapping
const stateTiers = {
  // Best
  '36':'best','34':'best','09':'best','42':'best','06':'best','12':'best','48':'best','17':'best','13':'best','25':'best',
  // Better
  '39':'better','26':'better','37':'better','51':'better','24':'better','53':'better','41':'better','08':'better','04':'better',
  '47':'better','27':'better','55':'better','29':'better','18':'better','45':'better',
  // Limited
  '30':'limited','56':'limited','38':'limited','46':'limited','16':'limited','02':'limited',
  // Good = everything else
}

function getTier(fips) {
  return stateTiers[fips] || 'good'
}

// Major cities with staff (lat/lng for markers + 60mi radius circles)
const cities = [
  { name: 'New York', lat: 40.7128, lng: -74.006 },
  { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
  { name: 'San Diego', lat: 32.7157, lng: -117.1611, hq: true },
  { name: 'Chicago', lat: 41.8781, lng: -87.6298 },
  { name: 'Houston', lat: 29.7604, lng: -95.3698 },
  { name: 'Miami', lat: 25.7617, lng: -80.1918 },
  { name: 'Atlanta', lat: 33.749, lng: -84.388 },
  { name: 'Dallas', lat: 32.7767, lng: -96.797 },
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
  { name: 'Boston', lat: 42.3601, lng: -71.0589 },
  { name: 'Seattle', lat: 47.6062, lng: -122.3321 },
  { name: 'Denver', lat: 39.7392, lng: -104.9903 },
  { name: 'Phoenix', lat: 33.4484, lng: -112.074 },
  { name: 'Philadelphia', lat: 39.9526, lng: -75.1652 },
  { name: 'Las Vegas', lat: 36.1699, lng: -115.1398 },
  { name: 'Nashville', lat: 36.1627, lng: -86.7816 },
  { name: 'Charlotte', lat: 35.2271, lng: -80.8431 },
  { name: 'Minneapolis', lat: 44.9778, lng: -93.265 },
  { name: 'Portland', lat: 45.5155, lng: -122.6789 },
  { name: 'Austin', lat: 30.2672, lng: -97.7431 },
  { name: 'Tampa', lat: 27.9506, lng: -82.4572 },
  { name: 'Orlando', lat: 28.5383, lng: -81.3792 },
  { name: 'Columbus', lat: 39.9612, lng: -82.9988 },
  { name: 'Detroit', lat: 42.3314, lng: -83.0458 },
]

// 60 miles in degrees (approximate) - at US latitudes ~60mi = ~0.87 degrees
const RADIUS_60MI = 0.87

const MapChart = memo(function MapChart({ hover, setHover }) {
  return (
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{ scale: 1000 }}
      className={s.map}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const fips = geo.id
            const tier = getTier(fips)
            const color = tiers[tier].color
            const isHovered = hover === fips
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={color}
                stroke="rgba(255,255,255,0.5)"
                strokeWidth={0.5}
                onMouseEnter={() => setHover(fips)}
                onMouseLeave={() => setHover(null)}
                style={{
                  default: { fill: color, outline: 'none', opacity: 0.88 },
                  hover: { fill: color, outline: 'none', opacity: 1, strokeWidth: 1.5, stroke: '#1a1a2e' },
                  pressed: { fill: color, outline: 'none' },
                }}
              />
            )
          })
        }
      </Geographies>

      {/* 60-mile radius circles around major cities */}
      {cities.map((city) => (
        <Marker key={city.name} coordinates={[city.lng, city.lat]}>
          <circle
            r={city.hq ? 12 : 8}
            fill="none"
            stroke={city.hq ? '#6c3fa0' : 'rgba(108,63,160,0.4)'}
            strokeWidth={city.hq ? 2 : 1}
            strokeDasharray={city.hq ? '0' : '3 2'}
          />
          <circle
            r={city.hq ? 20 : 0}
            fill="none"
            stroke="rgba(108,63,160,0.2)"
            strokeWidth={1}
            strokeDasharray="4 3"
          />
          <circle
            r={3}
            fill={city.hq ? '#6c3fa0' : 'rgba(108,63,160,0.7)'}
            stroke="white"
            strokeWidth={city.hq ? 2 : 1}
          />
        </Marker>
      ))}

      {/* HQ label */}
      <Annotation
        subject={[-117.1611, 32.7157]}
        dx={-30}
        dy={-20}
        connectorProps={{ stroke: '#6c3fa0', strokeWidth: 1 }}
      >
        <text fill="#6c3fa0" fontSize={10} fontWeight="700" fontFamily="var(--body, sans-serif)" textAnchor="end">
          HQ: San Diego
        </text>
      </Annotation>
    </ComposableMap>
  )
})

// FIPS to state name for tooltip
const fipsNames = {
  '01':'Alabama','02':'Alaska','04':'Arizona','05':'Arkansas','06':'California','08':'Colorado','09':'Connecticut',
  '10':'Delaware','11':'District of Columbia','12':'Florida','13':'Georgia','15':'Hawaii','16':'Idaho','17':'Illinois',
  '18':'Indiana','19':'Iowa','20':'Kansas','21':'Kentucky','22':'Louisiana','23':'Maine','24':'Maryland','25':'Massachusetts',
  '26':'Michigan','27':'Minnesota','28':'Mississippi','29':'Missouri','30':'Montana','31':'Nebraska','32':'Nevada',
  '33':'New Hampshire','34':'New Jersey','35':'New Mexico','36':'New York','37':'North Carolina','38':'North Dakota',
  '39':'Ohio','40':'Oklahoma','41':'Oregon','42':'Pennsylvania','44':'Rhode Island','45':'South Carolina',
  '46':'South Dakota','47':'Tennessee','48':'Texas','49':'Utah','50':'Vermont','51':'Virginia','53':'Washington',
  '54':'West Virginia','55':'Wisconsin','56':'Wyoming',
}

export default function CoverageMap() {
  const [hover, setHover] = useState(null)
  const hoverName = hover ? fipsNames[hover] : null
  const hoverTier = hover ? tiers[getTier(hover)] : null

  return (
    <section className={`section ${s.section}`} id="coverage">
      <div className="container">
        <div className="sectionHead reveal">
          <span className="eyebrow">Coverage</span>
          <h2 className="h2">Nationwide staffing, <em>from coast to coast.</em></h2>
          <p className="lede">We activate in every major U.S. market. Our database of 20,000+ professionals spans all 50 states, with the deepest bench in the markets that matter most.</p>
        </div>
        <div className={`${s.mapWrap} reveal`}>
          <MapChart hover={hover} setHover={setHover} />

          {hoverName && (
            <div className={s.tooltip}>
              <strong>{hoverName}</strong> — {hoverTier.label} coverage
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
              <span className={s.legendDot} style={{ background: '#6c3fa0', borderRadius: '50%' }} />
              Staff Markets
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
