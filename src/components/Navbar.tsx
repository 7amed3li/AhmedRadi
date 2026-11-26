"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { officeConfig, buildWhatsAppLink } from "@/config/officeConfig";
import { WhatsAppIcon, MenuIcon, CloseIcon, ArrowLeftIcon } from "@/components/Icons";

const navLinkClass =
  "relative py-1.5 text-slate-600 transition-colors hover:text-ink-900 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:rounded-full after:bg-brass-500 after:transition-all after:duration-300 hover:after:w-full focus:outline-none";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl text-slate-900 shadow-[0_1px_0_0_rgb(15_23_42/0.06),0_12px_32px_-24px_rgb(7_11_20/0.25)]">
      <div className="h-[2px] bg-gradient-to-l from-transparent via-brass-500/70 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">

          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center rounded-2xl bg-mist ring-1 ring-slate-900/5 p-1.5 transition-all duration-300 group-hover:ring-brass-500/40 group-hover:shadow-chip">
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
              <span className="font-display font-extrabold text-base sm:text-lg text-ink-900 tracking-tight leading-none transition-colors group-hover:text-brass-600">
                أحمد راضي
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-normal mt-1">
                استشارات هندسية ومساحية
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold">
            <Link
              href="/"
              className={`${navLinkClass} text-ink-900`}
            >
              الرئيسية
            </Link>
            <Link
              href="/#services-index"
              className={navLinkClass}
            >
              الخدمات الهندسية
            </Link>
            <Link
              href="/#property-finder"
              className={navLinkClass}
            >
              مساعد العقار
            </Link>
            <Link
              href="/#process"
              className={navLinkClass}
            >
              آلية العمل
            </Link>
            <Link
              href="/#trust"
              className={navLinkClass}
            >
              المعايير والاشتراطات
            </Link>
            <Link
              href="/#faq"
              className={navLinkClass}
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          {/* Single Prominent Action Button (No multiple competing phone buttons) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/#contact-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-ink-900 text-white hover:bg-ink-800 active:scale-95 transition-all shadow-chip group"
            >
              <span>اطلب استشارة</span>
              <ArrowLeftIcon size={13} className="text-brass-400 transition-transform group-hover:-translate-x-1" />
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
        <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lift animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1 text-sm font-bold text-slate-700 text-right">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-mist hover:text-ink-900 transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/#services-index"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-mist hover:text-ink-900 transition-colors"
            >
              الخدمات الهندسية
            </Link>
            <Link
              href="/#property-finder"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-mist hover:text-ink-900 transition-colors"
            >
              مساعد حالة العقار
            </Link>
            <Link
              href="/#process"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-mist hover:text-ink-900 transition-colors"
            >
              آلية العمل
            </Link>
            <Link
              href="/#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-mist hover:text-ink-900 transition-colors"
            >
              المعايير المهنية
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-xl hover:bg-mist hover:text-ink-900 transition-colors"
            >
              الأسئلة الشائعة
            </Link>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/#contact-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-full text-xs font-bold bg-ink-900 text-white hover:bg-ink-800 transition shadow-chip"
            >
              اطلب استشارة المعاملة
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center gap-2"
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
