import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { title, price, id, image, amount } = item;
  return (
    <div className="flex w-full py-2 font-light text-gray-400 border-b border-gray-300 gap-x-4 lg:px-6">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* {image}   */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={item.title} />
        </Link>
        {/* {titile & remove icon}   */}
        <div className="flex flex-col w-full ">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="font-medium hover:underline uppercase text-sm max-w-[250px] text-primary "
            >
              {item.title}
            </Link>
            {/* remove icon   */}
            <div
              className="text-xl cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className="text-gray-500 hover:text-red-500" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* quantity  */}
            <div className="flex flex-1 h-full border text-primary font-medium  max-w-[100px] items-center">
              {/* remove icon   */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex items-center justify-center flex-1 h-full cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount   */}
              <div className="flex items-center justify-center h-full px-2">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex items-center justify-center flex-1 h-full cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* price  */}
            <div className="flex items-center justify-around flex-1">
              ${price}
            </div>
            {/* final price  */}
            <div className="flex items-center justify-end flex-1 text-sm font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
