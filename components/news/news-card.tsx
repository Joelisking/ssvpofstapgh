import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

function NewsCard({
  image,
  date,
  title,
  description,
  link,
}: NewsCardProps) {
  return (
    <Link href={link} passHref>
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
        {/* Mobile Layout: Stacked */}
        <div className="block sm:hidden">
          <div className="relative h-48 w-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">{date}</p>
              <span className="text-primary text-sm border border-primary py-1.5 px-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                View
                <MoveRight className="inline w-3 h-3 ml-1" />
              </span>
            </div>
          </div>
        </div>

        {/* Tablet and Desktop Layout: Side by side */}
        <div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-5 gap-0">
          <div className="relative col-span-1 lg:col-span-2 rounded-l-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4 sm:p-6 lg:p-8 flex flex-col col-span-3 lg:col-span-3">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 lg:mb-4 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 sm:mb-4 lg:mb-5 line-clamp-3 lg:line-clamp-4">
              {description}
            </p>
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs sm:text-sm text-gray-500">
                  {date}
                </p>
              </div>
              <span className="inline-flex items-center text-sm border border-primary py-2 px-4 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                View
                <MoveRight className="w-4 h-4 ml-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
