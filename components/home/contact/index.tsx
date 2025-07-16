import React from 'react';
import Info from './info';
import Container from '@/components/shared/container';
import LocationMap from './location-map';

function ContactSection() {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20">
      <Container className="flex flex-col-reverse lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        <Info />
        <LocationMap />
      </Container>
    </section>
  );
}

export default ContactSection;
