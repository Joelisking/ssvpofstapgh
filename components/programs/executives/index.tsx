import React from 'react';
import Container from '../../shared/container';
import Carousel from '../../shared/carousel';
import Table, { TableColumn } from './table';
import { executivesCarouselImages, executivesData } from '@/lib/data';

const columns: TableColumn<{ role: string; name: string }>[] = [
  { header: 'ROLE', accessor: 'role' },
  { header: 'NAME', accessor: 'name' },
];

function Executives() {
  return (
    <section className="mt-12 md:mt-20">
      <Container className="">
        <div className="bg-secondary rounded-2xl p-4 sm:p-6 md:p-8">
          <Table
            columns={columns}
            data={executivesData}
            className="mb-6"
          />
          <p className="text-gray-700 text-sm mt-4 mb-8">
            The newly elected president, Bro. Gabriel Asempa Antwi and
            his executives were inaugurated in the presence members of
            the society and the whole parish community of the St.
            Thomas Aquinas Parish, University of Ghana, Legon. The
            members of the conference were present at the induction
            ceremony in their SSVP T-Shirt to show their support to
            the new executives. The list of the new Presidents and
            executives are;
          </p>
          <Carousel
            images={executivesCarouselImages}
            height={'350px'}
          />
        </div>
      </Container>
    </section>
  );
}

export default Executives;
