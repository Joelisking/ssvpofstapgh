import Image from 'next/image';
import { Icon } from '../ui/icon';
import { useRef, useState, useEffect, useCallback } from 'react';

interface CarouselProps {
  images: { src: string; alt?: string }[];
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  gap?: number;
  itemsPerView?: number | 'auto';
}

export default function Carousel({
  images,
  imageWidth = 288,
  imageHeight = 256,
  className = '',
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  gap = 24,
  itemsPerView = 'auto',
}: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate items per view if auto
  const getItemsPerView = useCallback(() => {
    if (itemsPerView !== 'auto') return itemsPerView;
    if (!scrollRef.current) return 1;

    const containerWidth = scrollRef.current.clientWidth;
    const itemTotalWidth = imageWidth + gap;
    return Math.floor((containerWidth - gap) / itemTotalWidth);
  }, [imageWidth, gap, itemsPerView]);

  // Update scroll button states
  const updateScrollState = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } =
      scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

    // Update current index based on scroll position
    const itemTotalWidth = imageWidth + gap;
    const newIndex = Math.round(scrollLeft / itemTotalWidth);
    setCurrentIndex(newIndex);
  }, [imageWidth, gap]);

  // Scroll function with improved logic
  const scroll = useCallback(
    (direction: 'left' | 'right') => {
      if (!scrollRef.current) return;

      const itemsVisible = getItemsPerView();
      const itemTotalWidth = imageWidth + gap;
      const scrollAmount = itemTotalWidth * itemsVisible;

      const currentScroll = scrollRef.current.scrollLeft;
      const newScrollPos =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollRef.current.scrollTo({
        left: Math.max(0, newScrollPos),
        behavior: 'smooth',
      });
    },
    [imageWidth, gap, getItemsPerView]
  );

  // Go to specific index
  const goToIndex = useCallback(
    (index: number) => {
      if (!scrollRef.current) return;

      const itemTotalWidth = imageWidth + gap;
      const scrollPosition = index * itemTotalWidth;

      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    },
    [imageWidth, gap]
  );

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const interval = setInterval(() => {
      if (canScrollRight) {
        scroll('right');
      } else {
        // Reset to beginning
        goToIndex(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [
    autoPlay,
    autoPlayInterval,
    isHovered,
    canScrollRight,
    scroll,
    goToIndex,
  ]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (canScrollLeft) scroll('left');
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (canScrollRight) scroll('right');
          break;
        case 'Home':
          e.preventDefault();
          goToIndex(0);
          break;
        case 'End':
          e.preventDefault();
          goToIndex(images.length - 1);
          break;
      }
    },
    [canScrollLeft, canScrollRight, scroll, goToIndex, images.length]
  );

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scroll('right');
    }
    if (isRightSwipe && canScrollLeft) {
      scroll('left');
    }
  };

  // Set up scroll listener
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const handleScroll = () => updateScrollState();
    scrollElement.addEventListener('scroll', handleScroll);

    // Initial state
    updateScrollState();

    return () =>
      scrollElement.removeEventListener('scroll', handleScroll);
  }, [updateScrollState]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => updateScrollState();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateScrollState]);

  if (!images.length) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-2xl ${className}`}
        style={{ height: imageHeight }}>
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ minHeight: imageHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image carousel">
      {/* Left Button */}
      <button
        className={`absolute z-20 bg-white/40 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 top-1/2 -translate-y-1/2 backdrop-blur-sm ${
          !canScrollLeft
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:scale-110 hover:shadow-xl'
        }`}
        style={{
          left: 8,
        }}
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        aria-label="Previous images"
        type="button">
        <Icon
          name="ChevronLeft"
          size={20}
          className="sm:w-6 sm:h-6"
        />
      </button>

      {/* Images Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide px-12 sm:px-16 py-2"
        style={{
          gap: `${gap}px`,
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        {images.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="flex-shrink-0 rounded-2xl overflow-hidden bg-white/60 shadow-md hover:shadow-lg transition-shadow duration-200"
            style={{
              width: imageWidth,
              height: imageHeight,
              scrollSnapAlign: 'start',
            }}>
            <Image
              src={img.src}
              alt={img.alt || `Carousel image ${idx + 1}`}
              width={imageWidth}
              height={imageHeight}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              loading={idx < 3 ? 'eager' : 'lazy'}
              priority={idx < 3}
            />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        className={`absolute z-20 bg-white/40 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 top-1/2 -translate-y-1/2 backdrop-blur-sm ${
          !canScrollRight
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:scale-110 hover:shadow-xl'
        }`}
        style={{
          right: 8,
        }}
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        aria-label="Next images"
        type="button">
        <Icon
          name="ChevronRight"
          size={20}
          className="sm:w-6 sm:h-6"
        />
      </button>

      {/* Dot Indicators */}
      {showDots && images.length > 1 && (
        <div className="flex justify-center mt-3 sm:mt-4 gap-1 sm:gap-2">
          {Array.from({
            length: Math.ceil(
              images.length / Math.max(1, getItemsPerView())
            ),
          }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(
                  currentIndex / Math.max(1, getItemsPerView())
                ) === idx
                  ? 'bg-blue-600 w-4 sm:w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() =>
                goToIndex(idx * Math.max(1, getItemsPerView()))
              }
              aria-label={`Go to slide group ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      )}

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Image {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
}
