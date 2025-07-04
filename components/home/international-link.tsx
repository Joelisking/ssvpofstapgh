import React from 'react';
import Container from '../shared/container';
import { Button } from '../ui';
import Image from 'next/image';
import Link from 'next/link';

function InternationalLink() {
  return (
    <section className="mt-14 lg:mt-20">
      <Container className="bg-secondary p-4 sm:p-6 md:p-8 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 px-4 sm:px-8 lg:px-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary lg:w-2/3">
              Your embrace renews the world
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-primary mt-4 sm:mt-6">
              Together we are working to make the world a better and
              fairer place every day: friendship is our primary value.
            </p>
            <p className="text-base sm:text-lg text-primary my-3 sm:my-4">
              Click the button below to view our international website
            </p>
            <Button size="lg" className="mt-4">
              <Link href={'https://www.ssvpglobal.org/en/'} target='_blank'>
                View Page
              </Link>
            </Button>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-6 w-full lg:w-1/2 flex justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InternationalLink;
