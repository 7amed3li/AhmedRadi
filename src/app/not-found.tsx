import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FAF8F5] px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-5xl font-black text-[#C5A059] block">404</span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#070B14]">
          الصفحة المطلوبة غير موجودة
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          عذراً، قد يكون الرابط الذي طلبته قد تغير أو تم نقله. يمكنك العودة للصفحة الرئيسية أو تصفح دليل الخدمات الهندسية.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#070B14] text-white text-xs font-bold hover:bg-slate-800 transition"
          >
            <span>الصفحة الرئيسية</span>
            <ArrowLeftIcon size={14} className="text-[#C5A059]" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition"
          >
            <span>دليل الخدمات</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
