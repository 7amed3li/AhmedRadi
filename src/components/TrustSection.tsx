import React from "react";
import { officeConfig } from "@/config/officeConfig";
import { ShieldCheckIcon, CheckCircleIcon, AlertCircleIcon, ExternalLinkIcon } from "@/components/Icons";

export default function TrustSection() {
  const hasVerification =
    officeConfig.verification.isVerifiedAndActive &&
    (officeConfig.verification.engineeringLicenseNumber || officeConfig.verification.officialVerificationUrl);

  return (
    <section id="trust" className="py-16 lg:py-24 bg-mist/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
          <span className="eyebrow justify-center">
            المعايير المهنية
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-ink-900">
            الالتزام النظامي والوضوح الفني
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            إيضاح الواقع النظامي للمعاملة البلدية دون وعود غير واقعية أو تقديرات تخمينية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-chip hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 rounded-2xl bg-ink-950 text-brass-400 flex items-center justify-center mb-4 shadow-chip">
              <ShieldCheckIcon size={20} />
            </div>
            <h3 className="font-bold text-ink-900 text-sm mb-2">
              التوافق مع كود البناء السعودي
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              إعداد وتدقيق المخططات الإنشائية والمعمارية وفق اشتراطات الكود المعتمد لتفادي الملاحظات البلدية أثناء المراجعة.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-chip hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 rounded-2xl bg-ink-950 text-brass-400 flex items-center justify-center mb-4 shadow-chip">
              <CheckCircleIcon size={20} />
            </div>
            <h3 className="font-bold text-ink-900 text-sm mb-2">
              شفافية الأتعاب والرسوم
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              تحديد الأتعاب الهندسية بوضوح مسبق، مع الفصل بين أتعاب المكتب والرسوم البلدية الحكومية التي يسددها المالك عبر سداد.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-chip hover:shadow-lift hover:-translate-y-1 transition-all duration-300">
            <div className="w-11 h-11 rounded-2xl bg-ink-950 text-brass-400 flex items-center justify-center mb-4 shadow-chip">
              <AlertCircleIcon size={20} />
            </div>
            <h3 className="font-bold text-ink-900 text-sm mb-2">
              التقدير الواقعي للمدد
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              لا نطلق وعوداً غير دقيقة بمدد إنجاز حكومية، بل نوضح المسار الفني والاشتراطات التي تؤثر على قرارات الاعتماد لدى الأمانات.
            </p>
          </div>

        </div>

        {hasVerification ? (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 border border-slate-200 shadow-card text-center space-y-4">
            <span className="text-xs font-bold text-brass-600 uppercase tracking-wider block">
              بيانات التحقق من الترخيص النظامي
            </span>
            <h3 className="text-base font-bold text-ink-900">
              {officeConfig.legalOfficeName || officeConfig.brandName}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 pt-2 text-right">
              {officeConfig.verification.engineeringLicenseNumber && (
                <div className="p-3 bg-paper rounded-xl border border-slate-200">
                  <span className="font-medium block text-slate-500">رقم الترخيص الهندسي:</span>
                  <span className="font-bold text-ink-900">{officeConfig.verification.engineeringLicenseNumber}</span>
                </div>
              )}
              {officeConfig.verification.classificationNumber && (
                <div className="p-3 bg-paper rounded-xl border border-slate-200">
                  <span className="font-medium block text-slate-500">رقم التصنيف المعتمد:</span>
                  <span className="font-bold text-ink-900">{officeConfig.verification.classificationNumber}</span>
                </div>
              )}
            </div>

            {officeConfig.verification.officialVerificationUrl && (
              <div className="pt-2">
                <a
                  href={officeConfig.verification.officialVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-950 text-white text-xs font-bold hover:bg-ink-800 transition shadow-chip"
                >
                  <span>التحقق عبر المنصة الرسمية</span>
                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center p-4 bg-white rounded-2xl border border-slate-200/90 shadow-chip text-xs text-slate-500 font-normal">
            يلتزم المكتب بأعلى معايير النزاهة المهنية؛ مراجعة الصكوك وتقديم الطلبات البلدية يتم عبر المنصات المعتمدة نظاماً.
          </div>
        )}

      </div>
    </section>
  );
}
