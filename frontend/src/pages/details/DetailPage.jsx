import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../category/card';

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

  return (
    <div>
        { item &&
     <h2 className='mb-8 mt-8 text-center font-bold text-3xl'>{item.name }</h2> 
     }
      {item ? (
        <div className='flex  mt-20 lg:mx-20'>
            <div>
            <div className='bg-slate-100 rounded-md overflow-hidden'>
        <img className='w-full h-40 sm:h-32 md:h-48 lg:h-40 xl:h-48 object-cover' src={item.thumbnail_image} alt={item.name} />
        <div className='p-4'>
          <div className='flex items-center flex-col gap-6 justify-between mb-2'>
           
            <div className='flex items-center justify-between gap-8 my-2'>
            {item.tags.map((item)=>(
              <div className='bg-slate-800 text-white py-1 px-2 rounded  text-md'>{item}</div>
            ))}
            </div>
            <div className='flex items-center justify-between gap-8 mb-2'>
            <div className='bg-slate-800 text-white py-1 px-2 rounded  text-md'>{item.category}</div>
            <div className='bg-slate-800 text-white py-1 px-2 rounded  text-md'>{item.more[0].difficulty}</div>
            </div>
            <div className='flex items-center gap-1 bg-slate-800 text-white py-1 px-2 rounded text-md'>
              <span>Cooking Time: {item.more[0].prep_time}<br></br>
              Preparation Time: {item.more[0].prep_time}<br></br>
              Serving: {item.more[0].servings}
              </span>
            </div>
           
          </div>
        </div>
      </div></div>

            <div className='flex items-center flex-col'>
            <div>
             <table className=''>
                <tr>
                <th>SNO</th>
                <th>NAME</th>
                <th>QUANTITY</th>
                <th>OPTIONAL</th></tr>
                {
                    item.ingredients.map((item,index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.optional?(<>Optional</>
                            ):(<>Compulsory</>)}</td>
                        </tr>
                    ))
                }
             </table>
            </div>
            <div>
                <p>{item.instructions}</p></div>
            </div>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPage;
