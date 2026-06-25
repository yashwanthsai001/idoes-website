import React from "react";

const steps = [
  { n: "01", label: "DISCOVER", body: "We learn your business, goals, audience, and what's not working." },
  { n: "02", label: "DESIGN", body: "High-fidelity concepts built around your brand identity and user psychology." },
  { n: "03", label: "BUILD", body: "Clean code, pixel-perfect execution, tested across all devices." },
  { n: "04", label: "LAUNCH", body: "We don't disappear post-launch. We track, iterate, and optimize." },
];

export default function Process() {
  return (
    <section className="relative section-light py-28 lg:py-40 overflow-hidden">
      <div className="stripe-divider absolute top-0 left-0 right-0" />
      <div
        className="absolute -top-2 left-0 right-0 text-center ghost-text-dark"
        style={{ fontSize: "clamp(140px, 22vw, 320px)" }}
      >
        PROCESS
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="section-label-dark" data-testid="process-label">[ HOW WE WORK ]</p>
        <h2 className="font-display text-[#0A0A0A] mt-6" style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
          SIMPLE PROCESS.<br /><span className="text-[#2457FF] italic-display">COMPLEX RESULTS.</span>
        </h2>

        <div className="relative mt-20 grid lg:grid-cols-4 gap-6 lg:gap-4">
          {/* horizontal connector */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-px bg-[#0A0A0A]/15" />
          <div className="hidden lg:block absolute top-7 left-12 h-px bg-[#2457FF] origin-left" style={{ width: "calc(100% - 6rem)" }} />

          {steps.map((s, i) => (
            <div
              key={s.n}
              data-testid={`step-${i}`}
              className="relative bg-white border border-[#E8E8E8] p-7 hover:border-[#2457FF] hover:shadow-[0_12px_40px_rgba(36,87,255,0.08)] transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-display-bold text-xl ${
                  i === 0 ? "bg-[#2457FF] text-white" : "bg-[#0A0A0A] text-white"
                }`}
              >
                {s.n}
              </div>
              <p className="section-label-dark mt-6">[ {s.label} ]</p>
              <p className="text-[#555] text-sm lg:text-base leading-relaxed mt-3">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Timeline note */}
        <div className="mt-14 max-w-3xl border-l-2 border-[#2457FF] pl-6">
          <p className="cta-text text-[#2457FF]">[ TIMELINE ]</p>
          <p className="text-[#333] text-base lg:text-lg leading-relaxed mt-3">
            We work fast without compromising quality. Most business websites are delivered within approximately one week, while larger or more complex projects may require additional time depending on the project scope.
          </p>
        </div>
      </div>
    </section>
  );
}
