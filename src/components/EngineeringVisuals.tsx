import React from "react";

interface VisualProps {
  className?: string;
}

/**
 * Architectural Building Blueprint Cross-Section & Elevation
 */
export function BuildingLicenseVisual({ className = "w-full h-44" }: VisualProps) {
  return (
    <div className={`relative bg-[#050811] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-slate-800 ${className}`}>
      {/* Blueprint background grid */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
      
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
        {/* Ground level */}
        <line x1="20" y1="165" x2="380" y2="165" stroke="#C5A059" strokeWidth="2" strokeDasharray="6 3" />
        <text x="32" y="180" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">منسوب الصفر +0.00</text>
        
        {/* Main Villa Structure Outline */}
        <rect x="70" y="60" width="160" height="105" stroke="#E2E8F0" strokeWidth="2" fill="#0A192F" fillOpacity="0.4" />
        
        {/* Upper floor / Penthouse (الملحق) */}
        <rect x="100" y="25" width="100" height="35" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="4 2" fill="#0A192F" fillOpacity="0.6" />
        <text x="135" y="46" fill="#C5A059" fontSize="10" fontWeight="bold">الملحق العلوي</text>
        
        {/* Floor slabs (الأسقف الخرسانية) */}
        <line x1="65" y1="115" x2="235" y2="115" stroke="#94A3B8" strokeWidth="2" />
        <line x1="65" y1="60" x2="235" y2="60" stroke="#94A3B8" strokeWidth="2" />
        
        {/* Structural columns (الأعمدة الإنشائية) */}
        <rect x="75" y="60" width="8" height="105" fill="#C5A059" />
        <rect x="145" y="60" width="8" height="105" fill="#C5A059" />
        <rect x="215" y="60" width="8" height="105" fill="#C5A059" />
        
        {/* Dimension Lines (خطوط الأبعاد) */}
        <line x1="70" y1="185" x2="230" y2="185" stroke="#C5A059" strokeWidth="1" />
        <line x1="70" y1="180" x2="70" y2="190" stroke="#C5A059" strokeWidth="1" />
        <line x1="230" y1="180" x2="230" y2="190" stroke="#C5A059" strokeWidth="1" />
        <text x="130" y="195" fill="#E2E8F0" fontSize="9" fontWeight="bold">عرض المبنى 16.00م</text>

        {/* Height dimension */}
        <line x1="45" y1="25" x2="45" y2="165" stroke="#94A3B8" strokeWidth="1" />
        <line x1="40" y1="25" x2="50" y2="25" stroke="#94A3B8" strokeWidth="1" />
        <line x1="40" y1="165" x2="50" y2="165" stroke="#94A3B8" strokeWidth="1" />
        <text x="15" y="100" fill="#94A3B8" fontSize="9" transform="rotate(-90 20,100)">ارتفاع 10.50م</text>

        {/* Setback indicator (الارتداد النظامي) */}
        <rect x="250" y="100" width="110" height="65" stroke="#334155" strokeWidth="1" fill="#0A192F" strokeDasharray="3 3" />
        <text x="270" y="135" fill="#CBD5E1" fontSize="10">ارتداد نظامي 2.00م</text>
        <text x="275" y="150" fill="#C5A059" fontSize="9">كود البناء SBC</text>
      </svg>
    </div>
  );
}

/**
 * Topographic Surveying & Total Station Diagram
 */
export function SurveyingVisual({ className = "w-full h-44" }: VisualProps) {
  return (
    <div className={`relative bg-[#050811] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-slate-800 ${className}`}>
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
      
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
        {/* Topographic Contour Lines (خطوط الكنتور) */}
        <path d="M 20 170 Q 120 120, 220 150 T 380 130" stroke="#1E293B" strokeWidth="1.5" fill="none" />
        <path d="M 20 145 Q 120 95, 220 125 T 380 105" stroke="#334155" strokeWidth="1.5" fill="none" />
        <path d="M 20 120 Q 120 70, 220 100 T 380 80" stroke="#475569" strokeWidth="1.5" fill="none" />
        
        {/* Surveying Total Station Instrument on Tripod */}
        <g transform="translate(100, 50)">
          {/* Tripod Legs */}
          <line x1="40" y1="60" x2="10" y2="120" stroke="#C5A059" strokeWidth="2.5" />
          <line x1="40" y1="60" x2="40" y2="120" stroke="#C5A059" strokeWidth="2.5" />
          <line x1="40" y1="60" x2="70" y2="120" stroke="#C5A059" strokeWidth="2.5" />
          {/* Tribrach and body */}
          <rect x="30" y="45" width="20" height="15" fill="#C5A059" rx="2" />
          <rect x="25" y="20" width="30" height="25" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" rx="3" />
          <circle x="40" y="32" r="6" fill="#050811" stroke="#C5A059" strokeWidth="1.5" />
          {/* Laser sight line */}
          <line x1="55" y1="32" x2="220" y2="45" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="5 3" />
        </g>

        {/* Survey Prism Target on Pole */}
        <g transform="translate(320, 60)">
          <line x1="15" y1="20" x2="15" y2="110" stroke="#C5A059" strokeWidth="2" />
          <polygon points="5,20 25,20 15,5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="15" cy="110" r="3" fill="#C5A059" />
          <text x="-15" y="130" fill="#E2E8F0" fontSize="9" fontWeight="bold">الركيزة المساحية</text>
        </g>

        {/* GPS Coordinates Badge */}
        <g transform="translate(190, 20)">
          <rect x="0" y="0" width="130" height="42" fill="#0A192F" stroke="#C5A059" strokeWidth="1" rx="4" />
          <text x="10" y="16" fill="#94A3B8" fontSize="8">نظام إحداثيات WGS84</text>
          <text x="10" y="30" fill="#C5A059" fontSize="10" fontWeight="bold">N 24°41&apos;32&quot; E 46°43&apos;18&quot;</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Land Fencing License Diagram (تسوير الأراضي الفضاء)
 */
export function FencingVisual({ className = "w-full h-44" }: VisualProps) {
  return (
    <div className={`relative bg-[#050811] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-slate-800 ${className}`}>
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
      
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
        {/* Street line (الشارع التجاري/الرئيسي) */}
        <rect x="20" y="150" width="360" height="35" fill="#0A192F" stroke="#334155" strokeWidth="1" />
        <line x1="30" y1="167" x2="370" y2="167" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="12 6" />
        <text x="160" y="172" fill="#94A3B8" fontSize="10" fontWeight="bold">شارع تجاري 30م</text>

        {/* Fencing Wall Elevation (تصميم السور النظامي) */}
        <g transform="translate(60, 45)">
          {/* Wall pillars */}
          <rect x="0" y="20" width="16" height="85" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" />
          <rect x="90" y="20" width="16" height="85" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" />
          <rect x="180" y="20" width="16" height="85" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" />
          <rect x="270" y="20" width="16" height="85" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" />

          {/* Solid base wall */}
          <rect x="16" y="80" width="74" height="25" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          <rect x="106" y="80" width="74" height="25" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          <rect x="196" y="80" width="74" height="25" fill="#1E293B" stroke="#64748B" strokeWidth="1" />

          {/* Decorative panels compliant with municipal code */}
          <rect x="16" y="30" width="74" height="50" fill="#0A192F" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 2" />
          <rect x="106" y="30" width="74" height="50" fill="#0A192F" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 2" />
          <rect x="196" y="30" width="74" height="50" fill="#0A192F" stroke="#C5A059" strokeWidth="1" strokeDasharray="4 2" />
          
          {/* Municipal height requirement label */}
          <line x1="-15" y1="20" x2="-15" y2="105" stroke="#C5A059" strokeWidth="1" />
          <line x1="-20" y1="20" x2="-10" y2="20" stroke="#C5A059" strokeWidth="1" />
          <line x1="-20" y1="105" x2="-10" y2="105" stroke="#C5A059" strokeWidth="1" />
          <text x="-48" y="68" fill="#C5A059" fontSize="9" transform="rotate(-90 -35,68)">ارتفاع 2.00م</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Building Occupancy & Final Completion Certificate
 */
export function OccupancyVisual({ className = "w-full h-44" }: VisualProps) {
  return (
    <div className={`relative bg-[#050811] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-slate-800 ${className}`}>
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
      
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
        {/* Completed Building silhouette */}
        <g transform="translate(40, 30)">
          <rect x="0" y="20" width="130" height="120" fill="#0A192F" stroke="#475569" strokeWidth="1.5" />
          {/* Windows */}
          <rect x="15" y="35" width="25" height="30" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          <rect x="55" y="35" width="25" height="30" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          <rect x="95" y="35" width="20" height="30" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          <rect x="15" y="80" width="25" height="30" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          <rect x="55" y="80" width="25" height="30" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          <rect x="95" y="80" width="20" height="30" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
          {/* Main Door */}
          <rect x="55" y="115" width="25" height="25" fill="#C5A059" />
        </g>

        {/* Certificate / Electric Connection Stamp */}
        <g transform="translate(200, 30)">
          <rect x="0" y="0" width="170" height="140" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" rx="6" />
          <rect x="8" y="8" width="154" height="124" fill="#050811" stroke="#334155" strokeWidth="1" rx="4" />
          
          <text x="25" y="30" fill="#C5A059" fontSize="11" fontWeight="bold">شهادة إشغال معتمدة</text>
          <line x1="25" y1="36" x2="145" y2="36" stroke="#334155" strokeWidth="1" />
          
          <text x="25" y="55" fill="#94A3B8" fontSize="9">فحص مطابقة الواجهات</text>
          <circle cx="135" cy="52" r="5" fill="#10B981" />
          
          <text x="25" y="75" fill="#94A3B8" fontSize="9">اعتماد العزل الحراري (الكهرباء)</text>
          <circle cx="135" cy="72" r="5" fill="#10B981" />
          
          <text x="25" y="95" fill="#94A3B8" fontSize="9">تقرير الإشراف الهندسي</text>
          <circle cx="135" cy="92" r="5" fill="#10B981" />

          {/* Electric meter connection signal */}
          <rect x="25" y="108" width="120" height="18" fill="#1E293B" rx="3" />
          <text x="35" y="121" fill="#E2E8F0" fontSize="9" fontWeight="bold">إطلاق التيار الكهربائي جاهز</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Electronic Deed Update & Cadastral Mapping
 */
export function DeedUpdateVisual({ className = "w-full h-44" }: VisualProps) {
  return (
    <div className={`relative bg-[#050811] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-slate-800 ${className}`}>
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
      
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
        {/* Old Paper Deed representation */}
        <g transform="translate(30, 35)">
          <rect x="0" y="0" width="100" height="130" fill="#1E293B" stroke="#475569" strokeWidth="1.5" rx="3" />
          <line x1="15" y1="20" x2="85" y2="20" stroke="#94A3B8" strokeWidth="2" />
          <line x1="15" y1="35" x2="85" y2="35" stroke="#475569" strokeWidth="1" />
          <line x1="15" y1="50" x2="85" y2="50" stroke="#475569" strokeWidth="1" />
          <line x1="15" y1="65" x2="70" y2="65" stroke="#475569" strokeWidth="1" />
          <circle cx="50" cy="95" r="15" fill="#334155" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" />
          <text x="25" y="120" fill="#94A3B8" fontSize="8">صك ورقي قديم</text>
        </g>

        {/* Transition Arrow */}
        <g transform="translate(145, 95)">
          <line x1="0" y1="0" x2="35" y2="0" stroke="#C5A059" strokeWidth="2" />
          <polygon points="35,-5 45,0 35,5" fill="#C5A059" />
          <text x="-5" y="-10" fill="#C5A059" fontSize="8" fontWeight="bold">مطابقة الأطوال</text>
        </g>

        {/* New Electronic Digital Deed & Parcel */}
        <g transform="translate(205, 30)">
          <rect x="0" y="0" width="165" height="140" fill="#0A192F" stroke="#C5A059" strokeWidth="1.5" rx="6" />
          <text x="15" y="24" fill="#E2E8F0" fontSize="10" fontWeight="bold">الصك الإلكتروني (البورصة العقارية)</text>
          
          {/* Cadastral Polygon */}
          <polygon points="30,45 135,40 145,100 20,105" fill="#1E293B" stroke="#C5A059" strokeWidth="1.5" />
          <text x="50" y="75" fill="#CBD5E1" fontSize="9">قطعة رقم 142</text>
          <text x="45" y="90" fill="#94A3B8" fontSize="8">المساحة: 625.00 م²</text>
          
          <rect x="15" y="115" width="135" height="16" fill="#050811" stroke="#334155" strokeWidth="1" rx="3" />
          <text x="25" y="127" fill="#10B981" fontSize="8" fontWeight="bold">تم التحديث والمطابقة المساحية</text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Civil Defense & Fire Safety Schematic
 */
export function CivilDefenseVisual({ className = "w-full h-44" }: VisualProps) {
  return (
    <div className={`relative bg-[#050811] rounded-xl overflow-hidden p-4 flex items-center justify-center border border-slate-800 ${className}`}>
      <div className="absolute inset-0 blueprint-grid-dark opacity-40 pointer-events-none" />
      
      <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
        {/* Commercial Building Floor Plan */}
        <rect x="50" y="30" width="300" height="140" fill="#0A192F" stroke="#475569" strokeWidth="1.5" />
        
        {/* Rooms / Partitions */}
        <line x1="150" y1="30" x2="150" y2="120" stroke="#334155" strokeWidth="1.5" />
        <line x1="250" y1="30" x2="250" y2="120" stroke="#334155" strokeWidth="1.5" />
        
        {/* Main Egress Corridor (ممر الهروب الرئيسي) */}
        <rect x="50" y="120" width="300" height="50" fill="#050811" stroke="#334155" strokeWidth="1" />
        <text x="160" y="150" fill="#94A3B8" fontSize="10">ممر طوارئ بعرض نظامي 2.40م</text>

        {/* Emergency Exit (مخرج طوارئ) */}
        <g transform="translate(330, 130)">
          <rect x="0" y="0" width="30" height="30" fill="#10B981" rx="3" />
          <text x="5" y="18" fill="#FFFFFF" fontSize="8" fontWeight="bold">EXIT</text>
        </g>

        {/* Fire Extinguisher Points */}
        <circle cx="100" cy="75" r="8" fill="#EF4444" />
        <text x="96" y="79" fill="#FFFFFF" fontSize="9" fontWeight="bold">F</text>
        
        <circle cx="200" cy="75" r="8" fill="#EF4444" />
        <text x="196" y="79" fill="#FFFFFF" fontSize="9" fontWeight="bold">F</text>
        
        <circle cx="300" cy="75" r="8" fill="#EF4444" />
        <text x="296" y="79" fill="#FFFFFF" fontSize="9" fontWeight="bold">F</text>

        {/* Sprinkler Network lines */}
        <line x1="70" y1="50" x2="330" y2="50" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="70" y="44" fill="#38BDF8" fontSize="8">شبكة رش آلي معتمدة (NFPA / كود الحريق)</text>
      </svg>
    </div>
  );
}

/**
 * Returns matching visual for a given service category
 */
export function getServiceVisual(category: string, className?: string) {
  switch (category) {
    case "building_licenses":
      return <BuildingLicenseVisual className={className} />;
    case "surveying":
      return <SurveyingVisual className={className} />;
    case "occupancy":
      return <OccupancyVisual className={className} />;
    case "deeds":
      return <DeedUpdateVisual className={className} />;
    case "civil_defense":
      return <CivilDefenseVisual className={className} />;
    default:
      return <BuildingLicenseVisual className={className} />;
  }
}

