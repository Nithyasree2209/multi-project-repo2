import React from "react";

interface ToyCardProps {
  image: string;
  title: string;
  price: string;
  rating: string;
}

const ToyCard: React.FC<ToyCardProps> = ({ image, title, price, rating }) => {
  return (
    <div className="border p-4 rounded-md shadow-md cursor-pointer hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-gray-700">Price: ${price}</p>
      <p className="text-yellow-500 text-lg">{rating}</p>
    </div>
  );
};

export default ToyCard;
