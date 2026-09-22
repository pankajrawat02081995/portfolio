import { skills } from '../data'
import Reveal from './Reveal'
import { Icon } from './Icons'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">04 — Toolkit</p>
          <h2 className="section-title">
            The <span className="gradient-text">stack</span> I reach for
          </h2>
          <p className="section-lead">
            Everything below is production experience — shipped, maintained and debugged at 2am.
          </p>
        </Reveal>

        <div className="skills">
          {skills.map((group, i) => {
            const Glyph = Icon[group.icon] || Icon.spark
            return (
              <Reveal key={group.title} delay={i * 60}>
                <div className="skill">
                  <div className="skill__icon"><Glyph /></div>
                  <h3 className="skill__title">{group.title}</h3>
                  <div className="skill__items">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
