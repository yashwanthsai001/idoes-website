import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ref = useRef(null);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const over = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      if (t.closest("a, button, input, [role='button'], .service-row")) setExpand(true);
      else setExpand(false);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return <div ref={ref} className={`custom-cursor ${expand ? "expand" : ""}`} aria-hidden />;
}
