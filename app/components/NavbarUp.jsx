import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import logo from "../../public/logo.png"
import Image from "next/image";
const NavbarUp = () => {
  return (
    <nav className="flex flex-col items-center md:flex-row md:items-center justify-between w-full bg-gray-300 px-4 py-2">
      <div className="flex items-center justify-between w-full md:w-auto">
      
        <Image className="mt-2 md:mt-0 w-24 md:w-auto" src= {logo} />
      
        <div className="flex items-center md:hidden">
          <CiUser size={30} className="mx-2" />
          <CiHeart size={30} className="mx-2" />
          <CiShoppingCart size={30} className="mx-2" />
        </div>
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
