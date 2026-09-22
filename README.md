# Pankaj Rawat — Portfolio

A single-page portfolio for **Pankaj Rawat, Senior iOS Developer**. React + Vite, no UI
framework — the whole visual system is hand-written CSS so there is nothing to keep in sync.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

Node 22 (via nvm) — `source ~/.nvm/nvm.sh` first if `node` isn't found.

## Deploy to Vercel

**Option A — Git (recommended).** Push this folder to GitHub, then in Vercel:
*Add New → Project → import the repo*. Vercel detects Vite automatically; nothing to
configure. Build command `npm run build`, output directory `dist`.

**Option B — CLI, no repo needed.**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

`vercel.json` already rewrites all routes to `index.html`, so deep links and refreshes work.

## Editing the content

Everything a recruiter reads lives in [`src/data.js`](src/data.js) — profile details, stats,
the experience timeline, projects and skill groups. No component changes needed to update
the CV; edit that one file.

Two things worth knowing:

- **Résumé download.** `profile.resumeUrl` is `null`, so the "Download CV" button is hidden.
  Drop a PDF into `public/` and set the field to its path (e.g. `'/Pankaj_Rawat_Resume.pdf'`)
  to switch the button on.
- **Hero typewriter.** The rotating phrases under the name are the `roles` array at the top
  of [`src/components/Hero.jsx`](src/components/Hero.jsx).

## Structure

```
src/
  data.js               all CV content
  styles.css            design tokens + every component style
  hooks.js              scroll reveal, count-up, typewriter, scrollspy
  App.jsx               section composition
  components/
    Background.jsx      canvas constellation field, aurora orbs, pointer spotlight
    Nav.jsx             sticky nav, scroll progress, active-section highlight
    Hero.jsx            hero + iPhone mock + tech marquee
    About.jsx           summary, fact panel, animated stat counters
    Experience.jsx      timeline with expandable roles
    Projects.jsx        project cards with cursor-tracking border glow
    Skills.jsx          skill groups
    Contact.jsx         CTA, copy-to-clipboard email, footer
    Reveal.jsx          scroll-in wrapper
    Icons.jsx           inline SVG icon set
```

## Notes

- Fully responsive; verified at 1440px, 820px and 390px with no horizontal overflow.
- Honours `prefers-reduced-motion` — animations, the typewriter and the count-ups all
  fall back to static content.
- Fonts are Space Grotesk + JetBrains Mono from Google Fonts; everything else is inline,
  so there are no runtime dependencies beyond React.
