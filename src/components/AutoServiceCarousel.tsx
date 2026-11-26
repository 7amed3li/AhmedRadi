"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/config/officeConfig";
import {
  ArrowLeftIcon,
  WhatsAppIcon,
  CheckIcon,
  PauseIcon,
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  BadgeCheckIcon,
} from "@/components/Icons";

interface CarouselCard {
  id: string;
  category: string;
  title: string;
  description: string;
  firstStep: string;
  slug: string;
  image: string;
  badge: string;
}

export default function AutoServiceCarousel() {
  const cards: CarouselCard[] = [
    {
      id: "building",
      category: "رخص البناء والتسوير",
      title: "إصدار وتدقيق رخص البناء وفق كود البناء السعودي",
      description: "إعداد وتدقيق المخططات الهندسية المتكاملة (معماري، إنشائي، كهروميكانيك) ومتابعة الرفع والاعتماد عبر منصة بلدي.",
      firstStep: "صورة الصك الإلكتروني المحدث والتقرير المساحي للأرض.",
      slug: "building-license",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      badge: "كود SBC معتمد",
    },
    {
      id: "surveying",
      category: "المساحة والتقارير",
      title: "إصدار تقرير مساحي معتمد ورفع طبوغرافي دقيق",
      description: "رفع إحداثيات ومناسيب الأرض بأحدث أجهزة RTK ومحطات الرصد وتوثيق الحدود بدقة متناهية بالمليمتر.",
      firstStep: "صك إلكتروني وتفويض المكتب الهندسي عبر منصة بلدي.",
      slug: "cadastral-report",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      badge: "دقة RTK ±2mm",
    },
    {
      id: "fencing",
      category: "رخص البناء والتسوير",
      title: "إصدار رخص تسوير الأراضي الفضاء وتجنب الغرامات",
      description: "إعداد مخططات التسوير البلدية والواجهات المعتمدة للأراضي الواقعة على الشوارع والمحاور الملزمة نظامياً.",
      firstStep: "التحقق من وقوع الأرض ضمن المحاور المحددة في منطقتك.",
      slug: "land-fencing-license",
      image: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      badge: "حماية وتجنب غرامات",
    },
    {
      id: "occupancy",
      category: "الإشغال والسلامة",
      title: "شهادات إتمام البناء والكشف لإطلاق التيار الكهربائي",
      description: "معاينة المبنى المنفذ ميدانياً ومطابقة الواجهات والارتدادات وتدقيق شهادات العزل الحراري لاعتماد شهادة الإشغال.",
      firstStep: "رخصة البناء السارية وشهادة تركيب العزل المعتمدة.",
      slug: "occupancy-certificate",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      badge: "إطلاق الكهرباء فوراً",
    },
    {
      id: "deeds",
      category: "المساحة والتقارير والصكوك",
      title: "المطابقة المساحية لتحديث الصكوك الورقية القديمة",
      description: "إجراء المسح الميداني لمطابقة الأبعاد والأطوال بالواقع وإصدار التقرير المساحي للبورصة العقارية وبوابة ناجز.",
      firstStep: "صورة واضحة من الصك الورقي القديم من الوجهين.",
      slug: "deed-update",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      badge: "ناجز والبورصة العقارية",
    },
    {
      id: "correction",
      category: "التعديل والتصحيح",
      title: "تصحيح وضع المباني القائمة وفحص السلامة الإنشائية",
      description: "فحص المبنى القائم وعمل رفع معماري وإنشائي دقيق لتسوية وضعه النظامي لدى الأمانة والبلدية.",
      firstStep: "معاينة المبنى والتأكد من السلامة الإنشائية وخطوط التنظيم.",
      slug: "correct-building-status",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      badge: "تسوية نظامية",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 3800);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const activeCard = cards[currentIndex];

  return (
    <div
      className="bg-white rounded-[1.75rem] border border-slate-200/80 shadow-card p-6 sm:p-10 relative overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Subtle top decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-transparent via-brass-500 to-transparent"></div>

      {/* Header with autoplay indicator & controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-8">
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isPlaying ? "" : "hidden"}`}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-brass-600 uppercase tracking-wider">
              استعراض الخدمات التفاعلي (متحرك تلقائياً)
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-ink-900 mt-1.5">
            أبرز الخدمات الهندسية والمساحية في منصة بلدي
          </h3>
        </div>

        {/* Controls: Next / Prev / Play-Pause */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-slate-600 bg-mist hover:bg-slate-200/80 transition"
            title={isPlaying ? "إيقاف الحركة مؤقتاً" : "تشغيل الحركة التلقائية"}
          >
            {isPlaying ? <PauseIcon size={13} /> : <PlayIcon size={13} />}
            <span>{isPlaying ? "إيقاف مؤقت" : "تشغيل تلقائي"}</span>
          </button>

          <button
            type="button"
            onClick={prevSlide}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-ink-900 hover:border-ink-900 hover:text-white transition"
            aria-label="السابق"
          >
            <ChevronRightIcon size={16} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-ink-900 hover:border-ink-900 hover:text-white transition"
            aria-label="التالي"
          >
            <ChevronLeftIcon size={16} />
          </button>
        </div>
      </div>

      {/* Main Showcase Slide Content */}
      <div key={currentIndex} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-slide-in">

        {/* Left (Visual Photo with Badges) */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] bg-ink-900 border border-ink-800 shadow-lift group">
          <img
            src={activeCard.image}
            alt={activeCard.title}
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent"></div>

          {/* Top Badge */}
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-ink-900 shadow-chip">
            <BadgeCheckIcon size={13} className="text-brass-600" />
            {activeCard.badge}
          </div>

          {/* Bottom Category Tag */}
          <div className="absolute bottom-4 right-4 text-right">
            <span className="text-[11px] font-bold text-brass-300 block">
              {activeCard.category}
            </span>
            <span className="text-white font-bold text-sm">
              معاملة إلكترونية معتمدة
            </span>
          </div>
        </div>

        {/* Right (Details & Direct CTA) */}
        <div className="lg:col-span-7 space-y-5 text-right">
          <div>
            <span className="text-xs font-bold text-slate-400 block mb-1.5">
              الخدمة رقم {currentIndex + 1} من {cards.length}
            </span>
            <h4 className="text-xl sm:text-[1.7rem] font-black text-ink-900 leading-snug">
              {activeCard.title}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {activeCard.description}
          </p>

          <div className="p-4 bg-brass-50 rounded-2xl border border-brass-100 flex items-start gap-3 text-xs text-slate-700">
            <span className="w-6 h-6 rounded-full bg-brass-500/15 flex items-center justify-center shrink-0">
              <CheckIcon size={14} className="text-brass-600" />
            </span>
            <div className="leading-relaxed">
              <strong className="text-ink-900 font-bold">المستند المبدئي المطلوب: </strong>
              <span className="font-normal text-slate-600">{activeCard.firstStep}</span>
            </div>
          </div>

          {/* Action Buttons with 100% proper alignment */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href={`/services/${activeCard.slug}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-ink-900 text-white hover:bg-ink-800 transition shadow-chip text-center group"
            >
              <span>تفاصيل الخدمة والاشتراطات</span>
              <ArrowLeftIcon size={13} className="text-brass-400 transition-transform group-hover:-translate-x-1" />
            </Link>

            <a
              href={buildWhatsAppLink(`السلام عليكم مهندس أحمد، أود الاستفسار عن ${activeCard.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition text-center"
            >
              <WhatsAppIcon size={16} className="text-emerald-600" />
              <span>استفسار واتساب فوري</span>
            </a>
          </div>

        </div>

      </div>

      {/* Bottom Progress Bar & Dot Indicators */}
      <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {cards.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                idx === currentIndex ? "w-8 bg-brass-500" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`الانتقال للبطاقة ${idx + 1}`}
            />
          ))}
        </div>

        <span className="text-[11px] text-slate-400 font-medium">
          تتغير تلقائياً كل 3 ثوانٍ • قف بالماوس للتثبيت
        </span>
      </div>

    </div>
  );
}
