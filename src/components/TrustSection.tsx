import React from "react";
import { officeConfig } from "@/config/officeConfig";
import { ShieldCheckIcon, CheckCircleIcon, AlertCircleIcon, ExternalLinkIcon } from "@/components/Icons";

export default function TrustSection() {
  const hasVerification =
    officeConfig.verification.isVerifiedAndActive &&
    (officeConfig.verification.engineeringLicenseNumber || officeConfig.verification.officialVerificationUrl);

  return (
    <section id="trust" className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
          <span className="text-xs font-bold text-[#C5A059] tracking-wider uppercase">
            المعايير المهنية
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            الالتزام النظامي والوضوح الفني
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            إيضاح الواقع النظامي للمعاملة البلدية دون وعود غير واقعية أو تقديرات تخمينية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#050811] text-[#C5A059] flex items-center justify-center mb-4">
              <ShieldCheckIcon size={20} />
            </div>
            <h3 className="font-bold text-[#0F172A] text-sm mb-2">
              التوافق مع كود البناء السعودي
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              إعداد وتدقيق المخططات الإنشائية والمعمارية وفق اشتراطات الكود المعتمد لتفادي الملاحظات البلدية أثناء المراجعة.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#050811] text-[#C5A059] flex items-center justify-center mb-4">
              <CheckCircleIcon size={20} />
            </div>
            <h3 className="font-bold text-[#0F172A] text-sm mb-2">
              شفافية الأتعاب والرسوم
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              تحديد الأتعاب الهندسية بوضوح مسبق، مع الفصل بين أتعاب المكتب والرسوم البلدية الحكومية التي يسددها المالك عبر سداد.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#050811] text-[#C5A059] flex items-center justify-center mb-4">
              <AlertCircleIcon size={20} />
            </div>
            <h3 className="font-bold text-[#0F172A] text-sm mb-2">
              التقدير الواقعي للمدد
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              لا نطلق وعوداً غير دقيقة بمدد إنجاز حكومية، بل نوضح المسار الفني والاشتراطات التي تؤثر على قرارات الاعتماد لدى الأمانات.
            </p>
          </div>

        </div>

        {hasVerification ? (
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 border border-slate-300 shadow-xs text-center space-y-4">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
              بيانات التحقق من الترخيص النظامي
            </span>
            <h3 className="text-base font-bold text-[#0F172A]">
              {officeConfig.legalOfficeName || officeConfig.brandName}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 pt-2 text-right">
              {officeConfig.verification.engineeringLicenseNumber && (
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-medium block text-slate-500">رقم الترخيص الهندسي:</span>
                  <span className="font-bold text-[#0F172A]">{officeConfig.verification.engineeringLicenseNumber}</span>
                </div>
              )}
              {officeConfig.verification.classificationNumber && (
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-medium block text-slate-500">رقم التصنيف المعتمد:</span>
                  <span className="font-bold text-[#0F172A]">{officeConfig.verification.classificationNumber}</span>
                </div>
              )}
            </div>

            {officeConfig.verification.officialVerificationUrl && (
              <div className="pt-2">
                <a
                  href={officeConfig.verification.officialVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#050811] text-white text-xs font-bold hover:bg-slate-800 transition"
                >
                  <span>التحقق عبر المنصة الرسمية</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center p-3.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-500 font-normal">
            يلتزم المكتب بأعلى معايير النزاهة المهنية؛ مراجعة الصكوك وتقديم الطلبات البلدية يتم عبر المنصات المعتمدة نظاماً.
          </div>
        )}

      </div>
    </section>
  );
}
