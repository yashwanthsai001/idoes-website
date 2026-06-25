import React, { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

// Easy to edit: each option = { label, base: [min, max] }.
// Timeline & budget act as multipliers; result is floored to base[0].
const steps = [
  {
    key: "need",
    title: "What do you need?",
    options: [
      { label: "BASIC BUSINESS WEBSITE", base: [10000, 20000] },
      { label: "PREMIUM CUSTOM WEBSITE", base: [20000, 28000] },
      { label: "E-COMMERCE WEBSITE", base: [20000, 35000] },
      { label: "CUSTOM WEB APP", base: [30000, 60000] },
      { label: "MOBILE APP", base: [50000, 80000] },
      { label: "LOGO DESIGN", base: [2000, 5000] },
      { label: "BRANDING PACKAGE", base: [10000, 25000] },
      { label: "VIDEO EDITING", base: [1000, 5000] },
      { label: "REEL SHOOTING & EDITING", base: [5000, 15000] },
    ],
  },
  {
    key: "timeline",
    title: "What's your timeline?",
    options: [
      { label: "ASAP (RUSH)", mult: 1.3 },
      { label: "1–2 WEEKS", mult: 1.0 },
      { label: "3–4 WEEKS", mult: 0.95 },
      { label: "FLEXIBLE", mult: 0.9 },
    ],
  },
  {
    key: "budget",
    title: "Budget range?",
    options: [
      { label: "STARTUP", mult: 0.9 },
      { label: "GROWTH", mult: 1.0 },
      { label: "ESTABLISHED", mult: 1.2 },
      { label: "ENTERPRISE", mult: 1.5 },
    ],
  },
];

const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

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
    const loF = Math.max(lo, Math.round((lo * m) / 500) * 500);
    const hiF = Math.max(loF, Math.round((hi * m) / 500) * 500);
    return [loF, hiF];
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
            <p className="text-white/60 text-xs lg:text-sm mt-5 max-w-2xl leading-relaxed">
              These are estimated starting prices. Final pricing depends on project scope, features, timeline, and specific requirements.
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
