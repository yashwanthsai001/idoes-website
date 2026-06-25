import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import BeforeAfter from "./BeforeAfter";

/* ──────────────────────────────────────────────────────────────────────────
 * PORTFOLIO PROJECTS
 * Easy to edit: just modify the array below.
 * Each project: { image, title, category, description }
 * To add: append a new object. To remove: delete one. To reorder: drag.
 * To swap an image: replace the `image` URL.
 * ────────────────────────────────────────────────────────────────────────── */
export const PROJECTS = [
  {
    image: "https://customer-assets.emergentagent.com/job_idoes-preview/artifacts/16f9vsik_Cover-1.png",
    title: "SHOP.CO",
    category: "E-Commerce Website",
    description: "A premium fashion e-commerce platform with homepage, product detail, category, and cart flows. Built mobile-first.",
    objectPosition: "center",
  },
  {
    image: "https://customer-assets.emergentagent.com/job_idoes-preview/artifacts/cjz0e82a_Thumbnail%201.png",
    title: "PAYPILOT",
    category: "Mobile App UI/UX",
    description: "Digital banking experience for a fintech challenger. Onboarding, dashboard, transactions, and 24/7 support.",
    objectPosition: "center",
  },
  {
    image: "https://customer-assets.emergentagent.com/job_idoes-preview/artifacts/pvthrgsn_Cover.png",
    title: "FITZ UI",
    category: "App UI System",
    description: "A modular dark-mode component system for fintech and lifestyle apps: finance widgets, call screens, payment cards.",
    objectPosition: "center",
  },
  {
    image: "https://customer-assets.emergentagent.com/job_idoes-preview/artifacts/q9um9wps_Thumbnail.jpg",
    title: "WEB DESIGNS",
    category: "UI/UX Design Portfolio",
    description: "A multi-product portfolio showcasing SaaS landing pages, app interfaces, and a robust reusable component library.",
    objectPosition: "center",
  },
  {
    image: "https://customer-assets.emergentagent.com/job_idoes-preview/artifacts/8a938bvf_file%20cover%20-%201%201.png",
    title: "CREATIVE DESIGN",
    category: "Agency Landing Page",
    description: "A bold creative-agency landing built around large editorial typography, immersive artwork, and lead-gen flow.",
    objectPosition: "center",
  },
];

/* ──────────────────────────────────────────────────────────────────────────
 * Reusable Project Card — 16:9, image-first, premium hover.
 * ────────────────────────────────────────────────────────────────────────── */
export function ProjectCard({ project, index }) {
  const { image, title, category, description, objectPosition = "center" } = project;
  return (
    <article
      data-testid={`project-${title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
      className="group relative w-full overflow-hidden bg-[#F2F2F2] border border-[#E5E5E5]"
    >
      {/* 16:9 image area */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
        <img
          src={image}
          alt={`${title} · ${category}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.04]"
          style={{ objectPosition }}
        />

        {/* index tag */}
        <span
          className="absolute top-5 left-5 cta-text text-white/85 z-10 backdrop-blur-sm bg-black/30 px-2 py-1"
          style={{ fontSize: 10 }}
        >
          / {String(index).padStart(2, "0")}
        </span>

        {/* category chip top-right */}
        <span
          className="absolute top-5 right-5 cta-text text-white/90 z-10 backdrop-blur-sm bg-black/30 border border-white/15 px-3 py-1"
          style={{ fontSize: 10 }}
        >
          [ {category.toUpperCase()} ]
        </span>

        {/* Hover gradient + content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 z-10 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          <p
            className="cta-text text-[#2457FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ fontSize: 11 }}
          >
            [ {category.toUpperCase()} ]
          </p>
          <h3 className="font-display text-white text-3xl lg:text-5xl mt-2 leading-[0.95] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
            {title}
          </h3>
          <p className="text-white/80 text-sm lg:text-base mt-3 max-w-xl leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 cta-text text-white border-b border-white/60 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
            VIEW PROJECT <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        </div>
      </div>

      {/* Default (non-hover) caption strip below image, for clarity on touch devices */}
      <div className="flex items-center justify-between gap-4 px-5 lg:px-6 py-4 border-t border-[#E5E5E5] bg-white group-hover:bg-[#0A0A0A] transition-colors duration-500">
        <div className="min-w-0">
          <p className="cta-text text-[#2457FF] group-hover:text-[#2457FF] transition-colors" style={{ fontSize: 10 }}>
            [ {category.toUpperCase()} ]
          </p>
          <h4 className="font-display-bold text-[#0A0A0A] group-hover:text-white text-xl lg:text-2xl mt-1 truncate transition-colors">
            {title}
          </h4>
        </div>
        <span className="shrink-0 w-10 h-10 rounded-full bg-[#0A0A0A] group-hover:bg-[#2457FF] text-white flex items-center justify-center transition-all duration-500 group-hover:rotate-45">
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </span>
      </div>
    </article>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Reusable Portfolio Grid — drop in anywhere.
 * ────────────────────────────────────────────────────────────────────────── */
export function PortfolioGrid({ projects = PROJECTS }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((p, i) => (
        <ProjectCard key={`${p.title}-${i}`} project={p} index={i + 1} />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
 * Section
 * ────────────────────────────────────────────────────────────────────────── */
export default function Work() {
  return (
    <section id="work" className="relative section-light py-28 lg:py-40 overflow-hidden">
      <div className="stripe-divider absolute top-0 left-0 right-0" />
      <div
        className="absolute -top-10 right-6 ghost-text-dark"
        style={{ fontSize: "clamp(160px, 22vw, 340px)" }}
      >
        WORK
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="section-label-dark" data-testid="work-label">[ OUR WORK ]</p>
            <h2
              data-testid="work-headline"
              className="font-display text-[#0A0A0A] mt-6"
              style={{ fontSize: "clamp(44px, 7vw, 104px)" }}
            >
              RESULTS THAT<br />SPEAK LOUDER<br />
              <span className="text-[#2457FF] italic-display">THAN DECKS.</span>
            </h2>
          </div>
          <p className="text-[#555] text-base lg:text-lg leading-relaxed max-w-sm">
            A selection of recent work, from rebrands and websites to apps and motion. Each piece built end-to-end, in-house.
          </p>
        </div>

        <div className="mt-16">
          <PortfolioGrid />
        </div>

        <div className="mt-24">
          <BeforeAfter />
        </div>

        <a
          href="#contact"
          data-testid="work-cta"
          className="cta-text mt-16 inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] px-6 py-4 hover:bg-[#0A0A0A] hover:text-white transition-all"
        >
          <ArrowRight size={16} strokeWidth={2.5} /> SEE ALL PROJECTS
        </a>
      </div>
    </section>
  );
}
