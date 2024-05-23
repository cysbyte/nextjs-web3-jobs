import Hero from '@/components/hire-mobile-developers/Hero'
import PostJob from '@/components/hire-mobile-developers/PostJob'
import Header from '@/components/layout/Header'

import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-[url('/bg-hero.jpg')] bg-no-repeat bg-cover bg-center">
      <Header />
      <Hero />

      </div> 
      <PostJob />
    </>
  )
}

export default page