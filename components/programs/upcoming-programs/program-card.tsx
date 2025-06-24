import React from 'react';

interface ProgramCardProps {
  date: string;
  title: string;
  description: string;
}

function ProgramCard({ date, title, description }: ProgramCardProps) {
  return (
    <div className="bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col gap-3 sm:gap-4">
        {/* Header with date and title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 lg:gap-3">
          <span className="text-primary uppercase font-bold text-base sm:text-lg lg:text-xl">
            {date}
          </span>
          <span className="hidden sm:inline text-primary font-bold text-lg lg:text-xl">
            -
          </span>
          <span className="text-primary uppercase font-bold text-base sm:text-lg lg:text-xl sm:flex-1">
            {title}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProgramCard;
