import React, { useEffect, useState } from "react";
import { LOGO_URL, WHATSAPP_URL } from "../lib/constants";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { id: "work", label: "WORK" },
  { id: "services", label: "SERVICES" },
  { id: "about", label: "ABOUT" },
  { id: "contact", label: "CONTACT" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // when at top (over light hero) → light treatment (dark text, no invert on logo)
  // when scrolled → dark treatment (white text on black bg)
  const onLight = !scrolled;

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0A0A0A] border-b border-[#222]" : "bg-transparent"
        }`}
      >
        <div className={`max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between transition-all ${scrolled ? "py-3" : "py-5"}`}>
          <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="IDOES"
              className={`h-16 lg:h-20 w-auto transition-all duration-300 ${onLight ? "" : "invert"}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {links.map((l, i) => (
              <React.Fragment key={l.id}>
                <a
                  href={`#${l.id}`}
                  data-testid={`nav-link-${l.id}`}
                  className={`cta-text relative transition-colors ${
                    onLight ? "text-[#0A0A0A]/80 hover:text-[#0A0A0A]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
                {i < links.length - 1 && (
                  <span className={onLight ? "text-[#0A0A0A]/30 text-sm" : "text-white/30 text-sm"}>·</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          <a
            href="#contact"
            data-testid="nav-cta"
            className={`hidden lg:inline-flex cta-text border px-5 py-3 items-center gap-2 transition-all ${
              onLight
                ? "border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white"
                : "border-[#2457FF] text-white hover:bg-[#2457FF]"
            }`}
          >
            <ArrowUpRight size={14} strokeWidth={2.5} /> LET'S TALK
          </a>

          <button
            data-testid="nav-mobile-toggle"
            aria-label="Menu"
            className={`lg:hidden ${onLight ? "text-[#0A0A0A]" : "text-white"}`}
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <div data-testid="nav-mobile-overlay" className="fixed inset-0 z-[60] bg-[#0A0A0A] flex flex-col">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#222]">
            <img src={LOGO_URL} alt="IDOES" className="h-16 invert" />
            <button data-testid="nav-mobile-close" onClick={() => setOpen(false)} className="text-white">
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.id}`}
                className="font-display text-6xl text-white hover:text-[#2457FF] transition-colors py-3"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 btn-primary self-start cta-text"
              data-testid="nav-mobile-cta"
            >
              <ArrowUpRight size={14} /> LET'S TALK
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
