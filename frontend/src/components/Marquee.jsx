import React from "react";

const items = [
  "“Felt like an extension of our team.”",
  "NEUE LABS",
  "“Shipped in half the time we planned.”",
  "OAK & ROOT",
  "“Best agency hire we've ever made.”",
  "FRAME 24",
  "“Made our product feel premium overnight.”",
  "VOLTA MOTION",
  "“Direct, sharp, no-nonsense.”",
  "STUDIO KORA",
];

export default function Marquee() {
  return (
    <section className="relative bg-[#0A0A0A] border-y border-[#222] py-8 overflow-hidden">
      <div className="marquee-track slow">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8 px-8 font-display-bold text-white/75 text-3xl whitespace-nowrap">
            {t} <span className="text-[#2457FF]">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
