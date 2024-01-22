import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  // if product not found
  if (!product) {
    return (
      <section className="flex items-start justify-center h-screen">
        Loading.............
      </section>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="pt-24 pb-8 lg:py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* image    */}
          <div className="flex items-center justify-center flex-1 mb-8 lg:mb-0">
            <img
              src={image}
              alt=""
              className="max-w-[200px] lg:max-w-[180px]"
            />
          </div>
          {/* text    */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[20px] lg:text-[22px] font-semibold mb-2 mazx-w-[450px mx-auto]">
              {title}
            </h1>
            <div className="mb-3 text-xl font-medium text-red-500">
              ${price}
            </div>
            <p className="mb-6">{description}</p>
            <button onClick={() => {addToCart(product, product.id)}} className="px-6 py-4 text-white rounded bg-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
