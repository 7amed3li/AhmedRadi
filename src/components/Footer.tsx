"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { officeConfig, buildWhatsAppLink, getPhoneLink } from "@/config/officeConfig";
import { PhoneIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0A1628] text-slate-300 border-t border-slate-800 pb-20 md:pb-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Office Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-black border border-slate-700/80 flex items-center justify-center p-1 overflow-hidden shrink-0">
                <Image
                  src="/logo.webp"
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
                <p className="text-xs text-[#C5A059]">
                  {officeConfig.engineerTitle}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              استشارات هندسية ومساحية متخصصة في السوق السعودي، تهدف إلى إرشاد الملاك والمستثمرين لإنجاز رخص البناء والتقارير المساحية وفق الأنظمة البلدية المعتمدة وكود البناء السعودي.
            </p>

            {officeConfig.workingHours?.showHoursOnSite && (
              <div className="flex items-start gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <ClockIcon size={15} className="text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">ساعات التواصل والاستفسار:</p>
                  <p>{officeConfig.workingHours.days} ({officeConfig.workingHours.hours})</p>
                </div>
              </div>
            )}
          </div>

          {/* Col 2: Building & Licenses */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-r-2 border-[#C5A059] pr-2.5">
              رخص البناء والتسوير
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/services/building-license" className="hover:text-white transition-colors">
                  إصدار رخصة بناء سكنية وتجارية
                </Link>
              </li>
              <li>
                <Link href="/services/land-fencing-license" className="hover:text-white transition-colors">
                  إصدار رخصة تسوير أرض فضاء
                </Link>
              </li>
              <li>
                <Link href="/services/renew-building-license" className="hover:text-white transition-colors">
                  تجديد رخص البناء المنتهية
                </Link>
              </li>
              <li>
                <Link href="/services/modify-building-license" className="hover:text-white transition-colors">
                  تعديل رخص ومخططات البناء
                </Link>
              </li>
              <li>
                <Link href="/services/occupancy-certificate" className="hover:text-white transition-colors">
                  شهادة إتمام البناء وإطلاق التيار
                </Link>
              </li>
              <li>
                <Link href="/services/correct-building-status" className="hover:text-white transition-colors">
                  تصحيح أوضاع المباني القائمة
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Surveying & Deeds */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-r-2 border-[#C5A059] pr-2.5">
              المساحة والصكوك والسلامة
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/services/cadastral-report" className="hover:text-white transition-colors">
                  إصدار تقرير مساحي معتمد (بلدي)
                </Link>
              </li>
              <li>
                <Link href="/services/survey-benchmarks" className="hover:text-white transition-colors">
                  تثبيت الركائز المساحية وزوايا الأرض
                </Link>
              </li>
              <li>
                <Link href="/services/land-surveying" className="hover:text-white transition-colors">
                  أعمال الرفع المساحي والمناسيب
                </Link>
              </li>
              <li>
                <Link href="/services/deed-update" className="hover:text-white transition-colors">
                  تحديث الصكوك الورقية القديمة
                </Link>
              </li>
              <li>
                <Link href="/services/residential-to-commercial" className="hover:text-white transition-colors">
                  تحويل رخصة من سكني إلى سكني تجاري
                </Link>
              </li>
              <li>
                <Link href="/services/civil-defense-services" className="hover:text-white transition-colors">
                  مراجعة واستشارات الدفاع المدني
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Verification */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-r-2 border-[#C5A059] pr-2.5">
              قنوات التواصل المباشر
            </h4>
            
            <div className="space-y-2 text-xs">
              <a
                href={getPhoneLink(0)}
                className="flex items-center gap-2.5 text-slate-200 hover:text-white bg-slate-900 p-2.5 rounded-lg border border-slate-700 transition-colors"
              >
                <PhoneIcon size={15} className="text-[#C5A059]" />
                <span dir="ltr" className="font-semibold">{officeConfig.phone.display}</span>
              </a>

              {officeConfig.secondaryPhone && (
                <a
                  href={getPhoneLink(1)}
                  className="flex items-center gap-2.5 text-slate-200 hover:text-white bg-slate-900 p-2.5 rounded-lg border border-slate-700 transition-colors"
                >
                  <PhoneIcon size={15} className="text-[#C5A059]" />
                  <span dir="ltr" className="font-semibold">{officeConfig.secondaryPhone.display}</span>
                </a>
              )}

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-white bg-slate-900 p-2.5 rounded-lg border border-slate-700 transition-colors"
              >
                <WhatsAppIcon size={16} className="text-emerald-400" />
                <span>محادثة واتساب سريعة</span>
              </a>

              {officeConfig.location.city && (
                <div className="flex items-center gap-2 text-slate-300 p-2">
                  <MapPinIcon size={15} className="text-[#C5A059] shrink-0" />
                  <span>نطاق الخدمة: {officeConfig.location.city}</span>
                </div>
              )}
            </div>

            {officeConfig.verification.isVerifiedAndActive && officeConfig.verification.engineeringLicenseNumber && (
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs space-y-1">
                <span className="text-[#C5A059] font-bold block">بيانات الاعتماد والترخيص</span>
                <p className="text-slate-300">رقم الترخيص: {officeConfig.verification.engineeringLicenseNumber}</p>
                {officeConfig.verification.officialVerificationUrl && (
                  <a
                    href={officeConfig.verification.officialVerificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C5A059] underline hover:text-white inline-block mt-1"
                  >
                    تحقق عبر المنصة الرسمية
                  </a>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-3 font-normal">
          <p className="leading-relaxed bg-slate-900/70 p-3.5 rounded-lg border border-slate-800">
            <strong className="text-white">إشعار نظامي وشفافية: </strong>
            هذا الموقع يمثل مكتب {officeConfig.engineerName} للاستشارات الهندسية وهو كيان هندسي مهني مستقل وليس موقعاً تابعاً لوزارة البلديات والإسكان أو منصة بلدي أو أي جهة حكومية. جميع الرسوم والاشتراطات والمدد المذكورة تخضع للتنظيمات البلدية الرسمية السارية واكتمال المستندات وتُراجع دائماً من المصادر الحكومية المعتمدة وقت تقديم المعاملة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 pt-2 text-[11px]">
            <p>
              جميع الحقوق محفوظة © {currentYear} مكتب {officeConfig.engineerName} للاستشارات الهندسية.
            </p>
            <div className="flex items-center gap-4 divide-x divide-x-reverse divide-slate-800">
              <Link href="/services" className="hover:text-slate-200">
                دليل الخدمات
              </Link>
              <a href="#contact-form" className="pr-4 hover:text-slate-200">
                سياسة الاستخدام والاستشارة
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
