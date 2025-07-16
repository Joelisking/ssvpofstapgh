'use client';

import Image from 'next/image';
import Container from '../shared/container';
import Carousel from '../shared/multi-carousel';

const images = [
  { src: '/activities/core-activities/1.png', alt: 'Activity 1' },
  { src: '/activities/core-activities/2.png', alt: 'Activity 2' },
  { src: '/activities/core-activities/3.png', alt: 'Activity 3' },
  { src: '/activities/core-activities/4.png', alt: 'Activity 4' },
  { src: '/activities/core-activities/5.png', alt: 'Activity 5' },
  { src: '/activities/core-activities/6.png', alt: 'Activity 6' },
  { src: '/activities/core-activities/7.png', alt: 'Activity 7' },
  { src: '/activities/core-activities/8.png', alt: 'Activity 8' },
];

function CoreActivities() {
  return (
    <Container className="mt-12 md:mt-20">
      <section className="bg-secondary p-4 sm:p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-semibold">
            Core Activities:
          </h2>
        </div>
        <ul className="mb-6 sm:mb-8 list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed">
          <li>Medical interventions</li>

          <li>Support for retired and aged parishioners</li>

          <li>
            Support for school kids and students including tertiary
          </li>

          <li>Visitation of hospitals, prisons and orphanages</li>

          <li>Soup kitchen on &lsquo;World day of the Poor&rsquo;</li>

          <li>
            Visitation of &lsquo;Wards&rsquo; during Advent, Lent and
            Patron Feast Day (September)
          </li>

          <li>Spearheading parish (STAP) charity activities</li>

          <li>Annual Advent and Lenten retreat programs</li>
        </ul>
        <Carousel
          images={images}
          imageWidth={280}
          imageHeight={200}
          showDots={false}
          className="mt-4 sm:mt-6"
        />
      </section>
    </Container>
  );
}

export default CoreActivities;
