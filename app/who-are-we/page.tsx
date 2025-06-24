import Brothers from '@/components/about/who-are-we/brothers';
import CoreActivities from '@/components/about/who-are-we/core-activities';
import FoundingMembers from '@/components/about/who-are-we/founding-members';
import Fundraising from '@/components/about/who-are-we/fundraising';
import History from '@/components/about/who-are-we/history';
import LogoExplanation from '@/components/about/who-are-we/logo-explanation';
import Presidents from '@/components/about/who-are-we/presidents';
import Sisters from '@/components/about/who-are-we/sisters';
import Container from '@/components/shared/container';

function WhoAreWe() {
  return (
    <main>
      <History />

      <section className="mt-16">
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
