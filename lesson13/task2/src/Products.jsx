import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './Product.jsx';

function Products() {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/products/:productId" component={Product} />
        <Route exact path="/products"></Route>
      </Routes>
    </div>
  );
}

export default Products;
