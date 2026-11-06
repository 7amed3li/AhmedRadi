"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import { PhoneIcon, WhatsAppIcon, MenuIcon, CloseIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-4 group focus:outline-none">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-lg p-0.5 overflow-hidden shrink-0 border border-slate-800/80 shadow-xs group-hover:scale-102 transition-transform">
              <Image
                src="/logo.webp"
                alt="شعار أحمد راضي للاستشارات الهندسية"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-black text-xl sm:text-2xl text-[#070B14] tracking-tight leading-none">
                أحمد راضي
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide mt-1">
                استشارات هندسية ومساحية
              </span>
            </div>
          </Link>

          {/* Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold tracking-wide">
            <Link 
              href="/" 
              className="text-[#070B14] hover:text-[#C5A059] transition-colors py-2 focus:outline-none"
            >
              الرئيسية
            </Link>
            <Link 
              href="/#services-index" 
              className="text-slate-600 hover:text-[#070B14] transition-colors py-2 focus:outline-none"
            >
              الخدمات الهندسية
            </Link>
            <Link 
              href="/#process" 
              className="text-slate-600 hover:text-[#070B14] transition-colors py-2 focus:outline-none"
            >
              المسار الهندسي
            </Link>
            <Link 
              href="/#trust" 
              className="text-slate-600 hover:text-[#070B14] transition-colors py-2 focus:outline-none"
            >
              المعايير والاشتراطات
            </Link>
            <Link 
              href="/#faq" 
              className="text-slate-600 hover:text-[#070B14] transition-colors py-2 focus:outline-none"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          {/* Minimalist Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={getPhoneLink(0)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-slate-800 hover:text-[#070B14] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all focus:outline-none"
              title={`اتصال بـ ${officeConfig.phone.display}`}
            >
              <PhoneIcon size={13} className="text-[#C5A059]" />
              <span dir="ltr">{officeConfig.phone.display}</span>
            </a>

            {officeConfig.secondaryPhone && (
              <a
                href={getPhoneLink(1)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold text-slate-800 hover:text-[#070B14] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all focus:outline-none"
                title={`اتصال بـ ${officeConfig.secondaryPhone.display}`}
              >
                <PhoneIcon size={13} className="text-[#C5A059]" />
                <span dir="ltr">{officeConfig.secondaryPhone.display}</span>
              </a>
            )}

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold bg-[#070B14] text-white hover:bg-slate-800 transition-all shadow-xs focus:outline-none"
            >
              <WhatsAppIcon size={15} className="text-[#C5A059]" />
              <span>محادثة واتساب</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-md bg-[#070B14] text-white shadow-xs"
              aria-label="محادثة واتساب"
            >
              <WhatsAppIcon size={18} className="text-[#C5A059]" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-md text-slate-700 hover:text-slate-900 bg-slate-50 border border-slate-200 focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 pt-4 pb-8 space-y-4">
          <nav className="flex flex-col space-y-2 text-base font-bold text-slate-800">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#C5A059]"
            >
              الرئيسية
            </Link>
            <Link
              href="/#services-index"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#C5A059]"
            >
              دليل الخدمات الـ 12
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#C5A059]"
            >
              المسار الهندسي
            </Link>
            <Link
              href="/#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#C5A059]"
            >
              المعايير والاشتراطات
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#C5A059]"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={getPhoneLink(0)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-xs font-bold bg-slate-100 text-slate-900"
            >
              <PhoneIcon size={14} className="text-[#C5A059]" />
              <span>اتصال ({officeConfig.phone.display})</span>
            </a>
            {officeConfig.secondaryPhone && (
              <a
                href={getPhoneLink(1)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-xs font-bold bg-slate-100 text-slate-900"
              >
                <PhoneIcon size={14} className="text-[#C5A059]" />
                <span>اتصال ({officeConfig.secondaryPhone.display})</span>
              </a>
            )}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md text-xs font-bold bg-[#070B14] text-white"
            >
              <WhatsAppIcon size={15} className="text-[#C5A059]" />
              <span>محادثة واتساب فورية</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
