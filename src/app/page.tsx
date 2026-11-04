import React from "react";
import Link from "next/link";
import Image from "next/image";
import { serviceCategories, getAllServices } from "@/data/servicesData";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import ServiceCard from "@/components/ServiceCard";
import ServiceShowcase from "@/components/ServiceShowcase";
import PropertyFinder from "@/components/PropertyFinder";
import StepsSection from "@/components/StepsSection";
import TrustSection from "@/components/TrustSection";
import FaqAccordion from "@/components/FaqAccordion";
import InquiryForm from "@/components/InquiryForm";
import {
  PhoneIcon,
  WhatsAppIcon,
  BuildingIcon,
  RulerIcon,
  ShieldCheckIcon,
  CheckIcon,
} from "@/components/Icons";

export default function HomePage() {
  const allServices = getAllServices();

  const generalFaqs = [
    {
      question: "ما هي أول خطوة يجب اتخاذها قبل بدء أي معاملة رخصة أو مساحة؟",
      answer: "الخطوة الأولى هي التأكد من وجود صك ملكية إلكتروني ساري، ومشاركة صورة الصك أو بياناته مع المكتب لمطابقته مع المخطط المعتمد ونظام الأمانة وتحديد المسار الفني والبلدي المناسب.",
    },
    {
      question: "هل يضمن المكتب قبول المعاملة في منصة بلدي أو مدة إنجاز حكومية محددة؟",
      answer: "يقوم المكتب بالتدقيق الهندسي الدقيق وإعداد المخططات والتقارير وفق الاشتراطات والأنظمة البلدية وكود البناء السعودي لتفادي أي ملاحظات. اعتماد المعاملة النهائي وتحديد رسومها يخضعان لصلاحيات الجهة البلدية الرسمية ولا يمكن لأي مكتب ضمان مدة أو قرار حكومي.",
    },
    {
      question: "كيف يتم تحديد الأتعاب الهندسية للخدمات؟",
      answer: "يتم احتساب الأتعاب بشفافية تامة بناءً على مساحة الأرض أو المبنى، ونوع المعاملة (تصميم كامل، رخصة تسوير، تقرير مساحي، شهادة إشغال)، ونطاق العمل الميداني المطلوب، ويتم تزويد العميل بعرض واضح قبل بدء التنفيذ.",
    },
    {
      question: "هل تقدمون خدمات الرفع والتقارير المساحية لجميع الأراضي في السعودية؟",
      answer: "نقدم الاستشارات الهندسية والمساحية لكافة مدن ومناطق المملكة، وتتم أعمال النزول الميداني المباشر بحسب موقع العقار ونوع الجهاز المساحي المطلوب بالتنسيق المباشر مع المهندس أحمد راضي.",
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      
      {/* ========================================================
          1. HERO SECTION (Corporate Saudi Engineering Deep Navy)
      ======================================================== */}
      <section className="relative bg-gradient-to-br from-[#0A1628] via-[#0F2038] to-[#162846] text-white pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800 overflow-hidden">
        
        {/* Subtle engineering line grid */}
        <div className="absolute inset-0 engineering-grid opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Right Column: High Authority Copy */}
            <div className="lg:col-span-7 space-y-6 text-right">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0A1628] border border-slate-700 text-slate-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>مكتب أحمد راضي للاستشارات الهندسية والمساحية</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                رخص البناء والمخططات <br />
                <span className="text-[#C5A059]">والرفع والتقارير المساحية</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                بإشراف المهندس <strong className="text-white font-bold">{officeConfig.engineerName}</strong>. نوفر دراسات هندسية متكاملة وأعمال مساحة ميدانية دقيقة لإصدار وتجديد رخص الإنشاء والتسوير، شهادات إتمام البناء، وتحديث الصكوك وفق اشتراطات كود البناء السعودي ومنصة بلدي.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#C5A059] text-[#0A1628] hover:bg-[#D4AF37] shadow-lg transition-all focus:outline-none"
                >
                  <WhatsAppIcon size={18} />
                  <span>تواصل عبر واتساب</span>
                </a>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold bg-[#0A1628] text-white hover:bg-slate-900 border border-slate-700 transition-all focus:outline-none"
                >
                  <PhoneIcon size={16} className="text-[#C5A059]" />
                  <span>اتصال مباشر ({officeConfig.phone.display})</span>
                </a>
              </div>

              {/* Technical Facts */}
              <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">/</span>
                  <span>مطابقة كود البناء السعودي SBC</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">/</span>
                  <span>أجهزة مساحة RTK ورصد متطور</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059] font-bold">/</span>
                  <span>إجراءات منصة بلدي المعتمدة</span>
                </div>
              </div>

            </div>

            {/* Left Column: Official Logo Emblem Presentation */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm bg-[#050C17] rounded-2xl border border-slate-700/80 p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
                
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
                  <Image
                    src="/logo.webp"
                    alt="شعار أحمد راضي للاستشارات الهندسية AR Surveying"
                    width={256}
                    height={256}
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>

                <div className="border-t border-slate-800 pt-4 w-full">
                  <h2 className="text-base font-bold text-white tracking-wide">
                    {officeConfig.engineerName}
                  </h2>
                  <p className="text-xs text-[#C5A059] font-medium mt-0.5">
                    {officeConfig.engineerTitle} • استشارات هندسية ومساحية
                  </p>
                </div>

                <div className="w-full grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-center">
                    <span className="block text-slate-400 text-[10px]">الخدمات الفنية</span>
                    <span className="font-bold text-white">12 خدمة بلدية</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-center">
                    <span className="block text-slate-400 text-[10px]">نطاق العمل</span>
                    <span className="font-bold text-white">السوق السعودي</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ========================================================
          2. INTERACTIVE PROPERTY SITUATION FINDER (مساعد توجيه المعاملة)
      ======================================================== */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <PropertyFinder />
      </section>

      {/* ========================================================
          3. VISUAL CAD & ENGINEERING SHOWCASE (نماذج المخرجات الهندسية)
      ======================================================== */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
            المخططات والمواصفات التنفيذية
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628]">
            نماذج المخرجات الهندسية والمساحية
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            تصفح نماذج المخططات والاشتراطات الفنية المعتمدة لكل نوع من أنواع المعاملات.
          </p>
        </div>

        <ServiceShowcase />
      </section>

      {/* ========================================================
          4. ALL 12 SERVICES CATALOG
      ======================================================== */}
      <section id="services" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-2">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
            دليل الخدمات الهندسية والمساحية
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1628] tracking-tight">
            الخدمات البلدية والمساحية للمشاريع والعقارات
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            دليل منظم للخدمات الهندسية والمساحية، يوضح نطاق العمل الهندسي، المستندات الأولية، ومسار التقديم عبر المنصات الرسمية.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((cat) => {
            const catServices = cat.serviceSlugs
              .map((slug) => allServices.find((s) => s.slug === slug))
              .filter((s): s is NonNullable<typeof s> => Boolean(s));

            return (
              <div key={cat.id} className="space-y-6">
                
                <div className="border-r-3 border-[#C5A059] pr-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0A1628]">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-2xl font-normal">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-md shrink-0">
                    {catServices.length} {catServices.length === 1 ? "خدمة" : "خدمات"}
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
        </div>

      </section>

      {/* ========================================================
          5. HOW THE SERVICE PROCESS WORKS (STEPS)
      ======================================================== */}
      <StepsSection />

      {/* ========================================================
          6. PROFESSIONAL TRUST & TRANSPARENCY
      ======================================================== */}
      <TrustSection />

      {/* ========================================================
          7. FAQS SECTION
      ======================================================== */}
      <section id="faq" className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
              الأسئلة الشائعة
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628]">
              إجابات فنية للملاك والمستثمرين
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              إيضاحات نظامية قبل بدء إجراءات رخص البناء والرفع المساحي.
            </p>
          </div>

          <FaqAccordion items={generalFaqs} />

        </div>
      </section>

      {/* ========================================================
          8. INQUIRY FORM & DIRECT CONTACT
      ======================================================== */}
      <section className="py-16 sm:py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              
              <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
                استفسار مباشر
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1628] leading-tight">
                هل لديك معاملة رخصة أو أرض ترغب في رفعها مساحياً؟
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                يسعدنا تقديم المشورة الهندسية والمساحية لموقعك. يمكنك الاتصال المباشر أو التحدث معنا عبر واتساب، أو إرسال تفاصيل المعاملة عبر النموذج لمراجعتها من قبل المهندس أحمد راضي.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#C5A059] transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0A1628] text-[#C5A059] flex items-center justify-center shrink-0">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">الاتصال الهاتفي المباشر</span>
                    <span dir="ltr" className="text-base font-bold text-[#0A1628] block">
                      {officeConfig.phone.display}
                    </span>
                  </div>
                </a>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-emerald-500 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon size={22} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">محادثة واتساب سريعة</span>
                    <span className="text-sm font-bold text-emerald-800 block">
                      إرسال الصك أو الكروكي للاستفسار المباشر
                    </span>
                  </div>
                </a>
              </div>

              {officeConfig.workingHours?.showHoursOnSite && (
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                  <span className="font-bold text-[#0A1628] block">ساعات العمل والتواصل:</span>
                  <p>{officeConfig.workingHours.days} من {officeConfig.workingHours.hours}</p>
                  <p className="text-slate-500 text-[11px]">{officeConfig.workingHours.responseEstimate}</p>
                </div>
              )}

            </div>

            <div className="lg:col-span-6">
              <InquiryForm />
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          9. FOOTER CALLOUT
      ======================================================== */}
      <section className="bg-[#0A1628] text-white py-14 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            جاهز لبدء معاملتك الهندسية؟
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            تواصل الآن مع مكتب {officeConfig.engineerName} للاستشارات الهندسية، واطلع على المتطلبات الفنية الصحيحة لمعاملتك.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-bold bg-[#C5A059] text-[#0A1628] hover:bg-[#D4AF37] transition shadow-md flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>تواصل عبر واتساب الآن</span>
            </a>
            <a
              href={getPhoneLink()}
              className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 border border-slate-700 transition flex items-center justify-center gap-2"
            >
              <PhoneIcon size={15} className="text-[#C5A059]" />
              <span dir="ltr">{officeConfig.phone.display}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
