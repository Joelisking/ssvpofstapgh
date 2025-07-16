'use client';

import Image from 'next/image';
import Container from '@/components/shared/container';

function MainWork() {
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-light">
            The Main Work of SSVP of STAP
          </h2>
        </div>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          Since its inception in 1985, the Society of St. Vincent de
          Paul of the St. Thomas Aquinas Parish (SSVP) has been the
          charity wing of the church. The main work of SSVP of STAP
          include but not limited to the following:
        </p>

        <p className="text-3xl text-primary">
          #Seeking holiness through service to those in need
        </p>
      </section>
    </Container>
  );
}

export default MainWork;
