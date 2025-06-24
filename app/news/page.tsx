import NewsList from '@/components/news/news-list';
import SectionHeader from '@/components/shared/section-header';
import Container from '@/components/shared/container';
import React from 'react';
import { news } from '@/lib/data';

function News() {
  return (
    <main className="min-h-screen">
      <div className="pb-8 sm:pb-12">
        {/* Header Section */}
        <section className="pb-8 sm:pb-12 lg:pb-16">
          <Container>
            <div className="text-center">
              <SectionHeader
                size="lg"
                className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
                Latest News
              </SectionHeader>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Stay updated with the latest news, events, and
                announcements from our community.
              </p>
            </div>
          </Container>
        </section>

        {/* News List Section */}
        <NewsList news={news} />
      </div>
    </main>
  );
}

export default News;
