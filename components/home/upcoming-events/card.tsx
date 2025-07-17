import Image from 'next/image';

export interface UpcomingEventCardProps {
  imageUrl: string;
  title: string;
  description?: string;
  date: string;
  height: number;
}

export const Card = ({
  imageUrl,
  title,
  date,
  height,
}: UpcomingEventCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div
      className="relative rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      style={{ height: `${height}px` }}>
      <div className="absolute inset-0">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          />
        ) : (
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-blue-300 font-medium text-sm">
              {formatDate(date)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
