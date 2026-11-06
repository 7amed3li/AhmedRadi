import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServices, getServiceBySlug } from "@/data/servicesData";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
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

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://ahmed-radi-engineering.sa/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      locale: "ar_SA",
      type: "article",
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

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#0F2038] to-[#162846] text-white pt-10 pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav aria-label="مسار التنقل" className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition">الرئيسية</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition">دليل الخدمات</Link>
            <span>/</span>
            <span className="text-[#C5A059] font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-slate-900 text-[#C5A059] border border-slate-800">
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
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold bg-[#C5A059] text-[#050811] hover:bg-[#D8B46E] transition shadow-md"
                >
                  <WhatsAppIcon size={16} />
                  <span>استفسار واتساب عن المعاملة</span>
                </a>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 transition"
                >
                  <PhoneIcon size={15} className="text-[#C5A059]" />
                  <span>اتصال مباشر</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black p-6 rounded-xl border border-slate-800 text-xs space-y-3">
              <h3 className="font-bold text-white text-xs border-b border-slate-800 pb-2">
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
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  مخطط توضيحي لاشتراطات المعاملة
                </span>
                {getServiceVisual(service.category, "w-full h-56 sm:h-72")}
              </div>

              {/* Office Scope */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-[#050811] text-[#C5A059] flex items-center justify-center shrink-0">
                    <CompassDraftingIcon size={18} />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                    نطاق عمل المكتب الهندسي
                  </h2>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                  يقوم المكتب بإجراء الفحص الهندسي والمساحي الميداني، إعداد وتدقيق المخططات، والرفع عبر المنصات المعتمدة وفق كود البناء السعودي:
                </p>

                <div className="space-y-2.5">
                  {service.officeScope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                      <CheckCircleIcon size={16} className="text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-base sm:text-lg font-bold text-[#0F172A] mb-4">
                  الفئات المستفيدة من الخدمة
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  {service.targetAudience.map((aud, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                      <CheckIcon size={15} className="text-[#C5A059] shrink-0" />
                      <span className="font-normal">{aud}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps & Roles */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="mb-6 space-y-1">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
                    المسار التنفيذي
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
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
                      "المكتب الهندسي": "bg-slate-900 text-white border-slate-800",
                      "الجهة الرسمية (الأمانة/البلدية/المنصة)": "bg-slate-100 text-slate-700 border-slate-200",
                    };

                    return (
                      <div
                        key={step.stepNumber}
                        className="p-5 rounded-lg border border-slate-200 bg-slate-50/70 space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-mono font-bold text-slate-400">
                            المرحلة {step.stepNumber}
                          </span>
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${actorColors[step.actor] || "bg-slate-100 text-slate-700"}`}>
                            المسؤول: {step.actor}
                          </span>
                        </div>
                        <h3 className="font-bold text-sm text-[#0F172A]">
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
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <FileTextIcon size={18} className="text-[#C5A059]" />
                  <h2 className="text-base sm:text-lg font-bold text-[#0F172A]">
                    المستندات الأولية المطلوبة
                  </h2>
                </div>
                
                <p className="text-xs text-slate-500 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-200 leading-relaxed font-normal">
                  <strong>ملاحظة استرشادية: </strong>
                  المستندات المذكورة مبدئية، وقد تطلب الأمانة أو الجهة المنظمة مستندات إضافية بحسب موقع العقار ونوع المعاملة.
                </p>

                <div className="space-y-2 text-xs text-slate-700">
                  {service.preliminaryDocs.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                      <CheckIcon size={15} className="text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="font-normal">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Factors */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h2 className="text-base sm:text-lg font-bold text-[#0F172A] mb-3">
                  العوامل المحددة للمدة والتكلفة
                </h2>
                <div className="space-y-2 text-xs text-slate-600">
                  {service.costAndTimeFactors.map((factor, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#C5A059] font-bold shrink-0">—</span>
                      <span className="leading-relaxed font-normal">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Source */}
              {service.officialSource && (
                <div className="bg-[#050811] text-white p-6 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] text-[#C5A059] font-bold block">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 border border-slate-700 transition shrink-0"
                  >
                    <span>زيارة المنصة الرسمية</span>
                    <ExternalLinkIcon size={14} />
                  </a>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  <h2 className="text-base sm:text-lg font-bold text-[#0F172A] mb-5">
                    الأسئلة الشائعة حول {service.title}
                  </h2>
                  <FaqAccordion items={service.faqs} />
                </div>
              )}

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
                <span className="text-xs font-bold text-[#C5A059] block uppercase tracking-wider">
                  استشارة مباشرة للمعاملة
                </span>
                <h3 className="font-bold text-[#0F172A] text-base">
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
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold bg-[#C5A059] text-[#050811] hover:bg-[#D8B46E] transition shadow-xs"
                  >
                    <WhatsAppIcon size={16} />
                    <span>واتساب عن {service.title}</span>
                  </a>

                  <a
                    href={getPhoneLink(0)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 transition shadow-xs"
                  >
                    <PhoneIcon size={15} className="text-[#C5A059]" />
                    <span dir="ltr">{officeConfig.phone.display}</span>
                  </a>

                  {officeConfig.secondaryPhone && (
                    <a
                      href={getPhoneLink(1)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 transition shadow-xs"
                    >
                      <PhoneIcon size={15} className="text-[#C5A059]" />
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
                <h2 className="text-lg sm:text-xl font-bold text-[#0F172A]">
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
