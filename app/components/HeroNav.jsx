import React from 'react';

const Hero = () => {
  const images = [
    {
      socks: "https://www.urbanmonkey.com/cdn/shop/collections/4A8_SOCKS_120x120.jpg?v=1708667726",
      tshirt: "https://www.urbanmonkey.com/cdn/shop/collections/4a2-tshirt_120x120.webp?v=1685957463",
      bottoms: "https://www.urbanmonkey.com/cdn/shop/collections/4b1-all-bottoms_120x120.jpg?v=1680173271",
      // accessories: "https://www.urbanmonkey.com/cdn/shop/collections/accesories-menu_120x120.svg?v=1678952511",
      clothing: "https://www.urbanmonkey.com/cdn/shop/collections/4a1-all-tops_c3fa77ec-b5e8-4200-9e5f-e6ef8c2a7398_120x120.jpg?v=1680173139",
      shirts: "https://www.urbanmonkey.com/cdn/shop/collections/UM23_WEB_4A6_Shirts_120x120_c3f44d33-5c8d-4762-8c09-aabff6af2722_120x120.jpg?v=1706699160",
      boxer: "https://www.urbanmonkey.com/cdn/shop/collections/4b2-boxers_120x120.jpg?v=1680173290",
    }
  ];

  return (
    <nav>
    
      <div className="flex flex-wrap justify-center  items-center   ">
        {Object.keys(images[0]).map((item, index) => (
          <div className=" flex  ">
            <img  key={index} src={images[0][item]} alt={item} className="m-2" />
          </div>
          
        ))}
      </div>
    </nav>
  );
}

export default Hero;
