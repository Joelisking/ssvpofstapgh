import { ItemType } from '@/lib/types';
import Image from 'next/image';

export const Card = ({ url }: ItemType) => {
  return (
    <div className="relative shrink-0 rounded-lg border border-white overflow-hidden w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] lg:w-[400px] lg:h-[500px] xl:w-[450px] xl:h-[550px] mr-4 sm:mr-[18px] lg:mr-5 xl:mr-5">
      <div className="relative h-full w-full">
        <Image
          src={url}
          alt="Upcoming event"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-white">
        <p className="text-xs text-primary">Event Description</p>
        <h3 className="text-sm sm:text-lg font-bold">Event Name</h3>
      </div>
    </div>
  );
};
