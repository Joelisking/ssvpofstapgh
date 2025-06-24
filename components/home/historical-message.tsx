import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Container from '../shared/container';
import SectionHeader from '../shared/section-header';

function HistoricalMessage() {
  return (
    <section className="px-4 sm:px-6 md:px-8 py-4 sm:py-16 lg:py-20">
      <Container className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        <div className="text-left md:order-1">
          <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-2 sm:mb-3">
            #A HISTORICAL MESSAGE OF THE FORMATION
          </p>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Society of <br />
            <span className="text-blue-600">St.Vincent De Paul,</span>
            <br />
            Legon Conference
          </h2> */}
          <div className="sm:hidden">
            <SectionHeader
              highlightedWord="St.Vincent De Paul"
              size="sm"
              className="mb-4 leading-tight">
              Society of St.Vincent De Paul, Legon Conference
            </SectionHeader>
          </div>
          <div className="hidden sm:block md:hidden">
            <SectionHeader
              highlightedWord="St.Vincent De Paul"
              size="md"
              className="mb-6 leading-tight">
              Society of St.Vincent De Paul, Legon Conference
            </SectionHeader>
          </div>
          <div className="hidden md:block lg:hidden">
            <SectionHeader
              highlightedWord="St.Vincent De Paul"
              size="base"
              className="mb-6 leading-tight">
              Society of St.Vincent De Paul, Legon Conference
            </SectionHeader>
          </div>
          <div className="hidden lg:block">
            <SectionHeader
              highlightedWord="St.Vincent De Paul"
              size="lg"
              className="mb-6 leading-tight">
              Society of St.Vincent De Paul, Legon Conference
            </SectionHeader>
          </div>
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            In the early part of 1985, a few of us (parishioners) from
            the Church visited our Priest at the time, the Rev. Fr.
            Ivan Yangyouru, a Lecturer then of the Sociology
            Department (now of blessed memory). We were surprised to
            see several very happy students at what seemed like a
            party. Jokingly, we asked why we were not invited to the
            party! Fr. Ivan, in his usual very calm voice, said that
            it was a very normal Sunday afternoon at his house with
            &ldquo;small refreshments&rdquo;.
            <br />
            <br />
            We were very impressed that he had such an activity going
            on every Sunday afternoon on his meager Lecturer&apos;s
            salary, particularly at that time when there was a general
            shortage of almost everything in the country. Not long
            after this, we discovered that those were needy/poor
            students, he was supporting at the University all by
            himself.
          </p>
          <Button className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
            Learn More{' '}
            <MoveRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
        <div className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] bg-gradient-to-t from-[#B2E3FB] to-white p-3 sm:p-4 rounded-xl sm:rounded-2xl order-1 md:order-2">
          <Image
            src="/home/historical.png"
            alt="Historical Image"
            fill
            className="rounded-lg object-contain object-bottom"
          />
        </div>
      </Container>
    </section>
  );
}

export default HistoricalMessage;
