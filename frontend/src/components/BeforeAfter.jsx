import React, { useRef, useState, useCallback } from "react";

/* Easy to swap later: replace with your own screenshot URLs. */
const BEFORE_IMG = "https://customer-assets.emergentagent.com/job_idoes-preview/artifacts/l1o5blgw_Before%20image%20%281%29.png";
const AFTER_IMG  = "https://customer-assets.emergentagent.com/job_idoes-preview/artifacts/2o6g6pkt_After%20Image.png";

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
      <p className="text-[#555] text-sm lg:text-base mt-3 max-w-xl">
        Drag the handle to compare the original site against the redesign we delivered.
      </p>

      <div
        ref={ref}
        className="relative mt-10 w-full max-w-[1100px] bg-[#F2F2F2] border border-[#E5E5E5] overflow-hidden select-none"
        style={{ aspectRatio: "16 / 9" }}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {/* AFTER (full width, underneath) */}
        <img
          src={AFTER_IMG}
          alt="After redesign"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* BEFORE (clipped via inset-clip) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={BEFORE_IMG}
            alt="Before redesign"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 cta-text bg-black/70 text-white px-3 py-1.5 text-[10px] z-10 backdrop-blur-sm">
          BEFORE
        </span>
        <span className="absolute top-4 right-4 cta-text bg-[#2457FF] text-white px-3 py-1.5 text-[10px] z-10">
          AFTER
        </span>

        {/* Slider line + handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#2457FF] z-20 pointer-events-none shadow-[0_0_24px_rgba(36,87,255,0.45)]"
          style={{ left: `${pos}%`, transform: "translateX(-1px)" }}
        />
        <button
          aria-label="Drag to compare"
          data-testid="before-after-handle"
          className="absolute top-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-[#2457FF] rounded-full flex items-center justify-center cursor-ew-resize z-20 shadow-[0_10px_30px_rgba(36,87,255,0.25)] hover:scale-105 transition-transform"
          style={{ left: `${pos}%` }}
          onMouseDown={onDown}
          onTouchStart={onDown}
        >
          <span className="text-[#2457FF] text-xl font-bold leading-none">⇄</span>
        </button>
      </div>
    </div>
  );
}
