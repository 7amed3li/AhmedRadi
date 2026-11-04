"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BuildingLicenseVisual,
  SurveyingVisual,
  FencingVisual,
  OccupancyVisual,
  DeedUpdateVisual,
  CivilDefenseVisual,
} from "@/components/EngineeringVisuals";
import { buildWhatsAppLink } from "@/config/officeConfig";
import { ArrowLeftIcon, WhatsAppIcon, CheckIcon } from "@/components/Icons";

interface ShowcaseTab {
  id: string;
  label: string;
  title: string;
  description: string;
  slug: string;
  deliverables: string[];
  visualComponent: React.ReactNode;
}

export default function ServiceShowcase() {
  const tabs: ShowcaseTab[] = [
    {
      id: "building",
      label: "رخص البناء والإنشاء",
      title: "إصدار وتدقيق رخص البناء وفق كود البناء السعودي",
      description: "إعداد وتدقيق المخططات الهندسية المتكاملة (معماري، إنشائي، كهربائي، وميكانيكي) ومطابقة متطلبات العزل والتأمين الإلزامي عبر منصة بلدي.",
      slug: "building-license",
      deliverables: [
        "مخططات معمارية وإنشائية تنفيذية معتمدة",
        "مطابقة كود البناء السعودي واشتراطات العزل الحراري",
        "رفع ومتابعة المعاملة الهندسية في منصة بلدي",
      ],
      visualComponent: <BuildingLicenseVisual className="w-full h-64 sm:h-80" />,
    },
    {
      id: "surveying",
      label: "الرفع والمساحة الطبوغرافية",
      title: "رفع مساحي دقيق وتثبيت الركائز بأجهزة RTK ومحطات الرصد",
      description: "تحديد إحداثيات ومناسيب الأراضي وخطوط الكنتور بدقة متناهية، ومطابقة حدود الصك الإلكتروني على الطبيعة لمنع أي تداخل مع المجاورين.",
      slug: "cadastral-report",
      deliverables: [
        "تقرير مساحي معتمد إلكترونياً عبر منصة بلدي",
        "تحديد وتثبيت الركائز المساحية وزوايا الأرض الأربعة",
        "تسليم ملفات مساحية رقمية بصيغة CAD وGIS جاهزة للتصميم",
      ],
      visualComponent: <SurveyingVisual className="w-full h-64 sm:h-80" />,
    },
    {
      id: "fencing",
      label: "تسوير الأراضي الفضاء",
      title: "استخراج رخص تسوير الأراضي الفضاء وتجنب الغرامات",
      description: "إعداد مخططات التسوير المعتمدة ونماذج الواجهات البلدية للأراضي الواقعة على الشوارع والمحاور التجارية المستهدفة نظامياً.",
      slug: "land-fencing-license",
      deliverables: [
        "مطابقة أبعاد الأرض ومحيط السور مع الصك الشرعي",
        "إعداد نموذج الواجهة ومخطط السور المطابق للبلدية",
        "إصدار رخصة التسوير النظامية عبر منصة بلدي",
      ],
      visualComponent: <FencingVisual className="w-full h-64 sm:h-80" />,
    },
    {
      id: "occupancy",
      label: "شهادات الإشغال وإتمام البناء",
      title: "الكشف الميداني الهندسي لإطلاق التيار الكهربائي",
      description: "معاينة المبنى المنفذ ومطابقة الارتدادات والواجهات وتدقيق شهادات العزل الحراري لاعتماد شهادة الإشغال وإشعار شركة الكهرباء.",
      slug: "occupancy-certificate",
      deliverables: [
        "فحص ميداني لمطابقة المنفذ مع رخصة البناء",
        "تدقيق شهادة العزل الحراري المعتمدة من الكهرباء",
        "إصدار التقرير الفني النهائي لاعتماد شهادة الإشغال",
      ],
      visualComponent: <OccupancyVisual className="w-full h-64 sm:h-80" />,
    },
    {
      id: "deeds",
      label: "تحديث الصكوك الورقية",
      title: "المطابقة المساحية لتحويل الصكوك الورقية القديمة إلى إلكترونية",
      description: "رفع ومطابقة أطوال وحدود الأراضي القديمة بالواقع الميداني، وإصدار التقرير المساحي المطلوب للإفراغ في البورصة العقارية وبوابة ناجز.",
      slug: "deed-update",
      deliverables: [
        "مراجعة أطوال الصك القديم ومطابقتها على الطبيعة",
        "إصدار تقرير مساحي معتمد مخصص لتحديث الصكوك",
        "المساندة الفنية في رفع المتطلبات عبر منصة ناجز",
      ],
      visualComponent: <DeedUpdateVisual className="w-full h-64 sm:h-80" />,
    },
    {
      id: "safety",
      label: "خدمات الدفاع المدني",
      title: "مراجعة مخططات السلامة والوقاية من الحريق",
      description: "التدقيق الهندسي لمسارات الهروب وعروض المخارج ومخططات الإنذار والإطفاء للمنشآت التجارية والمباني بما يتوافق مع منصة سلامة.",
      slug: "civil-defense-services",
      deliverables: [
        "تدقيق اشتراطات كود الحريق وتحديد مسارات الطوارئ",
        "مراجعة مخططات السلامة للمنشآت والأنشطة",
        "المساندة في استيفاء متطلبات منصة سلامة",
      ],
      visualComponent: <CivilDefenseVisual className="w-full h-64 sm:h-80" />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8">
      
      {/* Category Tab Selector Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100 scrollbar-none">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all focus:outline-none ${
                isActive
                  ? "bg-[#050811] text-[#C5A059] shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Dynamic Interactive Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Interactive Architectural CAD Illustration */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="card-hover">
            {activeTab.visualComponent}
          </div>
        </div>

        {/* Right Side: Detailed Technical Specifications & Direct CTA */}
        <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 text-right">
          <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
            المواصفات الفنية والمخرجات
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-snug">
            {activeTab.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {activeTab.description}
          </p>

          <div className="space-y-2.5 pt-2">
            <span className="text-xs font-bold text-slate-700 block">المخرجات والخدمات المشمولة:</span>
            {activeTab.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <div className="w-5 h-5 rounded-full bg-[#050811] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon size={12} />
                </div>
                <span className="font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              href={`/services/${activeTab.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#050811] text-white hover:bg-slate-800 transition shadow-xs"
            >
              <span>تفاصيل الخدمة والاشتراطات</span>
              <ArrowLeftIcon size={14} />
            </Link>

            <a
              href={buildWhatsAppLink(`السلام عليكم مهندس أحمد، أود الاستفسار عن ${activeTab.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition"
            >
              <WhatsAppIcon size={16} />
              <span>استفسار واتساب فوري</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

