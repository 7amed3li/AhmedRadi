import React from "react";
import Link from "next/link";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import EditorialServiceIndex from "@/components/EditorialServiceIndex";
import ServiceShowcase from "@/components/ServiceShowcase";
import PropertyFinder from "@/components/PropertyFinder";
import FaqAccordion from "@/components/FaqAccordion";
import InquiryForm from "@/components/InquiryForm";
import MovingTicker from "@/components/MovingTicker";
import AutoServiceCarousel from "@/components/AutoServiceCarousel";
import Reveal from "@/components/Reveal";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
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

  const homeFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": generalFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-paper min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />

      {/* ========================================================
          1. HERO SECTION (سينمائي، دقيق، هادئ وبدون مربعات سوداء)
      ======================================================== */}
      <section className="relative pt-14 pb-16 sm:pt-24 sm:pb-28 border-b border-slate-200/70 overflow-hidden bg-gradient-to-b from-white via-white to-paper">

        {/* Subtle engineering grid + ambient glow */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-brass-500/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-ink-800/[0.05] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Right: Master Editorial Headline & Actions */}
            <Reveal className="lg:col-span-7">
              <div className="space-y-6 text-right">

                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-ink-900 shadow-chip">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>مكتب هندسي معتمد في جميع أنحاء المملكة العربية السعودية</span>
                </div>

                <h1 className="text-[2rem] sm:text-5xl lg:text-[3.4rem] font-black text-ink-900 leading-[1.22] tracking-tight">
                  من صك العقار إلى المخططات والرخصة
                  <span className="block text-transparent bg-clip-text bg-gradient-to-l from-brass-600 via-brass-500 to-brass-400 mt-2 pb-1">— بخطوات هندسية واضحة وموثوقة</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-loose max-w-2xl font-light">
                  بإشراف المهندس الاستشاري <strong className="font-bold text-ink-900">{officeConfig.engineerName}</strong>. إعداد وتدقيق المخططات الإنشائية والمعمارية، رخص الإنشاء والتسوير، الرفع المساحي والتقارير المعتمدة، وتصحيح أوضاع المباني وفق كود البناء السعودي ومنصة بلدي.
                </p>

                {/* Dual Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href="#property-finder"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-ink-900 text-white hover:bg-ink-800 active:scale-95 transition-all shadow-lift group"
                  >
                    <span>حدّد حالة عقارك الآن</span>
                    <ArrowLeftIcon size={14} className="text-brass-400 transition-transform group-hover:-translate-x-1" />
                  </a>

                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-900 hover:bg-mist border border-slate-300/90 transition-all shadow-chip"
                  >
                    <WhatsAppIcon size={16} className="text-emerald-600" />
                    <span>تواصل عبر واتساب</span>
                  </a>
                </div>

                {/* Direct Phone Numbers */}
                <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-200/80">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5">
                    <PhoneIcon size={14} className="text-brass-500" />
                    <span>الاتصال الهاتفي المباشر:</span>
                  </span>
                  <a href={getPhoneLink(0)} className="text-ink-900 hover:text-brass-600 transition font-mono font-bold" dir="ltr">
                    {officeConfig.phone.display}
                  </a>
                  {officeConfig.secondaryPhone && (
                    <>
                      <span className="text-slate-300">|</span>
                      <a href={getPhoneLink(1)} className="text-ink-900 hover:text-brass-600 transition font-mono font-bold" dir="ltr">
                        {officeConfig.secondaryPhone.display}
                      </a>
                    </>
                  )}
                </div>

              </div>
            </Reveal>

            {/* Left: High-End Layered Architectural & Surveying Visual */}
            <Reveal className="lg:col-span-5" delay={0.12}>
              <div className="relative">

                {/* Floating Live Badge Top Left */}
                <div className="absolute -top-3 -left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-slate-200/90 shadow-lift flex items-center gap-2 text-xs font-bold text-ink-900">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
                  <span>كود البناء السعودي SBC معتمد</span>
                </div>

                {/* Visual Card Frame */}
                <div className="relative rounded-[2rem] overflow-hidden bg-ink-950 border border-ink-800 shadow-lift ring-1 ring-brass-500/20">

                  {/* Background Photography Blend */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                      alt="مخططات هندسية وأدوات مساحة"
                      className="w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent"></div>

                    {/* CAD Vector Overlay */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 border-b border-white/10 pb-2">
                        <span className="text-brass-400 font-bold">ARCH-STRUCTURAL CAD</span>
                        <span className="text-slate-400">SCALE 1:100</span>
                      </div>

                      <div className="my-auto">
                        <svg viewBox="0 0 340 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-slate-200">
                          <line x1="10" y1="135" x2="330" y2="135" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="6 3" />
                          <text x="20" y="150" fill="#94A3B8" fontSize="9">منسوب الصفر المعماري ±0.00</text>
                          <rect x="55" y="45" width="150" height="90" stroke="#F1F5F9" strokeWidth="1.8" fill="#0B1528" fillOpacity="0.6" />
                          <rect x="85" y="15" width="90" height="30" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="4 2" fill="#0E1B33" fillOpacity="0.8" />
                          <text x="105" y="35" fill="#C5A059" fontSize="9" fontWeight="bold">الملحق العلوي</text>
                          <line x1="50" y1="90" x2="210" y2="90" stroke="#94A3B8" strokeWidth="1.5" />
                          <rect x="60" y="45" width="6" height="90" fill="#C5A059" />
                          <rect x="127" y="45" width="6" height="90" fill="#C5A059" />
                          <rect x="194" y="45" width="6" height="90" fill="#C5A059" />
                          <rect x="220" y="75" width="80" height="60" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" fill="#0B1528" fillOpacity="0.4" />
                          <text x="230" y="103" fill="#CBD5E1" fontSize="9">ارتداد نظامي</text>
                          <text x="235" y="118" fill="#C5A059" fontSize="9" fontWeight="bold">2.00 م</text>
                        </svg>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-2 font-mono">
                        <span>GPS RTK COORDS</span>
                        <span className="text-emerald-400 font-bold">READY FOR BALADY</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </Reveal>

          </div>

        </div>

      </section>

      {/* ========================================================
          2. MOVING TICKER (الشريط الإخباري المتحرك الفخم)
      ======================================================== */}
      <MovingTicker />

      {/* ========================================================
          3. AUTO-PLAYING SERVICE CAROUSEL (البطاقات المتحركة تلقائياً)
      ======================================================== */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <AutoServiceCarousel />
        </Reveal>
      </section>

      {/* ========================================================
          4. INTERACTIVE PROPERTY FINDER (مساعد توجيه المعاملة)
      ======================================================== */}
      <section id="property-finder" className="py-10 sm:py-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <Reveal>
          <PropertyFinder />
        </Reveal>
      </section>

      {/* ========================================================
          5. EDITORIAL SERVICE INDEX (دليل الخدمات التفصيلي)
      ======================================================== */}
      <section id="services-index" className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="max-w-3xl mb-12 space-y-3 text-right">
            <span className="eyebrow">
              دليل الخدمات الهندسية والمساحية
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
              المعاملات البلدية والمساحية المعتمدة
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              اضغط على أي خدمة لاستعراض نطاق العمل الفني، المستندات المبدئية، ومسار التقديم عبر المنصات الحكومية.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <EditorialServiceIndex />
        </Reveal>

      </section>

      {/* ========================================================
          6. VISUAL CAD & ENGINEERING SPECIFICATIONS
      ======================================================== */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <Reveal>
          <div className="max-w-3xl mb-12 space-y-3 text-right">
            <span className="eyebrow">
              المخططات والمواصفات التنفيذية
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
              نماذج المخرجات الهندسية والمساحية
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              تصفح نماذج المخططات والاشتراطات الفنية المعتمدة لكل نوع من أنواع المعاملات.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ServiceShowcase />
        </Reveal>
      </section>

      {/* ========================================================
          7. THE 4-PHASE ARCHITECTURAL PROCESS (آلية العمل)
      ======================================================== */}
      <section id="process" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">

        <Reveal>
          <div className="max-w-3xl mb-16 space-y-3 text-right">
            <span className="eyebrow">
              آلية تنفيذ المعاملات
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
              مسار إنجاز المعاملة من الصك إلى الاعتماد
            </h2>
            <p className="text-sm text-slate-600 font-light">
              أربعة مراحل واضحة المعالم ومنظمة تفصّل دور العميل والمكتب الهندسي والجهة الرسمية.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">

          <Reveal className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-chip space-y-3 hover:border-brass-500/50 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="num-editorial font-display text-4xl font-black text-brass-500 block">01</span>
              <h3 className="text-base font-bold text-ink-900">دراسة الصك والموقع</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                مراجعة الصك الإلكتروني، مطابقة بيانات الأمانة، وتحديد نوع المعاملة والمسار الفني السليم.
              </p>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-chip space-y-3 hover:border-brass-500/50 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="num-editorial font-display text-4xl font-black text-slate-300 block">02</span>
              <h3 className="text-base font-bold text-ink-900">المعاينة الميدانية والرفع</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                النزول الميداني بأجهزة الرصد والمساحة لرفع المناسيب والحدود، أو فحص المبنى القائم ومطابقته.
              </p>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.16}>
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-chip space-y-3 hover:border-brass-500/50 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="num-editorial font-display text-4xl font-black text-slate-300 block">03</span>
              <h3 className="text-base font-bold text-ink-900">المخططات والتقارير</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                إعداد المخططات المعمارية والإنشائية أو التقرير المساحي الإلكتروني وفق كود البناء السعودي.
              </p>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.24}>
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-chip space-y-3 hover:border-brass-500/50 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="num-editorial font-display text-4xl font-black text-slate-300 block">04</span>
              <h3 className="text-base font-bold text-ink-900">الرفع والاعتماد البلدي</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                تقديم المعاملة عبر منصة بلدي ومتابعة ملاحظات التدقيق الهندسي حتى صدور الرخصة وفاتورة السداد.
              </p>
            </div>
          </Reveal>

        </div>

      </section>

      {/* ========================================================
          8. TRUST & PRINCIPLES (المعايير المهنية)
      ======================================================== */}
      <section id="trust" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">

        <Reveal>
          <div className="max-w-3xl mb-12 space-y-3 text-right">
            <span className="eyebrow">
              المعايير المهنية
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight">
              النزاهة الفنية والشفافية مع العميل
            </h2>
            <p className="text-sm text-slate-600 font-light">
              إيضاح الواقع النظامي للمعاملة البلدية دون وعود غير واقعية أو تقديرات تخمينية.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-right">

          <Reveal className="h-full">
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-chip space-y-2.5 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="text-xs font-bold text-brass-600 uppercase tracking-wider block">المعيار الأول</span>
              <h3 className="text-base font-bold text-ink-900">التوافق مع كود البناء السعودي SBC</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                إعداد وتدقيق المخططات الإنشائية والمعمارية وفق اشتراطات الكود المعتمد لتفادي الملاحظات البلدية أثناء المراجعة.
              </p>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-chip space-y-2.5 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="text-xs font-bold text-brass-600 uppercase tracking-wider block">المعيار الثاني</span>
              <h3 className="text-base font-bold text-ink-900">شفافية الأتعاب والرسوم</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                تحديد الأتعاب الهندسية بوضوح مسبق، مع الفصل بين أتعاب المكتب والرسوم البلدية الحكومية التي يسددها المالك عبر سداد.
              </p>
            </div>
          </Reveal>

          <Reveal className="h-full" delay={0.16}>
            <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-chip space-y-2.5 hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
              <span className="text-xs font-bold text-brass-600 uppercase tracking-wider block">المعيار الثالث</span>
              <h3 className="text-base font-bold text-ink-900">التقدير الواقعي للمدد</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                لا نطلق وعوداً غير مسؤولة بالقبول الفوري أو بمدد إنجاز حكومية ثابتة خارج نطاق صلاحيات المكتب الهندسي؛ نلتزم بالدقة والمتابعة المهنية.
              </p>
            </div>
          </Reveal>

        </div>

      </section>

      {/* ========================================================
          9. FAQS (الأسئلة الشائعة)
      ======================================================== */}
      <section id="faq" className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <Reveal>
          <div className="text-center mb-10 space-y-2.5">
            <span className="eyebrow justify-center">
              إجابات واضحة ومسؤولة
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-ink-900">
              الأسئلة الشائعة حول المعاملات الهندسية
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <FaqAccordion items={generalFaqs} />
        </Reveal>
      </section>

      {/* ========================================================
          10. CONTACT & INQUIRY FORM
      ======================================================== */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
        <Reveal>
          <InquiryForm />
        </Reveal>
      </section>

    </div>
  );
}
