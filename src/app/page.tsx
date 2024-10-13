import React from 'react';
import { products } from './mocks/products'
import ProductCard from './components/ProductCard';
import OrderSummary from './components/OrderSummary';


const Home: React.FC = () => {
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);
  const tax = subtotal * 0.1; // Misalnya pajak 10%
  const total = subtotal + tax;

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold">Product List</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="col-span-2 grid grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="col-span-1">
          <OrderSummary subtotal={subtotal} tax={tax} total={total} />
        </div>
      </div>
    </div>
  );
};

export default Home;
