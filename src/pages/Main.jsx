import React from 'react';
import Stories from '../components/stories/stories';
import Categories from '../components/categories/categories';
import News from '../components/news/news';
import Products from '../components/products/products';
import Branches from '../components/branches/branches';

function Main() {
  return (
    <>
      <Stories />
      <Categories />
      <Products title='Хит продаж' />
      <News />
      <Products title='Акционные товары' />
      <Branches />
    </>
  );
}

export default Main;
