import UpcomingPrograms from '@/components/programs/upcoming-programs';
import PageHeader from '@/components/shared/page-header';

function Programs() {
  return (
    <main>
      <PageHeader
        title="Programs"
        subtitle="Programs for the year"
        backgroundImage="/heros/programs-hero.png"
      />
      <UpcomingPrograms />
    </main>
  );
}

export default Programs;
