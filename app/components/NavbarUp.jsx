import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";

const NavbarUp = () => {
  return (
    <nav className="flex flex-col items-center md:flex-row md:items-center justify-between w-full bg-gray-300 px-4 py-2">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img
          className="mt-2 md:mt-0 w-24 md:w-auto"
          src="https://cdn.shopify.com/s/files/1/0661/7423/files/logo-news.png?v=1669196261"
          alt="logo"
        />
        <div className="flex items-center md:hidden">
          <CiUser size={30} className="mx-2" />
          <CiHeart size={30} className="mx-2" />
          <CiShoppingCart size={30} className="mx-2" />
        </div>
      </div>
      <div className="hidden md:flex flex-grow items-center justify-center">
        <select
          data-name="product_type"
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          data-select=""
        >
          {/* listings */}
        </select>
        <input
          data-input-search=""
          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-2"
          type="text"
          name="q"
          placeholder="Search for products"
          autoComplete="off"
        />
      </div>
      <div className="hidden md:flex items-center gap-2">
        <CiUser size={30} />
        <CiHeart size={30} />
        <CiShoppingCart size={30} />
      </div>
    </nav>
  );
}

export default NavbarUp;
