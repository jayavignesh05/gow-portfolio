import { projects } from "@/data/projects";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Header } from "@/components/Header";
import { FloatingNav } from "@/components/FloatingNav";
import { AnimatedTitle } from "@/components/AnimatedTitle";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Project not found</h1>
          <Link
            href="/portfolio"
            className="mt-4 inline-block text-gray-400 hover:text-white underline"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      <Header theme="light" />
      {/* Hero Header Section with Background Image */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 select-none">
          <ExportedImage src={project.image}
            alt={project.title}
            fill sizes="100vw"
            className="object-cover"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10 w-full">
          {/* Back Button - Top Positioning */}
          <div className="absolute -top-[60vh] md:-top-[60vh] left-0">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          </div>

          {/* Title & Info */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-5xl">
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/80">
              <span>{project.date}</span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                {project.category}
              </span>
            </div>

            <AnimatedTitle title={project.title} />

            <p className="text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-24 px-4 md:px-8 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {project.images?.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-3xl overflow-hidden shadow-sm ${
                  // Logic to make distinct layout:
                  // Every 3rd image spans 2 columns on desktop (if 2 col grid) for variance?
                  // Or let's just do a nice standard grid for now or use the index to vary aspect ratios.
                  // For "Coastal Slow" look, they have a mix. Let's try to alternate heights or classes.
                  index % 3 === 0 ? "aspect-[4/3]" : "aspect-[3/4]"
                } ${index % 3 === 0 ? "md:col-span-2" : "md:col-span-1"}`}
              >
                <ExportedImage src={img}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority={index < 2}
                  loading={index >= 2 ? "lazy" : undefined}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA (Simple) */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
          The perfect shot is just a <br /> conversation away
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </Link>
      </section>
      <FloatingNav />
    </main>
  );
}
