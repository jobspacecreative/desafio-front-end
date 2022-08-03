import Header from "../components/Header";

import React from 'react';
import TopBanner from "../components/TopBanner";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <ProductList />
    </>
  )
}

export default Home;