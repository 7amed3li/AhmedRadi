import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/officeConfig";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_URL.replace(/\/+$/, "");

  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "PerplexityBot",
    "ClaudeBot",
    "anthropic-ai",
    "Google-Extended",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "Meta-ExternalAgent",
  ];

  const searchBots = [
    "Googlebot",
    "Googlebot-Image",
    "Bingbot",
    "Applebot",
    "Yandex",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      ...searchBots.map((agent) => ({
        userAgent: agent,
        allow: "/",
      })),
      ...aiBots.map((agent) => ({
        userAgent: agent,
        allow: "/",
      })),
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
