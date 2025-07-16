import Hero from '@/components/home/hero';
import UpcomingEvents from '@/components/home/upcoming-events';
import HistoricalMessage from '@/components/home/historical-message';
import Objective from '@/components/home/objective';
import { NewsSection } from '@/components/home/news';
import InternationalLink from '@/components/home/international-link';

export default function Home() {
  return (
    <main>
      <Hero />
      <UpcomingEvents />
      <HistoricalMessage />
      <Objective />
      <InternationalLink />
      <NewsSection />
    </main>
  );
}
