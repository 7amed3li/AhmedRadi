import React from "react";
import Link from "next/link";
import Image from "next/image";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import EditorialServiceIndex from "@/components/EditorialServiceIndex";
import ServiceShowcase from "@/components/ServiceShowcase";
import PropertyFinder from "@/components/PropertyFinder";
import FaqAccordion from "@/components/FaqAccordion";
import InquiryForm from "@/components/InquiryForm";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ExternalLinkIcon,
} from "@/components/Icons";

export default function HomePage() {
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
    <div className="bg-white min-h-screen">
      
      {/* ========================================================
          1. EDITORIAL HERO SECTION (Breathtaking Typography & Air)
      ======================================================== */}
      <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-36 border-b border-slate-200/80 overflow-hidden">
        
        {/* Subtle architectural grid lines in background */}
        <div className="absolute inset-0 engineering-grid opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Right: Master Editorial Headline & Narrative */}
            <div className="lg:col-span-8 space-y-8 text-right">
              
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                <span>مكتب معتمد للاستشارات الهندسية والمساحية في السعودية</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#070B14] leading-[1.12] tracking-tight">
                رخص البناء والمخططات <br />
                <span className="text-[#C5A059]">والرفع المساحي المعتمد</span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-light">
                بإشراف المهندس <strong className="text-[#070B14] font-bold">{officeConfig.engineerName}</strong>. خبرة متخصصة في إعداد وتدقيق المخططات الإنشائية والمعمارية، إصدار رخص الإنشاء والتسوير، شهادات إتمام البناء، وتحديث الصكوك عبر منصة بلدي وفق كود البناء السعودي.
              </p>

              {/* Minimalist Action Rail */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-sm font-bold bg-[#070B14] text-white hover:bg-slate-800 transition-all shadow-sm"
                >
                  <WhatsAppIcon size={18} className="text-[#C5A059]" />
                  <span>تواصل فوري عبر واتساب</span>
                </a>

                <a
                  href={getPhoneLink()}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-md text-sm font-bold bg-white text-slate-900 hover:bg-slate-50 border border-slate-300 transition-all"
                >
                  <PhoneIcon size={16} className="text-[#C5A059]" />
                  <span>اتصال مباشر ({officeConfig.phone.display})</span>
                </a>
              </div>

            </div>

            {/* Left: Luxury Emblem Plinth */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-black rounded-2xl border border-slate-800 p-8 shadow-2xl flex flex-col items-center justify-center text-center group">
                
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
                  <Image
                    src="/logo.webp"
                    alt="شعار أحمد راضي للاستشارات الهندسية AR Surveying"
                    width={224}
                    height={224}
                    className="object-contain group-hover:scale-102 transition-transform duration-300"
                    priority
                  />
                </div>

                <div className="border-t border-slate-800 pt-3 w-full">
                  <span className="text-sm font-bold text-white tracking-wide block">
                    {officeConfig.engineerName}
                  </span>
                  <span className="text-xs text-[#C5A059] font-medium block mt-0.5">
                    {officeConfig.engineerTitle}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Editorial Hairline Stats Rail */}
          <div className="mt-20 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            <div>
              <span className="num-editorial text-3xl sm:text-4xl font-extrabold text-[#070B14] block">12</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1 block">خدمة بلدية ومساحية متخصصة</span>
            </div>
            <div>
              <span className="num-editorial text-3xl sm:text-4xl font-extrabold text-[#C5A059] block">SBC</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1 block">مطابقة كاملة لكود البناء السعودي</span>
            </div>
            <div>
              <span className="num-editorial text-3xl sm:text-4xl font-extrabold text-[#070B14] block">RTK</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1 block">أحدث أجهزة الرفع والمسح بالمليمتر</span>
            </div>
            <div>
              <span className="num-editorial text-3xl sm:text-4xl font-extrabold text-[#070B14] block">بلدي</span>
              <span className="text-xs sm:text-sm text-slate-500 font-medium mt-1 block">إجراءات إلكترونية معتمدة بالأمانات</span>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================
          2. INTERACTIVE PROPERTY FINDER (مساعد توجيه المعاملة)
      ======================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PropertyFinder />
      </section>

      {/* ========================================================
          3. EDITORIAL SERVICE INDEX (الفهرس التحريري الموسع)
      ======================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 space-y-3 text-right">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase block">
            دليل الخدمات الهندسية والمساحية
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#070B14] tracking-tight">
            فهرس المعاملات البلدية والمساحية
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-light">
            اضغط على أي خدمة لاستعراض نطاق العمل الفني، المستندات المبدئية، ومسار التقديم عبر المنصات الحكومية.
          </p>
        </div>

        <EditorialServiceIndex />

      </section>

      {/* ========================================================
          4. VISUAL CAD & ENGINEERING SPECIFICATIONS
      ======================================================== */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-3xl mb-12 space-y-3 text-right">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase block">
            المخططات والمواصفات التنفيذية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#070B14] tracking-tight">
            نماذج المخرجات الهندسية والمساحية
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-light">
            تصفح نماذج المخططات والاشتراطات الفنية المعتمدة لكل نوع من أنواع المعاملات.
          </p>
        </div>

        <ServiceShowcase />
      </section>

      {/* ========================================================
          5. THE 4-PHASE ARCHITECTURAL PROCESS (المسار الهندسي)
      ======================================================== */}
      <section id="process" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        
        <div className="max-w-3xl mb-16 space-y-3 text-right">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase block">
            آلية تنفيذ المعاملات
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#070B14] tracking-tight">
            مسار إنجاز المعاملة من الصك إلى الاعتماد
          </h2>
          <p className="text-sm text-slate-500 font-light">
            أربعة مراحل واضحة المعالم ومنظمة تفصّل دور العميل والمكتب الهندسي والجهة الرسمية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          
          <div className="space-y-4 pt-6 border-t-2 border-[#070B14]">
            <span className="num-editorial text-4xl font-extrabold text-[#C5A059]">01</span>
            <h3 className="text-lg font-bold text-[#070B14]">دراسة الصك والموقع</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              مراجعة الصك الإلكتروني، مطابقة بيانات الأمانة، وتحديد نوع المعاملة والمسار الفني السليم.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t-2 border-slate-300">
            <span className="num-editorial text-4xl font-extrabold text-slate-400">02</span>
            <h3 className="text-lg font-bold text-[#070B14]">المعاينة الميدانية والرفع</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              النزول الميداني بأجهزة الرصد والمساحة لرفع المناسيب والحدود، أو فحص المبنى القائم ومطابقته.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t-2 border-slate-300">
            <span className="num-editorial text-4xl font-extrabold text-slate-400">03</span>
            <h3 className="text-lg font-bold text-[#070B14]">المخططات والتقارير المعتمدة</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              إعداد المخططات المعمارية والإنشائية أو التقرير المساحي الإلكتروني وفق كود البناء السعودي.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t-2 border-slate-300">
            <span className="num-editorial text-4xl font-extrabold text-slate-400">04</span>
            <h3 className="text-lg font-bold text-[#070B14]">الرفع والاعتماد البلدي</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              تقديم المعاملة عبر منصة بلدي ومتابعة ملاحظات التدقيق الهندسي حتى صدور الرخصة وفاتورة السداد.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================
          6. TRUST & PRINCIPLES
      ======================================================== */}
      <section id="trust" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        
        <div className="max-w-3xl mb-16 space-y-3 text-right">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase block">
            المعايير المهنية
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#070B14] tracking-tight">
            النزاهة الفنية والشفافية مع العميل
          </h2>
          <p className="text-sm text-slate-500 font-light">
            إيضاح الواقع النظامي للمعاملة البلدية دون وعود غير واقعية أو تقديرات تخمينية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-right">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">المعيار الأول</span>
            <h3 className="text-lg font-bold text-[#070B14]">التوافق مع كود البناء السعودي SBC</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              إعداد وتدقيق المخططات الإنشائية والمعمارية وفق اشتراطات الكود المعتمد لتفادي الملاحظات البلدية أثناء المراجعة.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">المعيار الثاني</span>
            <h3 className="text-lg font-bold text-[#070B14]">شفافية الأتعاب والرسوم</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              تحديد الأتعاب الهندسية بوضوح مسبق، مع الفصل بين أتعاب المكتب والرسوم البلدية الحكومية التي يسددها المالك عبر سداد.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">المعيار الثالث</span>
            <h3 className="text-lg font-bold text-[#070B14]">التقدير الواقعي للمدد</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              لا نطلق وعوداً غير دقيقة بمدد إنجاز حكومية، بل نوضح المسار الفني والاشتراطات التي تؤثر على قرارات الاعتماد لدى الأمانات.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================
          7. FREQUENTLY ASKED QUESTIONS
      ======================================================== */}
      <section id="faq" className="py-20 lg:py-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        
        <div className="text-right mb-12 space-y-2">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase block">
            الأسئلة الشائعة
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#070B14]">
            إجابات فنية للملاك والمستثمرين
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-light">
            إيضاحات نظامية قبل بدء إجراءات رخص البناء والرفع المساحي.
          </p>
        </div>

        <FaqAccordion items={generalFaqs} />

      </section>

      {/* ========================================================
          8. INQUIRY & DIRECT CONTACT SECTION
      ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6 text-right">
              
              <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase block">
                استفسار مباشر
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#070B14] leading-tight">
                هل لديك معاملة رخصة أو أرض ترغب في رفعها مساحياً؟
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-light">
                يسعدنا تقديم المشورة الهندسية والمساحية لموقعك. يمكنك الاتصال المباشر أو التحدث معنا عبر واتساب، أو إرسال تفاصيل المعاملة عبر النموذج لمراجعتها من قبل المهندس أحمد راضي.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-[#070B14] transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-[#070B14] text-[#C5A059] flex items-center justify-center shrink-0">
                    <PhoneIcon size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">الاتصال الهاتفي المباشر</span>
                    <span dir="ltr" className="text-base font-bold text-[#070B14] block">
                      {officeConfig.phone.display}
                    </span>
                  </div>
                </a>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-white border border-slate-200 shadow-xs hover:border-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <WhatsAppIcon size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">محادثة واتساب سريعة</span>
                    <span className="text-sm font-bold text-emerald-800 block">
                      إرسال الصك أو الكروكي للاستفسار المباشر
                    </span>
                  </div>
                </a>
              </div>

            </div>

            <div className="lg:col-span-7">
              <InquiryForm />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
