import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import LocomotiveScroll from "locomotive-scroll";
import VideoWave from "./components/Pages/Textile/VideoWave";
import PEB from "./components/Pages/PEB/PEB";
import CareerPage from "./components/Pages/Career/CareerPage";
import ScrollToTop from "./components/ScrollToTop";
import { ContactUs } from "./components/Pages/ContactUs/ContactUs";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="w-full min-h-screen bg-white text-white overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/textiles" element={<VideoWave />} />
            <Route path="/peb" element={<PEB />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
