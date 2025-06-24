import React from 'react';
import Container from '../shared/container';
import NewsCard, { NewsCardProps } from './news-card';

interface NewsListProps {
  news: NewsCardProps[];
}

function NewsList({ news }: NewsListProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8">
          {news.map((item) => (
            <NewsCard key={item.link} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default NewsList;
