# IDOES — Creative Agency Single-Page Website

## Original problem statement
Build a world-class single-page agency website for IDOES ("I Do Everything") — full-service creative agency offering Website Design & Development, Mobile App Design & Development, UI/UX Design, Logo Design, Logo Animation, Reel Shooting, Video Editing, and Branding & Creative Design. Premium, dark, electric-blue accents, oversized type, animated, with an interactive Website Roast tool powered by Claude.

## Stack
- Frontend: React (CRA + craco) + Tailwind + Framer Motion (lib available, custom CSS used)
- Backend: FastAPI + MongoDB (motor)
- LLM: Claude Sonnet 4.5 via Emergent Universal Key (emergentintegrations)

## Architecture
- Single-page React app, anchor navigation (#work, #services, #about, #contact)
- Backend exposes:
  - POST /api/roast  → Claude analyses URL, returns score + 8 categories
  - POST /api/leads  → simple lead capture
  - GET  /api/        → health
- Mongo collections: roasts, leads, status_checks

## Sections (top → bottom)
1. Navbar (fixed, transparent → black on scroll)
2. Hero (animated blue blob, huge headline, service ticker)
3. Roast Tool (URL input → Claude analysis → score ring + 8 category cards)
4. About / Who We Are
5. Services (full-bleed blue, hover-active list)
6. Work / Portfolio + Before/After draggable comparison
7. Why IDOES (4 feature cards)
8. Process (4-step timeline)
9. Social proof marquee
10. Contact (blue) + 3-step Estimator
11. Footer (with scroll-to-top)
12. Floating WhatsApp button + custom cursor (desktop)

## Implemented (2025-12-25)
- Full site, all 11 sections, mobile responsive
- Live Claude-powered roast tool (validated end-to-end)
- Before/After draggable slider with generated mockups
- 3-step instant estimator with INR ranges
- Custom cursor (desktop), floating WhatsApp CTA
- Boot intro animation with IDOES logo

## Backlog / Next
- P1: Replace placeholder portfolio with real client cards (assets handled in `projects` array in Work.jsx)
- P1: Wire Instagram/LinkedIn URLs once provided
- P1: Real WhatsApp number (currently placeholder +91 98765 43210 in `lib/constants.js`)
- P2: GSAP scroll-tied process line draw + Framer Motion staggered reveals
- P2: Persist & display past roasts ("Recent roasts" wall)
- P2: Email capture on roast results (gate "Full PDF Report")
- P2: Lighthouse 95+ pass, prefers-reduced-motion variants for all marquees
