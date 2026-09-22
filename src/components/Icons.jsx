const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export const Icon = {
  mail: (p) => (
    <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m3 7 9 6 9-6" /></svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}><path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  arrowDown: (p) => (
    <svg {...base} {...p}><path d="M12 5v14" /><path d="m5 12 7 7 7-7" /></svg>
  ),
  arrowUp: (p) => (
    <svg {...base} {...p}><path d="M12 19V5" /><path d="m5 12 7-7 7 7" /></svg>
  ),
  arrowRight: (p) => (
    <svg {...base} {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
  ),
  chevron: (p) => (
    <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
  ),
  copy: (p) => (
    <svg {...base} {...p}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h8" /></svg>
  ),
  code: (p) => (
    <svg {...base} {...p}><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></svg>
  ),
  layers: (p) => (
    <svg {...base} {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 14 9 5 9-5" /></svg>
  ),
  grid: (p) => (
    <svg {...base} {...p}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>
  ),
  signal: (p) => (
    <svg {...base} {...p}><path d="M5 12.5a9.5 9.5 0 0 1 14 0" /><path d="M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19" r="1" /></svg>
  ),
  flame: (p) => (
    <svg {...base} {...p}><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3 1-6 1-7.5Z" /></svg>
  ),
  card: (p) => (
    <svg {...base} {...p}><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 10h20" /></svg>
  ),
  database: (p) => (
    <svg {...base} {...p}><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>
  ),
  tool: (p) => (
    <svg {...base} {...p}><path d="M14.5 3.5a5 5 0 0 0 6 6L21 10l-7.5 7.5-3-3L18 7" /><path d="m7 21-4-4 5-5 4 4-5 5Z" /></svg>
  ),
  spark: (p) => (
    <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
  ),
}
