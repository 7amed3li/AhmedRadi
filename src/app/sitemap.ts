import { MetadataRoute } from "next";
import { getAllServices } from "@/data/servicesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahmed-radi-engineering.sa";
  const services = getAllServices();

  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: "2026-11-04",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: "2026-11-04",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2026-11-04",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...serviceUrls,
  ];
}
