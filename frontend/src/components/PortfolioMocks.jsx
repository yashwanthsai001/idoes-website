import React from "react";

/*
 * Portfolio mock previews — pure CSS/SVG visuals that resemble real client work.
 * Easy to replace later with real image screenshots:
 *   <img src="/path/to/screenshot.jpg" className="w-full h-full object-cover" />
 */

const Browser = ({ children, bg = "#FAFAFA" }) => (
  <div className="absolute inset-0 p-3 lg:p-4">
    <div className="h-full w-full rounded-md overflow-hidden shadow-[0_18px_60px_rgba(10,10,10,0.25)] border border-[#0A0A0A]/10" style={{ background: bg }}>
      <div className="h-6 flex items-center px-3 gap-1.5 bg-[#EFEFEF] border-b border-[#E0E0E0]">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[8px] text-[#888] tracking-wide">https://</span>
      </div>
      <div className="relative h-[calc(100%-1.5rem)] overflow-hidden">{children}</div>
    </div>
  </div>
);

const Phone = ({ children, bg = "#0A0A0A" }) => (
  <div className="absolute inset-0 flex items-center justify-center p-3">
    <div className="h-full w-[55%] max-w-[200px] rounded-[24px] border-[6px] border-[#0A0A0A] overflow-hidden shadow-[0_18px_60px_rgba(10,10,10,0.35)]" style={{ background: bg }}>
      <div className="h-4 flex items-center justify-center bg-[#0A0A0A]">
        <span className="w-10 h-1.5 rounded-full bg-[#0A0A0A] border border-[#1a1a1a]" />
      </div>
      <div className="relative h-[calc(100%-1rem)] overflow-hidden">{children}</div>
    </div>
  </div>
);

/* ---------------- 01 Premium Business Website ---------------- */
export const BusinessSiteMock = () => (
  <div className="absolute inset-0 bg-[#EFEAE3]">
    <Browser bg="#FAF6EF">
      <div className="h-full flex flex-col p-4">
        <div className="flex items-center justify-between">
          <span className="font-display-bold text-[#1A1A1A]" style={{ fontSize: 11 }}>AURELIO</span>
          <span className="text-[7px] tracking-[0.25em] text-[#1A1A1A]/70">WORK · STUDIO · CONTACT</span>
        </div>
        <div className="mt-5">
          <span className="inline-block text-[6px] tracking-[0.2em] text-[#8B6B3E] border border-[#8B6B3E]/40 px-1.5 py-0.5">EST. 2014</span>
          <div className="font-display text-[#1A1A1A] mt-2 leading-[0.95]" style={{ fontSize: 22 }}>
            ARCHITECTURE<br />
            <span className="italic" style={{ color: "#8B6B3E" }}>FOR THE QUIET.</span>
          </div>
          <p className="text-[7px] text-[#1A1A1A]/60 mt-2 leading-snug max-w-[80%]">
            Residential studio crafting calm spaces in stone, oak and light.
          </p>
        </div>
        <div className="mt-auto grid grid-cols-3 gap-1.5">
          <div className="h-10 bg-[#D6CFC2]" />
          <div className="h-10 bg-[#1A1A1A]" />
          <div className="h-10 bg-[#8B6B3E]" />
        </div>
      </div>
    </Browser>
  </div>
);

/* ---------------- 02 E-commerce Website ---------------- */
export const EcommerceMock = () => (
  <div className="absolute inset-0 bg-[#FFF5F0]">
    <Browser bg="#FFFFFF">
      <div className="h-full p-3">
        <div className="flex items-center justify-between">
          <span className="font-display-bold" style={{ fontSize: 9, color: "#1A1A1A" }}>MAISON NOIR</span>
          <div className="flex gap-1 text-[6px] tracking-widest text-[#1A1A1A]/70">
            <span>SHOP</span><span>·</span><span>BAG (2)</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mt-2.5">
          {[
            { c: "#1A1A1A", t: "Ash Wool Coat", p: "₹14,800" },
            { c: "#C99A6B", t: "Camel Trouser", p: "₹6,200" },
            { c: "#3D3D3D", t: "Linen Shirt", p: "₹3,400" },
            { c: "#E8DFD3", t: "Silk Scarf", p: "₹2,100" },
          ].map((it, i) => (
            <div key={i} className="bg-[#FAFAFA] border border-[#EEE] p-1.5">
              <div className="h-8 rounded-sm" style={{ background: it.c }} />
              <p className="mt-1 text-[6px] text-[#1A1A1A] truncate">{it.t}</p>
              <p className="text-[6px] font-bold text-[#1A1A1A]">{it.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 bg-[#1A1A1A] text-white text-center py-1 text-[6px] tracking-widest">FREE SHIPPING OVER ₹5,000</div>
      </div>
    </Browser>
  </div>
);

/* ---------------- 03 Mobile App UI/UX ---------------- */
export const MobileAppMock = () => (
  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0F1B3D 0%, #2457FF 100%)" }}>
    <Phone bg="#0A0A0A">
      <div className="h-full p-2 text-white" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #14143A 100%)" }}>
        <div className="flex items-center justify-between text-[6px]">
          <span>9:41</span>
          <span>● ●●</span>
        </div>
        <p className="text-[7px] text-white/60 mt-2">Hi, Yashwanth</p>
        <p className="font-display-bold text-[12px] leading-tight">Total Balance</p>
        <p className="font-display text-[16px] leading-none mt-1">₹2,84,510</p>
        <div className="flex gap-1 mt-2">
          <span className="bg-[#2457FF] text-[5px] px-1.5 py-1 rounded">SEND</span>
          <span className="bg-white/10 text-[5px] px-1.5 py-1 rounded">REQUEST</span>
          <span className="bg-white/10 text-[5px] px-1.5 py-1 rounded">PAY</span>
        </div>
        <p className="text-[6px] text-white/50 mt-3 tracking-widest">RECENT</p>
        {["Spotify  – ₹199", "Swiggy  – ₹486", "Salary +₹84,000"].map((t, i) => (
          <div key={i} className="flex items-center justify-between mt-1.5 border-b border-white/10 pb-1 text-[6px]">
            <span>{t.split(" – ")[0] || t.split(" +")[0]}</span>
            <span className={t.includes("+") ? "text-[#5BE584]" : "text-white"}>{t.includes("+") ? "+" + t.split("+")[1] : "-" + (t.split(" – ")[1] || "")}</span>
          </div>
        ))}
      </div>
    </Phone>
  </div>
);

/* ---------------- 04 Brand Identity ---------------- */
export const BrandIdentityMock = () => (
  <div className="absolute inset-0 bg-[#F2EEE6] p-4 flex flex-col justify-between">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[8px] tracking-[0.3em] text-[#0A0A0A]/60">ATELIER 09</p>
        <p className="font-display text-[#0A0A0A] mt-1 leading-none" style={{ fontSize: 28 }}>A/09</p>
      </div>
      <span className="text-[7px] tracking-widest text-[#0A0A0A]/60">IDENTITY · 2024</span>
    </div>
    <div className="flex gap-1.5">
      {["#0A0A0A", "#A07B4B", "#E8DFD3", "#F2EEE6", "#5C4B36"].map((c) => (
        <div key={c} className="flex-1">
          <div className="h-12 border border-[#0A0A0A]/10" style={{ background: c }} />
          <p className="text-[6px] mt-1 tracking-wider text-[#0A0A0A]/70">{c}</p>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-1.5">
      <div className="aspect-square bg-[#0A0A0A] flex items-center justify-center">
        <span className="font-display text-white" style={{ fontSize: 18 }}>A</span>
      </div>
      <div className="aspect-square bg-[#A07B4B] flex items-center justify-center">
        <span className="font-display text-white" style={{ fontSize: 18 }}>09</span>
      </div>
      <div className="aspect-square bg-white border border-[#0A0A0A]/10 flex items-center justify-center">
        <span className="font-display text-[#0A0A0A]" style={{ fontSize: 18 }}>A/</span>
      </div>
    </div>
  </div>
);

/* ---------------- 05 Logo Design ---------------- */
export const LogoMock = () => (
  <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(36,87,255,0.25), transparent 60%)" }} />
    <div className="relative text-center">
      {/* simple SVG logomark */}
      <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
        <circle cx="60" cy="60" r="55" fill="none" stroke="#2457FF" strokeWidth="3" />
        <path d="M 25 80 Q 60 20 95 80" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <circle cx="60" cy="55" r="6" fill="#2457FF" />
      </svg>
      <p className="font-display text-white tracking-[0.4em] mt-3" style={{ fontSize: 18 }}>VOLTA</p>
      <p className="text-[8px] text-white/50 tracking-[0.3em] mt-1">MOTION · BRAND · 2024</p>
    </div>
    <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[7px] text-white/40 tracking-widest">
      <span>PRIMARY MARK</span>
      <span>01 / 04</span>
    </div>
  </div>
);

/* ---------------- 06 Landing Page Design ---------------- */
export const LandingPageMock = () => (
  <div className="absolute inset-0 bg-[#0A0A0A]">
    <Browser bg="#0A0A0A">
      <div className="h-full p-3 text-white relative overflow-hidden">
        <div className="absolute -top-6 -right-8 w-24 h-24 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #2457FF, transparent 70%)", filter: "blur(8px)" }} />
        <div className="flex items-center justify-between relative">
          <span className="font-display-bold text-[9px]">ORBIT</span>
          <span className="cta-text border border-white/30 px-2 py-0.5" style={{ fontSize: 6 }}>SIGN UP</span>
        </div>
        <p className="cta-text text-[#2457FF] mt-4" style={{ fontSize: 6 }}>[ NEW · v2.0 ]</p>
        <div className="font-display mt-1 leading-[0.95]" style={{ fontSize: 18 }}>
          SHIP ANALYTICS<br />
          <span className="italic text-[#2457FF]">IN ONE LINE.</span>
        </div>
        <p className="text-[7px] text-white/60 mt-2 max-w-[85%] leading-snug">
          A drop-in SDK for product teams. From event to insight in under 30 seconds.
        </p>
        <div className="flex gap-1.5 mt-3">
          <span className="bg-[#2457FF] text-white px-2 py-1 text-[6px] tracking-widest">START FREE</span>
          <span className="border border-white/30 text-white px-2 py-1 text-[6px] tracking-widest">↓ DOCS</span>
        </div>
        <div className="mt-3 bg-[#111] border border-white/10 p-2 rounded-sm">
          <p className="font-mono text-[6px] text-white/70">$ npm i @orbit/sdk</p>
          <p className="font-mono text-[6px] text-[#5BE584] mt-0.5">✓ ready in 0.3s</p>
        </div>
      </div>
    </Browser>
  </div>
);
