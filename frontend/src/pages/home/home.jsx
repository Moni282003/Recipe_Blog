import React from 'react'
import Hero from '../../components/header/hero'
import CategoryWrapper from '../category/category'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center w-full py-20'>
      <Hero/>
      <CategoryWrapper/>
      </div>
    </div>
  )
}
