import React from 'react'
import pizza from '../../assets/pizza.jpg'


const FeaturedSelection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20  gap-12 px-5 lg:px-10'>
      <div className='relative'>
        <div className='absolute top-4 left-2 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider'>
            Featured Recipe</div>
        <img src={pizza}  className='rounded-md w-[1000px]'/>
      </div>
      <div className='text-start sm:w-1/2'>
           <h2 className='text-3xl font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Pineapple + Smoked Jackfruit Pizza</h2>
           <p className='text-xl mt-4 text-[#5c5c5c] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores tenetur, necessitatibus inventore et labore.</p>
           <div className='lg:mt-0 lg:flex-shrink-0'>
            <div className='mt-12 inline-flex'>     
                <button className='py-4 px-8 hover:bg-btncolor text-secondary hover:text-white w-full transition 
                ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'><a href="/item/665b4c5541b1fdc82cc048f7">View Recipe</a></button>
            </div>
           </div>
      </div>
    </div>
  )
}

export default FeaturedSelection
