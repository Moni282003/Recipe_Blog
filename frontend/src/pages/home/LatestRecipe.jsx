import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../category/card'

const LatestRecipe = () => {


    const [items,setItems]=useState([])
    const [all,setAll]=useState(true)
    useEffect(()=>{
        const getLatestItem=async()=>{
            const res=await axios.get("http://localhost:3500/api/all-item")
            setItems(res.data)
        }
        getLatestItem()
    },[])
    const viewAll=()=>{
        setAll(!all)
    }
  return (
    <div className='px-5 xl:px-10 py-16'>
        <h2 className='text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>Latest Recipe</h2>
        <div className='flex flex-wrap gap-4 justify-center'>
            {all &&
                items.length>0? items.slice(0,3).map((item,index)=>(
                    <Card key={item._id} item={item}/>
                )
                ):
                (<></>)
            }
            {
                !all && 
                items.length>0? items.map((item,index)=>(
                    <Card key={item._id} item={item}/>
                )
                ):
                (<></>)
            }
         </div>
         <div className='flex flex-wrap gap-4 mt-8 justify-center'>
         <button onClick={()=>viewAll()} className='py-4 px-8 hover:bg-btncolor text-secondary hover:text-white w-1/2 lg:w-1/4 transition 
                ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] focus:outline-none rounded-lg'>View
                {
                    all?(<> All </>):(<> Less </>)
                }
                 Recipe</button></div>
    </div>
  )
}

export default LatestRecipe
