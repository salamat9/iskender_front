import React from 'react';
import Stories from '../components/stories/stories';
import Categories from '../components/categories/categories';
import Products from '../components/products/products';
import Branches from '../components/branches/branches';

function Main() {
  return (
    <>
      <Stories />
      <Categories />
      <Products />
      <Branches />
    </>
  );
}

export default Main;
