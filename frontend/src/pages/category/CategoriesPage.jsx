import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryWrapper from './category'

const CategoriesPage = () => {
    const {category}=useParams()
  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1
         className='capitalize text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'
        >{category}</h1>
        <CategoryWrapper/>
    </div>
  )
}

export default CategoriesPage
