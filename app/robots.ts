import type { MetadataRoute } from "next";

import { absoluteSiteUrl, internalHref } from "../lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: internalHref("/"),
    },
    sitemap: absoluteSiteUrl("sitemap.xml"),
  };
}
