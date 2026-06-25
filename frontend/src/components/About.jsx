import React from "react";

export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0A0A] py-28 lg:py-40 overflow-hidden border-t border-[#161616]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 relative">
          <p className="section-label" data-testid="about-label">[ WHO WE ARE ]</p>
          <div className="ghost-text mt-12 hidden lg:block" style={{ fontSize: "clamp(140px, 20vw, 280px)", lineHeight: 0.85 }}>
            IDOES
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 data-testid="about-headline" className="font-display text-white" style={{ fontSize: "clamp(44px, 6vw, 88px)" }}>
            WE DO EVERYTHING<br />SO YOU <span className="text-[#2457FF]">DON'T HAVE TO.</span>
          </h2>
          <p className="text-[#888] text-base lg:text-lg leading-relaxed mt-8 max-w-2xl">
            IDOES is a full-service creative agency based in Hyderabad. We work with ambitious brands to build digital experiences that look exceptional and perform even better. Design. Development. Motion. Branding. Everything under one roof.
          </p>

          <div className="flex flex-wrap gap-3 mt-10" data-testid="about-stats">
            {["50+ PROJECTS", "3+ YEARS", "EVERYTHING IN-HOUSE"].map((s) => (
              <span key={s} className="cta-text border border-[#222] text-white px-5 py-3 bg-[#111]">
                [ {s} ]
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
