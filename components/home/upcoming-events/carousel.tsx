'use client';
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { UpcomingEventCardProps } from './card';
import { getUpcomingEvents } from '@/lib/sanity';
import CarouselContainer from './carousel/CarouselContainer';
import CardList from './carousel/CardList';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const BREAKPOINTS = { sm: 640, md: 768, lg: 1024, xl: 1280 };
const CARD_SIZES = {
  width: { base: 320, md: 400, lg: 450, xl: 500 },
  height: { base: 400, md: 500, lg: 550, xl: 600 },
  gap: { base: 16, sm: 18, lg: 20 },
};

const CardCarousel = () => {
  const [events, setEvents] = useState<UpcomingEventCardProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [containerReady, setContainerReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getUpcomingEvents();
      // Add height property for each event based on responsive cardHeight
      setEvents(
        data.map((event) => ({
          ...event,
          height: CARD_SIZES.height.base, // This will be overridden by responsive value when rendering
        }))
      );
      setIsMounted(true);
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setContainerReady(true);
    }
  }, [containerRef]);

  const getResponsiveValues = useCallback(() => {
    if (!containerRef.current || !windowWidth || !containerReady) {
      return {
        visibleCards: 1,
        cardWidth: CARD_SIZES.width.base,
        cardHeight: CARD_SIZES.height.base,
        gap: CARD_SIZES.gap.base,
        cardSize: CARD_SIZES.width.base + CARD_SIZES.gap.base,
      };
    }

    const containerWidth = (containerRef.current as HTMLDivElement)
      .clientWidth;
    let cardWidth = CARD_SIZES.width.base;
    let cardHeight = CARD_SIZES.height.base;
    let gap = CARD_SIZES.gap.base;

    if (windowWidth >= BREAKPOINTS.xl) {
      cardWidth = CARD_SIZES.width.xl;
      cardHeight = CARD_SIZES.height.xl;
      gap = CARD_SIZES.gap.lg;
    } else if (windowWidth >= BREAKPOINTS.lg) {
      cardWidth = CARD_SIZES.width.lg;
      cardHeight = CARD_SIZES.height.lg;
      gap = CARD_SIZES.gap.lg;
    } else if (windowWidth >= BREAKPOINTS.md) {
      cardWidth = CARD_SIZES.width.md;
      cardHeight = CARD_SIZES.height.md;
      gap = CARD_SIZES.gap.sm;
    } else if (windowWidth >= BREAKPOINTS.sm) {
      gap = CARD_SIZES.gap.sm;
    }

    const cardSize = cardWidth + gap;
    const visibleCards = Math.max(
      1,
      Math.floor((containerWidth + gap) / cardSize)
    );

    return { visibleCards, cardWidth, cardHeight, gap, cardSize };
  }, [windowWidth, containerReady]);

  const { visibleCards, cardWidth, cardHeight, gap, cardSize } =
    getResponsiveValues();
  const maxIndex = Math.max(0, events.length - visibleCards);

  const goToNext = useCallback(
    () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1)),
    [maxIndex]
  );
  const goToPrev = useCallback(
    () => setCurrentIndex((prev) => Math.max(0, prev - 1)),
    []
  );

  useEffect(() => {
    const handleKeyDown = (e: { key: string }) => {
      if (e.key === 'ArrowRight') goToNext();
      else if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  useEffect(() => {
    if (events.length <= visibleCards) return;
    const interval = setInterval(
      () =>
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, [events.length, maxIndex, visibleCards]);

  useEffect(() => setCurrentIndex(0), [events]);

  if (!isMounted) {
    return (
      <section className="w-full py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (events.length === 0) {
    return (
      <section className="w-full py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No upcoming events
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Check back later for new events
            </p>
          </div>
        </div>
      </section>
    );
  }

  const canNavigate = events.length > visibleCards;
  const canGoNext = canNavigate && currentIndex < maxIndex;
  const canGoPrev = canNavigate && currentIndex > 0;

  return (
    <CarouselContainer
      canGoPrev={canGoPrev}
      canGoNext={canGoNext}
      goToPrev={goToPrev}
      goToNext={goToNext}
      canNavigate={canNavigate}
      currentIndex={currentIndex}
      maxIndex={maxIndex}
      setCurrentIndex={setCurrentIndex}>
      <CardList
        events={events}
        cardWidth={cardWidth}
        cardHeight={cardHeight}
        gap={gap}
        cardSize={cardSize}
        currentIndex={currentIndex}
        containerRef={containerRef}
      />
    </CarouselContainer>
  );
};

export default CardCarousel;
