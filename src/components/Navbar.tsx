"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import { PhoneIcon, WhatsAppIcon, MenuIcon, CloseIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A1628] border-b border-slate-800 text-white shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Office Title */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="relative w-12 h-12 rounded-lg bg-black border border-slate-700/80 p-0.5 overflow-hidden shrink-0 group-hover:border-[#C5A059] transition-colors shadow-sm">
              <Image
                src="/logo.webp"
                alt="شعار مكتب أحمد راضي للاستشارات الهندسية"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight leading-tight group-hover:text-[#E2C285] transition-colors">
                أحمد راضي
              </span>
              <span className="text-[11px] text-[#C5A059] font-medium tracking-wide">
                استشارات هندسية ومساحية
              </span>
            </div>
          </Link>

          {/* Corporate Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <Link 
              href="/" 
              className="text-slate-100 hover:text-[#C5A059] transition-colors py-2 focus:outline-none"
            >
              الرئيسية
            </Link>
            <Link 
              href="/services" 
              className="text-slate-200 hover:text-[#C5A059] transition-colors py-2 focus:outline-none"
            >
              دليل الخدمات
            </Link>
            <Link 
              href="/#process" 
              className="text-slate-200 hover:text-[#C5A059] transition-colors py-2 focus:outline-none"
            >
              آلية العمل
            </Link>
            <Link 
              href="/#trust" 
              className="text-slate-200 hover:text-[#C5A059] transition-colors py-2 focus:outline-none"
            >
              المعايير الهندسية
            </Link>
            <Link 
              href="/#faq" 
              className="text-slate-200 hover:text-[#C5A059] transition-colors py-2 focus:outline-none"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          {/* Corporate Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-colors focus:outline-none"
              title={`اتصال بـ ${officeConfig.phone.display}`}
            >
              <PhoneIcon size={15} className="text-[#C5A059]" />
              <span dir="ltr">{officeConfig.phone.display}</span>
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#C5A059] text-[#0A1628] hover:bg-[#D4AF37] transition-all shadow-sm focus:outline-none"
            >
              <WhatsAppIcon size={16} />
              <span>محادثة واتساب</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#C5A059] text-[#0A1628]"
              aria-label="محادثة واتساب"
            >
              <WhatsAppIcon size={18} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0A1628] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1.5 text-sm font-semibold">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-900 hover:text-[#C5A059]"
            >
              الرئيسية
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-900 hover:text-[#C5A059]"
            >
              دليل الخدمات (12 خدمة)
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-900 hover:text-[#C5A059]"
            >
              آلية العمل
            </Link>
            <Link
              href="/#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-900 hover:text-[#C5A059]"
            >
              المعايير الهندسية
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-md text-slate-200 hover:bg-slate-900 hover:text-[#C5A059]"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={getPhoneLink()}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs font-bold bg-slate-900 text-white border border-slate-700"
            >
              <PhoneIcon size={16} className="text-[#C5A059]" />
              <span>اتصال هاتفي ({officeConfig.phone.display})</span>
            </a>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs font-bold bg-[#C5A059] text-[#0A1628]"
            >
              <WhatsAppIcon size={16} />
              <span>محادثة واتساب فورية</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
