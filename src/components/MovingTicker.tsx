"use client";

import React from "react";

export default function MovingTicker() {
  const items = [
    { text: "رخص بناء معتمدة وفق كود البناء السعودي SBC", icon: "🏛️" },
    { text: "رفع مساحي دقيق بأجهزة RTK و Total Station", icon: "📐" },
    { text: "اعتماد وربط إلكتروني فوري عبر منصة بلدي", icon: "⚡" },
    { text: "إصدار رخص تسوير الأراضي الفضاء تجنباً للغرامات", icon: "🧱" },
    { text: "شهادات إتمام البناء والإشغال وإطلاق التيار الكهربائي", icon: "💡" },
    { text: "تحديث الصكوك الورقية عبر البورصة العقارية وبوابة ناجز", icon: "📜" },
    { text: "تصحيح أوضاع المباني وفحص السلامة الإنشائية", icon: "🏢" },
    { text: "استشارات هندسية متخصصة ومراجعة الصكوك", icon: "🤝" },
  ];

  return (
    <div className="w-full bg-[#070B14] py-3.5 border-y border-stone-800 overflow-hidden relative shadow-inner z-20">
      {/* Glow ambient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-transparent to-[#070B14] pointer-events-none z-10"></div>
      
      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
        {/* Double array to achieve infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-2.5 text-xs font-bold text-stone-200 hover:text-[#C5A059] transition-colors shrink-0"
          >
            <span className="w-6 h-6 rounded-md bg-stone-900 border border-stone-800 flex items-center justify-center text-xs">
              {item.icon}
            </span>
            <span className="tracking-wide">{item.text}</span>
            <span className="text-[#C5A059] mx-2 text-sm">✦</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marqueeAnim {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeAnim 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
