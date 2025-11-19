import Banner from '@/components/common/home/Banner'
import Category from '@/components/common/home/Category'
import FeaturedProducts from '@/components/common/home/FeaturedProducts'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedProducts />
    </div>
  )
}

export default page