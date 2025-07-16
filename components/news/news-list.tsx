import React from 'react';
import Container from '../shared/container';
import NewsCard, { NewsCardProps } from './news-card';

interface NewsListProps {
  news: NewsCardProps[];
}

function NewsList({ news }: NewsListProps) {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16">
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
