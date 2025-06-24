import CoreActivities from '@/components/activities/core-activities';
import Training from '@/components/activities/training';
import PageHeader from '@/components/shared/page-header';
import React from 'react';

function Activities() {
  return (
    <main className="min-h-screen pb-8 sm:pb-12 md:pb-16">
      <PageHeader title="Activities" subtitle="Our Outreaches" />
      <Training />
      <CoreActivities />
    </main>
  );
}

export default Activities;
