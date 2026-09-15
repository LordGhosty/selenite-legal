import { access, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const APPLICATION_ID = "1287008074976198667";
const APPLICATION_PROFILE_URL =
  `https://discord.com/api/v10/oauth2/applications/${APPLICATION_ID}/rpc`;
const AVATAR_FILE = fileURLToPath(
  new URL("../public/selenite-avatar.webp", import.meta.url),
);

async function fallbackExists() {
  try {
    await access(AVATAR_FILE);
    return true;
  } catch {
    return false;
  }
}

async function refreshAvatar() {
  const profileResponse = await fetch(APPLICATION_PROFILE_URL, {
    headers: { "User-Agent": "Selenite-Legal-Site/1.0" },
    signal: AbortSignal.timeout(10_000),
  });

  if (!profileResponse.ok) {
    throw new Error(`Discord profile request returned ${profileResponse.status}`);
  }

  const profile = await profileResponse.json();
  const iconHash = typeof profile.icon === "string" ? profile.icon : "";

  if (!/^(?:a_)?[a-f0-9]+$/i.test(iconHash)) {
    throw new Error("Discord did not return a valid application icon hash");
  }

  const iconUrl =
    `https://cdn.discordapp.com/app-icons/${APPLICATION_ID}/${iconHash}.webp?size=256`;
  const iconResponse = await fetch(iconUrl, {
    headers: { "User-Agent": "Selenite-Legal-Site/1.0" },
    signal: AbortSignal.timeout(10_000),
  });

  if (!iconResponse.ok) {
    throw new Error(`Discord icon request returned ${iconResponse.status}`);
  }

  const contentType = iconResponse.headers.get("content-type") || "";
  if (!contentType.toLowerCase().startsWith("image/")) {
    throw new Error("Discord returned a non-image response for the application icon");
  }

  const icon = Buffer.from(await iconResponse.arrayBuffer());

  if (icon.length < 100 || icon.length > 2 * 1024 * 1024) {
    throw new Error("Discord returned an unexpected icon file size");
  }

  const isWebP =
    icon.subarray(0, 4).toString("ascii") === "RIFF" &&
    icon.subarray(8, 12).toString("ascii") === "WEBP";

  if (!isWebP) {
    throw new Error("Discord returned an invalid WebP application icon");
  }

  await writeFile(AVATAR_FILE, icon);
  console.log("Refreshed Selenite's public application icon.");
}

try {
  await refreshAvatar();
} catch (error) {
  if (!(await fallbackExists())) {
    throw error;
  }

  console.warn(
    `Could not refresh Selenite's icon; using the checked-in fallback. ${error.message}`,
  );
}
