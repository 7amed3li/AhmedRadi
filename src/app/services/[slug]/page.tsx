import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServices, getServiceBySlug } from "@/data/servicesData";
import { officeConfig, buildWhatsAppLink, getPhoneLink, SITE_URL } from "@/config/officeConfig";
import InquiryForm from "@/components/InquiryForm";
import FaqAccordion from "@/components/FaqAccordion";
import ServiceCard from "@/components/ServiceCard";
import { getServiceVisual } from "@/components/EngineeringVisuals";
import {
  CompassDraftingIcon,
  PhoneIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  ExternalLinkIcon,
  FileTextIcon,
  CheckIcon,
  MinusIcon,
} from "@/components/Icons";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

const serviceSeoKeywords: Record<string, string[]> = {
  "building-license": [
    "إصدار رخصة بناء",
    "رخصة بناء بلدي",
    "مكتب هندسي لرخص البناء",
    "شروط رخصة البناء السكني والتجاري",
    "كود البناء السعودي رخص",
    "مخططات معمارية وإنشائية معتمدة",
    "استخراج رخصة بناء فيلا",
    "مكتب هندسي معتمد بالرياض",
    "عقد مقاولة وإشراف هندسي بلدي",
    "تأمين العيوب الخفية رخصة بناء",
    "تكلفة إصدار رخصة البناء في السعودية",
    "منصة بلدي رخص بناء",
  ],
  "land-fencing-license": [
    "رخصة تسوير أرض فضاء",
    "تسوير الأراضي الفضاء بلدي",
    "غرامة عدم تسوير الأرض الفضاء",
    "مخطط تسوير واجهات معتمد",
    "شروط تسوير الأراضي الفضاء",
    "مكتب هندسي تسوير أراضي",
    "إصدار رخصة تسوير فورية بلدي",
    "تسوير أراضي الرياض والمناطق",
    "لائحة تسوير الأراضي وزارة البلديات",
  ],
  "cadastral-report": [
    "إصدار تقرير مساحي",
    "تقرير مساحي بلدي إلكتروني",
    "تقرير مساحي لفرز أرض",
    "تقرير مساحي لدمج عقار",
    "سعر التقرير المساحي بلدي",
    "مكتب مساحة معتمد بلدي",
    "استخراج تقرير مساحي بالرياض",
    "الرفع المساحي لإصدار رخصة بناء",
    "تقرير مساحي بصك إلكتروني",
  ],
  "land-surveying": [
    "رفع مساحي",
    "مكتب رفع مساحي معتمد",
    "رفع مساحي طبوغرافي",
    "جهاز GPS RTK مساحة",
    "مسح أراضي ومخططات",
    "حساب كميات الحفر والردم",
    "مهندس مساحة الرياض",
    "مخططات كنتورية وطبوغرافية",
    "شبكات الرصد المساحي",
  ],
  "survey-benchmarks": [
    "تثبيت ركائز الأرض",
    "تحديد حدود الأرض المساحية",
    "ركائز مساحية معتمدة",
    "تحديد زوايا وأركان الأرض",
    "إحداثيات الأرض الرسمية",
    "منع التعدي على حدود العقار",
    "مكتب مساحة لتثبيت الركائز بالرياض",
  ],
  "occupancy-certificate": [
    "شهادة إتمام بناء",
    "شهادة إشغال بلدي",
    "إطلاق التيار الكهربائي",
    "شروط شهادة إتمام البناء",
    "كشف هندسي لإتمام البناء",
    "شهادة إشغال سكني وتجاري",
    "مكتب هندسي لإصدار شهادة الإتمام",
    "كهرباء المبنى الجديد بلدي",
    "مطابقة كود البناء لإشغال العقار",
  ],
  "renew-building-license": [
    "تجديد رخصة بناء",
    "رخصة بناء منتهية الصلاحية",
    "طريقة تجديد رخصة البناء بلدي",
    "رسوم تجديد رخصة البناء",
    "تمديد رخصة بناء منتهية",
    "مكتب هندسي لتجديد الرخص في السعودية",
  ],
  "modify-building-license": [
    "تعديل رخصة بناء",
    "إضافة دور في رخصة البناء",
    "تعديل المخططات الهندسية المعمارية",
    "إضافة ملحق علوي أو أرضي",
    "تعديل واجهات رخصة البناء",
    "كود البناء لتعديل الرخص",
  ],
  "deed-update": [
    "تحديث الصكوك الورقية",
    "تحديث صك قديم ناجز",
    "تحويل الصك الورقي إلى إلكتروني",
    "مطابقة صك الملكية بالواقع الميداني",
    "تحديث الصكوك البورصة العقارية",
    "إثبات مساحة وأبعاد الصك القديم",
  ],
  "correct-building-status": [
    "تصحيح وضع مبنى قائم",
    "تصحيح الارتدادات البلدية",
    "رخصة مبنى بدون ترخيص",
    "تقرير السلامة الإنشائية للمباني",
    "تسوية مخالفات البناء بلدي",
    "مكتب هندسي لتصحيح وضع عقار قائم",
  ],
  "residential-to-commercial": [
    "تحويل من سكني إلى تجاري",
    "تحويل رخصة بناء لسكني تجاري",
    "شروط فتح نشاط تجاري في عقار سكني",
    "مواقف السيارات للاستخدام التجاري",
    "تعديل استخدام العقار بلدي",
  ],
  "civil-defense-services": [
    "مخططات الدفاع المدني سلامة",
    "ترخيص الدفاع المدني للمنشآت",
    "اعتماد مخطط السلامة والوقاية من الحريق",
    "مكتب هندسي معتمد للدفاع المدني",
    "شبكات الإطفاء والإنذار سلامة",
  ],
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  const baseUrl = SITE_URL.replace(/\/+$/, "");
  const keywords = serviceSeoKeywords[slug] || [
    service.title,
    "مكتب هندسي معتمد",
    "كود البناء السعودي",
    "منصة بلدي",
    "أحمد راضي للاستشارات الهندسية",
  ];

  const fullTitle = `${service.title} في السعودية | ${officeConfig.brandName}`;

  return {
    title: {
      absolute: fullTitle,
    },
    description: service.metaDescription,
    keywords,
    alternates: {
      canonical: `${baseUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: fullTitle,
      description: service.metaDescription,
      url: `${baseUrl}/services/${service.slug}`,
      siteName: officeConfig.brandName,
      locale: "ar_SA",
      type: "article",
      images: [
        {
          url: `${baseUrl}/logo-clean.webp`,
          width: 800,
          height: 800,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: service.metaDescription,
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
    other: {
      "geo.region": "SA",
      "geo.placename": "Saudi Arabia",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();
  const relatedServices = service.relatedServiceSlugs
    .map((sSlug) => allServices.find((s) => s.slug === sSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const serviceWhatsAppLink = buildWhatsAppLink(service.whatsappMessage);
  const baseUrl = SITE_URL.replace(/\/+$/, "");

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "الرئيسية",
            "item": `${baseUrl}/`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "الخدمات",
            "item": `${baseUrl}/services`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `${baseUrl}/services/${service.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "@id": `${baseUrl}/services/${service.slug}#service`,
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
          "@type": "ProfessionalService",
          "name": officeConfig.brandName,
          "url": baseUrl
        },
        "areaServed": {
          "@type": "Country",
          "name": "Saudi Arabia"
        }
      },
      ...(service.processSteps && service.processSteps.length > 0 ? [{
        "@type": "HowTo",
        "name": `خطوات وإجراءات ${service.title} في السعودية`,
        "description": service.shortDescription,
        "step": service.processSteps.map((step) => ({
          "@type": "HowToStep",
          "position": step.stepNumber,
          "name": step.title,
          "text": `${step.actor}: ${step.description}`,
          "url": `${baseUrl}/services/${service.slug}#step-${step.stepNumber}`
        }))
      }] : []),
      ...(service.faqs && service.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      
      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-ink-850 to-ink-800 text-white pt-12 pb-20">
        <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-brass-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 gold-rule" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition">الرئيسية</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition">دليل الخدمات</Link>
            <span>/</span>
            <span className="text-brass-400 font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] text-brass-300 border border-white/10">
                {service.categoryName}
              </span>

              <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl font-normal">
                {service.problemIntro}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={serviceWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-gradient-to-b from-brass-400 to-brass-500 text-ink-950 hover:from-brass-300 hover:to-brass-400 transition shadow-gold"
                >
                  <WhatsAppIcon size={16} />
                  <span>استفسار واتساب عن المعاملة</span>
                </a>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-white/[0.06] text-white hover:bg-white/[0.1] border border-white/15 transition"
                >
                  <PhoneIcon size={15} className="text-brass-400" />
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/[0.04] backdrop-blur-md p-6 rounded-3xl border border-white/10 text-xs space-y-3 shadow-lift">
              <h3 className="font-bold text-white text-xs border-b border-white/10 pb-2">
                ملخص الخدمة
              </h3>
              <p className="text-slate-300 leading-relaxed font-normal">
                {service.shortDescription}
              </p>
              <div className="pt-2 text-[11px] text-slate-400">
                <span>الجهة المرجعية: </span>
                <span className="text-slate-200 font-medium">{service.officialSource?.name || "الجهات البلدية والمنصات الرسمية"}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-8 space-y-10">
              
              {/* Visual CAD Architecture Diagram for this Service */}
              <div className="space-y-2">
                <span className="eyebrow">
                  مخطط توضيحي لاشتراطات المعاملة
                </span>
                {getServiceVisual(service.category, "w-full h-56 sm:h-72")}
              </div>

              {/* Office Scope */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-ink-950 text-brass-400 flex items-center justify-center shrink-0 shadow-chip">
                    <CompassDraftingIcon size={18} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-ink-900">
                    نطاق عمل المكتب الهندسي
                  </h2>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                  يقوم المكتب بإجراء الفحص الهندسي والمساحي الميداني، إعداد وتدقيق المخططات، والرفع عبر المنصات المعتمدة وفق كود البناء السعودي:
                </p>

                <div className="space-y-2.5">
                  {service.officeScope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-paper border border-slate-100 text-xs sm:text-sm text-slate-800 hover:border-brass-500/30 transition-colors">
                      <CheckCircleIcon size={16} className="text-brass-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                <h2 className="text-base sm:text-lg font-bold text-ink-900 mb-4">
                  الفئات المستفيدة من الخدمة
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {service.targetAudience.map((aud, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-paper rounded-2xl border border-slate-200/80">
                      <CheckIcon size={15} className="text-brass-500 shrink-0" />
                      <span className="font-normal">{aud}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps & Roles */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                <div className="mb-6 space-y-1">
                  <span className="eyebrow">
                    المسار التنفيذي
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-ink-900">
                    خطوات المعاملة والأدوار المتبادلة
                  </h2>
                  <p className="text-xs text-slate-500 font-normal">
                    توضيح دور العميل ودور المكتب الهندسي ودور الجهة الحكومية المنظمة.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {service.processSteps.map((step) => {
                    const actorColors = {
                      "العميل": "bg-slate-100 text-slate-800 border-slate-200",
                      "المكتب الهندسي": "bg-ink-900 text-white border-ink-900",
                      "الجهة الرسمية (الأمانة/البلدية/المنصة)": "bg-slate-100 text-slate-700 border-slate-200",
                    };

                    return (
                      <div
                        key={step.stepNumber}
                        className="p-5 rounded-2xl border border-slate-200/80 bg-paper space-y-2 hover:border-brass-500/30 hover:shadow-chip transition-all"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="num-editorial text-xs font-bold text-brass-600">
                            المرحلة {step.stepNumber}
                          </span>
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${actorColors[step.actor] || "bg-slate-100 text-slate-700"}`}>
                            المسؤول: {step.actor}
                          </span>
                        </div>
                        <h3 className="font-bold text-sm text-ink-900">
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Preliminary Documents */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <FileTextIcon size={18} className="text-brass-500" />
                  <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
                    المستندات الأولية المطلوبة
                  </h2>
                </div>
                
                <p className="text-xs text-slate-500 mb-4 bg-brass-50 p-3.5 rounded-2xl border border-brass-100 leading-relaxed font-normal">
                  <strong>ملاحظة استرشادية: </strong>
                  المستندات المذكورة مبدئية، وقد تطلب الأمانة أو الجهة المنظمة مستندات إضافية بحسب موقع العقار ونوع المعاملة.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  {service.preliminaryDocs.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-paper border border-slate-200/70">
                      <CheckIcon size={15} className="text-brass-500 shrink-0 mt-0.5" />
                      <span className="font-normal">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Factors */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                <h2 className="text-base sm:text-lg font-bold text-ink-900 mb-3">
                  العوامل المحددة للمدة والتكلفة
                </h2>
                <div className="space-y-2 text-xs text-slate-600">
                  {service.costAndTimeFactors.map((factor, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <MinusIcon size={14} className="text-brass-500 shrink-0 mt-1" />
                      <span className="leading-relaxed font-normal">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Source */}
              {service.officialSource && (
                <div className="relative overflow-hidden bg-ink-950 text-white p-6 sm:p-7 rounded-3xl border border-ink-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lift">
                  <div className="space-y-1">
                    <span className="text-[11px] text-brass-400 font-bold block">
                      المرجع الحكومي المعتمد
                    </span>
                    <h3 className="font-bold text-sm text-white">
                      {service.officialSource.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-normal">
                      {service.officialSource.description}
                    </p>
                  </div>
                  <a
                    href={service.officialSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] text-white text-xs font-bold hover:bg-white/[0.1] border border-white/15 transition shrink-0"
                  >
                    <span>زيارة المنصة الرسمية</span>
                    <ExternalLinkIcon size={14} />
                  </a>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                  <h2 className="text-base sm:text-lg font-bold text-ink-900 mb-5">
                    الأسئلة الشائعة حول {service.title}
                  </h2>
                  <FaqAccordion items={service.faqs} />
                </div>
              )}

              

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
                <span className="text-xs font-bold text-brass-600 block uppercase tracking-wider">
                  استشارة مباشرة للمعاملة
                </span>
                <h3 className="font-bold text-ink-900 text-base">
                  التواصل المباشر مع المكتب
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  أرسل صورة الصك أو رقم المخطط عبر واتساب لمراجعة المسار الفني والبلدي المناسب.
                </p>

                <div className="space-y-2 pt-1">
                  <a
                    href={serviceWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold bg-gradient-to-b from-brass-400 to-brass-500 text-ink-950 hover:from-brass-300 hover:to-brass-400 transition shadow-gold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>واتساب عن {service.title}</span>
                  </a>

                  <a
                    href={getPhoneLink(0)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold bg-ink-900 text-white hover:bg-ink-800 border border-ink-900 transition shadow-chip"
                  >
                    <PhoneIcon size={15} className="text-brass-400" />
                    <span dir="ltr">{officeConfig.phone.display}</span>
                  </a>

                  {officeConfig.secondaryPhone && (
                    <a
                      href={getPhoneLink(1)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold bg-ink-900 text-white hover:bg-ink-800 border border-ink-900 transition shadow-chip"
                    >
                      <PhoneIcon size={15} className="text-brass-400" />
                      <span dir="ltr">{officeConfig.secondaryPhone.display}</span>
                    </a>
                  )}
                </div>
              </div>

              <InquiryForm defaultServiceSlug={service.slug} />

            </aside>

          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-ink-900">
                  خدمات هندسية ومساحية مرتبطة
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  معاملات وإجراءات تكميلية قد تحتاج إليها:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <ServiceCard key={rel.slug} service={rel} />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
