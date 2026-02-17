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

  const folder =
    process.env.nextImageExportOptimizer_exportFolderName ||
    "nextImageExportOptimizer";
  return `/${folder}${src.startsWith("/") ? "" : "/"}${src}/${width}/${quality || 75}`;
}
