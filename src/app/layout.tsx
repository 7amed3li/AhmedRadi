import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { officeConfig, SITE_URL } from "@/config/officeConfig";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1528",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const baseUrl = SITE_URL.replace(/\/+$/, "");

export const metadata: Metadata = {
  title: {
    template: `%s | ${officeConfig.brandName}`,
    default: `${officeConfig.brandName} | رخص البناء والمخططات والرفع المساحي المعتمد في السعودية`,
  },
  description:
    "مكتب أحمد راضي للاستشارات الهندسية والمساحية في السعودية: إصدار رخص البناء، رخص تسوير الأراضي الفضاء، التقارير والرفوعات المساحية، تثبيت الركائز، شهادات إتمام البناء والإشغال، وتحديث الصكوك وفق كود البناء السعودي ومنصة بلدي.",
  keywords: [
    "مكتب أحمد راضي للاستشارات الهندسية",
    "المهندس أحمد راضي",
    "مكتب هندسي",
    "مكتب هندسي معتمد",
    "مكتب استشارات هندسية بالرياض",
    "مكتب هندسي معتمد في جميع أنحاء المملكة العربية السعودية",
    "مكتب مساحة معتمد",
    "رخصة بناء",
    "إصدار رخصة بناء",
    "رخصة تسوير أرض فضاء",
    "تسوير الأراضي الفضاء",
    "تقرير مساحي",
    "إصدار تقرير مساحي بلدي",
    "رفع مساحي",
    "رفع مساحي طبوغرافي",
    "ركائز مساحية",
    "تثبيت ركائز الأرض",
    "شهادة إشغال",
    "شهادة إتمام بناء",
    "إطلاق التيار الكهربائي",
    "تجديد رخصة بناء منتهية",
    "تعديل رخصة بناء",
    "تصحيح وضع المباني القائمة",
    "تحويل من سكني إلى تجاري",
    "تحديث الصكوك الورقية",
    "كود البناء السعودي",
    "منصة بلدي",
    "منصة سلامة الدفاع المدني",
    "البورصة العقارية ناجز",
  ],
  authors: [{ name: officeConfig.engineerName, url: baseUrl }],
  creator: officeConfig.brandName,
  publisher: officeConfig.brandName,
  formatDetection: {
    telephone: true,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: `${officeConfig.brandName} | مكتب هندسي معتمد في جميع أنحاء المملكة العربية السعودية`,
    description:
      "من صك العقار إلى المخططات والرخصة بخطوات هندسية واضحة وموثوقة بإشراف المهندس أحمد راضي.",
    url: baseUrl,
    siteName: officeConfig.brandName,
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: `${baseUrl}/logo-clean.webp`,
        width: 800,
        height: 800,
        alt: officeConfig.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${officeConfig.brandName} | استشارات هندسية ومساحية معتمدة`,
    description:
      "خدمات رخص البناء والتقارير المساحية وشهادات الإشغال وفق كود البناء السعودي.",
    images: [`${baseUrl}/logo-clean.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "SA",
    "geo.placename": "Saudi Arabia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#office`,
        "name": officeConfig.brandName,
        "alternateName": [
          "مكتب أحمد راضي",
          "مكتب أحمد راضي للمساحة",
          "Ahmed Radi Engineering Consulting"
        ],
        "url": baseUrl,
        "logo": `${baseUrl}/logo-clean.webp`,
        "image": `${baseUrl}/logo-clean.webp`,
        "telephone": [
          officeConfig.phone.international,
          officeConfig.secondaryPhone?.international || ""
        ].filter(Boolean),
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressRegion": "الرياض ومناطق المملكة"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "24.7136",
          "longitude": "46.6753"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": officeConfig.brandName,
        "publisher": {
          "@id": `${baseUrl}/#office`
        },
        "inLanguage": "ar"
      }
    ]
  };

  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${cairo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-cairo min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#C5A059]/20 selection:text-[#050811]">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <MobileStickyBar />
        <Footer />
      </body>
    </html>
  );
}
