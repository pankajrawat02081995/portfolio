import { useState } from 'react'
import { experience } from '../data'
import Reveal from './Reveal'
import { Icon } from './Icons'

const PREVIEW = 3

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="eyebrow">02 — Experience</p>
          <h2 className="section-title">
            Eight years, <span className="gradient-text">six teams</span>
          </h2>
          <p className="section-lead">
            From implementing screens at an app studio to owning architecture, payments and
            release pipelines as a senior engineer.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 60}>
              <Job job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Job({ job }) {
  const [open, setOpen] = useState(false)
  const hidden = job.points.length - PREVIEW
  const visible = open ? job.points : job.points.slice(0, PREVIEW)

  return (
    <article className={`job ${job.current ? 'is-current' : ''}`}>
      <span className="job__node"><i /></span>

      <div className="job__card">
        <div className="job__head">
          <h3 className="job__company">{job.company}</h3>
          <span className="job__period">{job.period}</span>
        </div>

        <div className="job__sub">
          {job.role}
          <em>/ {job.domain}</em>
          {job.current && <span className="badge-now">Current</span>}
        </div>

        <ul className="job__points">
          {visible.map((p) => <li key={p}>{p}</li>)}
        </ul>

        {hidden > 0 && (
          <button className={`job__more ${open ? 'is-open' : ''}`} onClick={() => setOpen((v) => !v)}>
            {open ? 'Show less' : `${hidden} more`}
            <Icon.chevron />
          </button>
        )}

        <div className="job__tags">
          {job.tags.map((t) => <span className="chip" key={t}>{t}</span>)}
        </div>
      </div>
    </article>
  )
}
