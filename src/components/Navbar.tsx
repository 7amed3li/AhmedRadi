"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { officeConfig, buildWhatsAppLink } from "@/config/officeConfig";
import { WhatsAppIcon, MenuIcon, CloseIcon, ArrowLeftIcon } from "@/components/Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 group-hover:scale-105 transition-all flex items-center justify-center">
              <Image
                src="/logo-clean.webp"
                alt="شعار أحمد راضي للاستشارات الهندسية"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-bold text-base sm:text-lg text-[#070B14] tracking-tight leading-none group-hover:text-[#C5A059] transition-colors">
                أحمد راضي
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-normal mt-1">
                استشارات هندسية ومساحية
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-600">
            <Link 
              href="/" 
              className="text-[#070B14] hover:text-[#C5A059] transition-colors py-1 focus:outline-none"
            >
              الرئيسية
            </Link>
            <Link 
              href="/#services-index" 
              className="hover:text-[#070B14] hover:text-[#C5A059] transition-colors py-1 focus:outline-none"
            >
              الخدمات الهندسية
            </Link>
            <Link 
              href="/#property-finder" 
              className="hover:text-[#070B14] hover:text-[#C5A059] transition-colors py-1 focus:outline-none"
            >
              مساعد العقار
            </Link>
            <Link 
              href="/#process" 
              className="hover:text-[#070B14] hover:text-[#C5A059] transition-colors py-1 focus:outline-none"
            >
              آلية العمل
            </Link>
            <Link 
              href="/#trust" 
              className="hover:text-[#070B14] hover:text-[#C5A059] transition-colors py-1 focus:outline-none"
            >
              المعايير والاشتراطات
            </Link>
            <Link 
              href="/#faq" 
              className="hover:text-[#070B14] hover:text-[#C5A059] transition-colors py-1 focus:outline-none"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          {/* Single Prominent Action Button (No multiple competing phone buttons) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#contact-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#070B14] text-white hover:bg-slate-800 active:scale-95 transition-all shadow-xs border border-[#070B14] group"
            >
              <span>اطلب استشارة</span>
              <ArrowLeftIcon size={13} className="text-[#C5A059] transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {mobileMenuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 text-sm font-bold text-slate-700 text-right">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#070B14]"
            >
              الرئيسية
            </Link>
            <Link 
              href="/#services-index" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#070B14]"
            >
              الخدمات الهندسية
            </Link>
            <Link 
              href="/#property-finder" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#070B14]"
            >
              مساعد حالة العقار
            </Link>
            <Link 
              href="/#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#070B14]"
            >
              آلية العمل
            </Link>
            <Link 
              href="/#trust" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#070B14]"
            >
              المعايير المهنية
            </Link>
            <Link 
              href="/#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#070B14]"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/#contact-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-xl text-xs font-bold bg-[#070B14] text-white hover:bg-slate-800 transition shadow-xs"
            >
              اطلب استشارة المعاملة
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>محادثة واتساب مباشرة</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
