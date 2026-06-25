import React from "react";

const steps = [
  { n: "01", label: "DISCOVER", body: "We learn your business, goals, audience, and what's not working." },
  { n: "02", label: "DESIGN", body: "High-fidelity concepts built around your brand identity and user psychology." },
  { n: "03", label: "BUILD", body: "Clean code, pixel-perfect execution, tested across all devices." },
  { n: "04", label: "LAUNCH & GROW", body: "We don't disappear post-launch. We track, iterate, and optimize." },
];

export default function Process() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 lg:py-40 overflow-hidden border-t border-[#161616]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="section-label" data-testid="process-label">[ HOW WE WORK ]</p>
        <h2 className="font-display text-white mt-6" style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
          SIMPLE PROCESS.<br /><span className="text-[#2457FF] italic-display">COMPLEX RESULTS.</span>
        </h2>

        <div className="relative mt-20 grid lg:grid-cols-4 gap-8 lg:gap-4">
          {/* horizontal connector */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-[#222]" />
          <div className="hidden lg:block absolute top-6 left-0 h-px bg-[#2457FF] origin-left" style={{ width: "100%", transform: "scaleX(1)" }} />

          {steps.map((s, i) => (
            <div key={s.n} data-testid={`step-${i}`} className="relative pl-0 lg:pl-0">
              <div className="flex items-center gap-4 lg:block">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display-bold text-lg ${i === 0 ? "bg-[#2457FF] text-white" : "bg-[#111] border border-[#222] text-white/70"}`}>
                  {s.n}
                </div>
              </div>
              <p className="section-label mt-4 lg:mt-6">[ {s.label} ]</p>
              <p className="text-[#bbb] text-sm lg:text-base leading-relaxed mt-3 max-w-xs">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
