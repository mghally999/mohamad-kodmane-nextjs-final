"use client";

import Image from "next/image";

export default function TeasersSection() {
  // You can add/remove items here without touching layout
  const teasers = [
    {
      type: "image",
      src: "/projects/apartments/sobha/sky-parks/teasers/teaser-01.jpg",
      alt: "Teaser 1",
    },
    {
      type: "image",
      src: "/projects/apartments/sobha/sky-parks/teasers/teaser-02.jpg",
      alt: "Teaser 2",
    },
    {
      type: "image",
      src: "/projects/apartments/sobha/sky-parks/teasers/teaser-03.jpg",
      alt: "Teaser 3",
    },
    {
      type: "image",
      src: "/projects/apartments/sobha/sky-parks/teasers/teaser-04.jpg",
      alt: "Teaser 4",
    },
    {
      type: "video",
      src: "/projects/apartments/sobha/sky-parks/teasers/teaser-01.mp4",
    },
    {
      type: "video",
      src: "/projects/apartments/sobha/sky-parks/teasers/teaser-02.mp4",
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          Teasers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teasers.map((t, i) =>
            t.type === "image" ? (
              <div
                key={i}
                className="relative aspect-[4/5] overflow-hidden rounded-xl shadow"
              >
                <Image
                  src={t.src}
                  alt={t.alt ?? `Teaser ${i + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 400px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ) : (
              <div
                key={i}
                className="relative aspect-video overflow-hidden rounded-xl shadow bg-black"
              >
                <video
                  src={t.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="h-full w-full object-cover"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
