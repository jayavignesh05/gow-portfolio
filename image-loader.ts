"use client";

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("https://images.unsplash.com")) return src;

  // In development, just return the src (unoptimized)
  if (process.env.NODE_ENV === "development") {
    return src;
  }

  // Parse the source path
  // Example: /images/intro/i1.jpg
  const lastSlashIndex = src.lastIndexOf("/");
  const path = src.substring(0, lastSlashIndex); // /images/intro
  const filenameWithExt = src.substring(lastSlashIndex + 1); // i1.jpg

  const lastDotIndex = filenameWithExt.lastIndexOf(".");
  const filename =
    lastDotIndex !== -1
      ? filenameWithExt.substring(0, lastDotIndex)
      : filenameWithExt; // i1

  // The optimizer forces WEBP if configured (which it is)
  // and it uses uppercase extension
  const extension = "WEBP";

  const folder =
    process.env.nextImageExportOptimizer_exportFolderName ||
    "nextImageExportOptimizer";

  // Handle root path logic. Ensure we don't end up with double slashes if path is empty or just "/"
  const pathPrefix = path === "" ? "" : path;
  const separator = pathPrefix.endsWith("/") ? "" : "/";

  // Construct the new path
  // Pattern: [path]/[folder]/[filename]-opt-[width].[extension]
  // Example: /images/intro/nextImageExportOptimizer/i1-opt-1920.WEBP
  return `${pathPrefix}${separator}${folder}/${filename}-opt-${width}.${extension}`;
}
