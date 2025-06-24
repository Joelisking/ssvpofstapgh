import Executives from '@/components/programs/executives';
import UpcomingPrograms from '@/components/programs/upcoming-programs';
import PageHeader from '@/components/shared/page-header';

function Programs() {
  return (
    <main>
      <PageHeader
        title="Programs"
        subtitle="Programs for the year"
        backgroundImage="/heros/who-are-we-hero.png"
      />
      <Executives />
      <UpcomingPrograms />
    </main>
  );
}

export default Programs;
