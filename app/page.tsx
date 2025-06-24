import Hero from '@/components/home/hero';
import UpcomingEvents from '@/components/home/upcoming-events';
import HistoricalMessage from '@/components/home/historical-message';
import Objective from '@/components/home/objective';
import { NewsSection } from '@/components/home/news';

export default function Home() {
  return (
    <main>
      <Hero />
      <UpcomingEvents />
      <HistoricalMessage />
      <Objective />
      <NewsSection />
    </main>
  );
}
