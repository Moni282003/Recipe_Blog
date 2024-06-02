import React from 'react'
const Card = ({item}) => {

  return (
    <div className='mt-10 bg-slate-100 rounded-md p-5'>
      <img className='w-80 h-64 rounded-md mb-5' src={item.thumbnail_image}></img>
      <span className=' bg-[#f0f599] p-1 rounded-md'>{item.name}</span>
      <span>{item.more[0].prep_time}</span>      
    </div>
  )
}

export default Card
