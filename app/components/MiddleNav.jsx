"use client"
import { FaAngleDown } from 'react-icons/fa'; // Import the down arrow icon from react-icons/fa

const MiddleNav = () => {
  // Define an array to store navigation items
  const navItems = [
    'Men',
    'Women',
    'Kids',
    'Footwear',
    'Eyewear',
    'AboutUs'
  ];

  return (
    <nav className="bg-gray-300 w-full">
      <div className="flex justify-between max-w-5xl mx-auto py-4">
        {/* Map over the navItems array and generate <a> elements */}
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`/${item}`} // Assuming each item corresponds to a route
            className="text-gray-800 hover:text-black px-4 py-2 rounded-lg flex items-center"
          >
            {item}
            <FaAngleDown className="ml-1" />
          </a>
        ))}
      </div>
    </nav>
  );
}

export default MiddleNav;
