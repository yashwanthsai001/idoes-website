import React from "react";

export default function About() {
  return (
    <section id="about" className="relative section-light py-28 lg:py-40 overflow-hidden">
      {/* top hairline */}
      <div className="stripe-divider absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 relative">
        {/* left: vertical label & ghost */}
        <div className="lg:col-span-4 relative">
          <p className="section-label-dark" data-testid="about-label">[ WHO WE ARE ]</p>
          <div
            className="ghost-text-dark mt-12 hidden lg:block"
            style={{ fontSize: "clamp(140px, 20vw, 280px)", lineHeight: 0.85 }}
          >
            IDOES
          </div>
          <p className="cta-text mt-10 text-[#0A0A0A] hidden lg:block">
            HYDERABAD <span className="text-[#2457FF] mx-2">/</span> INDIA
          </p>
        </div>

        {/* right: headline + body + stats */}
        <div className="lg:col-span-8">
          <h2
            data-testid="about-headline"
            className="font-display text-[#0A0A0A]"
            style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
          >
            WE DO EVERYTHING<br />
            SO YOU <span className="text-[#2457FF] italic-display">DON'T HAVE TO.</span>
          </h2>

          <p className="text-[#555] text-base lg:text-lg leading-relaxed mt-10 max-w-2xl">
            IDOES is a full-service creative agency based in Hyderabad. We work with ambitious brands to build digital experiences that look exceptional and perform even better. Design. Development. Motion. Branding. Everything under one roof.
          </p>

          {/* stat strip — newspaper rule lines */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-b border-[#0A0A0A]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#0A0A0A]/15" data-testid="about-stats">
            {[
              { n: "50+", l: "PROJECTS DELIVERED" },
              { n: "3+", l: "YEARS BUILDING" },
              { n: "100%", l: "IN-HOUSE TEAM" },
            ].map((s) => (
              <div key={s.l} className="py-8 sm:px-8 first:sm:pl-0">
                <p className="font-display text-[#0A0A0A]" style={{ fontSize: "clamp(40px, 4.5vw, 64px)", lineHeight: 1 }}>
                  {s.n}
                </p>
                <p className="cta-text text-[#666] mt-3">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
