import Container from '@/components/shared/container';
import { upcomingPrograms } from '@/lib/data';
import ProgramCard from './program-card';

function UpcomingPrograms() {
  return (
    <section className="mt-12">
      <Container>
        <h2 className="text-2xl uppercase text-primary font-extrabold">
          Detailed Description of Upcoming 2024 Programs for the Year
        </h2>

        <div className="grid gap-4 mt-4">
          {upcomingPrograms.map((program) => (
            <ProgramCard key={program.date} {...program} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default UpcomingPrograms;
