import type { MetadataRoute } from "next";

import { absoluteSiteUrl } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-22T00:00:00.000Z");

  return [
    {
      url: absoluteSiteUrl(),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteSiteUrl("terms/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteSiteUrl("privacy/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
