import React from 'react';

interface CarouselContainerProps {
  children: React.ReactNode;
  canGoPrev: boolean;
  canGoNext: boolean;
  goToPrev: () => void;
  goToNext: () => void;
  canNavigate: boolean;
  currentIndex: number;
  maxIndex: number;
  setCurrentIndex: (index: number) => void;
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({
  children,
  canGoPrev,
  canGoNext,
  goToPrev,
  goToNext,
  canNavigate,
  currentIndex,
  maxIndex,
  setCurrentIndex,
}) => (
  <section className="w-full py-12">
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {children}
        {canGoPrev && (
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/50 p-2 shadow-lg hover:bg-white transition-all backdrop-blur-sm hover:scale-105"
            onClick={goToPrev}
            aria-label="Previous card">
            {'<'}
          </button>
        )}
        {canGoNext && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/50 p-2 shadow-lg hover:bg-white transition-all backdrop-blur-sm hover:scale-105"
            onClick={goToNext}
            aria-label="Next card">
            {'>'}
          </button>
        )}
        {canNavigate && (
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={
                    index === currentIndex ? 'true' : 'false'
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

export default CarouselContainer;
