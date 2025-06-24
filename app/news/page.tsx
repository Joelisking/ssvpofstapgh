import NewsList from '@/components/news/news-list';
import React from 'react';
import { news } from '@/lib/data';
import PageHeader from '@/components/shared/page-header';

function News() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="News"
        subtitle="News from our events"
        backgroundImage="/heros/who-are-we-hero.png"
      />
      <div className="">
        <NewsList news={news} />
      </div>
    </main>
  );
}

export default News;
