import React from "react";
import Link from "next/link";
import { officeConfig, buildWhatsAppLink } from "@/config/officeConfig";
import { CompassDraftingIcon, WhatsAppIcon, ArrowLeftIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-xs">
        
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0B1B33] text-[#C5A869] flex items-center justify-center">
          <CompassDraftingIcon size={32} />
        </div>

        <span className="text-4xl font-black text-[#0B1B33] font-mono block">
          404
        </span>

        <h1 className="text-xl sm:text-2xl font-bold text-[#0B1B33]">
          الصفحة المطلوبة غير موجودة
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          ربما تم نقل الصفحة أو أن الرابط غير صحيح. يمكنك العودة إلى الصفحة الرئيسية أو تصفح دليل الخدمات الهندسية والمساحية.
        </p>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#0B1B33] text-white hover:bg-[#132747] transition shadow-xs flex items-center justify-center gap-2"
          >
            <span>العودة للصفحة الرئيسية</span>
            <ArrowLeftIcon size={16} />
          </Link>

          <Link
            href="/services"
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-gray-100 text-[#0B1B33] hover:bg-gray-200 transition"
          >
            استعراض دليل الخدمات (12 خدمة)
          </Link>

          <a
            href={buildWhatsAppLink("السلام عليكم، كنت أتصفح الموقع وواجهت صفحة غير موجودة وأود الاستفسار.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#15803d] bg-[#f0fdf4] hover:bg-[#dcfce7] border border-[#bbf7d0] transition flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={16} />
            <span>مساعدة فورية عبر واتساب</span>
          </a>
        </div>

      </div>
    </div>
  );
}

