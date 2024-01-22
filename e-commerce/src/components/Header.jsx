import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import Hero from "../components/Hero";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { itemAmount } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
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
          <Link to={"/"}>
            <div>
              <img className="w-[40px]" src={Logo} alt="" />
            </div>
          </Link>
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
      <Hero />
    </>
  );
};

export default Header;
