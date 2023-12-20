import React from 'react';
import { ReactComponent as ProductDefault } from '../icons/product-default.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';
import { ReactComponent as Minus } from '../icons/minus.svg';

const ProductsItem = ({ product }) => {
  return (
    <div className='products-item'>
      <ProductDefault />
      <h3>Держатель для лейки BOOU PG605</h3>
      <h2>{product.price} с</h2>
      <h4>В наличии</h4>
      <h5>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='7'
          height='8'
          viewBox='0 0 7 8'
          fill='none'
        >
          <circle
            cx='3.5'
            cy='4'
            r='3.5'
            fill={product.active ? '#82CF6F' : '#949494'}
          />
        </svg>
        <div>В комплекте</div>
      </h5>
      <div className='products-item_bottom'>
        <div>
          <Minus />
        </div>
        <div>{product.quantity}</div>
        <div>
          <Plus />
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
