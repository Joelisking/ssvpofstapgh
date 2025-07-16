import Brothers from '@/components/about/who-are-we/brothers';
import CoreActivities from '@/components/about/who-are-we/core-activities';
import Executives from '@/components/about/who-are-we/executives';
import FoundingMembers from '@/components/about/who-are-we/founding-members';
import Fundraising from '@/components/about/who-are-we/fundraising';
import History from '@/components/about/who-are-we/history';
import LogoExplanation from '@/components/about/who-are-we/logo-explanation';
import Presidents from '@/components/about/who-are-we/presidents';
import Sisters from '@/components/about/who-are-we/sisters';
import Container from '@/components/shared/container';
import PageHeader from '@/components/shared/page-header';

function WhoAreWe() {
  return (
    <main>
      <PageHeader
        title="About Us"
        subtitle="History of the Society of St. Vincent de Paul, Legon Conference"
        backgroundImage="/heros/who-are-we-hero.png"
      />
      <Executives />
      <History />
      <section className="mt-12 md:mt-20">
        <Container>
          <div className="p-8 bg-secondary rounded-2xl">
            <FoundingMembers />
            <Brothers />
            <Sisters />
            <Presidents />
          </div>
          <CoreActivities />
          <Fundraising />
          <LogoExplanation />
        </Container>
      </section>
    </main>
  );
}

export default WhoAreWe;
