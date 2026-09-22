import { useState } from 'react'
import { profile } from '../data'
import Reveal from './Reveal'
import { Icon } from './Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section className="section section--tight" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact">
            <p className="eyebrow" style={{ justifyContent: 'center' }}>05 — Contact</p>
            <h2 className="contact__title">
              Let's build something <span className="gradient-text">worth shipping</span>
            </h2>
            <p className="contact__lead">
              Available for senior iOS roles and product engagements. Send over the brief —
              I usually reply within a day.
            </p>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <Icon.mail />
                {profile.email}
              </a>
              <a className="btn btn--ghost" href={`tel:${profile.phoneHref}`}>
                <Icon.phone />
                {profile.phone}
              </a>
              <button className="btn btn--ghost" onClick={copyEmail}>
                <Icon.copy />
                Copy email
              </button>
            </div>

            <span className={`copy-hint ${copied ? 'is-on' : ''}`}>
              Email copied to clipboard
            </span>
          </div>

          <footer className="footer">
            <span>© {new Date().getFullYear()} {profile.name} · {profile.role}</span>
          </footer>
        </Reveal>
      </div>
    </section>
  )
}
