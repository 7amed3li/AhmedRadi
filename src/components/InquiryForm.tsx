"use client";

import React, { useState } from "react";
import { getAllServices } from "@/data/servicesData";
import { officeConfig, buildWhatsAppLink } from "@/config/officeConfig";
import { WhatsAppIcon, CheckCircleIcon, AlertCircleIcon } from "@/components/Icons";

interface InquiryFormProps {
  defaultServiceSlug?: string;
}

export default function InquiryForm({ defaultServiceSlug = "" }: InquiryFormProps) {
  const services = getAllServices();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    serviceSlug: defaultServiceSlug,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("يرجى إدخال الاسم للتواصل.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setErrorMsg("يرجى إدخال رقم هاتف صحيح للتواصل (مثال: 05xxxxxxxx).");
      return;
    }

    const selectedService = services.find((s) => s.slug === formData.serviceSlug);
    const serviceName = selectedService ? selectedService.title : "استشارة هندسية عامة";
    const waText = `طلب استفسار جديد:\n- الاسم: ${formData.fullName}\n- الهاتف: ${formData.phone}\n- المدينة: ${formData.city || "غير محدد"}\n- الخدمة: ${serviceName}\n${formData.notes ? `- تفاصيل: ${formData.notes}` : ""}`;

    setSubmitted(true);

    const forwardUrl = buildWhatsAppLink(waText);
    setTimeout(() => {
      window.open(forwardUrl, "_blank");
    }, 1200);
  };

  return (
    <div id="contact-form" className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200">
      <div className="mb-6 space-y-1">
        <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider block">
          استفسار مباشر
        </span>
        <h3 className="text-xl font-bold text-[#0F172A]">
          طلب مراجعة معاملة هندسية
        </h3>
        <p className="text-xs text-slate-500 font-normal">
          أدخل بيانات العقار وسيقوم المهندس أحمد راضي بالرد وتوضيح المتطلبات الفنية.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-3">
          <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
            <CheckCircleIcon size={24} />
          </div>
          <h4 className="text-base font-bold text-emerald-900">تم استلام استفسارك بنجاح</h4>
          <p className="text-xs text-emerald-800 leading-relaxed font-normal">
            شكراً لتواصلك يا أستاذ {formData.fullName}. جاري فتح محادثة واتساب لتأكيد الاستفسار وإرفاق صورة الصك.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs text-emerald-800 underline hover:text-emerald-900"
            >
              إرسال استفسار آخر
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
              <AlertCircleIcon size={16} className="shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1">
              الاسم الكريم <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              required
              placeholder="الاسم الثلاثي"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
              رقم الجوال <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              dir="ltr"
              placeholder="05xxxxxxxx"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] text-right"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-xs font-semibold text-slate-700 mb-1">
              المدينة أو المحافظة
            </label>
            <input
              type="text"
              id="city"
              placeholder="مثال: الرياض"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
            />
          </div>

          <div>
            <label htmlFor="serviceSlug" className="block text-xs font-semibold text-slate-700 mb-1">
              نوع الخدمة المطلوبة
            </label>
            <select
              id="serviceSlug"
              value={formData.serviceSlug}
              onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
            >
              <option value="">-- اختر الخدمة أو استشارة عامة --</option>
              {services.map((svc) => (
                <option key={svc.slug} value={svc.slug}>
                  {svc.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block text-xs font-semibold text-slate-700 mb-1">
              تفاصيل إضافية عن المعاملة (اختياري)
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="مثال: لدي رخصة بناء منتهية وأرغب في تجديدها..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
            ></textarea>
          </div>

          <p className="text-[11px] text-slate-400 font-normal">
            تُستخدم هذه البيانات للتواصل معك بخصوص طلبك فقط دون أي مشاركة مع أطراف أخرى.
          </p>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg font-bold text-xs bg-[#050811] text-white hover:bg-slate-800 transition-colors shadow-xs"
          >
            إرسال ومتابعة عبر واتساب
          </button>

          <div className="pt-2 text-center">
            <span className="text-[11px] text-slate-400">أو تواصل مباشرة دون تعبئة النموذج:</span>
            <div className="mt-1.5">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
              >
                <WhatsAppIcon size={15} />
                <span>محادثة واتساب مباشرة</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
