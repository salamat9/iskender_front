import React, { useEffect } from 'react';

// Import css files
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from './productsItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Products({ title, bestseller, promoProduct }) {
  const {
    products: { getProducts, getBestsellers, getPromoProducts },
  } = useDispatch();
  const { data, bestsellers, promoProducts } = useSelector(
    (state) => state.products
  );
  let products = [];

  if (bestseller) {
    products = bestsellers;
  } else if (promoProduct) {
    products = promoProducts;
  } else {
    products = data;
  }

  useEffect(() => {
    if (bestseller) {
      getBestsellers();
    } else if (promoProduct) {
      getPromoProducts();
    } else {
      getProducts();
    }
  }, [bestseller, promoProduct]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <div className='products container'>
      <div className='products-title'>
        <h2>{title}</h2>
        <div className='categories-title_right'>перейти в католог</div>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
}
