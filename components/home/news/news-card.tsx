import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  link: string;
};

export const NewsCard = ({
  image,
  date,
  title,
  link,
}: NewsCardProps) => {
  return (
    <Link href={link} passHref>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="relative h-48 sm:h-56 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            {date}
          </p>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-3 sm:mb-4 flex-grow leading-tight">
            {title}
          </h3>
          <div className="mt-auto">
            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              Read more
              <MoveRight className="inline w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
