"use client";

import React from "react";
import {
  LandmarkIcon,
  RulerIcon,
  ZapIcon,
  BrickWallIcon,
  LightbulbIcon,
  ScrollTextIcon,
  BuildingIcon,
  HandshakeIcon,
  SparkleIcon,
} from "@/components/Icons";

type TickerIcon = React.ComponentType<{ size?: number; className?: string }>;

export default function MovingTicker() {
  const items: { text: string; icon: TickerIcon }[] = [
    { text: "رخص بناء معتمدة وفق كود البناء السعودي SBC", icon: LandmarkIcon },
    { text: "رفع مساحي دقيق بأجهزة RTK و Total Station", icon: RulerIcon },
    { text: "اعتماد وربط إلكتروني فوري عبر منصة بلدي", icon: ZapIcon },
    { text: "إصدار رخص تسوير الأراضي الفضاء تجنباً للغرامات", icon: BrickWallIcon },
    { text: "شهادات إتمام البناء والإشغال وإطلاق التيار الكهربائي", icon: LightbulbIcon },
    { text: "تحديث الصكوك الورقية عبر البورصة العقارية وبوابة ناجز", icon: ScrollTextIcon },
    { text: "تصحيح أوضاع المباني وفحص السلامة الإنشائية", icon: BuildingIcon },
    { text: "استشارات هندسية متخصصة ومراجعة الصكوك", icon: HandshakeIcon },
  ];

  return (
    <div className="marquee-track w-full bg-ink-950 py-3.5 overflow-hidden relative z-20 border-y border-white/5">
      {/* Edge fade */}
      <div className="absolute inset-0 bg-gradient-to-l from-ink-950 via-transparent to-ink-950 pointer-events-none z-10"></div>
      <div className="absolute top-0 inset-x-0 gold-rule opacity-60" />

      <div className="flex items-center gap-10 animate-marquee whitespace-nowrap w-max">
        {/* Double array to achieve infinite loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 text-xs font-bold text-slate-300 hover:text-brass-300 transition-colors shrink-0"
            >
              <span className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-brass-400">
                <Icon size={14} />
              </span>
              <span className="tracking-wide">{item.text}</span>
              <SparkleIcon size={11} className="text-brass-500/70 mx-2 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
