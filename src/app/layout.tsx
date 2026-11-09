import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { officeConfig } from "@/config/officeConfig";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1528",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ahmed-radi-two.vercel.app";

export const metadata: Metadata = {
  title: {
    template: `%s | ${officeConfig.brandName}`,
    default: `${officeConfig.brandName} | رخص البناء والمخططات والرفع المساحي والتقارير المعتمدة`,
  },
  description:
    "مكتب أحمد راضي للاستشارات الهندسية والمساحية في السعودية: إصدار رخص البناء، رخص تسوير الأراضي الفضاء، التقارير والرفوعات المساحية، تثبيت الركائز، شهادات إتمام البناء والإشغال، وتحديث الصكوك وفق كود البناء السعودي ومنصة بلدي.",
  keywords: [
    "مكتب أحمد راضي للاستشارات الهندسية",
    "المهندس أحمد راضي",
    "مكتب هندسي",
    "مكتب هندسي معتمد",
    "مكتب استشارات هندسية بالرياض",
    "مكتب مساحة",
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
    title: `${officeConfig.brandName} | رخص البناء والمخططات والرفع المساحي`,
    description:
      "من صك العقار إلى المخططات والرخصة بخطوات هندسية واضحة وموثوقة بإشراف المهندس أحمد راضي.",
    url: baseUrl,
    siteName: officeConfig.brandName,
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 800,
        alt: officeConfig.brandName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${officeConfig.brandName} | استشارات هندسية ومساحية`,
    description:
      "خدمات رخص البناء والتقارير المساحية وشهادات الإشغال وفق كود البناء السعودي.",
    images: ["/logo.webp"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`scroll-smooth ${cairo.variable}`}>
      <body className="font-cairo min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-[#C5A059]/20 selection:text-[#050811]">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <MobileStickyBar />
        <Footer />
      </body>
    </html>
  );
}
