import { MetadataRoute } from "next";
import { getAllServices } from "@/data/servicesData";
import { SITE_URL } from "@/config/officeConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL.replace(/\/+$/, "");
  // Honest, stable lastmod: bump ONLY when page content actually changes.
  // Stamping "today" on every build teaches Google to distrust the sitemap.
  const currentDate = "2026-11-21";
  const services = getAllServices();

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    ...serviceUrls,
  ];
}
