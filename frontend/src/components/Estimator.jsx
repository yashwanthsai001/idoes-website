import React, { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

const steps = [
  {
    key: "need",
    title: "What do you need?",
    options: [
      { label: "WEBSITE", base: [80000, 250000] },
      { label: "MOBILE APP", base: [200000, 800000] },
      { label: "BRANDING", base: [50000, 200000] },
      { label: "VIDEO / REELS", base: [40000, 150000] },
    ],
  },
  {
    key: "timeline",
    title: "What's your timeline?",
    options: [
      { label: "ASAP (RUSH)", mult: 1.4 },
      { label: "4–6 WEEKS", mult: 1.0 },
      { label: "2–3 MONTHS", mult: 0.9 },
      { label: "FLEXIBLE", mult: 0.85 },
    ],
  },
  {
    key: "budget",
    title: "Budget range?",
    options: [
      { label: "STARTUP", mult: 0.7 },
      { label: "GROWTH", mult: 1.0 },
      { label: "ESTABLISHED", mult: 1.4 },
      { label: "ENTERPRISE", mult: 2.0 },
    ],
  },
];

const fmt = (n) => "₹" + n.toLocaleString("en-IN");

export default function Estimator() {
  const [answers, setAnswers] = useState({});
  const [stepIdx, setStepIdx] = useState(0);

  const pick = (val) => {
    const key = steps[stepIdx].key;
    const next = { ...answers, [key]: val };
    setAnswers(next);
    if (stepIdx < steps.length - 1) setStepIdx(stepIdx + 1);
  };

  const range = useMemo(() => {
    if (!answers.need || !answers.timeline || !answers.budget) return null;
    const [lo, hi] = answers.need.base;
    const m = answers.timeline.mult * answers.budget.mult;
    return [Math.round((lo * m) / 1000) * 1000, Math.round((hi * m) / 1000) * 1000];
  }, [answers]);

  const reset = () => {
    setAnswers({});
    setStepIdx(0);
  };

  return (
    <div data-testid="estimator" className="bg-[#0A0A0A] text-white p-8 lg:p-14 relative overflow-hidden">
      {/* tiny grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="section-label" style={{ color: "#bbb" }}>[ INSTANT ESTIMATOR ]</p>
          {!range && (
            <p className="cta-text text-white/60">
              STEP <span className="text-[#2457FF]">{stepIdx + 1}</span> / 3
            </p>
          )}
        </div>

        <h3 className="font-display text-white mt-3" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
          GET A NUMBER.<br />
          <span className="text-[#2457FF] italic-display">IN 3 CLICKS.</span>
        </h3>

        {!range && (
          <div className="mt-10">
            <p className="text-white/70 text-base">{steps[stepIdx].title}</p>
            <div className="flex flex-wrap gap-3 mt-5">
              {steps[stepIdx].options.map((opt, i) => (
                <button
                  key={opt.label}
                  data-testid={`estimator-step-${stepIdx}-opt-${i}`}
                  onClick={() => pick(opt)}
                  className="cta-text border border-[#333] text-white px-5 py-4 hover:border-[#2457FF] hover:bg-[#2457FF]/10 transition-all"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {range && (
          <div className="mt-10" data-testid="estimator-result">
            <p className="section-label" style={{ color: "#bbb" }}>[ YOUR ESTIMATE ]</p>
            <p className="font-display text-white mt-3" style={{ fontSize: "clamp(36px, 5.5vw, 84px)" }}>
              {fmt(range[0])} <span className="text-[#2457FF]">–</span> {fmt(range[1])}
            </p>
            <p className="text-white/70 text-sm lg:text-base mt-3 max-w-xl">
              Ballpark for {answers.need.label.toLowerCase()}, {answers.timeline.label.toLowerCase()} timeline. Final scope confirmed in a 20-minute call.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#contact" className="btn-primary cta-text">
                <ArrowRight size={16} strokeWidth={2.5} /> CONFIRM WITH TEAM
              </a>
              <button onClick={reset} className="btn-ghost cta-text">
                <RotateCcw size={14} /> START OVER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
