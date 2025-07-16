import Image from 'next/image';
import React from 'react';
import MemberCard from './member-card';

function Fundraising() {
  return (
    <section className="mt-12 md:mt-20">
      <h2 className="text-primary text-3xl font-bold">Fundraising</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        <div>
          {[
            'Through the ‘Help-Us-Help-the-Poor Box’ appeals',
            'Donation from members',
            'Donation from benefactors',
            'Donation from Parishioners',
            'Donation from Day-born groups towards specific charitable activities',
          ].map((name) => (
            <MemberCard key={name} name={name} />
          ))}
        </div>
        <div>
          <Image
            src="/about/fundraising.png"
            alt="Historical Image"
            width={1024}
            height={523}
            className="rounded-lg object-cover object-bottom w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Fundraising;
