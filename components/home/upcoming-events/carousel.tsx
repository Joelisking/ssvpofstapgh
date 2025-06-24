'use client';
import { items } from '@/lib/data';
import { motion } from 'framer-motion';

import useMeasure from 'react-use-measure';
import { Card } from './card';
import Buttons from './buttons';
import { useState, useEffect } from 'react';

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  // Reset offset when screen size changes
  useEffect(() => {
    setOffset(0);
  }, [width]);

  return (
    <section ref={ref} className="w-full">
      <div className="relative overflow-hidden">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex">
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        <Buttons
          width={width}
          offset={offset}
          setOffset={setOffset}
        />
      </div>
    </section>
  );
};

export default CardCarousel;
