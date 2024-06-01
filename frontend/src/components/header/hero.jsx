import React, { useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";

const Hero = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = ["Search for a recipe", "Find your favorite dish", "Discover new cooking ideas"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholders.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
      <h1 className='mt-6 mb-10 text-5xl xl:text-6xl text-center font-bold text-[#2a3342] leading-norma xl:leading-relaxed'>
        A blog template made for food <span className='text-orange-400'>influencers</span>
      </h1>
      <form action="/search" className='bg-white p-4 rounded relative flex items-center border-2'>
        <IoIosSearch className='w-5 h-5 mr-2 text-neutral-500' />
        <input
        className='outline-none w-full placeholder:text-[#1b2629]' 
        name="query" type='search' placeholder={placeholders[placeholderIndex]} id="Search" required />
      </form>
    </div>
  );
};

export default Hero;
