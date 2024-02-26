import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import About from "../pages/About";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import Hero from "../components/Hero";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 60 ? setIsActive(true) : setIsActive(false); // 60px scroll
    });
  });
  return (
    <>
      <header
        className={`${
          isActive ? "bg-white py-2 shadow-md" : "bg-none py-2"
        } fixed w-full z-10 transition-all `}
      >
        <div className="container flex items-center justify-between h-full mx-auto">
          {/* {logo}  */}
          <div>
            <Link to={"/"}>
              <div>
                <img className="w-[40px]" src={Logo} alt="" />
              </div>
            </Link>
          </div>
         {/* {nav}  */}
          <div>
            <ul className="lg:flex items-center gap-x-14 text-sm font-medium text-gray-500 uppercase">
              <li>
                <Link to="/" element={<Home />}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to="/about" element={<About />}>
                  About
                </Link>
              </li>
              <li>
                <Link to={"/contact"} element={<Contact />}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* {cart }   */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex cursor-pointer "
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500  absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center text-white">
              {itemAmount}
            </div>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header;
