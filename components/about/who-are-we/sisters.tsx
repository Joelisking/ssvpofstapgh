import React from 'react';
import MemberCard from './member-card';

function Sisters() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold">Sisters</h2>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8">
        {[
          'Margaret Kissi',
          'Christie Ashaley',
          'Patrick Klutsey',
          'Matilda Opoku Agyakwa',
          'Emma Banga (Blessed memory)',
          'J. K. T. Kafe (Blessed memory)',
        ].map((name) => (
          <MemberCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
}

export default Sisters;
