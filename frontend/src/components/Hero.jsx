import React from "react";
import { LOGO_URL, TICKER_ITEMS } from "../lib/constants";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-screen overflow-hidden bg-[#0A0A0A] grain">
      {/* Blue blob backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob" />
        <div className="blob sm" />
      </div>

      {/* Ghost text watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="ghost-text"
          style={{ fontSize: "clamp(180px, 36vw, 480px)", letterSpacing: "-0.04em" }}
        >
          IDOES
        </span>
      </div>

      {/* Faint logo watermark, bottom right */}
      <img
        src={LOGO_URL}
        alt=""
        className="absolute bottom-10 right-10 w-40 opacity-[0.04] invert pointer-events-none hidden md:block"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-40 lg:pt-48 pb-24">
        <h1
          data-testid="hero-headline"
          className="font-display text-white"
          style={{ fontSize: "clamp(56px, 11vw, 160px)", lineHeight: 0.92 }}
        >
          <span className="block">WE DON'T JUST</span>
          <span className="block italic-display text-[#2457FF]">BUILD WEBSITES.</span>
          <span className="block">WE BUILD RESULTS.</span>
        </h1>

        <p
          data-testid="hero-sub"
          className="font-body text-[#888888] text-base lg:text-lg mt-10 max-w-2xl leading-relaxed"
        >
          A full-service creative agency — design, development, branding, and everything in between.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <a href="#contact" data-testid="hero-cta-primary" className="btn-primary cta-text">
            <ArrowRight size={16} strokeWidth={2.5} /> START A PROJECT
          </a>
          <a href="#work" data-testid="hero-cta-secondary" className="btn-ghost cta-text">
            <ArrowDown size={16} strokeWidth={2.5} /> SEE OUR WORK
          </a>
        </div>
      </div>

      {/* Service Ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-b border-[#222] py-5 overflow-hidden bg-[#0A0A0A]/80 backdrop-blur-sm">
        <div className="marquee-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((it, i) => (
            <span key={i} className="flex items-center gap-8 px-8 font-display-bold text-white/80 text-2xl whitespace-nowrap">
              {it} <span className="text-[#2457FF]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
