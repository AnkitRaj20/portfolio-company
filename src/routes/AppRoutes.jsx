import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hero1 from '../pages/Hero1';
import About from "../pages/About";
// import Services from "../pages/Services";
// import Portfolio from "../pages/Portfolio";
// import Contact from "../pages/Contact";
// import NotFound from "../pages/NotFound";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/hero1" element={<Hero1 />} />
    <Route path="/about" element={<About />} />
    {/* <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

export default AppRoutes;
