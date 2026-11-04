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
    <article className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
            {service.categoryName}
          </span>
          <span className="text-[11px] text-slate-400 font-mono">
            SBC
          </span>
        </div>

        <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#001F54] transition-colors mb-2 leading-snug">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4 font-normal">
          {service.shortDescription}
        </p>

        <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 text-xs text-slate-500">
          {service.officeScope.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckIcon size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 flex items-center gap-2 border-t border-slate-100">
        <Link
          href={`/services/${service.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-slate-800 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 transition-colors"
        >
          <span>تفاصيل الخدمة</span>
          <ArrowLeftIcon size={13} />
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-2 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          title={`استفسار واتساب عن ${service.title}`}
          aria-label={`استفسار واتساب عن ${service.title}`}
        >
          <WhatsAppIcon size={16} />
        </a>
      </div>
    </article>
  );
}
