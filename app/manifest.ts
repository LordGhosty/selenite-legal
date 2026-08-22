import type { MetadataRoute } from "next";

import {
  absoluteSiteUrl,
  AVATAR_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "../lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Selenite",
    description: SITE_DESCRIPTION,
    start_url: absoluteSiteUrl(),
    display: "standalone",
    background_color: "#f4f0e7",
    theme_color: "#f4f0e7",
    icons: [
      {
        src: AVATAR_URL,
        sizes: "256x256",
        type: "image/webp",
        purpose: "any",
      },
    ],
  };
}
