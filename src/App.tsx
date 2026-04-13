// App.tsx
// import React from "react";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import HRMSPage from "./pages/HRMSpage";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactPage";
import ContactUs from "./pages/ContactUsPage";
import ComingSoon from "./pages/ComingSoon";
import AboutUs from "./pages/AboutUs";
import Media from "./pages/media/Media";
import ProductsPage from "./pages/products/Products";
import EVBus from "./pages/products/EVBus";
import EVRetrofit from "./pages/products/EVRetrofit";
import ECartLoader from "./pages/products/ECartLoader";
type ModalState = "none" | "normal" | "register";

function App() {
    const [modalState, setModalState] = useState<ModalState>("none");

    const closeAll = () => setModalState("none");
    const openLogin = () => setModalState("normal");
    const openRegister = () => setModalState("register");

    const navigate = useNavigate();

    const openHRMS = () => {
      closeAll();
      navigate("/hrms");
    };
  
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar
        onLoginClick={openLogin}
        onRegisterClick={openRegister}
        onHRMSClick={openHRMS}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {/* <main className="flex-grow pt-16"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/news" element={<Media />} />
          {/* <Route path="/product" element={<ComingSoon />} />{" "} */}
          {/* Product Routes */}
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/products/e-cart-loader" element={<ECartLoader />} />
          <Route path="/products/ev-bus" element={<EVBus />} />
          <Route path="/products/ev-retrofit" element={<EVRetrofit />} />
          <Route path="/hrms" element={<HRMSPage />} />
          {/* placeholder for products */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
      <LoginModal
        isOpen={modalState === "normal"}
        onClose={closeAll}

        onSwitchToHRMSLogin={openHRMS}
      />
    </div>
  );
}

export default App;
