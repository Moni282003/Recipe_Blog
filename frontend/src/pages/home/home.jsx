import React from 'react'
import Hero from '../../components/header/hero'
import CategoryWrapper from '../category/category'
import FeaturedSelection from './FeaturedSelection'
import LatestRecipe from './LatestRecipe'
import Footer from '../footer/footer'

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center w-full py-20'>
      <Hero/>
      <CategoryWrapper/>

      </div>
      <FeaturedSelection/>
      <LatestRecipe/>
      <Footer/>
    </div>
  )
}
