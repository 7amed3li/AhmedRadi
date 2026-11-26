"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-brass-500/40 bg-white shadow-card"
                : "border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-chip"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-right font-bold text-sm text-ink-900 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="leading-relaxed">{item.question}</span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 bg-ink-900 text-brass-400"
                    : "bg-mist text-slate-400"
                }`}
              >
                <ChevronDownIcon size={16} />
              </span>
            </button>

            <div
              className={`grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 sm:px-5 pb-5 pt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
