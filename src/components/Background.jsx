import { useEffect, useRef } from 'react'

/** Constellation particle field + aurora orbs + perspective grid. */
export default function Background() {
  const canvasRef = useRef(null)
  const spotRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let w = 0
    let h = 0
    let particles = []
    const pointer = { x: -999, y: -999 }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(Math.round((w * h) / 16000), 110)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.5,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(160, 200, 255, 0.55)'
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 132) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - d / 132) * 0.16})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }

        const p = particles[i]
        const dp = Math.hypot(p.x - pointer.x, p.y - pointer.y)
        if (dp < 180) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(pointer.x, pointer.y)
          ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dp / 180) * 0.3})`
          ctx.lineWidth = 0.7
          ctx.stroke()
        }
      }

      raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      const spot = spotRef.current
      if (spot) {
        spot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
        if (e.pointerType !== 'touch') spot.classList.add('is-on')
      }
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    if (!reduce) draw()
    else {
      // single static frame
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(160, 200, 255, 0.4)'
        ctx.fill()
      }
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <>
      <div className="bg-field" aria-hidden="true">
        <div className="orb orb--1" />
        <div className="orb orb--2" />
        <div className="orb orb--3" />
        <div className="bg-grid" />
        <canvas ref={canvasRef} className="bg-canvas" />
        <div className="bg-noise" />
        <div className="bg-vignette" />
      </div>
      <div ref={spotRef} className="spotlight" aria-hidden="true" />
    </>
  )
}
