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
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${officeConfig.brandName}`,
    default: `${officeConfig.brandName} - استشارات هندسية ومساحية ورخص البناء`,
  },
  description:
    "مكتب استشارات هندسية ومساحية في السعودية: إصدار وتجديد وتعديل رخص البناء، شهادات إتمام البناء والإشغال، التقارير والرفع والركائز المساحية، وتحديث الصكوك الورقية وفق كود البناء السعودي.",
  keywords: [
    "مكتب هندسي",
    "رخصة بناء",
    "بلدي",
    "تقرير مساحي",
    "رفع مساحي",
    "شهادة إشغال",
    "إتمام بناء",
    "تسوير أرض فضاء",
    "تحديث الصكوك",
    "ركائز مساحية",
    "كود البناء السعودي",
    "أحمد راضي",
  ],
  authors: [{ name: officeConfig.engineerName }],
  creator: officeConfig.brandName,
  formatDetection: {
    telephone: true,
  },
  metadataBase: new URL("https://ahmed-radi-engineering.sa"),
  openGraph: {
    title: `${officeConfig.brandName} - استشارات هندسية ومساحية`,
    description:
      "خدمات رخص البناء، التقارير المساحية، شهادات الإشغال، وتحديث الصكوك وفق كود البناء السعودي.",
    locale: "ar_SA",
    type: "website",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
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
