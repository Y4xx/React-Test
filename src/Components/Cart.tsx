import React from 'react';

interface CartProps {
  image: string;
  name: string;
  role: string;
}

const Cart: React.FC<CartProps> = ({ image, name, role }) => {

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-10 px-4 pt-12">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-40 h-40 mb-3 rounded-full shadow-lg"
            src={image}
            alt={name}
          />
          <h5 className="mb-1 text-xl font-medium">{name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{role}</span>
          <div className="flex mt-4 md:mt-6">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show info</button>
            <button className="py-2 px-4 ms-2 text-sm font-medium text-blue-700 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus:z-10 focus:ring-4 focus:ring-blue-300">Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
