/* eslint-disable prettier/prettier */
import { useState } from "react";
import type { ProjectImage } from "@/lib/project-image";

type ProjectGalleryProps = {
  images: ProjectImage[];
  projectName: string;
};

export function ProjectGallery({
  images,
  projectName,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-16/10 items-center justify-center border border-line bg-muted">
        <span className="label-tech text-muted-foreground">
          Project photography unavailable
        </span>
      </div>
    );
  }

const activeImage = images[activeIndex]!;

const previousImage = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

const nextImage = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative overflow-hidden bg-muted">
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className="aspect-16/10 w-full object-cover"
        />

        {/* Counter */}
        <div className="absolute bottom-4 left-4 bg-background/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
          {activeIndex + 1} / {images.length}
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous project image"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-background/30 bg-background/90 text-lg transition-transform hover:scale-105"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next project image"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-background/30 bg-background/90 text-lg transition-transform hover:scale-105"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8"
          aria-label={`${projectName} image gallery`}
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
              aria-current={index === activeIndex}
              className={`relative aspect-square overflow-hidden border-2 transition-opacity ${
                index === activeIndex
                  ? "border-accent"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}