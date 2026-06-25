import React, { useEffect, useState } from "react";
import { LOGO_URL, SOCIALS } from "../lib/constants";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative bg-[#0A0A0A] pt-24 pb-10 overflow-hidden border-t border-[#222]">
      <div className="absolute -top-2 left-0 right-0 text-center ghost-text" style={{ fontSize: "clamp(120px, 22vw, 320px)" }}>
        © 2025  ·  IDOES
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <img src={LOGO_URL} alt="IDOES" className="h-20 lg:h-24 invert" />
          {showTop && (
            <a
              href="#top"
              data-testid="scroll-top"
              className="bg-[#2457FF] hover:bg-[#1640D9] text-white w-12 h-12 flex items-center justify-center transition-all"
            >
              <ArrowUp size={18} strokeWidth={2.5} />
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <div>
            <p className="font-display text-white" style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 0.95 }}>
              I DO <span className="text-[#2457FF] italic-display">EVERYTHING.</span>
            </p>
            <p className="text-[#888] text-sm mt-6">Hyderabad, India</p>
          </div>
          <div className="md:text-right">
            <p className="section-label">[ FOLLOW ]</p>
            <div className="flex md:justify-end gap-6 mt-5 flex-wrap">
              <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" data-testid="footer-instagram" className="cta-text text-white hover:text-[#2457FF]">INSTAGRAM</a>
              <span className="text-[#444]">·</span>
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" data-testid="footer-linkedin" className="cta-text text-white hover:text-[#2457FF]">LINKEDIN</a>
              <span className="text-[#444]">·</span>
              <a href={SOCIALS.whatsapp} target="_blank" rel="noreferrer" data-testid="footer-whatsapp" className="cta-text text-white hover:text-[#2457FF]">WHATSAPP</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-[#222] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-xs cta-text">© 2025 IDOES. ALL RIGHTS RESERVED.</p>
          <p className="text-[#666] text-xs cta-text">DESIGNED & BUILT BY IDOES</p>
        </div>
      </div>
    </footer>
  );
}
