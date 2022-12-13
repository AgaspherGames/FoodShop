import React from 'react'
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import TopHeader from './../Header/TopHeader'

export default function Main({userData, products}) {
  return (
    <main>
      <TopHeader/>
      <br />
      <Banner />
      <Categories />
      <FeaturedProducts userData={userData.data[0]} products={products} />
    </main>
  );
}
