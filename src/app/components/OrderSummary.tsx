"use client"

import React, { useState } from 'react';

interface BillItemProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const BillItem: React.FC<BillItemProps> = ({ id, name, image, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-2">
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 object-cover rounded mr-3"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-gray-500">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleDecrement}
          className="px-2 py-1 bg-gray-200 rounded text-sm font-bold"
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="px-2 py-1 bg-gray-200 rounded text-sm font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
};

interface OrderSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ subtotal, tax, total }) => {
  const items = [
    { id: 1, name: 'Miso Ramen', image:'https://pickledplum.com/wp-content/uploads/2018/03/miso-ramen-1-1200.jpg', price: 7.09 },
    { id: 2, name: 'Waffle',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHMl6OHw2TuPiQ_orheQtFkMEc1dnxs2M-A&s', price: 7.09 },
    { id: 3, name: 'Mocha Ice Cream', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtFCs_mnlfYq599JIMYqUYuKbuT4A-q5zNbQ&s',price: 7.09 },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md m-0">
      <h2 className="text-xl font-bold mb-4">Bills</h2>

      {/* Bill Items */}
      <div className="space-y-4">
        {items.map(item => (
          <BillItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <div className="flex justify-between mt-2">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Tax:</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-2 font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
