import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const generatedDirectories = ["../.next", "../out"].map((path) =>
  fileURLToPath(new URL(path, import.meta.url)),
);

await Promise.all(
  generatedDirectories.map((path) => rm(path, { recursive: true, force: true })),
);
