import React from 'react';
import MemberCard from './member-card';

function Presidents() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold">
        Presidents of SSVP Legon Conference
      </h2>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 lg:gap-x-8">
        {[
          'Sis Ama Gaines (1985 – 1991)',
          'Bro Conrad Agbolettey (Interim 1992)',
          'Bro (Prof) Paul Yankson (1993 -1996)',
          'Sis (Prof) Leticia Xevi-Yiboe (1997 - 2002 )',
          'Bro Michael Xatse (2003 – 2008)',
          'Bro Emmanuel Tonyigah (2009 – 2013)',
          'Bro Kwesi Jonah (Interim 2014)',
          'Bro Mark Kporvie (2015 - 2020)',
          'Sis. Onike Rodrigues 2021 to present',
        ].map((name) => (
          <MemberCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
}

export default Presidents;
