import React, { useState } from "react";
import { SERVICES, SERVICE_DESCRIPTIONS } from "../lib/constants";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="relative bg-[#2457FF] py-28 lg:py-40 overflow-hidden">
      <div className="absolute -top-10 left-6 ghost-text" style={{ fontSize: "clamp(160px, 26vw, 380px)", color: "#000", opacity: 0.08 }}>
        WE DO
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="section-label" data-testid="services-label" style={{ color: "#0A1F8C" }}>[ WHAT WE DO ]</p>

        <h2 data-testid="services-headline" className="font-display text-white mt-6 max-w-5xl" style={{ fontSize: "clamp(42px, 5.5vw, 80px)" }}>
          LET'S CO-CREATE SOMETHING POWERFUL THAT MOVES YOUR BUSINESS FORWARD
        </h2>

        <div className="mt-20 grid lg:grid-cols-5 gap-10">
          <ul className="lg:col-span-3 space-y-3" data-testid="services-list">
            {SERVICES.map((s, i) => (
              <li
                key={s}
                data-testid={`service-row-${i}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`service-row font-display ${active === i ? "active" : ""}`}
                style={{ fontSize: "clamp(28px, 4.5vw, 64px)", lineHeight: 1.05 }}
              >
                {s}
              </li>
            ))}
          </ul>

          <aside className="lg:col-span-2 lg:pl-8 lg:border-l border-white/15">
            <p className="section-label" style={{ color: "#0A1F8C" }}>[ SELECTED ]</p>
            <h4 className="font-display-bold text-white text-2xl lg:text-3xl mt-4">
              {SERVICES[active]}
            </h4>
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mt-5">
              {SERVICE_DESCRIPTIONS[SERVICES[active]]}
            </p>
          </aside>
        </div>

        <a href="#contact" data-testid="services-cta" className="btn-outline-white cta-text mt-16 inline-flex">
          <ArrowRight size={16} strokeWidth={2.5} /> VIEW ALL SERVICES
        </a>
      </div>
    </section>
  );
}
