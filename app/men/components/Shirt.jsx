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
    <div className="">
      <div className='flex items-center justify-evenly'>
        {details.map((item) => (
          <div key={item.id}>
           <div className="h-[418px] w-[279px] flex  border-b-7 ">
           <img src={item.image} alt={item.name} />
           </div>
           
            <div>
              <div >
              <p>{item.name}</p>
              <b>{item.price}</b>
              </div>
              
              <button className='bg-black w-[279px] text-white rounded'>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
};

export default Shirt;
