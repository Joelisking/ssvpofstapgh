import React from 'react';
import { Card, UpcomingEventCardProps } from '../card';

interface CardListProps {
  events: UpcomingEventCardProps[];
  cardWidth: number;
  cardHeight: number;
  gap: number;
  cardSize: number;
  currentIndex: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const CardList: React.FC<CardListProps> = ({
  events,
  cardWidth,
  cardHeight,
  gap,
  cardSize,
  currentIndex,
  containerRef,
}) => (
  <div ref={containerRef} className="relative overflow-hidden">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        gap: `${gap}px`,
        transform: `translateX(-${currentIndex * cardSize}px)`,
      }}>
      {events.map((event) => (
        <div
          key={event.title}
          className="flex-shrink-0"
          style={{ width: cardWidth }}>
          <Card
            imageUrl={event.imageUrl}
            title={event.title}
            description={event.description}
            date={event.date}
            height={cardHeight}
          />
        </div>
      ))}
    </div>
  </div>
);

export default CardList;
