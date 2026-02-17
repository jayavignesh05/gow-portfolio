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

  return `/${
    process.env.nextImageExportOptimizer_exportFolderName ||
    "nextImageExportOptimizer"
  }/${src}/${width}/${quality || 75}`;
}
