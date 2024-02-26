import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Hero />} /> */}
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={ <ProductDetails />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
