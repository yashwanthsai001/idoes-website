import React, { useRef, useState, useCallback } from "react";

// Visual placeholders — replace `before` and `after` with real screenshots later.
const before = {
  bg: "#F4E9D8",
  render: (
    <div className="absolute inset-0 p-6 text-[#3b2f22]" style={{ fontFamily: "Times New Roman, serif" }}>
      <div className="flex justify-between items-center border-b border-[#a98c5f]/40 pb-2">
        <span className="font-bold text-xl">🌐 SunriseCo™</span>
        <span className="text-[10px] underline">Home · About · Shop · Contact</span>
      </div>
      <div className="mt-4 text-center">
        <div className="bg-[#FFD64A] text-[#3b2f22] inline-block px-2 py-1 text-[10px] border border-[#a98c5f]">★ WELCOME TO OUR WEBSITE ★</div>
        <div className="mt-3 text-2xl font-bold leading-tight">We Sell Everything<br/>Online Since 2014!!!</div>
        <div className="mt-2 text-[10px] italic">Best Prices • Free Shipping • Many Products</div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="border border-[#a98c5f] bg-white/50 h-12 flex items-center justify-center text-[9px]">Product {i}</div>
        ))}
      </div>
      <div className="mt-4 text-center bg-red-500 text-white text-[10px] py-1 animate-pulse">!! LIMITED TIME OFFER !! CLICK NOW !!</div>
      <div className="mt-2 text-[8px] text-center opacity-60">Counter: 0023482 visitors</div>
    </div>
  )
};

const after = {
  bg: "#0A0A0A",
  render: (
    <div className="absolute inset-0 p-6 text-white">
      <div className="flex justify-between items-center">
        <span className="font-display-bold text-base">SUNRISE</span>
        <span className="cta-text text-white/70" style={{ fontSize: 8 }}>SHOP · ABOUT · JOURNAL</span>
      </div>
      <div className="mt-6">
        <span className="section-label" style={{ fontSize: 8 }}>[ NEW SEASON ]</span>
        <div className="font-display text-white mt-2 leading-[0.95]" style={{ fontSize: 28 }}>
          QUIET<br/>OBJECTS.<br/><span className="text-[#2457FF] italic">LOUD INTENT.</span>
        </div>
      </div>
      <div className="absolute right-4 top-20 w-20 h-20 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #2457FF, #0A0A0A 70%)" }} />
      <div className="mt-5 flex gap-2">
        <span className="bg-[#2457FF] text-white px-3 py-1.5 text-[8px] tracking-widest">→ SHOP</span>
        <span className="border border-white/30 text-white px-3 py-1.5 text-[8px] tracking-widest">↓ LOOKBOOK</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-1.5">
        {[1,2,3].map(i => (
          <div key={i} className="h-10 bg-[#111] border border-[#222]" />
        ))}
      </div>
    </div>
  )
};

export default function BeforeAfter() {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = useCallback((clientX) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    move(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    move(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <div data-testid="before-after">
      <p className="section-label-dark">[ CASE STUDY ]</p>
      <h3 className="font-display text-[#0A0A0A] mt-4" style={{ fontSize: "clamp(36px, 5vw, 72px)" }}>
        BEFORE<span className="text-[#2457FF]"> · </span>AFTER
      </h3>
      <p className="text-[#555] text-sm lg:text-base mt-3 max-w-xl">Drag the handle to see how we turned a cluttered 2014-era store into a premium 2026 brand.</p>

      <div
        ref={ref}
        className="relative mt-10 w-full aspect-[16/10] max-w-[1100px] bg-[#111] border border-[#222] overflow-hidden select-none"
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {/* AFTER (full width, beneath) */}
        <div className="absolute inset-0" style={{ background: after.bg }}>
          {after.render}
        </div>
        {/* BEFORE (clipped to pos) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%`, background: before.bg }}>
          <div className="relative h-full" style={{ width: `${100 / (pos/100)}%`, maxWidth: '100vw' }}>
            <div style={{ position: "absolute", inset: 0, width: ref.current ? `${ref.current.offsetWidth}px` : "100%" }}>
              {before.render}
            </div>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-4 left-4 cta-text bg-black/70 text-white px-3 py-1 text-[10px]">BEFORE</span>
        <span className="absolute top-4 right-4 cta-text bg-[#2457FF] text-white px-3 py-1 text-[10px]">AFTER</span>
        {/* Slider line + handle */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-[#2457FF]" style={{ left: `${pos}%`, transform: "translateX(-1px)" }} />
        <button
          aria-label="Drag to compare"
          data-testid="before-after-handle"
          className="absolute top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-[#2457FF] border-2 border-white flex items-center justify-center cursor-ew-resize"
          style={{ left: `${pos}%` }}
          onMouseDown={onDown}
          onTouchStart={onDown}
        >
          <span className="text-white text-lg">⇄</span>
        </button>
      </div>
    </div>
  );
}
