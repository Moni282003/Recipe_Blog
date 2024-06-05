import React from 'react';
import { FaClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  if (!item || !item.more || item.more.length === 0) {
    return null; // or render a placeholder/error message
  }

  return (
    <Link to={`/item/${item._id}`} className='block w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-6'>
      <div className='bg-slate-100 rounded-md overflow-hidden'>
        <img className='w-full h-40 sm:h-32 md:h-48 lg:h-40 xl:h-48 object-cover' src={item.thumbnail_image} alt={item.name} />
        <div className='p-4'>
          <h2 className='text-lg sm:text-base md:text-xl font-bold mb-2'>{item.name}</h2>
          <div className='flex items-center justify-between mb-2'>
            <div className='bg-slate-800 text-white py-1 px-2 rounded text-xs'>{item.category}</div>
            <div className='flex items-center gap-1 bg-slate-800 text-white py-1 px-2 rounded text-xs'>
              <FaClock />
              <span>{item.more[0].prep_time}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
