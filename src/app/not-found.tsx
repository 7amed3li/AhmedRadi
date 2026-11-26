import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-paper px-4 py-16 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none" />
      <div className="relative max-w-md mx-auto space-y-6">
        <span className="num-editorial font-display text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-brass-400 to-brass-600 block">404</span>
        <h1 className="text-2xl sm:text-3xl font-black text-ink-900">
          الصفحة المطلوبة غير موجودة
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          عذراً، قد يكون الرابط الذي طلبته قد تغير أو تم نقله. يمكنك العودة للصفحة الرئيسية أو تصفح دليل الخدمات الهندسية.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-900 text-white text-xs font-bold hover:bg-ink-800 transition shadow-chip group"
          >
            <span>الصفحة الرئيسية</span>
            <ArrowLeftIcon size={14} className="text-brass-400 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-mist transition shadow-chip"
          >
            <span>دليل الخدمات</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
