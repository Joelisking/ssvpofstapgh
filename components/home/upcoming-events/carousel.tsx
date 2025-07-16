'use client';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { Card } from './card';
import Buttons from './buttons';
import { useState, useEffect } from 'react';
import { getUpcomingEvents, UpcomingEvent } from '@/lib/sanity';

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [events, setEvents] = useState<UpcomingEvent[]>([]);

  useEffect(() => {
    setOffset(0);
  }, [width]);

  useEffect(() => {
    getUpcomingEvents().then(setEvents);
  }, []);

  return (
    <section ref={ref} className="w-full">
      <div className="relative overflow-hidden">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration: 0.4,
            }}
            className="flex">
            {events.map((event) => (
              <Card
                key={event.id}
                imageUrl={event.imageUrl}
                title={event.title}
                description={event.description}
                date={event.date}
              />
            ))}
          </motion.div>
        </div>

        <Buttons
          width={width}
          offset={offset}
          setOffset={setOffset}
          itemsLength={events.length}
        />
      </div>
    </section>
  );
};

export default CardCarousel;
