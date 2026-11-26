"use client";

import React, { useState } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/config/officeConfig";
import { ArrowLeftIcon, WhatsAppIcon, CheckIcon, BuildingIcon, RulerIcon, FileTextIcon, ShieldCheckIcon } from "@/components/Icons";

interface PropertyCase {
  id: string;
  situation: string;
  recommendedService: string;
  slug: string;
  summary: string;
  firstStep: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export default function PropertyFinder() {
  const cases: PropertyCase[] = [
    {
      id: "vacant-build",
      situation: "أرض فضاء وأرغب في بدء البناء",
      recommendedService: "إصدار رخصة بناء + تقرير مساحي",
      slug: "building-license",
      summary: "يلزم إصدار تقرير مساحي معتمد أولاً، ثم إعداد المخططات الهندسية المعمارية والإنشائية ومطابقة كود البناء السعودي.",
      firstStep: "إرسال صورة الصك الإلكتروني لإصدار التقرير المساحي وبدء التصميم.",
      icon: BuildingIcon,
    },
    {
      id: "vacant-fence",
      situation: "أرض فضاء ملزمة بالتسوير تجنباً للغرامات",
      recommendedService: "إصدار رخصة تسوير أرض فضاء + تثبيت ركائز",
      slug: "land-fencing-license",
      summary: "تسوير الأرض بنموذج الأمانة المعتمد مع تحديد وتثبيت زوايا الأرض لمنع أي تعدي على الشارع أو الجيران.",
      firstStep: "تحديد موقع الأرض والتحقق من وقوعها ضمن المحاور الملزمة للأمانة.",
      icon: RulerIcon,
    },
    {
      id: "expired-license",
      situation: "مبنى متوقف ورخصة البناء منتهية",
      recommendedService: "تجديد رخص البناء",
      slug: "renew-building-license",
      summary: "معاينة نسبة الإنجاز على أرض الواقع ورفع طلب تمديد أو تجديد صلاحية الرخصة لاستكمال التشطيبات نظامياً.",
      firstStep: "تزويد المكتب بنسخة من رخصة البناء السابقة وصور حديثة للمبنى.",
      icon: FileTextIcon,
    },
    {
      id: "completed-electric",
      situation: "مبنى مكتمل وأرغب بإطلاق التيار الكهربائي",
      recommendedService: "إصدار شهادة إتمام بناء (شهادة إشغال)",
      slug: "occupancy-certificate",
      summary: "الكشف الميداني والتأكد من مطابقة الواجهات والارتدادات والعزل الحراري لإشعار شركة الكهرباء.",
      firstStep: "توفير رخصة البناء وشهادة تركيب العزل المعتمدة من شركة الكهرباء.",
      icon: ShieldCheckIcon,
    },
    {
      id: "paper-deed",
      situation: "صك ورقي قديم أحتاج تحويله إلكترونياً",
      recommendedService: "تحديث الصكوك الورقية + رفع مساحي",
      slug: "deed-update",
      summary: "إجراء الرفع المساحي الميداني لمطابقة أطوال وحدود الصك بالواقع واستخراج التقرير المساحي المعتمد للبورصة العقارية.",
      firstStep: "إرسال صورة واضحة للصك الورقي القديم من الوجهين وموقع الأرض.",
      icon: FileTextIcon,
    },
    {
      id: "unlicensed-building",
      situation: "مبنى قائم قديم بدون رخصة أو فيه زيادة مساحات",
      recommendedService: "تصحيح وضع المباني القائمة",
      slug: "correct-building-status",
      summary: "إجراء الفحص الإنشائي ورفع المخططات للواقع المنفذ وإعداد تقرير السلامة الإنشائية لتسوية وضعه لدى الأمانة.",
      firstStep: "معاينة المبنى وفحص السلامة الإنشائية وعدم تعديه على خطوط التنظيم.",
      icon: BuildingIcon,
    },
  ];

  const [selectedCase, setSelectedCase] = useState(cases[0]);

  return (
    <div className="relative bg-white rounded-[1.75rem] border border-slate-200/80 shadow-card p-5 sm:p-8 lg:p-12 space-y-6 sm:space-y-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-blueprint opacity-30 pointer-events-none" />

      <div className="relative max-w-2xl text-right space-y-2.5">
        <span className="eyebrow">
          مساعد توجيه المعاملة الهندسية
        </span>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-ink-900 leading-snug">
          حدد حالة عقارك لمعرفة المسار الفني الصحيح
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
          اختر الوضع الحالي لعقارك ليظهر لك المسار الهندسي والخطوة الأولى للتنفيذ.
        </p>
      </div>

      {/* Situation Selector Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
        {cases.map((c) => {
          const isSelected = c.id === selectedCase.id;
          const Icon = c.icon;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCase(c)}
              className={`p-3.5 sm:p-4 rounded-2xl text-right border transition-all duration-300 text-xs sm:text-sm font-bold flex items-center justify-between gap-3 focus:outline-none active:scale-[0.98] ${
                isSelected
                  ? "bg-ink-900 border-ink-900 text-white shadow-lift ring-1 ring-ink-900"
                  : "bg-white border-slate-200 text-slate-800 hover:border-brass-500/50 hover:shadow-chip"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? "bg-brass-500 text-ink-950" : "bg-mist text-slate-600"
                }`}>
                  <Icon size={16} />
                </div>
                <span className="leading-snug text-xs sm:text-sm font-semibold">{c.situation}</span>
              </div>
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                isSelected ? "border-brass-500 bg-brass-500 text-ink-950" : "border-slate-300 text-transparent"
              }`}>
                <CheckIcon size={11} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Result Box */}
      <div key={selectedCase.id} className="relative bg-paper rounded-3xl p-4 sm:p-7 border border-slate-200/90 space-y-4 text-right shadow-chip animate-slide-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 border-b border-slate-200/70 pb-4">
          <div>
            <span className="text-[11px] sm:text-xs text-slate-400 block font-light">الخدمة الهندسية الموصى بها:</span>
            <h4 className="text-base sm:text-xl font-bold text-ink-900 mt-1 leading-snug">
              {selectedCase.recommendedService}
            </h4>
          </div>
          <Link
            href={`/services/${selectedCase.slug}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-ink-900 text-white hover:bg-ink-800 transition w-full sm:w-auto shrink-0 group"
          >
            <span>صفحة تفاصيل الخدمة</span>
            <ArrowLeftIcon size={13} className="text-brass-400 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {selectedCase.summary}
        </p>

        <div className="p-3.5 sm:p-4 bg-brass-50 rounded-2xl border border-brass-100 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
          <span className="w-6 h-6 rounded-full bg-brass-500/15 flex items-center justify-center shrink-0">
            <CheckIcon size={13} className="text-brass-600" />
          </span>
          <div>
            <strong className="text-ink-900 font-semibold">الخطوة الأولى المقترحة: </strong>
            <span className="font-light">{selectedCase.firstStep}</span>
          </div>
        </div>

        <div className="pt-2">
          <a
            href={buildWhatsAppLink(`السلام عليكم مهندس أحمد، لدي حالة: (${selectedCase.situation}) وأرغب في استشارة عن ${selectedCase.recommendedService}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-ink-900 text-white hover:bg-ink-800 transition shadow-chip"
          >
            <WhatsAppIcon size={16} className="text-brass-400" />
            <span>بدء المحادثة عن هذه الحالة عبر واتساب</span>
          </a>
        </div>
      </div>

    </div>
  );
}
