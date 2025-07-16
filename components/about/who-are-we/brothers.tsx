import React from 'react';
import MemberCard from './member-card';

function Brothers() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold">Brothers</h2>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8">
        {[
          'Emmanuel Tonyigah',
          'Michael Sunu',
          'Patrick Klutsey',
          'Emmanuel Owusu',
          'A. Attiogbe (Blessed Memory)',
          'J. K. T. Kafe (Blessed memory)',
        ].map((name) => (
          <MemberCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
}

export default Brothers;
