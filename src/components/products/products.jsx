import React, { useEffect } from 'react'

// Import css files
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'
import ProductsItem from './productsItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Products() {
  const {
    products: { getProducts },
  } = useDispatch()
  const products = useSelector((state) => state.products.data)

  useEffect(() => {
    getProducts('?bestseller=true&page=1')
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <div className='products container'>
      <div className='products-title'>
        <h2>Хит продаж</h2>
        <div className='categories-title_right'>перейти в католог</div>
      </div>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  )
}
