import { BREAKPOINTS, CARD_SIZE } from '@/lib/utilities';
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui';

function Buttons({
  width,
  offset,
  setOffset,
  itemsLength,
}: {
  width: number;
  offset: number;
  setOffset: (offset: number | ((prev: number) => number)) => void;
  itemsLength: number;
}) {
  const CAN_SHIFT_LEFT = offset < 0;

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (itemsLength - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv: number) => pv + CARD_SIZE);
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv: number) => pv - CARD_SIZE);
  };
  return (
    <>
      <motion.button
        initial={false}
        animate={{
          x: CAN_SHIFT_LEFT ? '0%' : '-100%',
        }}
        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
        onClick={shiftLeft}>
        <Icon name="ChevronLeft" />
      </motion.button>
      <motion.button
        initial={false}
        animate={{
          x: CAN_SHIFT_RIGHT ? '0%' : '100%',
        }}
        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
        onClick={shiftRight}>
        <Icon name="ChevronRight" />
      </motion.button>
    </>
  );
}

export default Buttons;
