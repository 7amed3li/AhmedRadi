"use client";

import React from "react";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="شريط التواصل السريع"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#050811]/98 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl transition-transform"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#C5A059] text-[#050811] font-bold text-xs shadow-md active:scale-98 transition-all focus:outline-none"
        >
          <WhatsAppIcon size={18} className="shrink-0" />
          <span>محادثة واتساب</span>
        </a>

        <a
          href={getPhoneLink()}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-slate-900 text-white border border-slate-700 font-bold text-xs shadow-md active:scale-98 transition-all focus:outline-none"
        >
          <PhoneIcon size={16} className="text-[#C5A059] shrink-0" />
          <span>اتصال هاتفي</span>
        </a>
      </div>
    </aside>
  );
}
