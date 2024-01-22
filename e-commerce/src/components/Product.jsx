import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { title, id, image, price, category } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* {image} */}
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          {/* {button} */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-1 gap-y-1 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`product/${id}`}
              className="flex justify-center items-center w-12 h-12 text-primary drop-shadow-lg bg-white"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>

      <div>
        {/* {category, title, price} */}
        <div className="capitalize text-sm text-gray-500 mb-1">{category}</div>
        <Link to={`proudct/${id}`}>
          <h2 className="font-semibold">{title}</h2>
        </Link>
        <div className="font-semibold">${price}</div>
      </div>
    </div>
  );
};

export default Product;
