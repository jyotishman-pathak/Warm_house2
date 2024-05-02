import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

const NavbarUp = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center gap-5 w-full md:w-screen">
      <div className="w-full md:w-auto">
        <img className="mt-5 pb-5 transform translate-z-0 max-h-full h-auto w-full max-w-full max-w-xs"
         src="https://cdn.shopify.com/s/files/1/0661/7423/files/logo-news.png?v=1669196261" alt="logo" />
      </div>
      <div className="flex-grow flex">
        <select
          data-name="product_type"
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          data-select=""
        >
          {/* listings */}
        </select>
        <input
          data-input-search=""
          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-2 md:mt-0 md:ml-2"
          type="text"
          name="q"
          placeholder="Search for products"
          autoComplete="off"
        />
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <CiUser size={30} />
        <CiHeart size={30} />
        <CiShoppingCart size={30} />
      </div>
    </nav>
  );
}

export default NavbarUp;
