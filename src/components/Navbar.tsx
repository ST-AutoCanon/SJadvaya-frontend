// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/15 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <img src="/logo1.png" alt="Logo" className="h-14 w-auto" />

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 text-white font-medium">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/product">Core Competency</Link>
//           <Link to="/product">Services</Link>
//           <Link to="/product">News</Link>
//           <Link to="/contactus">Contact Us</Link>
//         </div>

//         {/* Desktop Login */}
//         <div className="hidden md:block">
//           <button className="bg-green-600 text-white px-5 py-2 rounded">
//             User Login
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden text-white">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg">
//           <div className="flex flex-col items-center gap-4 py-6">
//             <Link to="/" onClick={() => setIsOpen(false)}>
//               Home
//             </Link>
//             <Link to="/about" onClick={() => setIsOpen(false)}>
//               About
//             </Link>
//             <Link to="/product" onClick={() => setIsOpen(false)}>
//               Core Competency
//             </Link>
//             <Link to="/product" onClick={() => setIsOpen(false)}>
//               Services
//             </Link>
//             <Link to="/product" onClick={() => setIsOpen(false)}>
//               News
//             </Link>
//             <Link to="/contactus" onClick={() => setIsOpen(false)}>
//               Contact Us
//             </Link>

//             <button className="bg-blue-600 text-white px-6 py-2 rounded">
//               Login
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

interface NavbarProps {
  onLoginClick?: () => void;
  onRegisterClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/15 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src="/logo1.png" alt="Logo" className="h-14 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/aboutUs">AboutUs</Link>
          <Link to="/product">Core Competency</Link>
          <Link to="/product">Services</Link>
          <Link to="/product">News</Link>
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
          <div className="flex flex-col items-center gap-4 py-6">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/aboutUs" onClick={() => setIsOpen(false)}>
              AboutUs
            </Link>
            <Link to="/product" onClick={() => setIsOpen(false)}>
              Core Competency
            </Link>
            <Link to="/product" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/product" onClick={() => setIsOpen(false)}>
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
