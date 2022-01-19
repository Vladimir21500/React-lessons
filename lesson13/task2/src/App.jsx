import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Products from './Products.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route>
            <ul className="navigation">
              <li className="navigation__item">
                <Link to="/">Home</Link>
              </li>
              <li className="navigation__item">
                <Link to="/">Products</Link>
              </li>
            </ul>
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
