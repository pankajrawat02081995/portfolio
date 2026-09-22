import { useEffect, useState } from 'react'
import { sections, profile } from '../data'
import { useScrollInfo, useActiveSection } from '../hooks'

const ids = sections.map((s) => s.id)

export default function Nav() {
  const { progress, past } = useScrollInfo(32)
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <>
      <div className="progress" style={{ width: `${progress * 100}%` }} aria-hidden="true" />

      <header className={`nav ${past ? 'is-stuck' : ''}`}>
        <div className="container nav__inner">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand__mark">PR</span>
            <span className="brand__text">
              {profile.name}
              <span>{profile.role}</span>
            </span>
          </a>

          <nav className={`nav__links ${open ? 'is-open' : ''}`}>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`nav__link ${active === s.id ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
            <a className="nav__cta" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
              Hire me
            </a>
          </nav>

          <button
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
    </>
  )
}
