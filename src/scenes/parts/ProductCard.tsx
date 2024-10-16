import React from 'react';

interface ProductCardProps {
  title: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className="shadow-md border border-gray-200 rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative overflow-hidden mb-6">
      <div className="relative w-full h-[220px]">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        <h3 className="absolute top-2 left-2 bg-blue-600 bg-opacity-80 font-semibold text-white p-2 rounded-3xl">
          {title}
        </h3>
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-lg text-gray-800 mt-2 font-bold  text-right">{price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
