// 'use client';
// import NewsList from '@/components/news/news-list';
// import React, { useEffect, useState } from 'react';
// import PageHeader from '@/components/shared/page-header';
// import { getAllNews, NewsItem } from '@/lib/sanity';

export default function News() {
  //   const [news, setNews] = useState<NewsItem[]>([]);
  //   useEffect(() => {
  //     getAllNews().then(setNews);
  //   }, []);
  //   console.log('news', news);
  //   return (
  //     <main className="min-h-screen">
  //       <PageHeader
  //         title="News"
  //         subtitle="News from our events"
  //         backgroundImage="/heros/news-hero.jpg"
  //         position="top"
  //       />
  //       <div className="">
  //         <NewsList
  //           news={news.map((n) => ({
  //             image: n.imageUrl,
  //             date: n.date,
  //             title: n.title,
  //             description: n.description,
  //             link: `/news/${n.slug}`,
  //           }))}
  //         />
  //       </div>
  //     </main>
  //   );
}
