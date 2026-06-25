import React from "react";
import { Target, Zap, Palette, Handshake } from "lucide-react";

const features = [
  { icon: Target, title: "One Agency, Everything Done", body: "No juggling 5 vendors. We handle design, dev, branding, and motion — all in-house." },
  { icon: Zap, title: "Fast Turnaround, No Shortcuts", body: "Rapid delivery without compromising the details that make work actually good." },
  { icon: Palette, title: "Design That Converts", body: "We don't just make things look good. We design for results — clicks, conversions, growth." },
  { icon: Handshake, title: "You're Not A Ticket", body: "Direct communication, honest feedback, and a team that actually cares about your business." },
];

export default function WhyIdoes() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 lg:py-40 overflow-hidden border-t border-[#161616]">
      <div className="absolute -top-6 left-0 right-0 text-center ghost-text" style={{ fontSize: "clamp(160px, 26vw, 360px)" }}>
        WHY US
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="section-label">[ WHY IDOES ]</p>
        <h2 className="font-display text-white mt-6" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>
          FROM IDEA <span className="text-[#2457FF] italic-display">TO IMPACT.</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16" data-testid="why-grid">
          {features.map(({ icon: Icon, title, body }, i) => (
            <div key={title} data-testid={`why-card-${i}`} className="card-feature p-7 flex flex-col">
              <div className="w-12 h-12 bg-[#2457FF]/15 border border-[#2457FF]/30 flex items-center justify-center mb-6">
                <Icon size={22} strokeWidth={1.8} className="text-[#2457FF]" />
              </div>
              <h4 className="font-display-bold text-white text-2xl leading-tight">{title}</h4>
              <p className="text-[#888] text-sm leading-relaxed mt-4">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
