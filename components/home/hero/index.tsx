import React from 'react';
import Carousel from '@/components/shared/carousel';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import { carouselImages } from '@/lib/data';

function Hero() {
  return (
    <section>
      <Container>
        <SectionHeader
          highlightedWord="St.Vincent de Paul"
          className="leading-snug hidden lg:block"
          size="base">
          Welcome to the Society of St.Vincent de Paul of STAP Legon,
          Accra-Ghana
        </SectionHeader>
        <SectionHeader
          highlightedWord="St.Vincent de Paul"
          className="leading-snug lg:hidden"
          size="md">
          Welcome to the Society of St.Vincent de Paul of STAP Legon,
          Accra-Ghana
        </SectionHeader>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] leading-relaxed sm:leading-snug mt-3 sm:mt-4 lg:mt-6">
          A Catholic Organization that aspires to live the gospel
          message by serving Jesus Christ in the poor
        </p>
      </Container>

      <Carousel images={carouselImages} height="60vh" />
    </section>
  );
}

export default Hero;
