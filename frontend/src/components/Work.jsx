import React from "react";
import { ArrowRight } from "lucide-react";
import BeforeAfter from "./BeforeAfter";
import {
  BusinessSiteMock,
  EcommerceMock,
  MobileAppMock,
  BrandIdentityMock,
  LogoMock,
  LandingPageMock,
} from "./PortfolioMocks";

// Easy to swap later: replace `mock` with <img src="…" /> for real screenshots.
const projects = [
  {
    title: "AURELIO & CO.",
    subtitle: "Premium Business Website",
    tags: ["WEBSITE", "DESIGN"],
    year: "2025",
    mock: <BusinessSiteMock />,
  },
  {
    title: "MAISON NOIR",
    subtitle: "E-commerce Storefront",
    tags: ["E-COMMERCE", "BRANDING"],
    year: "2025",
    mock: <EcommerceMock />,
  },
  {
    title: "PULSE FINANCE",
    subtitle: "Mobile App UI/UX",
    tags: ["MOBILE APP", "UI/UX"],
    year: "2025",
    mock: <MobileAppMock />,
  },
  {
    title: "ATELIER 09",
    subtitle: "Brand Identity System",
    tags: ["BRAND IDENTITY"],
    year: "2024",
    mock: <BrandIdentityMock />,
  },
  {
    title: "VOLTA",
    subtitle: "Logo Design & Animation",
    tags: ["LOGO", "MOTION"],
    year: "2024",
    mock: <LogoMock />,
  },
  {
    title: "ORBIT LABS",
    subtitle: "Landing Page Design",
    tags: ["LANDING PAGE"],
    year: "2025",
    mock: <LandingPageMock />,
  },
];

function ProjectCard({ p, large, index }) {
  return (
    <div
      data-testid={`project-${p.title.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}
      className={`group relative overflow-hidden border border-[#E5E5E5] bg-white ${
        large ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto" : "aspect-[4/5]"
      }`}
    >
      {/* Mock area */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
          {p.mock}
        </div>
      </div>

      {/* index */}
      <span className="absolute top-5 left-5 cta-text text-[#0A0A0A]/50 z-10" style={{ fontSize: 10 }}>
        / {String(index).padStart(2, "0")}
      </span>
      <span className="absolute top-5 right-5 cta-text text-[#0A0A0A]/50 z-10" style={{ fontSize: 10 }}>
        {p.year}
      </span>

      {/* hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 lg:p-7 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {p.tags.map((t) => (
            <span key={t} className="cta-text text-white/80 border border-white/30 px-2.5 py-1 text-[10px] backdrop-blur-sm">
              [ {t} ]
            </span>
          ))}
        </div>
        <p className="cta-text text-white/0 group-hover:text-white/80 transition-colors" style={{ fontSize: 11 }}>
          {p.subtitle.toUpperCase()}
        </p>
        <h4 className="font-display-bold text-white/0 group-hover:text-white text-2xl lg:text-3xl mt-1 transition-colors">
          {p.title}
        </h4>
        <p className="cta-text text-white/0 group-hover:text-white/70 transition-colors mt-2">
          VIEW CASE STUDY →
        </p>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative section-light py-28 lg:py-40 overflow-hidden">
      <div className="stripe-divider absolute top-0 left-0 right-0" />
      <div
        className="absolute -top-10 right-6 ghost-text-dark"
        style={{ fontSize: "clamp(160px, 22vw, 340px)" }}
      >
        WORK
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="section-label-dark" data-testid="work-label">[ OUR WORK ]</p>
            <h2
              data-testid="work-headline"
              className="font-display text-[#0A0A0A] mt-6"
              style={{ fontSize: "clamp(44px, 7vw, 104px)" }}
            >
              RESULTS THAT<br />SPEAK LOUDER<br />
              <span className="text-[#2457FF] italic-display">THAN DECKS.</span>
            </h2>
          </div>
          <p className="text-[#555] text-base lg:text-lg leading-relaxed max-w-sm">
            A selection of recent work — from rebrands and websites to apps and motion. Each piece built end-to-end, in-house.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProjectCard p={projects[0]} large index={1} />
          <ProjectCard p={projects[1]} index={2} />
          <ProjectCard p={projects[2]} index={3} />
          <ProjectCard p={projects[3]} index={4} />
          <ProjectCard p={projects[4]} index={5} />
          <ProjectCard p={projects[5]} index={6} />
        </div>

        <div className="mt-24">
          <BeforeAfter />
        </div>

        <a
          href="#contact"
          data-testid="work-cta"
          className="cta-text mt-16 inline-flex items-center gap-3 border border-[#0A0A0A] text-[#0A0A0A] px-6 py-4 hover:bg-[#0A0A0A] hover:text-white transition-all"
        >
          <ArrowRight size={16} strokeWidth={2.5} /> SEE ALL PROJECTS
        </a>
      </div>
    </section>
  );
}
