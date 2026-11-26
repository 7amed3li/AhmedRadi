"use client";

import React from "react";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="شريط التواصل السريع"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-ink-950/95 backdrop-blur-xl border-t border-white/10 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-lift"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-gradient-to-b from-brass-400 to-brass-500 text-ink-950 font-bold text-xs shadow-gold active:scale-95 transition-all focus:outline-none"
        >
          <WhatsAppIcon size={18} className="shrink-0" />
          <span>محادثة واتساب</span>
        </a>

        <a
          href={getPhoneLink()}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-white/[0.06] text-white border border-white/15 font-bold text-xs active:scale-95 transition-all focus:outline-none"
        >
          <PhoneIcon size={16} className="text-brass-400 shrink-0" />
          <span>اتصال هاتفي</span>
        </a>
      </div>
    </aside>
  );
}
