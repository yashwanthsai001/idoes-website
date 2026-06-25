import React from "react";
import { WHATSAPP_URL, EMAIL } from "../lib/constants";
import { ArrowRight, MessageCircle } from "lucide-react";
import Estimator from "./Estimator";

export default function Contact() {
  return (
    <section id="contact" className="relative section-light py-28 lg:py-40 overflow-hidden">
      <div className="stripe-divider absolute top-0 left-0 right-0" />

      {/* Ghost ticker */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <div className="marquee-track slow">
          {[...Array(2)].map((_, k) => (
            <span
              key={k}
              className="flex items-center gap-10 px-10 font-display text-[#0A0A0A] text-[200px] whitespace-nowrap"
            >
              LET'S TALK <span>·</span> LET'S BUILD <span>·</span> LET'S GROW <span>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="section-label-dark">[ GET IN TOUCH ]</p>

        <h2
          data-testid="contact-headline"
          className="font-display text-[#0A0A0A] mt-6"
          style={{ fontSize: "clamp(56px, 11vw, 168px)" }}
        >
          GOT A PROJECT<br />
          <span className="text-[#2457FF] italic-display">IN MIND?</span>
        </h2>

        <p className="text-[#555] text-lg lg:text-xl mt-8 max-w-2xl leading-relaxed">
          Tell us what you need. We'll tell you how we'd build it. No fluff, no sales pitch.
        </p>

        <div className="flex flex-wrap gap-4 mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="contact-cta-start"
            className="cta-text bg-[#0A0A0A] text-white px-6 py-4 inline-flex items-center gap-3 border border-[#0A0A0A] hover:bg-[#2457FF] hover:border-[#2457FF] transition-all"
          >
            <ArrowRight size={16} strokeWidth={2.5} /> START A PROJECT
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="contact-cta-whatsapp"
            className="cta-text bg-transparent text-[#0A0A0A] px-6 py-4 inline-flex items-center gap-3 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all"
          >
            <MessageCircle size={16} strokeWidth={2.5} /> WHATSAPP US
          </a>
        </div>

        {/* Email — newspaper style underline */}
        <a
          href={`mailto:${EMAIL}`}
          data-testid="contact-email"
          className="block mt-16 font-display text-[#0A0A0A] hover:text-[#2457FF] transition-colors border-t border-b border-[#0A0A0A]/15 py-8 group"
          style={{ fontSize: "clamp(28px, 5vw, 72px)" }}
        >
          <span className="flex items-center justify-between">
            {EMAIL.toUpperCase()}
            <span className="inline-block transition-transform group-hover:translate-x-2">↗</span>
          </span>
        </a>

        <div className="mt-24">
          <Estimator />
        </div>
      </div>
    </section>
  );
}
