import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories, getAllServices } from "@/data/servicesData";
import { officeConfig, buildWhatsAppLink, SITE_URL } from "@/config/officeConfig";
import ServiceCard from "@/components/ServiceCard";
import { WhatsAppIcon } from "@/components/Icons";

const baseUrl = SITE_URL.replace(/\/+$/, "");

export const metadata: Metadata = {
  title: {
    absolute: "دليل الخدمات الهندسية والمساحية في السعودية | مكتب أحمد راضي معتمد",
  },
  description:
    "الدليل الشامل للخدمات الهندسية والمساحية المعتمدة في المملكة العربية السعودية: رخص البناء، رخص تسوير الأراضي الفضاء، التقارير والرفوعات المساحية، شهادات الإشغال، وتحديث الصكوك عبر منصة بلدي وكود البناء السعودي.",
  keywords: [
    "مكتب هندسي معتمد",
    "استشارات هندسية ومساحية السعودية",
    "إصدار رخصة بناء بلدي",
    "رخصة تسوير أرض فضاء",
    "تقرير مساحي بلدي إلكتروني",
    "رفع مساحي طبوغرافي GPS",
    "تثبيت ركائز الأرض",
    "شهادة إتمام بناء وإشغال",
    "تجديد رخصة بناء",
    "تعديل رخصة بناء",
    "تحديث الصكوك الورقية ناجز",
    "تصحيح أوضاع المباني",
    "كود البناء السعودي SBC",
    "مكتب هندسي الرياض",
  ],
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "دليل الخدمات الهندسية والمساحية في السعودية | مكتب أحمد راضي معتمد",
    description: "الدليل الشامل لكافة خدمات رخص البناء والتسوير والتقارير المساحية وشهادات الإشغال.",
    url: `${baseUrl}/services`,
    siteName: officeConfig.brandName,
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: `${baseUrl}/logo-clean.webp`,
        width: 800,
        height: 800,
        alt: officeConfig.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "دليل الخدمات الهندسية والمساحية في السعودية | مكتب أحمد راضي",
    description: "الدليل الشامل لكافة خدمات رخص البناء والتسوير والتقارير المساحية وشهادات الإشغال.",
    images: [`${baseUrl}/logo-clean.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ServicesIndexPage() {
  const allServices = getAllServices();

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "دليل الخدمات الهندسية والمساحية في السعودية",
    "description": "قائمة الخدمات الهندسية والمساحية المعتمدة عبر منصة بلدي وكود البناء السعودي بمكتب أحمد راضي",
    "itemListElement": allServices.map((srv, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": srv.title,
      "url": `${baseUrl}/services/${srv.slug}`
    }))
  };

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />
      
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-ink-850 to-ink-800 text-white pt-14 pb-20">
        <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-brass-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 gold-rule" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition">الرئيسية</Link>
            <span>/</span>
            <span className="text-brass-400 font-semibold">دليل الخدمات</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="eyebrow eyebrow-light">
              الدليل الشامل للخدمات (12 خدمة بلدية ومساحية)
            </span>
            <h1 className="text-3xl sm:text-[2.75rem] font-black text-white leading-tight">
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
              
              <div className="border-r-[3px] border-brass-500 pr-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-ink-900">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-2xl font-normal">
                    {cat.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full shrink-0 shadow-chip">
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
      <section className="py-14 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-black text-ink-900">
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
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold bg-gradient-to-b from-brass-400 to-brass-500 text-ink-950 hover:from-brass-300 hover:to-brass-400 transition shadow-gold"
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
