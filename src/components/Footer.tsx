"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

const footerLinkClass =
  "inline-flex items-center gap-2 text-slate-400 transition-all duration-300 hover:text-white hover:-translate-x-0.5 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-brass-500/60 hover:before:bg-brass-400";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-slate-300 pb-24 md:pb-10 pt-16">
      {/* Ambient decoration */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full bg-brass-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 gold-rule" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Office Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 p-1.5">
                <Image
                  src="/logo-clean.webp"
                  alt="شعار مكتب أحمد راضي للاستشارات الهندسية"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">
                  {officeConfig.engineerName}
                </h3>
                <p className="text-xs text-brass-400">
                  {officeConfig.engineerTitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              مكتب هندسي معتمد في جميع أنحاء المملكة العربية السعودية، متخصص في إرشاد وتوجيه الملاك والمستثمرين لإنجاز رخص البناء والتقارير المساحية والمخططات وفق الأنظمة وكود البناء السعودي.
            </p>

            {officeConfig.workingHours?.showHoursOnSite && (
              <div className="flex items-start gap-2 text-xs text-slate-400 pt-4 border-t border-white/8">
                <ClockIcon size={15} className="text-brass-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">ساعات التواصل والاستفسار:</p>
                  <p>{officeConfig.workingHours.days} ({officeConfig.workingHours.hours})</p>
                </div>
              </div>
            )}
          </div>

          {/* Col 2: Building & Licenses */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider mb-5 flex items-center gap-2.5">
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-l from-brass-500 to-brass-300" />
              رخص البناء والتسوير
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/building-license" className={footerLinkClass}>
                  إصدار رخصة بناء سكنية وتجارية
                </Link>
              </li>
              <li>
                <Link href="/services/land-fencing-license" className={footerLinkClass}>
                  إصدار رخصة تسوير أرض فضاء
                </Link>
              </li>
              <li>
                <Link href="/services/renew-building-license" className={footerLinkClass}>
                  تجديد رخص البناء المنتهية
                </Link>
              </li>
              <li>
                <Link href="/services/modify-building-license" className={footerLinkClass}>
                  تعديل رخص ومخططات البناء
                </Link>
              </li>
              <li>
                <Link href="/services/occupancy-certificate" className={footerLinkClass}>
                  شهادة إتمام البناء وإطلاق التيار
                </Link>
              </li>
              <li>
                <Link href="/services/correct-building-status" className={footerLinkClass}>
                  تصحيح أوضاع المباني القائمة
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Surveying & Deeds */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-wider mb-5 flex items-center gap-2.5">
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-l from-brass-500 to-brass-300" />
              المساحة والصكوك والسلامة
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/cadastral-report" className={footerLinkClass}>
                  إصدار تقرير مساحي معتمد (بلدي)
                </Link>
              </li>
              <li>
                <Link href="/services/survey-benchmarks" className={footerLinkClass}>
                  تثبيت الركائز المساحية وزوايا الأرض
                </Link>
              </li>
              <li>
                <Link href="/services/land-surveying" className={footerLinkClass}>
                  أعمال الرفع المساحي والمناسيب
                </Link>
              </li>
              <li>
                <Link href="/services/deed-update" className={footerLinkClass}>
                  تحديث الصكوك الورقية القديمة
                </Link>
              </li>
              <li>
                <Link href="/services/residential-to-commercial" className={footerLinkClass}>
                  تحويل رخصة من سكني إلى سكني تجاري
                </Link>
              </li>
              <li>
                <Link href="/services/civil-defense-services" className={footerLinkClass}>
                  مراجعة واستشارات الدفاع المدني
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Verification */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white tracking-wider mb-5 flex items-center gap-2.5">
              <span className="w-6 h-[2px] rounded-full bg-gradient-to-l from-brass-500 to-brass-300" />
              قنوات التواصل المباشر
            </h4>

            <div className="space-y-2 text-xs">
              <a
                href={getPhoneLink(0)}
                className="flex items-center gap-2.5 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] p-3 rounded-xl border border-white/10 hover:border-brass-500/40 transition-all"
              >
                <PhoneIcon size={15} className="text-brass-400" />
                <span dir="ltr" className="font-semibold num-editorial">{officeConfig.phone.display}</span>
              </a>

              {officeConfig.secondaryPhone && (
                <a
                  href={getPhoneLink(1)}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] p-3 rounded-xl border border-white/10 hover:border-brass-500/40 transition-all"
                >
                  <PhoneIcon size={15} className="text-brass-400" />
                  <span dir="ltr" className="font-semibold num-editorial">{officeConfig.secondaryPhone.display}</span>
                </a>
              )}

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] p-3 rounded-xl border border-white/10 hover:border-emerald-400/40 transition-all"
              >
                <WhatsAppIcon size={16} className="text-emerald-400" />
                <span>محادثة واتساب سريعة</span>
              </a>

              {officeConfig.location.city && (
                <div className="flex items-center gap-2 text-slate-400 p-2">
                  <MapPinIcon size={15} className="text-brass-400 shrink-0" />
                  <span>نطاق الخدمة: {officeConfig.location.city}</span>
                </div>
              )}
            </div>

            {officeConfig.verification.isVerifiedAndActive && officeConfig.verification.engineeringLicenseNumber && (
              <div className="p-3.5 bg-white/[0.04] border border-white/10 rounded-xl text-xs space-y-1">
                <span className="text-brass-400 font-bold block">بيانات الاعتماد والترخيص</span>
                <p className="text-slate-300">رقم الترخيص: {officeConfig.verification.engineeringLicenseNumber}</p>
                {officeConfig.verification.officialVerificationUrl && (
                  <a
                    href={officeConfig.verification.officialVerificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brass-400 underline hover:text-white inline-block mt-1"
                  >
                    تحقق عبر المنصة الرسمية
                  </a>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/8 text-xs text-slate-400 space-y-3 font-normal">
          <p className="leading-relaxed bg-white/[0.03] p-4 rounded-xl border border-white/8">
            <strong className="text-white">إشعار نظامي وشفافية: </strong>
            هذا الموقع يمثل مكتب {officeConfig.engineerName} للاستشارات الهندسية وهو كيان هندسي مهني مستقل وليس موقعاً تابعاً لوزارة البلديات والإسكان أو منصة بلدي أو أي جهة حكومية. جميع الرسوم والاشتراطات والمدد المذكورة تخضع للتنظيمات البلدية الرسمية السارية واكتمال المستندات وتُراجع دائماً من المصادر الحكومية المعتمدة وقت تقديم المعاملة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 pt-2 text-[11px]">
            <p>
              جميع الحقوق محفوظة © {currentYear} مكتب {officeConfig.engineerName} للاستشارات الهندسية.
            </p>
            <div className="flex items-center gap-4 divide-x divide-x-reverse divide-white/10">
              <Link href="/services" className="hover:text-slate-200 transition-colors">
                دليل الخدمات
              </Link>
              <a href="#contact-form" className="pr-4 hover:text-slate-200 transition-colors">
                سياسة الاستخدام والاستشارة
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
