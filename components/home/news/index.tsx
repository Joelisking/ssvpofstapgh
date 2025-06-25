'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { getAllNews, NewsItem } from '@/lib/sanity';
import { NewsCard } from './news-card';
import { Button } from '@/components/ui/button';
import { MoveLeft, MoveRight } from 'lucide-react';
import SectionHeader from '@/components/shared/section-header';
import Container from '@/components/shared/container';
import Link from 'next/link';

export const NewsSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllNews().then((data) => {
      setNews(data);
      setLoading(false);
    });
  }, []);

  // Filter to show only the first 8 news items
  const displayedNews = news.slice(0, 8);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 5000 })]
  );

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (loading) {
    return (
      <section className="mt-8 sm:mt-14 lg:mt-20">
        <Container>
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Loading news...</span>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="mt-8 sm:mt-14 lg:mt-20">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="sm:hidden">
            <SectionHeader highlightedWord="News room" size="sm">
              Our News Room
            </SectionHeader>
          </div>
          <div className="hidden sm:block md:hidden">
            <SectionHeader highlightedWord="News room" size="md">
              Our News Room
            </SectionHeader>
          </div>
          <div className="hidden md:block lg:hidden">
            <SectionHeader highlightedWord="News room" size="base">
              Our News Room
            </SectionHeader>
          </div>
          <div className="hidden lg:block">
            <SectionHeader highlightedWord="News room" size="lg">
              Our News Room
            </SectionHeader>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={scrollPrev}
              variant="outline"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10">
              <MoveLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              onClick={scrollNext}
              variant="outline"
              size="icon"
              className="h-8 w-8 sm:h-10 sm:w-10">
              <MoveRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {displayedNews.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0 pl-2 sm:pl-4">
                <NewsCard
                  image={item.imageUrl}
                  date={item.date}
                  title={item.title}
                  link={`/news/${item.slug}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <Link href="/news">
            <Button className="px-8 py-3 text-lg font-semibold">
              View All News
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
