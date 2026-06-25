import React from "react";
import { ArrowRight } from "lucide-react";
import BeforeAfter from "./BeforeAfter";

const projects = [
  {
    title: "NEUE LABS",
    tags: ["WEBSITE REDESIGN", "BRANDING"],
    gradient: "linear-gradient(135deg, #2457FF 0%, #0A0A0A 100%)",
    accent: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.18), transparent 50%)",
  },
  {
    title: "OAK & ROOT",
    tags: ["BRAND IDENTITY"],
    gradient: "linear-gradient(160deg, #14143A 0%, #2457FF 100%)",
    accent: "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.16), transparent 55%)",
  },
  {
    title: "FRAME 24",
    tags: ["MOBILE APP", "UI/UX"],
    gradient: "linear-gradient(135deg, #050505 0%, #2457FF 100%)",
    accent: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.12), transparent 60%)",
  },
  {
    title: "VOLTA MOTION",
    tags: ["LOGO ANIMATION"],
    gradient: "linear-gradient(180deg, #2457FF 0%, #050505 100%)",
    accent: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.18), transparent 50%)",
  },
  {
    title: "STUDIO KORA",
    tags: ["WEBSITE", "VIDEO"],
    gradient: "linear-gradient(120deg, #0A0A0A 0%, #2457FF 100%)",
    accent: "radial-gradient(circle at 60% 30%, rgba(255,255,255,0.14), transparent 55%)",
  },
  {
    title: "MOON & MARROW",
    tags: ["BRANDING", "WEBSITE"],
    gradient: "linear-gradient(135deg, #1A1A1A 0%, #2457FF 100%)",
    accent: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.18), transparent 55%)",
  },
];

function ProjectCard({ p, large }) {
  return (
    <div
      data-testid={`project-${p.title.replace(/\s+/g, "-").toLowerCase()}`}
      className={`group relative overflow-hidden bg-[#111] border border-[#222] ${large ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/5]"}`}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ background: p.gradient }} />
      <div className="absolute inset-0" style={{ background: p.accent }} />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2457FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full p-7 flex flex-col justify-between">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="cta-text text-white/80 border border-white/20 px-3 py-1 text-[10px] backdrop-blur-sm">
              [ {t} ]
            </span>
          ))}
        </div>
        <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
          <h4 className="font-display-bold text-white text-3xl">{p.title}</h4>
          <p className="cta-text text-white/70 mt-2">VIEW CASE STUDY →</p>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative bg-[#0A0A0A] py-28 lg:py-40 overflow-hidden">
      <div className="absolute -top-10 right-6 ghost-text" style={{ fontSize: "clamp(160px, 22vw, 340px)" }}>
        WORK
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="section-label" data-testid="work-label">[ OUR WORK ]</p>
        <h2 data-testid="work-headline" className="font-display text-white mt-6" style={{ fontSize: "clamp(44px, 7vw, 104px)" }}>
          RESULTS THAT<br />SPEAK LOUDER<br /><span className="text-[#2457FF]">THAN DECKS.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProjectCard p={projects[0]} large />
          <ProjectCard p={projects[1]} />
          <ProjectCard p={projects[2]} />
          <ProjectCard p={projects[3]} />
          <ProjectCard p={projects[4]} />
          <ProjectCard p={projects[5]} />
        </div>

        <div className="mt-20">
          <BeforeAfter />
        </div>

        <a href="#contact" data-testid="work-cta" className="btn-ghost cta-text mt-16 inline-flex">
          <ArrowRight size={16} strokeWidth={2.5} /> SEE ALL PROJECTS
        </a>
      </div>
    </section>
  );
}
