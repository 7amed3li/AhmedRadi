/**
 * ملف الإعدادات المركزي لمكتب أحمد راضي للاستشارات الهندسية
 * -------------------------------------------------------------
 * تنبيه للمطور:
 * - لا تضع بيانات وهمية للزوار.
 * - إذا كانت الحقول فارغة (مثل رقم الترخيص أو العنوان المادي)، يقوم الموقع تلقائياً بإخفاء الأقسام المرتبطة بها حتى يتم تأكيدها.
 * - البيانات أدناه مستخرجة مبدئياً من بطاقة المكتب وتعتبر غير مؤكدة حتى يراجعها المهندس أحمد.
 */

export interface OfficeConfig {
  // البيانات الأساسية
  engineerName: string;
  engineerTitle: string;
  brandName: string;
  legalOfficeName?: string; // الاسم القانوني للمكتب (فارغ حتى يتم تأكيده)
  
  // الاتصال والتواصل
  phone: {
    display: string;
    raw: string;
    international: string;
    isConfirmed: boolean; // هل تم التحقق من استقبال المكالمات والرسائل؟
  };
  secondaryPhone?: {
    display: string;
    raw: string;
    international: string;
    isConfirmed: boolean;
  };
  whatsapp: {
    number: string; // صيغة دولية بدون علامة + (مثال: 966563827520)
    defaultMessage: string;
    isConfirmed: boolean;
  };
  
  // التراخيص والاعتمادات الرسمية
  verification: {
    engineeringLicenseNumber?: string; // رقم ترخيص المكتب الهندسي
    classificationNumber?: string;     // رقم شهادة التصنيف
    councilMembershipNumber?: string;  // رقم عضوية الهيئة السعودية للمهندسين
    officialVerificationUrl?: string; // رابط رسمي في منصة بلدي أو الهيئة
    isVerifiedAndActive: boolean;      // يفعّل فقط بعد مراجعة المستندات الرسمية
  };
  
  // النطاق الجغرافي والمقر
  location: {
    city?: string;                     // المدينة الرئيسية (تظهر بعد التأكيد)
    serviceRegions: string[];          // المناطق المخدومة
    physicalAddress?: string;          // العنوان الفعلي (لا يُعرض إذا لم يكن مناسباً للاستقبال)
    googleMapsUrl?: string;            // رابط الخريطة
    showAddressOnSite: boolean;        // حماية الخصوصية ومقر الاستقبال
  };
  
  // أوقات العمل والرد
  workingHours?: {
    days?: string;
    hours?: string;
    responseEstimate?: string;         // مثل: "الرد عادة خلال ساعات العمل الرسمية"
    showHoursOnSite: boolean;
  };

  // سياسة الأسعار والمدد
  pricingPolicy: {
    showPricingRange: boolean;
    note: string;
  };

  // رابط QR الوارد في البطاقة (مفحوص ومتحقق منه)
  verifiedQrDestinationUrl?: string;
}

export const officeConfig: OfficeConfig = {
  engineerName: "أحمد راضي",
  engineerTitle: "مهندس استشاري",
  brandName: "مكتب أحمد راضي للاستشارات الهندسية",
  // الاسم القانوني يترك فارغاً حتى تزويده
  legalOfficeName: "",

  phone: {
    display: "056 382 7520",
    raw: "0563827520",
    international: "+966563827520",
    isConfirmed: true, // مبدئي بحسب البطاقة الواردة
  },

  secondaryPhone: {
    display: "054 605 9533",
    raw: "0546059533",
    international: "+966546059533",
    isConfirmed: true,
  },

  whatsapp: {
    number: "966563827520",
    defaultMessage: "السلام عليكم، أود الاستفسار عن الخدمات الهندسية والمساحية في مكتبكم الموقر.",
    isConfirmed: true,
  },

  verification: {
    // تترك فارغة للمطور، وتخفى تلقائياً من الواجهة العامة لمنع أي ادعاء غير مثبت
    engineeringLicenseNumber: "",
    classificationNumber: "",
    councilMembershipNumber: "",
    officialVerificationUrl: "",
    isVerifiedAndActive: false, // لا تفعّل إلا بعد استلام الأرقام والروابط الرسمية
  },

  location: {
    city: "المملكة العربية السعودية",
    serviceRegions: ["الرياض", "جميع مناطق المملكة بحسب نوع المعاملة"],
    physicalAddress: "", // مخفي لأن العنوان الفعلي لم يؤكد بعد لاستقبال المراجعين
    googleMapsUrl: "",
    showAddressOnSite: false,
  },

  workingHours: {
    days: "السبت - الخميس",
    hours: "9:00 ص - 9:00 م",
    responseEstimate: "يتم الرد على استفسارات واتساب والاتصال خلال ساعات العمل",
    showHoursOnSite: true,
  },

  pricingPolicy: {
    showPricingRange: false,
    note: "يتم تحديد الأتعاب الهندسية بوضوح وشفافية بعد مراجعة موقع الأرض أو رخصة البناء ونوع المعاملة المطلوبة، بدون أي التزامات مسبقة.",
  },

  verifiedQrDestinationUrl: "", // يترك فارغاً حتى فحص وجهة الرمز الأصلي
};

/**
 * دالة مساعدة لبناء رابط واتساب مباشر برسالة مخصصة
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const base = `https://wa.me/${officeConfig.whatsapp.number}`;
  const message = customMessage || officeConfig.whatsapp.defaultMessage;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * دالة مساعدة لبناء رابط الاتصال المباشر
 */
export function getPhoneLink(phoneIndex: number = 0): string {
  if (phoneIndex === 1 && officeConfig.secondaryPhone) {
    return `tel:${officeConfig.secondaryPhone.international}`;
  }
  return `tel:${officeConfig.phone.international}`;
}

