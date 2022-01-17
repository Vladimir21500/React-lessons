import React from 'react';

const ProductsList = props => {
  const total = props.cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="products">
      <ul className="products__list">
        {props.cartItems.map(({ id, name, price }) => {
          return (
            <li key={id} className="products__list-item">
              <span className="products__item-name">{name}</span>
              <span className="products__item-price">{price}</span>
            </li>
          );
        })}
      </ul>
      <div className="products__total">{`Total: ${total}`}</div>
    </div>
  );
};

export default ProductsList;
