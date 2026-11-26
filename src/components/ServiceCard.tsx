import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/servicesData";
import { buildWhatsAppLink } from "@/config/officeConfig";
import { ArrowLeftIcon, WhatsAppIcon, CheckIcon } from "@/components/Icons";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const whatsappUrl = buildWhatsAppLink(service.whatsappMessage);

  return (
    <article className="group relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-chip hover:shadow-lift hover:-translate-y-1 hover:border-brass-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <span className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-l from-transparent via-brass-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div>
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <span className="text-[11px] font-semibold text-brass-700 bg-brass-50 px-2.5 py-1 rounded-full">
            {service.categoryName}
          </span>
          <span className="text-[11px] text-slate-400 font-mono tracking-wide">
            SBC
          </span>
        </div>

        <h3 className="text-base font-bold text-ink-900 group-hover:text-brass-600 transition-colors mb-2 leading-snug">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 font-normal">
          {service.shortDescription}
        </p>

        <div className="space-y-1.5 mb-5 pt-3.5 border-t border-slate-100 text-xs text-slate-500">
          {service.officeScope.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckIcon size={14} className="text-brass-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3.5 flex items-center gap-2 border-t border-slate-100">
        <Link
          href={`/services/${service.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs font-bold text-slate-800 bg-mist hover:bg-ink-900 hover:text-white border border-transparent transition-colors group/btn"
        >
          <span>تفاصيل الخدمة</span>
          <ArrowLeftIcon size={13} className="transition-transform group-hover/btn:-translate-x-0.5" />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2.5 rounded-full text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          title={`استفسار واتساب عن ${service.title}`}
          aria-label={`استفسار واتساب عن ${service.title}`}
        >
          <WhatsAppIcon size={16} />
        </a>
      </div>
    </article>
  );
}
