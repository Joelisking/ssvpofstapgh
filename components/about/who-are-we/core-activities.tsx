import ActivityCard from './activity-card';
import Image from 'next/image';

function CoreActivities() {
  return (
    <section className="mt-12 md:mt-20">
      <h2 className="text-primary text-3xl font-bold">
        Core Activities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
        <div>
          {[
            'Medical interventions',
            'Support for retired and aged parishioners',
            'Support for school kids and students including tertiary',
            'Visitation of hospitals, prisons and orphanages',
            'Soup kitchen on ‘World day of the Poor’',
            'Visitation of ‘Wards’ during Advent, Lent and Patron Feast Day (September)',
            'Spearheading parish (STAP) charity activities',
            'Extension of support to the St Paulan Society (widows & widowers of STAP)',
            'Annual Advent and Lenten retreat programs',
          ].map((name) => (
            <ActivityCard key={name} name={name} />
          ))}
        </div>
        <div className="relative min-h-[400px] md:h-full bg-gradient-to-t from-[#B2E3FB] to-white p-4 rounded-2xl">
          <Image
            src="/contact.png"
            alt="Historical Image"
            fill
            className="rounded-lg object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default CoreActivities;
