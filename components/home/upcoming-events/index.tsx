import React from 'react';
import CardCarousel from './carousel';

function UpcomingEvents() {
  return (
    <section className="bg-gradient-to-r from-[#012956] via-[#013FB1] to-[#3F87FF] mt-8 sm:mt-14 lg:mt-20 py-20">
      <div className="pl-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 text-white p-8 capitalize">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-200">
              # Upcoming Events
            </h2>
            <p className="mt-4 text-4xl font-bold">
              Be part of our Next Events
            </p>
          </div>
          <div className="lg:col-span-2">
            <CardCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
