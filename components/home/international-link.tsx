import React from 'react';
import Container from '../shared/container';
import { Button } from '../ui';
import Image from 'next/image';
import Link from 'next/link';

function InternationalLink() {
  return (
    <section className="mt-8 sm:mt-14 lg:mt-20">
      <Container className="bg-secondary p-4 sm:p-6 md:p-8 rounded-2xl">
        <div className="flex items-center gap-12 px-20">
          <div>
            <h2 className="text-6xl text-primary w-2/3">
              Your embrace renews the world
            </h2>
            <p className="text-2xl text-primary mt-6">
              Together we are working to make the world a better and
              fairer place every day: friendship is our primary value.
            </p>
            <p className="text-lg text-primary my-4">
              Click the button below to view our international website
            </p>
            <Button size="lg">
              <Link href={'https://www.ssvpglobal.org/en/'}>
                View Page
              </Link>
            </Button>
          </div>

          <div className="bg-white rounded-xl p-6 w-1/2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default InternationalLink;
