import React from 'react'
import Hero from '../components/Section/Hero'
import FlashSales from '../components/Section/FlashSales'
import Category from '../components/Section/Category'
import BestSelling from '../components/Section/BestSelling'
import Music from '../components/Section/Music'
import ExplorePoducts from '../components/Section/ExplorePoducts'
import NewArrival from '../components/Section/NewArrival'
import Features from '../components/Section/features'

function Home() {
  return (
   <>
   <Hero/>
   <FlashSales/>
   <Category/>
   <BestSelling/>
   <Music/>
   <ExplorePoducts/>
   <NewArrival/>
   <Features/>
   </>
  )
}

export default Home