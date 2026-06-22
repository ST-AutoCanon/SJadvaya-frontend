import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

interface NavbarProps {
  onLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-green-500 border-b-2 border-green-500"
      : "hover:text-green-400 transition-colors";

  return (
    <nav className="top-0 left-0 w-full z-50 bg-gradient-to-br from-[#0f172a] via-[#0b1a2b] to-[#0f172a] text-gray-300 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-18 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/aboutUs" className={navLinkClass}>
            About Us
          </NavLink>

          <NavLink to="/product" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/contactus" className={navLinkClass}>
            Contact Us
          </NavLink>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button
            // onClick={onLoginClick}
            className=" text-white px-5 py-2 rounded hover:bg-green-700 transition-colors"
          >
            {/* User Login */}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col gap-4 py-6 px-6">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Home
            </NavLink>

            <NavLink
              to="/aboutUs"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              About Us
            </NavLink>

            <NavLink
              to="/product"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Products
            </NavLink>

            <NavLink
              to="/contactus"
              onClick={() => setIsOpen(false)}
              className="text-gray-700"
            >
              Contact Us
            </NavLink>

            {/* <button
              onClick={() => {
                setIsOpen(false);
                onLoginClick?.();
              }}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              User Login
            </button> */}
            <button
              // onClick={() => {
              //   setIsOpen(false);
              //   onLoginClick?.();
              // }}
              // className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              {/* User Login */}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
