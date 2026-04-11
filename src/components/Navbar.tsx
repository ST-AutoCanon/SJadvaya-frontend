import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

interface NavbarProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
const [productsOpen, setProductsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/35 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="h-18 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/aboutUs">AboutUs</Link>
          {/* <Link to="/product">Core Competency</Link> */}
          {/* <Link to="/product">Products</Link> */}
          <div className="relative group">
            <span className="cursor-pointer py-2">Products</span>

            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-4"></div>

            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-200 delay-75 flex flex-col"
            >
              <Link
                to="/products/e-cart-loader"
                className="px-4 py-2 hover:bg-gray-100"
              >
                E-Cart Loader
              </Link>

              <Link
                to="/products/ev-bus"
                className="px-4 py-2 hover:bg-gray-100"
              >
                EV Kit
              </Link>

              <Link
                to="/products/ev-retrofit"
                className="px-4 py-2 hover:bg-gray-100"
              >
                EV Retrofit
              </Link>
            </div>
          </div>
          <Link to="/news">News</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>

        {/* Desktop Login */}
        <div className="hidden md:block">
          <button
            onClick={onLoginClick}
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition-colors"
          >
            User Login
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
          <div className="flex flex-col items-start gap-4 py-6 px-6">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/aboutUs" onClick={() => setIsOpen(false)}>
              AboutUs
            </Link>

            {/* ✅ Products Section */}
            <div className="w-full">
              {/* Toggle */}
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex justify-between items-center py-2"
              >
                Products
                <span className="text-lg">{productsOpen ? "−" : "+"}</span>
              </button>

              {/* Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  productsOpen ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-2 pl-4 text-gray-700">
                  <Link
                    to="/products/e-cart-loader"
                    onClick={() => {
                      setIsOpen(false);
                      setProductsOpen(false);
                    }}
                  >
                    E-Cart Loader
                  </Link>

                  <Link
                    to="/products/ev-bus"
                    onClick={() => {
                      setIsOpen(false);
                      setProductsOpen(false);
                    }}
                  >
                    EV Kit
                  </Link>

                  <Link
                    to="/products/ev-retrofit"
                    onClick={() => {
                      setIsOpen(false);
                      setProductsOpen(false);
                    }}
                  >
                    EV Retrofit
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/news" onClick={() => setIsOpen(false)}>
              News
            </Link>

            <Link to="/contactus" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onLoginClick) onLoginClick();
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
