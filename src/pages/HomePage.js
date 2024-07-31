import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ products, addToCart }) => {
  return (
    <div className="home-page">
      <h1>Product List</h1>
      <ProductList products={products}  />
    </div>
  );
};

export default HomePage;
