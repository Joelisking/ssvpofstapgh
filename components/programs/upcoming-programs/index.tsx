'use client';
import Container from '@/components/shared/container';
import { getPrograms, Program } from '@/lib/sanity';
import ProgramCard from './program-card';
import React, { useEffect, useState } from 'react';

function UpcomingPrograms() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPrograms().then((data) => {
      setPrograms(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="mt-12 md:mt-20">
      <Container>
        <h2 className="text-2xl uppercase text-primary font-extrabold">
          Detailed Description of Past and Upcoming Programs
        </h2>

        <div className="grid gap-4 mt-4">
          {loading ? (
            <div>Loading...</div>
          ) : programs.length === 0 ? (
            <div>No programs found.</div>
          ) : (
            programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))
          )}
        </div>
      </Container>
    </section>
  );
}

export default UpcomingPrograms;
