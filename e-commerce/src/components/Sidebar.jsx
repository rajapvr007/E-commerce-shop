import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  // console.log(useContext(CartContext))
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total,itemAmount } = useContext(CartContext);
  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="text-sm font-semibold uppercase">Shopping Bag({itemAmount})</div>
          <div
            className="flex items-center justify-center w-12 h-12 text-2xl cursor-pointer"
            onClick={handleClose}
          >
            <IoMdArrowForward />
          </div>
        </div>
        <div className=" flex flex-col gap-y-2 h-[500px] lg:h-[420px] overflow-y-auto overflow-x-hidden border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
        <div className="flex flex-col mt-4 font-bold gap-y-3">
          <div className="flex items-center justify-between w-full">
            <div className="font-semibold uppercase">
              <span className="mr-2">Total: </span>$
              {parseFloat(total).toFixed(2)}
            </div>
            <div
              onClick={clearCart}
              className="flex items-center justify-center w-12 h-12 py-4 text-xl text-white bg-red-500 cursor-pointer"
            >
              <FiTrash2 />
            </div>
          </div>
          <Link
            to={"/"}
            className="flex items-center justify-center py-4 font-medium bg-gray-200 text-primary">View Cart</Link>
            <Link
            to={"/"}
            className="flex items-center justify-center py-4 font-medium text-white bg-primary">checkout</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
