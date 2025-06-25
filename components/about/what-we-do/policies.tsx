import Image from 'next/image';
import React from 'react';
import Container from '@/components/shared/container';
import PolicyCard from './policy-card';

function Policies() {
  return (
    <section className="mt-12 md:mt-20">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 mt-4 md:items-center">
          <div className="bg-secondary p-4 sm:p-6 md:p-8 rounded-2xl w-full md:w-1/2">
            {/* <div> */}
            {[
              'Through the ‘Help-Us-Help-the-Poor Box’ appeals',
              'Donation from members',
              'Donation from benefactors',
              'Donation from Parishioners',
              'Donation from Day-born groups towards specific charitable activities',
            ].map((name) => (
              <PolicyCard key={name} name={name} />
            ))}
            {/* </div> */}
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/about/what-we-do.png"
              alt="Historical Image"
              width={1024}
              height={523}
              className="rounded-lg object-cover object-bottom w-full h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Policies;
