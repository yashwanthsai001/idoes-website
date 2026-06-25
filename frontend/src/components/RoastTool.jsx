import React, { useState } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const severityBorder = {
  critical: "border-l-red-500",
  warning: "border-l-amber-400",
  good: "border-l-emerald-400",
};

function ScoreRing({ score }) {
  const radius = 90;
  const circ = 2 * Math.PI * radius;
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const offset = circ - pct * circ;
  const color = score < 50 ? "#EF4444" : score < 75 ? "#F59E0B" : "#10B981";
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" className="block">
      <circle cx="110" cy="110" r={radius} fill="none" strokeWidth="10" className="score-ring-track" />
      <circle
        cx="110" cy="110" r={radius}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={offset}
        className="score-ring-fill"
        transform="rotate(-90 110 110)"
      />
      <text x="110" y="118" textAnchor="middle" className="font-display fill-white" fontSize="56" fontFamily="Barlow Condensed" fontWeight="900">
        {score}
      </text>
      <text x="110" y="150" textAnchor="middle" fill="#888" fontSize="12" letterSpacing="2" fontFamily="Inter" fontWeight="500">
        / 100
      </text>
    </svg>
  );
}

export default function RoastTool() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e?.preventDefault?.();
    if (!url.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await axios.post(`${API}/roast`, { url: url.trim() }, { timeout: 90000 });
      setResult(res.data);
      setTimeout(() => {
        document.getElementById("roast-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } catch (err) {
      setError(err?.response?.data?.detail || "We couldn't analyze that site. Try a different URL.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="roast" className="relative bg-[#0A0A0A] py-28 lg:py-40 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 ghost-text" style={{ fontSize: "clamp(140px, 22vw, 320px)" }}>
        ROAST
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <p className="section-label" data-testid="roast-label">[ FREE TOOL ]</p>

        <h2
          data-testid="roast-headline"
          className="font-display text-white mt-6"
          style={{ fontSize: "clamp(48px, 8vw, 112px)" }}
        >
          IS YOUR WEBSITE<br />
          <span className="text-[#2457FF]">EMBARRASSING YOU?</span>
        </h2>

        <p className="text-[#888] text-base lg:text-lg mt-6 max-w-2xl leading-relaxed" data-testid="roast-sub">
          Paste your URL below. We'll roast it — then tell you exactly how to fix it. Free. Instant. Brutal.
        </p>

        <form onSubmit={submit} className="mt-12 flex flex-col lg:flex-row gap-3 max-w-3xl">
          <input
            data-testid="roast-input"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            disabled={loading}
            className={`flex-1 bg-[#111] border border-[#333] text-white text-lg px-5 py-4 focus:outline-none focus:border-[#2457FF] transition-all ${
              !loading ? "focus:pulse-glow" : "opacity-70"
            }`}
          />
          <button
            type="submit"
            data-testid="roast-submit"
            disabled={loading || !url.trim()}
            className="btn-primary cta-text justify-center disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
                ANALYZING
              </span>
            ) : (
              <>
                <ArrowRight size={16} strokeWidth={2.5} /> ROAST MY SITE
              </>
            )}
          </button>
        </form>

        {loading && (
          <p data-testid="roast-loading" className="mt-6 text-[#888] text-sm tracking-wider">
            Burning your website at 3000°C…
          </p>
        )}
        {error && (
          <p data-testid="roast-error" className="mt-6 text-red-400 text-sm tracking-wider">
            {error}
          </p>
        )}

        {result && (
          <div id="roast-result" data-testid="roast-result" className="mt-20">
            {/* Score Card */}
            <div className="flex flex-col items-center text-center bg-[#111] border border-[#222] py-14 px-6">
              <p className="section-label">[ YOUR WEBSITE SCORE ]</p>
              <div className="mt-6 animate-[fadeIn_.6s_ease]">
                <ScoreRing score={result.score} />
              </div>
              <p className="font-display-bold text-white text-2xl lg:text-3xl mt-6 max-w-2xl">
                {result.verdict}
              </p>
              <p className="text-[#888] text-base lg:text-lg mt-4 max-w-2xl leading-relaxed">
                {result.roast}
              </p>
            </div>

            {/* Category Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {result.categories.map((c, i) => (
                <div
                  key={c.id}
                  data-testid={`roast-card-${c.id}`}
                  className={`card-feature p-6 border-l-2 ${severityBorder[c.severity] || "border-l-amber-400"}`}
                  style={{ animation: `fadeUp .6s ease ${i * 60}ms both` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" aria-hidden>{c.icon}</span>
                    <span className="section-label text-[#888]">[ {c.label} ]</span>
                  </div>
                  <h4 className="font-display-bold text-white text-2xl mt-4 leading-tight">{c.headline}</h4>
                  <p className="text-[#888] text-sm mt-3 leading-relaxed">{c.advice}</p>
                </div>
              ))}
            </div>

            {/* Soft CTA */}
            <div className="mt-8 bg-[#2457FF] p-10 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="font-display-bold text-white text-3xl lg:text-4xl max-w-2xl leading-tight">
                  Your website has potential. We know exactly how to unlock it.
                </p>
              </div>
              <a href="#contact" className="btn-outline-white cta-text bg-white !text-[#2457FF] hover:!bg-[#0A0A0A] hover:!text-white">
                <ArrowRight size={16} strokeWidth={2.5} /> LET'S FIX IT TOGETHER
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
}
