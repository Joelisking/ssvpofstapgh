'use client';

import Image from 'next/image';
import Container from '../shared/container';
import Carousel from '../shared/multi-carousel';

const images = [
  { src: '/home/hero/carousel/1.jpeg', alt: 'Training 1' },
  { src: '/home/hero/carousel/2.jpeg', alt: 'Training 2' },
  { src: '/home/hero/carousel/3.jpg', alt: 'Training 3' },
  { src: '/home/hero/carousel/4.jpeg', alt: 'Training 4' },
  { src: '/home/news/1.jpg', alt: 'Training 5' },
  { src: '/home/news/2.jpg', alt: 'Training 6' },
  { src: '/home/news/3.jpeg', alt: 'Training 7' },
];

function Training() {
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
            Training:
          </h2>
        </div>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          Learning is a continuous process which is very essential in
          the development of an institution. SSVP of STAP in this
          light organised a Training Session for its new members and a
          refresher training for its existing members. The facilitator
          for the training session was Rev. Fr. Andrew Campbell, the
          National Spiritual Director for the Society. He basically
          charged new and existing members to be discerning in the
          charitable work and know that the work of a Vincentian is
          close to the heart of God
        </p>
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

export default Training;
