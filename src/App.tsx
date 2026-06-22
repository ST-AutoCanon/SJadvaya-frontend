import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginModal";
import DashboardIframe from "./components/DashboardIframe";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactPage";
import ContactUs from "./pages/ContactUsPage";
import AboutUs from "./pages/AboutUs";
import Media from "./pages/media/Media";
import ProductsPage from "./pages/products/product";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar onLoginClick={() => setShowLogin(true)} />

      {/* Login Modal */}
      {showLogin && <LoginPage closeLogin={() => setShowLogin(false)} />}

      {/* Routes */}
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/aboutUs" element={<AboutUs />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/news" element={<Media />} />

          <Route path="/product" element={<ProductsPage />} />

          <Route path="/dashboard" element={<DashboardIframe />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
