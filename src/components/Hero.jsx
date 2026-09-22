import { profile, marquee } from '../data'
import { useTypewriter } from '../hooks'
import { Icon } from './Icons'

const roles = [
  'Senior iOS Developer',
  'Swift · UIKit · MVVM · VIPER',
  '8+ years of native iOS',
  'Apple Pay · Stripe · GraphQL',
]

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div>
          <span className="status">
            <i className="status__dot" />
            Open to senior iOS roles
          </span>

          <h1 className="hero__name">
            <span>Pankaj</span>
            <span className="gradient-text">Rawat</span>
          </h1>

          <p className="hero__role">
            {typed}
            <i className="caret">|</i>
          </p>

          <p className="hero__copy">
            I build native iOS products that hold up in production — clean architecture,
            secure networking layers and payments that people trust. Eight years across
            fintech, healthcare, e-commerce, insurance and on-demand platforms.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              View my work
              <Icon.arrowRight />
            </a>
            <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
              <Icon.mail />
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a className="btn btn--ghost" href={profile.resumeUrl} download>
                <Icon.arrowDown />
                Download CV
              </a>
            )}
          </div>

          <div className="hero__meta">
            <span><Icon.pin /> {profile.location}</span>
            <span><Icon.phone /> {profile.phone}</span>
            <span><Icon.mail /> {profile.email}</span>
          </div>
        </div>

        <div className="device-wrap">
          <PhoneMock />
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to about">
        Scroll
        <i />
      </a>
    </section>
  )
}

function PhoneMock() {
  return (
    <div className="device" aria-hidden="true">
      <div className="device__notch" />
      <div className="device__screen">
        <div className="dev-status">
          <span>9:41</span>
          <span>5G &nbsp;100%</span>
        </div>

        <div className="dev-title">Build Overview</div>
        <div className="dev-sub">TARGET · iOS 17 · SWIFT 5.9</div>

        <div className="dev-card">
          <div className="dev-card__top">
            <span className="dev-card__label">Crash-free sessions</span>
            <span className="dev-card__val">99.6%</span>
          </div>
          <div className="dev-bar"><i style={{ width: '96%' }} /></div>
        </div>

        <div className="dev-card">
          <div className="dev-card__top">
            <span className="dev-card__label">Cold launch</span>
            <span className="dev-card__val">0.8s</span>
          </div>
          <div className="dev-bar"><i style={{ width: '82%', animationDelay: '0.2s' }} /></div>
        </div>

        <div className="dev-card">
          <div className="dev-card__top">
            <span className="dev-card__label">App Store review</span>
            <span className="dev-card__val">Passed</span>
          </div>
          <div className="dev-bar"><i style={{ width: '100%', animationDelay: '0.4s' }} /></div>
        </div>

        <pre className="dev-code">
{`final `}<span className="kw">class</span>{` PaymentVM {
  `}<span className="kw">func</span>{` `}<span className="fn">checkout</span>{`() `}<span className="kw">async throws</span>{` {
    `}<span className="kw">let</span>{` r = `}<span className="kw">try await</span>{` api.
      `}<span className="fn">pay</span>{`(.`}<span className="st">applePay</span>{`)
    state = .`}<span className="st">success</span>{`(r)
  }
}`}
        </pre>
      </div>
    </div>
  )
}

export function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span className="marquee__item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
