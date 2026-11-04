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
    <div id="contact-form" className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-xs">
      <div className="mb-8 space-y-2 text-right">
        <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
          استفسار مباشر
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#070B14]">
          طلب مراجعة معاملة هندسية
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-light">
          أدخل بيانات العقار وسيقوم المهندس أحمد راضي بالرد وتوضيح المتطلبات الفنية.
        </p>
      </div>

      {submitted ? (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-xl bg-[#070B14] flex items-center justify-center text-[#C5A059]">
            <CheckCircleIcon size={24} />
          </div>
          <h4 className="text-lg font-bold text-[#070B14]">تم استلام استفسارك بنجاح</h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
            شكراً لتواصلك يا أستاذ {formData.fullName}. جاري فتح محادثة واتساب لتأكيد الاستفسار وإرفاق صورة الصك.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs text-slate-800 underline hover:text-[#070B14]"
            >
              إرسال استفسار آخر
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 text-right">
          {errorMsg && (
            <div className="flex items-center gap-2.5 p-3.5 bg-red-50 text-red-700 text-xs rounded-md border border-red-200">
              <AlertCircleIcon size={16} className="shrink-0 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 mb-2">
              الاسم الكريم <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              required
              placeholder="الاسم الثلاثي"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#070B14] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-2">
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
              className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#070B14] transition-colors text-right"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-xs font-bold text-slate-700 mb-2">
              المدينة أو المحافظة
            </label>
            <input
              type="text"
              id="city"
              placeholder="مثال: الرياض"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#070B14] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="serviceSlug" className="block text-xs font-bold text-slate-700 mb-2">
              نوع الخدمة المطلوبة
            </label>
            <select
              id="serviceSlug"
              value={formData.serviceSlug}
              onChange={(e) => setFormData({ ...formData, serviceSlug: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-[#070B14] transition-colors"
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
            <label htmlFor="notes" className="block text-xs font-bold text-slate-700 mb-2">
              تفاصيل إضافية عن المعاملة (اختياري)
            </label>
            <textarea
              id="notes"
              rows={3}
              placeholder="مثال: لدي رخصة بناء منتهية وأرغب في تجديدها..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 rounded-md border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#070B14] transition-colors"
            ></textarea>
          </div>

          <p className="text-xs text-slate-400 font-light">
            تُستخدم هذه البيانات للتواصل معك بخصوص طلبك فقط دون أي مشاركة مع أطراف أخرى.
          </p>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-md font-bold text-sm bg-[#070B14] text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            إرسال ومتابعة عبر واتساب
          </button>
        </form>
      )}
    </div>
  );
}
