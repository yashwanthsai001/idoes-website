import React from "react";
import { TICKER_ITEMS } from "../lib/constants";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#FAFAFA]"
      data-testid="hero-section"
    >
      {/* faint editorial guides */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#0A0A0A]/[0.04]" />
      </div>

      {/* Oversized ghost watermark behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="ghost-text-dark"
          style={{
            fontSize: "clamp(220px, 42vw, 580px)",
            letterSpacing: "-0.04em",
            opacity: 0.04,
          }}
        >
          IDOES
        </span>
      </div>

      {/* Soft corner accent */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#2457FF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 pt-40 lg:pt-52 pb-44 text-center">
        {/* Eyebrow */}
        <div className="hero-reveal" style={{ "--d": "0ms" }}>
          <span className="inline-flex items-center gap-3 section-label-dark">
            <span className="w-6 h-px bg-[#2457FF]" />
            [ I DO EVERYTHING ]
            <span className="w-6 h-px bg-[#2457FF]" />
          </span>
        </div>

        {/* Headline */}
        <h1
          data-testid="hero-headline"
          className="font-display text-[#0A0A0A] mt-8 mx-auto"
          style={{ fontSize: "clamp(40px, 6.4vw, 108px)", lineHeight: 0.96, letterSpacing: "-0.015em" }}
        >
          <span className="hero-reveal block whitespace-nowrap" style={{ "--d": "120ms" }}>
            WE CREATE <span className="text-[#2457FF] italic-display">STRIKING</span>
          </span>
          <span className="hero-reveal block whitespace-nowrap" style={{ "--d": "240ms" }}>
            CONCEPTS AND BRANDING
          </span>
          <span className="hero-reveal block whitespace-nowrap" style={{ "--d": "360ms" }}>
            THAT HELP YOUR BUSINESS
          </span>
          <span className="hero-reveal block whitespace-nowrap" style={{ "--d": "480ms" }}>
            <span className="text-[#2457FF] italic-display">GROW FASTER.</span>
          </span>
        </h1>

        {/* Sub-text */}
        <p
          data-testid="hero-sub"
          className="hero-reveal font-body text-[#555] text-base lg:text-lg mt-10 max-w-xl mx-auto leading-relaxed"
          style={{ "--d": "700ms" }}
        >
          A full-service creative studio crafting websites, identities, and motion for ambitious brands.
        </p>

        {/* CTAs */}
        <div className="hero-reveal flex flex-col sm:flex-row gap-3 justify-center mt-12" style={{ "--d": "820ms" }}>
          <a href="#contact" data-testid="hero-cta-primary" className="btn-primary cta-text justify-center">
            <ArrowRight size={16} strokeWidth={2.5} /> START A PROJECT
          </a>
          <a href="#work" data-testid="hero-cta-secondary" className="btn-outline-dark cta-text justify-center">
            <ArrowDown size={16} strokeWidth={2.5} /> SEE OUR WORK
          </a>
        </div>

        {/* Tiny meta strip */}
        <div className="hero-reveal mt-20 flex items-center justify-center gap-8 text-[#0A0A0A]/60 cta-text" style={{ "--d": "940ms", fontSize: 11 }}>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2457FF]" /> AVAILABLE FOR PROJECTS
          </span>
          <span className="hidden sm:inline w-12 h-px bg-[#0A0A0A]/15" />
          <span className="hidden sm:inline">BASED IN HYDERABAD</span>
        </div>
      </div>

      {/* Refined service ticker on light bg */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#0A0A0A]/10 py-5 bg-white overflow-hidden">
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((it, i) => (
            <span
              key={i}
              className="flex items-center gap-8 px-8 font-display-bold text-[#0A0A0A] text-xl lg:text-2xl whitespace-nowrap"
            >
              {it} <span className="text-[#2457FF]">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero-reveal {
          opacity: 0;
          transform: translateY(18px);
          animation: heroReveal 1s cubic-bezier(.2,.7,.2,1) forwards;
          animation-delay: var(--d, 0ms);
        }
        @keyframes heroReveal {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
