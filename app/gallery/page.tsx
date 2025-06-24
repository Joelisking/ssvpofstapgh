'use client';
import { Gallery } from '@/components/gallery/gallery-grids';
import Container from '@/components/shared/container';
import PageHeader from '@/components/shared/page-header';
import { sampleImages } from '@/lib/data';

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Gallery"
        subtitle="Pictures of previous events"
      />
      <Container className="mt-12 md:mt-20">
        {/* Multiple gallery examples */}
        <div className="space-y-16">
          {/* Bento Layout */}
          {/* <section>
            <h2 className="text-2xl font-semibold mb-6">
              Bento Layout
            </h2>
            <Gallery
              images={sampleImages}
              layout="bento"
              enableFiltering={true}
              showCaptions={true}
              showCategories={true}
            />
          </section> */}

          {/* Grid Layout */}
          <section>
            <Gallery
              images={sampleImages}
              layout="grid"
              maxColumns={4}
              showCaptions={true}
            />
          </section>

          {/* Masonry Layout */}
          {/* <section>
            <h2 className="text-2xl font-semibold mb-6">
              Masonry Layout
            </h2>
            <Gallery
              images={sampleImages}
              layout="masonry"
              showCaptions={true}
            />
          </section> */}
        </div>
      </Container>
    </main>
  );
}
