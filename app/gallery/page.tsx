// import { Gallery } from '@/components/gallery/gallery-grids';
// import Container from '@/components/shared/container';
// import PageHeader from '@/components/shared/page-header';
// import { getGalleryImages } from '@/lib/gallery-utils';

// export default async function GalleryPage() {
//   // Automatically get all images from public/gallery/optimized
//   const images = getGalleryImages();

//   return (
//     <main className="min-h-screen">
//       <PageHeader
//         title="Gallery"
//         subtitle="Pictures of previous events"
//         backgroundImage="/heros/gallery-header.jpg"
//       />
//       <Container className="mt-12 md:mt-20">
//         <div className="space-y-16">
//           <section>
//             <Gallery
//               images={images}
//               layout="grid"
//               maxColumns={4}
//               showCaptions={false}
//               showCategories={false}
//             />
//           </section>
//         </div>
//       </Container>
//     </main>
//   );
// }
