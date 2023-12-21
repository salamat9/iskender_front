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
      <Products title='Хит продаж' query='?bestseller=true&page=1&main=true' />
      <News />
      <Products title='Акционные товары' query='?promo=true&page=1&main=true' />
      <Branches />
    </>
  );
}

export default Main;
