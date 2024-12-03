import React from 'react';
import { CardProps } from '../../interfaces';
import Image from 'next/image';

const Card: React.FC<CardProps> = ({
  title,
  description,
  price,
  image,
  location,
  rating,
  onClick,
}) => {
  return (
    <div 
      onClick={onClick}
      className="rounded-xl overflow-hidden shadow-lg bg-white hover:opacity-90 transition-shadow duration-300 cursor-pointer"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-gray-500 font-semibold">{title}</h3>
          {rating && (
            <div className="flex items-center text-gray-500">
              <span className="text-sm">⭐ {rating}</span>
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm mb-2">{location}</p>
        <p className="text-gray-700 text-sm mb-3">{description}</p>
        <p className="font-semibold text-gray-500">${price} <span className="text-sm font-normal">\night</span></p>
      </div>
    </div>
  );
};

export default Card;