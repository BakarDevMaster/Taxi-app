'use client'
import { useRef } from 'react';
import Image from 'next/image';

const carouselItems = [
  {
    imageSrc: '/images/mahali-taxi.jpg',
    text: 'Mahali taxi'
  },
  {
    imageSrc: '/images/almeny.jpg',
    text: 'Almeny: Women Teaching Women To Drive in Saudi Arabia',
    tags: ['Middle East', 'Taxi', 'Software']
  },
  {
    imageSrc: '/images/lefa.jpg',
    text: 'Meet LEFA, Startup Reinventing Local Transport',
    tags: ['Africa', 'Ride-hailing', 'Software']
  },
 
 
];

const Countries: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if (carouselRef.current) {
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
        onClick={() => handleScroll('left')}
      >
        ←
      </button>
      <div
        className="flex overflow-x-scroll no-scrollbar"
        ref={carouselRef}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="min-w-[300px] p-4">
            <Image src={item.imageSrc} alt={item.text} width={300} height={200} />
            <h3 className="text-lg font-bold">{item.text}</h3>
            {item.tags && (
              <div className="flex space-x-2 mt-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-gray-200 text-sm px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
        onClick={() => handleScroll('right')}
      >
        →
      </button>
    </div>
  );
};

export default Countries;
