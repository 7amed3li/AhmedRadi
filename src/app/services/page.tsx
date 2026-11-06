import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories, getAllServices } from "@/data/servicesData";
import { officeConfig, buildWhatsAppLink } from "@/config/officeConfig";
import ServiceCard from "@/components/ServiceCard";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "دليل الخدمات الهندسية والمساحية",
  description:
    "دليل كامل لخدمات مكتب أحمد راضي للاستشارات الهندسية: رخص البناء، تسوير الأراضي، شهادات الإشغال، التقارير المساحية، والرفع وتحديث الصكوك.",
  alternates: {
    canonical: "https://ahmed-radi-engineering.sa/services",
  },
};

export default function ServicesIndexPage() {
  const allServices = getAllServices();

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#0F2038] to-[#162846] text-white pt-12 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition">الرئيسية</Link>
            <span>/</span>
            <span className="text-[#C5A059] font-semibold">دليل الخدمات</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
              الدليل الشامل للخدمات (12 خدمة بلدية ومساحية)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              الخدمات الهندسية والمساحية في السعودية
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              دليل الخدمات الهندسية وفق اشتراطات كود البناء السعودي ومنصة بلدي، مع توضيح نطاق العمل الهندسي والمستندات المطلوبة لكل معاملة.
            </p>
          </div>

        </div>
      </section>

      {/* Services List by Category */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceCategories.map((cat) => {
          const catServices = cat.serviceSlugs
            .map((slug) => allServices.find((s) => s.slug === slug))
            .filter((s): s is NonNullable<typeof s> => Boolean(s));

          return (
            <div key={cat.id} id={cat.id} className="space-y-6">
              
              <div className="border-r-3 border-[#C5A059] pr-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0A1628]">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-2xl font-normal">
                    {cat.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-md shrink-0">
                  {catServices.length} خدمات
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>

            </div>
          );
        })}
      </section>

      {/* Direct Contact Callout */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0A1628]">
            هل تبحث عن معاملة مخصصة لموقعك؟
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            تواصل مباشرة مع المهندس أحمد راضي لمراجعة وضع الصك وتحديد المسار النظامي.
          </p>
          <div className="pt-2">
            <a
              href={buildWhatsAppLink("السلام عليكم مهندس أحمد، لدي استفسار عن معاملة خاصة.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold bg-[#C5A059] text-[#0A1628] hover:bg-[#D4AF37] transition shadow-md"
            >
              <WhatsAppIcon size={16} />
              <span>محادثة واتساب مباشرة</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
