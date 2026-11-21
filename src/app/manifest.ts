import { MetadataRoute } from "next";
import { officeConfig, SITE_URL } from "@/config/officeConfig";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "مكتب أحمد راضي للاستشارات الهندسية والمساحية",
    short_name: "أحمد راضي",
    description: "مكتب هندسي معتمد في جميع أنحاء المملكة العربية السعودية - رخص البناء والتقارير المساحية وكود البناء السعودي",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1528",
    theme_color: "#0B1528",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
