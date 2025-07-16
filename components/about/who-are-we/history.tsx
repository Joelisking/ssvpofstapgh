'use client';

import Image from 'next/image';
import Container from '../../shared/container';

function History() {
  return (
    <Container className="mt-12 md:mt-20">
      <section className="bg-secondary p-8 rounded-2xl">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <h2 className="text-3xl md:text-4xl text-primary font-semibold">
            History
          </h2>
        </div>
        <p className="mb-4">
          In the early part of 1985, a few of us (parishioners) from
          the Church visited our Priest at the time, the Rev. Fr. Ivan
          Yangyouru, a Lecturer then of the Sociology Department (now
          of blessed memory). We were surprised to see several very
          happy students at what seemed like a party. Jokingly, we
          asked why we were not invited to the party! Fr. Ivan, in his
          usual very calm voice said that it was a very normal Sunday
          afternoon at his house with “small refreshments”.
        </p>

        <p className="mb-4">
          We were very impressed that he had such an activity going on
          every Sunday afternoon on his meager Lecturer’s salary,
          particularly at that time when there was a general shortage
          of almost everything in the country. Not long after this, we
          discovered that those were needy/poor students, he was
          supporting at the University all by himself.
        </p>

        <p className="mb-4">
          It was then that, a member of the group that visited him,
          Ama Gaines, mentioned to her friends that she had been
          involved in the activities of a Church group, the Society of
          St. Vincent de Paul which helped the poor and needy in
          various ways. She explained some of the activities the Group
          did quite often; for example: sharing of warm clothing to
          the poor and needy in the winter months and, in particular,
          feeding of the homeless with hot meals on the streets of
          Detroit, Michigan.
        </p>

        <p className="mb-8">
          Members of this group unanimously decided to form such a
          Society on the Legon campus in support of our Rev. Fr
          Yangyouru, who was doing a great one-man job. We agreed many
          more people would also be helped through the Society.
        </p>

        <p className="mb-8">
          Our enquiries about formation of the Society took us to
          Christ the King Church to be mentored by their Conference.
          Mrs. Eleanor Arthur and Mrs. Elizabeth Therson-Cofie (of
          blessed memory) were very supportive and instrumental in our
          formation. After several months of meetings with both Christ
          the King and the Sacred Heart Conferences, the Legon
          Conference was deemed ready to be on its own and was
          inaugurated in Sept/Oct 1986. Late Rev. Fr. Ivan Yangyouru
          was our Conference Spiritual Advisor, Rev. Fr. Andrew
          Campbell, our National Spiritual Advisor, Late Mr. Anthony
          Norvor was our National President.
        </p>
      </section>
    </Container>
  );
}

export default History;
