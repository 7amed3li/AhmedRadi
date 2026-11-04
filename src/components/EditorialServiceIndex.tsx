"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAllServices } from "@/data/servicesData";
import { buildWhatsAppLink } from "@/config/officeConfig";
import { ArrowLeftIcon, WhatsAppIcon, CheckIcon, ChevronDownIcon } from "@/components/Icons";

export default function EditorialServiceIndex() {
  const services = getAllServices();
  const [expandedSlug, setExpandedSlug] = useState<string | null>(services[0].slug);

  const toggle = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <div id="services-index" className="divide-y divide-slate-200 border-t border-b border-slate-200">
      {services.map((service, idx) => {
        const isExpanded = expandedSlug === service.slug;
        const numberStr = (idx + 1).toString().padStart(2, "0");
        const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

        return (
          <div
            key={service.slug}
            className={`transition-colors duration-200 ${
              isExpanded ? "bg-slate-50/70" : "hover:bg-slate-50/40"
            }`}
          >
            {/* Clickable Header Row */}
            <button
              type="button"
              onClick={() => toggle(service.slug)}
              className="w-full py-6 sm:py-8 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-4 text-right focus:outline-none"
              aria-expanded={isExpanded}
            >
              <div className="flex items-start sm:items-center gap-6 sm:gap-10 flex-1">
                {/* Large Architectural Numeral */}
                <span className="num-editorial text-2xl sm:text-3xl font-extrabold text-slate-300 shrink-0 w-10">
                  {numberStr}
                </span>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg sm:text-2xl font-black text-[#070B14] leading-tight group-hover:text-[#C5A059] transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md">
                      {service.categoryName}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal line-clamp-1 max-w-2xl">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 mr-4">
                <span className="hidden md:inline-block text-xs font-semibold text-slate-400">
                  {isExpanded ? "إغلاق التفاصيل" : "عرض التفاصيل"}
                </span>
                <span
                  className={`w-9 h-9 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-600 transition-transform duration-200 ${
                    isExpanded ? "rotate-180 bg-[#070B14] text-white border-[#070B14]" : ""
                  }`}
                >
                  <ChevronDownIcon size={16} />
                </span>
              </div>
            </button>

            {/* Expanded Architectural Dossier */}
            {isExpanded && (
              <div className="px-4 sm:px-6 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-200/60 animate-in fade-in duration-200">
                
                {/* Problem Intro & Details */}
                <div className="lg:col-span-7 space-y-4 text-right">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
                      نطاق الخدمة الهندسية
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {service.problemIntro}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-[#070B14] block">ما يقدمه المكتب في هذه المعاملة:</span>
                    <div className="space-y-2">
                      {service.officeScope.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                          <CheckIcon size={15} className="text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Requirements & Direct Action Callout */}
                <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 space-y-4 text-right">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block mb-1">المستندات الأولية المقترحة:</span>
                    <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
                      {service.preliminaryDocs.slice(0, 3).map((doc, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckIcon size={14} className="text-[#C5A059] shrink-0" />
                          <span className="line-clamp-1">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-bold bg-[#070B14] text-white hover:bg-slate-800 transition"
                    >
                      <span>الصفحة الرسمية للخدمة</span>
                      <ArrowLeftIcon size={13} />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition"
                    >
                      <WhatsAppIcon size={15} />
                      <span>واتساب فوري</span>
                    </a>
                  </div>
                </div>

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
