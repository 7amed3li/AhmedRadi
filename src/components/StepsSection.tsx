import React from "react";
import { CompassDraftingIcon, PhoneIcon, FileTextIcon, CheckCircleIcon } from "@/components/Icons";

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "التواصل الأولي وتحديد نوع المعاملة",
      description: "مشاركة بيانات الصك الإلكتروني ونوع المعاملة المراد إنجازها لتحديد المسار الفني والبلدي المناسب.",
      icon: PhoneIcon,
    },
    {
      number: "02",
      title: "المعاينة الميدانية والرفع المساحي",
      description: "النزول الميداني لرفع إحداثيات ومناسيب الأرض بالأجهزة المساحية أو فحص مطابقة المبنى القائم.",
      icon: CompassDraftingIcon,
    },
    {
      number: "03",
      title: "إعداد وتدقيق المخططات والتقارير",
      description: "إعداد المخططات الهندسية وكروكيات الرفع المساحي المعتمدة وفق كود البناء السعودي.",
      icon: FileTextIcon,
    },
    {
      number: "04",
      title: "الرفع عبر منصة بلدي والمتابعة",
      description: "رفع المعاملة ومتابعة ملاحظات التدقيق الهندسي حتى صدور الفاتورة وسداد الرسوم البلدية.",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-2">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
            مسار العمل الهندسي
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            آلية تنفيذ المعاملات الهندسية والمساحية
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            إجراءات منظمة ومحددة من استلام الصك وحتى الاعتماد النهائي.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {st.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shadow-xs">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-bold text-[#0F172A] text-sm mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/70 text-[11px] font-medium text-slate-500">
                  المرحلة {idx + 1} من 4
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
