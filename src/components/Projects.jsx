import { projects } from '../data'
import Reveal from './Reveal'

const accents = {
  cyan: '#22d3ee',
  violet: '#8b5cf6',
  pink: '#f472b6',
  lime: '#a3e635',
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="eyebrow">03 — Selected work</p>
          <h2 className="section-title">
            Products shipped to the <span className="gradient-text">App Store</span>
          </h2>
          <p className="section-lead">
            Four platforms that went from spec to store listing — commerce, payments,
            subscriptions and real-time features, all native Swift.
          </p>
        </Reveal>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <Card project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ project }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <article
      className="project"
      onPointerMove={onMove}
      style={{ '--accent': accents[project.accent] }}
    >
      <div className="project__glow" />
      <span className="project__index">PROJECT {project.index}</span>
      <h3 className="project__name">{project.name}</h3>
      <p className="project__tagline">{project.tagline}</p>

      <ul className="project__points">
        {project.points.map((p) => <li key={p}>{p}</li>)}
      </ul>

      <div className="project__tags">
        {project.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
      </div>
    </article>
  )
}
