import { useEffect, useState } from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import Hero, { Marquee } from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Icon } from './components/Icons'

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main className="shell">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ToTop />
    </>
  )
}

function ToTop() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > window.innerHeight)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`to-top ${on ? 'is-on' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <Icon.arrowUp />
    </button>
  )
}
