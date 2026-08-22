import type { Metadata, Viewport } from "next";
import {
  absoluteSiteUrl,
  AVATAR_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  applicationName: SITE_NAME,
  title: { default: SITE_NAME, template: "%s — Selenite" },
  description: SITE_DESCRIPTION,
  category: "technology",
  creator: "Selenite",
  publisher: "Selenite",
  referrer: "strict-origin-when-cross-origin",
  manifest: absoluteSiteUrl("manifest.webmanifest"),
  icons: {
    icon: AVATAR_URL,
    shortcut: AVATAR_URL,
    apple: AVATAR_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: absoluteSiteUrl(),
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: AVATAR_URL,
        width: 256,
        height: 256,
        alt: "Selenite Discord bot avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [AVATAR_URL],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f0e7",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
