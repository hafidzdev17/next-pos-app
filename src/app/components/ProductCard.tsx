import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md p-4 flex flex-col h-full">
      <img src={image} alt={name} className="w-full h-32 object-cover mb-2" />
      <h2 className="text-lg font-semibold mt-2 flex-grow">{name}</h2>
      <p className="text-gray-600 mb-2">${price.toFixed(2)}</p>
      <button className="bg-blue-500 text-white py-2 px-4 mt-auto rounded">
        Add to Order
      </button>
    </div>
  );
};

export default ProductCard;
