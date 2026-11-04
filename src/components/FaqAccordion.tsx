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
            className={`border rounded-lg transition-colors overflow-hidden ${
              isOpen ? "border-slate-300 bg-white shadow-xs" : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-right font-bold text-sm text-[#0F172A] focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                className={`transform transition-transform duration-200 text-slate-400 shrink-0 mr-3 ${
                  isOpen ? "rotate-180 text-[#C5A059]" : ""
                }`}
              >
                <ChevronDownIcon size={18} />
              </span>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
