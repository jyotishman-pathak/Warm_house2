import React from 'react';

const Shirt = () => {
  const details = [
    {
      id: '001',
      name: 'Denim Jacket',
      price: 2200,
      image: 'https://www.urbanmonkey.com/cdn/shop/files/Denim-jacket-model-01_1024x.jpg?v=1711683083',
    },
    {
      id: '002',
      name: 'Zip Pocket Shirt',
      price: 888,
      image: 'https://www.urbanmonkey.com/cdn/shop/files/DSC06606_1024x.jpg?v=1713769425',
    },
    {
      id: '003',
      name: 'Full Sleeve Shirt',
      price: 999,
      image: 'https://www.urbanmonkey.com/cdn/shop/files/full-sleeve-shirt-black-03.jpg?v=1710471662',
    },
    {
      id: '004',
      name: 'Within T-Shirt',
      price: 999,
      image: 'https://www.urbanmonkey.com/cdn/shop/files/within-tshirt-model-01.jpg?v=1708325318',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {details.map((item) => (
        <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
          <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-gray-700">Price: ${item.price}</p>
              <button className="bg-black text-white rounded-md px-4 py-2 mt-4 w-full">ADD TO CART</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shirt;
