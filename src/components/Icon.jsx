// Minimal stroke icon set (24px grid)
const P = {
  users: 'M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10 9v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.15a3.5 3.5 0 0 1 0 6.7',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H3',
  tag: 'M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8ZM7.5 7.5h.01',
  shield: 'M12 21s7-3.5 7-9.5V5l-7-2.5L5 5v6.5C5 17.5 12 21 12 21Zm-3-9.5 2 2 4-4',
  spark: 'M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8',
  cup: 'M6 8h12l-1.5 12h-9L6 8Zm1-4h10l1 4H6l1-4Z',
  badge: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5 4.5L7 22l5-2 5 2-1.5-2.5M12 6.5v5M9.5 9h5',
  clipboard: 'M9 4h6v3H9V4ZM7 5.5H5.5V21h13V5.5H17M8.5 12h7m-7 4h5',
  stage: 'M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
  book: 'M4 5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2V5Zm0 15a2 2 0 0 0 2 2h14',
  report: 'M14 3H6v18h12V7l-4-4Zm0 0v4h4M9 17v-3m3 3v-6m3 6v-2',
  pin: 'M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  close: 'M6 6l12 12M18 6 6 18',
  left: 'M15 6l-6 6 6 6',
  right: 'M9 6l6 6-6 6',
  quote: 'M7 17c-2 0-3-1.5-3-3.5C4 10 6.5 7 9.5 6l.5 1.2C8 8.2 7 9.6 7 11h2v6H7Zm9 0c-2 0-3-1.5-3-3.5 0-3.5 2.5-6.5 5.5-7.5l.5 1.2c-2 1-3 2.4-3 3.8h2v6h-2Z',
}
export default function Icon({ name, size = 22, stroke = 1.8, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name]} />
    </svg>
  )
}
