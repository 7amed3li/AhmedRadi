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
    <div id="services-index" className="divide-y divide-slate-200/90 border-y border-slate-200/90">
      {services.map((service, idx) => {
        const isExpanded = expandedSlug === service.slug;
        const numberStr = (idx + 1).toString().padStart(2, "0");
        const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

        return (
          <div
            key={service.slug}
            className={`relative transition-colors duration-300 ${
              isExpanded ? "bg-white shadow-card" : "hover:bg-white/60"
            }`}
          >
            {isExpanded && (
              <span className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-b from-brass-400 to-brass-600" />
            )}

            {/* Clickable Header Row */}
            <button
              type="button"
              onClick={() => toggle(service.slug)}
              className="group w-full py-5 sm:py-7 px-3 sm:px-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 text-right focus:outline-none"
              aria-expanded={isExpanded}
            >
              <div className="flex items-start sm:items-center gap-3 sm:gap-8 flex-1 min-w-0">
                {/* Large Architectural Numeral */}
                <span
                  className={`num-editorial font-display text-xl sm:text-[2rem] font-black shrink-0 w-8 sm:w-12 pt-0.5 sm:pt-0 transition-colors duration-300 ${
                    isExpanded ? "text-brass-500" : "text-slate-300 group-hover:text-brass-400"
                  }`}
                >
                  {numberStr}
                </span>

                <div className="space-y-1.5 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h3 className="text-base sm:text-2xl font-black text-ink-900 leading-tight transition-colors group-hover:text-brass-600">
                      {service.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 bg-mist px-2.5 py-0.5 rounded-full">
                      {service.categoryName}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal line-clamp-1 max-w-2xl">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0 mr-2 sm:mr-4">
                <span className="hidden md:inline-block text-xs font-semibold text-slate-400">
                  {isExpanded ? "إغلاق التفاصيل" : "عرض التفاصيل"}
                </span>
                <span
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? "rotate-180 bg-ink-900 text-brass-400 border-ink-900"
                      : "bg-white border-slate-200 text-slate-600 group-hover:border-brass-500/50"
                  }`}
                >
                  <ChevronDownIcon size={15} />
                </span>
              </div>
            </button>

            {/* Expanded Architectural Dossier */}
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-6 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-100">

                  {/* Problem Intro & Details */}
                  <div className="lg:col-span-7 space-y-4 text-right">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-brass-600 uppercase tracking-wider block">
                        نطاق الخدمة الهندسية
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {service.problemIntro}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-bold text-ink-900 block">ما يقدمه المكتب في هذه المعاملة:</span>
                      <div className="space-y-2">
                        {service.officeScope.slice(0, 3).map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-normal">
                            <span className="w-5 h-5 rounded-full bg-brass-500/12 flex items-center justify-center shrink-0 mt-0.5">
                              <CheckIcon size={12} className="text-brass-600" />
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Requirements & Direct Action Callout */}
                  <div className="lg:col-span-5 bg-paper p-6 rounded-3xl border border-slate-200/90 space-y-4 text-right shadow-chip">
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 block mb-1">المستندات الأولية المقترحة:</span>
                      <ul className="space-y-1.5 text-xs text-slate-600 font-normal">
                        {service.preliminaryDocs.slice(0, 3).map((doc, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckIcon size={14} className="text-brass-500 shrink-0" />
                            <span className="line-clamp-1">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-ink-900 text-white hover:bg-ink-800 transition shadow-chip text-center group"
                      >
                        <span>تفاصيل الخدمة</span>
                        <ArrowLeftIcon size={13} className="text-brass-400 transition-transform group-hover:-translate-x-0.5" />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition text-center"
                      >
                        <WhatsAppIcon size={15} />
                        <span>واتساب فوري</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
