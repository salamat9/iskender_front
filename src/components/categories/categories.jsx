import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesItem from './categoriesItem'

const Categories = () => {
  const [sortedCategories, setSortedCategories] = useState([])
  const {
    categories: { getCategories },
  } = useDispatch()
  const categories = useSelector((state) => state.categories.data)

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    setSortedCategories(
      categories.filter((category) => category.img !== '').slice(0, 14)
    )
  }, [categories])

  return (
    <div className='categories container'>
      <div className='categories-title'>
        <h2>Каталог</h2>
        <div className='categories-title_right'>все категории</div>
      </div>
      <div className='categories-items'>
        {sortedCategories.length > 0 &&
          sortedCategories.map((category) => (
            <CategoriesItem key={category._id} category={category} />
          ))}
      </div>
    </div>
  )
}

export default Categories
