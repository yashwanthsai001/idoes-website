import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../lib/constants";

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      data-testid="whatsapp-float"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#2457FF] hover:bg-[#1640D9] text-white shadow-2xl flex items-center gap-3 transition-all"
      style={{ borderRadius: 9999, padding: hover ? "16px 24px" : "16px" }}
    >
      <MessageCircle size={22} strokeWidth={2} />
      {hover && <span className="cta-text whitespace-nowrap">CHAT WITH US →</span>}
    </a>
  );
}
