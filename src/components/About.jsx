import { profile, stats } from '../data'
import { useCountUp } from '../hooks'
import Reveal from './Reveal'

const domains = ['Fintech', 'Healthcare', 'E-commerce', 'Insurance', 'Education', 'On-demand Services']

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">01 — About</p>
          <h2 className="section-title">
            Native iOS, built to <span className="gradient-text">last</span>
          </h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__body" delay={80}>
            <p>{profile.summary}</p>
            <p>
              My day-to-day is the unglamorous part that keeps apps alive: modular architecture
              that survives a year of feature requests, networking layers that fail safely,
              crash rates driven down with real instrumentation, and releases that clear
              App Store review the first time.
            </p>
            <p>
              I work close to product — defining API contracts with backend teams, pushing back
              on designs that fight the Human Interface Guidelines, and shipping in Agile cycles
              alongside QA and UI/UX.
            </p>
            <div className="domains">
              {domains.map((d) => (
                <span className="chip" key={d}>{d}</span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="panel">
              <div className="facts">
                <div className="fact">
                  <span className="fact__k">Role</span>
                  <span className="fact__v">{profile.role}</span>
                </div>
                <div className="fact">
                  <span className="fact__k">Experience</span>
                  <span className="fact__v">8+ years</span>
                </div>
                <div className="fact">
                  <span className="fact__k">Based in</span>
                  <span className="fact__v">{profile.location}</span>
                </div>
                <div className="fact">
                  <span className="fact__k">Core stack</span>
                  <span className="fact__v">Swift · UIKit · MVVM</span>
                </div>
                <div className="fact">
                  <span className="fact__k">Architectures</span>
                  <span className="fact__v">MVVM · VIPER · MVP · MVC</span>
                </div>
                <div className="fact">
                  <span className="fact__k">Availability</span>
                  <span className="fact__v">Open to opportunities</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ value, suffix, label, delay }) {
  const [ref, count] = useCountUp(value)
  return (
    <div className="stat" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="stat__value gradient-text">
        {count}{suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  )
}
