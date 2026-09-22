import { useEffect, useRef, useState } from 'react'

/** Adds `is-in` once the element scrolls into view. */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, shown]
}

/** Counts up to `target` the first time it becomes visible. */
export function useCountUp(target, duration = 1600) {
  const [ref, shown] = useReveal()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!shown) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [shown, target, duration])

  return [ref, value]
}

/** Types out each phrase, pauses, deletes, moves on. */
export function useTypewriter(phrases, { type = 62, erase = 32, hold = 1900 } = {}) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(phrases[0])
      return
    }
    let i = 0
    let char = 0
    let deleting = false
    let timer

    const step = () => {
      const phrase = phrases[i]
      char += deleting ? -1 : 1
      setText(phrase.slice(0, char))

      let delay = deleting ? erase : type
      if (!deleting && char === phrase.length) {
        deleting = true
        delay = hold
      } else if (deleting && char === 0) {
        deleting = false
        i = (i + 1) % phrases.length
        delay = 380
      }
      timer = setTimeout(step, delay)
    }

    timer = setTimeout(step, 700)
    return () => clearTimeout(timer)
  }, [])

  return text
}

/** Tracks scroll progress (0–1) and whether the page has scrolled past `offset`. */
export function useScrollInfo(offset = 24) {
  const [progress, setProgress] = useState(0)
  const [past, setPast] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? window.scrollY / max : 0)
        setPast(window.scrollY > offset)
        ticking = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return { progress, past }
}

/** Highlights the nav entry whose section owns the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const onScroll = () => {
      const line = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return active
}
