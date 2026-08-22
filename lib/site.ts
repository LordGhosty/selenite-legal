export const SELENITE_APPLICATION_ID = "1287008074976198667";

export const SELENITE_INVITE_URL =
  "https://discord.com/oauth2/authorize?client_id=1287008074976198667";

export const SITE_NAME = "Selenite Legal";

export const SITE_DESCRIPTION =
  "Selenite is a configurable Discord moderation bot built to make powerful server administration simple. Read its Terms of Use and Privacy Policy.";

function resolveBasePath() {
  const configuredPath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

  if (!configuredPath || configuredPath === "/") {
    return "";
  }

  return `/${configuredPath.replace(/^\/+|\/+$/g, "")}`;
}

export const BASE_PATH = resolveBasePath();

function resolveSiteUrl() {
  const configuredUrl = process.env.SITE_URL?.trim();

  try {
    const siteUrl = new URL(
      configuredUrl || `http://localhost:3000${BASE_PATH}/`,
    );

    if (!siteUrl.pathname.endsWith("/")) {
      siteUrl.pathname += "/";
    }

    return siteUrl;
  } catch {
    return new URL(`http://localhost:3000${BASE_PATH}/`);
  }
}

export const SITE_URL = resolveSiteUrl();

export function internalHref(path: string) {
  const cleanedPath = path.replace(/^\/+|\/+$/g, "");
  return cleanedPath ? `${BASE_PATH}/${cleanedPath}/` : `${BASE_PATH}/`;
}

export function absoluteSiteUrl(path = "") {
  return new URL(path.replace(/^\/+/, ""), SITE_URL).toString();
}

export const AVATAR_PATH = `${BASE_PATH}/selenite-avatar.webp`;
export const AVATAR_URL = absoluteSiteUrl("selenite-avatar.webp");
