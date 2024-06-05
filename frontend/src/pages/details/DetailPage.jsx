import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../category/card';
import LatestRecipe from '../home/LatestRecipe';

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    const getItemById = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/api/search/${id}`);
        setItem(res.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    getItemById();
  }, [id]);
  const cookTime = parseInt(item?.more[0].cook_time.replace(' minutes', ''));
  const prepTime = parseInt(item?.more[0].prep_time.replace(' minutes', ''));
  const totalTime = cookTime + prepTime;
  return (
    <>
   <section className='mt-2 min-h-dvh md:flex justify-center items-centers md:bg-eggshell'>
        {item &&
    <article>
      <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-md'>
        <picture>
          <img src={item.thumbnail_image} className='md:max-w-[90%] w-full md:h-[570px] md:rounded-xl md:mx-auto' />
        </picture>
        <div className='px-8 '>
          <h1 className='text-4xl mt-12 text-secondary'>{item.name}</h1>
          <p className='mt-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus optio voluptatibus id reiciendis doloremque est dolor culpa ab quibusdam pariatur, facilis accusantium cumque repellat?</p>
          <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
            <h2 className='text-xl font-semibold ml-2'>Preparation Time:</h2>
            <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
              <li className='pl-3'>
                <p>
                <span>
                        Cooking:                        
                  </span>
                  <span>
                        {totalTime} minutes                     
                  </span>
                </p>
              </li>
              <li className='pl-3'>
                <p>
                <span>
                        Preparation:                       
                  </span>
                  <span>
                        {item?.more[0]?.prep_time}                       
                  </span>
                </p>
              </li>
              <li className='pl-3'>
                <p>
                  <span>
                        Cooking:                       
                  </span>
                  <span>
                        {item?.more[0]?.cook_time}                       
                  </span>
                </p>
              </li>
            </ul>
          </article>
        </div>
        <div className='mt-5 px-8'>
        <h2 className='text-xl font-semibold ml-6 capitalize'>ingredients:</h2>
        <ul className='list-disc marker:text-blue-500 mt-4 ml-12 text-secondary marker:align-middle'>
                {
                  item?.ingredients.map((ingredients,index)=>(
                    <li key={index} className='pl-4 mt-2'>
                      <span>{ingredients?.name}&nbsp;</span>
                      <span>{ingredients?.quantity}</span>
                    </li>
                  ))
                }
        </ul>
        
        </div>
        <div className='mt-5 px-8'>
        <h2 className='text-xl font-semibold ml-6 capitalize'>Steps:</h2>
        <ul className='list-disc marker:text-blue-500 mt-1 ml-12 text-secondary marker:align-middle'>
              {
    item.instructions.split(/(\d+\.\s)/).map((part, i) =>
      /\d+\.\s/.test(part) ? <span key={i}>{part}</span> : <span key={i}>{part}<br /></span>
    )
  
}

        </ul>
        
        </div>
      </div>
    </article>
}

   </section>
   <LatestRecipe/>
</>
  );
};

export default DetailPage;
