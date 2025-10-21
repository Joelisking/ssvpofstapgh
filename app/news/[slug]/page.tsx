// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client';
// import { useEffect, useState } from 'react';
// import { getNewsBySlug, NewsItem } from '@/lib/sanity';
// import Image from 'next/image';
// import { useParams, notFound } from 'next/navigation';
// import { PortableText } from '@portabletext/react';

// // Comprehensive PortableText components for rich text rendering
// const richTextComponents = {
//   block: {
//     normal: ({ children }: any) => (
//       <p className="mb-6 text-gray-800 leading-relaxed text-lg">
//         {children}
//       </p>
//     ),
//     h1: ({ children }: any) => (
//       <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
//         {children}
//       </h1>
//     ),
//     h2: ({ children }: any) => (
//       <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5 leading-tight">
//         {children}
//       </h2>
//     ),
//     h3: ({ children }: any) => (
//       <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 leading-tight">
//         {children}
//       </h3>
//     ),
//     h4: ({ children }: any) => (
//       <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3 leading-tight">
//         {children}
//       </h4>
//     ),
//     blockquote: ({ children }: any) => (
//       <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 bg-gray-50 italic text-gray-700 text-lg">
//         {children}
//       </blockquote>
//     ),
//   },

//   marks: {
//     strong: ({ children }: any) => (
//       <strong className="font-bold text-gray-900">{children}</strong>
//     ),
//     em: ({ children }: any) => (
//       <em className="italic text-gray-700">{children}</em>
//     ),
//     code: ({ children }: any) => (
//       <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
//         {children}
//       </code>
//     ),
//     underline: ({ children }: any) => (
//       <span className="underline">{children}</span>
//     ),
//     'strike-through': ({ children }: any) => (
//       <span className="line-through text-gray-500">{children}</span>
//     ),
//     link: ({ children, value }: any) => {
//       const target = value?.blank ? '_blank' : undefined;
//       const rel =
//         target === '_blank' ? 'noopener noreferrer' : undefined;

//       return (
//         <a
//           href={value?.href}
//           target={target}
//           rel={rel}
//           className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
//           {children}
//         </a>
//       );
//     },
//   },

//   list: {
//     bullet: ({ children }: any) => (
//       <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-lg">
//         {children}
//       </ul>
//     ),
//     number: ({ children }: any) => (
//       <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-lg">
//         {children}
//       </ol>
//     ),
//   },

//   listItem: {
//     bullet: ({ children }: any) => (
//       <li className="text-gray-800 leading-relaxed pl-2">
//         {children}
//       </li>
//     ),
//     number: ({ children }: any) => (
//       <li className="text-gray-800 leading-relaxed pl-2">
//         {children}
//       </li>
//     ),
//   },

//   // types: {
//   //   image: ({ value }: any) => {
//   //     if (!value?.asset) return null;

//   //     return (
//   //       <figure className="my-8">
//   //         <div className="relative w-full h-96 rounded-lg overflow-hidden">
//   //           <Image
//   //             src={urlFor(value).url()}
//   //             alt={value.alt || 'Article image'}
//   //             fill
//   //             className="object-cover"
//   //           />
//   //         </div>
//   //         {value.caption && (
//   //           <figcaption className="text-center text-sm text-gray-600 mt-2 italic">
//   //             {value.caption}
//   //           </figcaption>
//   //         )}
//   //       </figure>
//   //     );
//   //   },
//   // },
// };

// export default function NewsPage() {
//   const params = useParams();
//   const slug =
//     typeof params.slug === 'string' ? params.slug : params.slug?.[0];
//   const [news, setNews] = useState<NewsItem | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!slug) return;

//     getNewsBySlug(slug)
//       .then((data) => {
//         if (data) {
//           setNews(data);
//         } else {
//           setError('News article not found');
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching news:', err);
//         setError('Failed to load news article');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="flex items-center space-x-2">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//           <span className="text-lg text-gray-600">
//             Loading article...
//           </span>
//         </div>
//       </div>
//     );
//   }

//   if (error || !news) {
//     return notFound();
//   }

//   return (
//     <main className="mt-12 lg:mt-32 pb-16 bg-white">
//       <article className="max-w-4xl mx-auto px-4">
//         {/* Article Header */}
//         <header className="mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
//             {news.title}
//           </h1>

//           {news.description && (
//             <p className="text-xl text-gray-600 mb-6 leading-relaxed font-medium">
//               {news.description}
//             </p>
//           )}

//           {news.date && (
//             <div className="flex items-center text-gray-500 mb-8">
//               <svg
//                 className="w-5 h-5 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                 />
//               </svg>
//               <time dateTime={news.date}>
//                 {new Date(news.date).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric',
//                 })}
//               </time>
//             </div>
//           )}
//         </header>

//         {/* Featured Image */}
//         {news.imageUrl && (
//           <div className="relative w-full h-80 lg:h-96 mb-12 rounded-xl overflow-hidden shadow-lg">
//             <Image
//               src={news.imageUrl}
//               alt={news.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         )}

//         {/* Article Content */}
//         <div className="prose prose-lg max-w-none">
//           {news.body &&
//           Array.isArray(news.body) &&
//           news.body.length > 0 ? (
//             <PortableText
//               value={news.body}
//               components={richTextComponents}
//             />
//           ) : (
//             <div className="text-center py-12">
//               <p className="text-gray-500 italic text-lg">
//                 No content available for this article.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Article Footer */}
//         <footer className="mt-16 pt-8 border-t border-gray-200">
//           <div className="flex items-center justify-between">
//             <div className="text-sm text-gray-500">
//               Published on{' '}
//               {news.date &&
//                 new Date(news.date).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric',
//                 })}
//             </div>
//             <button
//               onClick={() => window.history.back()}
//               className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200">
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                 />
//               </svg>
//               Back to News
//             </button>
//           </div>
//         </footer>
//       </article>
//     </main>
//   );
// }
