import React from "react";
import { WHATSAPP_URL, EMAIL } from "../lib/constants";
import { ArrowRight, MessageCircle } from "lucide-react";
import Estimator from "./Estimator";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#2457FF] py-28 lg:py-40 overflow-hidden">
      {/* Ghost ticker */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 opacity-[0.08] pointer-events-none overflow-hidden">
        <div className="marquee-track slow">
          {[...Array(2)].map((_, k) => (
            <span key={k} className="flex items-center gap-10 px-10 font-display text-white text-[180px] whitespace-nowrap">
              LET'S TALK <span>·</span> LET'S BUILD <span>·</span> LET'S GROW <span>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="section-label" style={{ color: "#0A1F8C" }}>[ GET IN TOUCH ]</p>

        <h2 data-testid="contact-headline" className="font-display text-white mt-6" style={{ fontSize: "clamp(56px, 11vw, 168px)" }}>
          GOT A PROJECT<br />IN MIND?
        </h2>

        <p className="text-white/85 text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed">
          Tell us what you need. We'll tell you how we'd build it — no fluff, no sales pitch.
        </p>

        <div className="flex flex-wrap gap-4 mt-12">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" data-testid="contact-cta-start" className="btn-dark cta-text">
            <ArrowRight size={16} strokeWidth={2.5} /> START A PROJECT
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" data-testid="contact-cta-whatsapp" className="btn-outline-white cta-text">
            <MessageCircle size={16} strokeWidth={2.5} /> WHATSAPP US
          </a>
        </div>

        <a href={`mailto:${EMAIL}`} data-testid="contact-email" className="block mt-16 font-display text-white hover:text-[#0A0A0A] transition-colors" style={{ fontSize: "clamp(28px, 5vw, 72px)" }}>
          {EMAIL.toUpperCase()} <span className="inline-block transition-transform group-hover:translate-x-2">↗</span>
        </a>

        <div className="mt-24">
          <Estimator />
        </div>
      </div>
    </section>
  );
}
