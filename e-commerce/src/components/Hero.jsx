import React from "react";
import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 ">
        <div className="container flex justify-around h-full mx-auto">
          {/* {text}   */}
          <div className="flex flex-col justify-center">
            {/* {pretitle}   */}
            <div className="flex items-center font-semibold uppercase">
              <div className="w-10 bg-red-600 h-[2px] mr-3"></div>
              <div>New Trend</div>
            </div>
            {/* {title}   */}
            <h1 className="text-[70px] leading-[1.5] font-light mb-4 uppercase">
              Autumn sale stylish <span className="font-semibold ">woman</span>
            </h1>
            <Link
              to={"/"}
              className="self-start font-semibold uppercase border-b-2 border-primary"
            >
              discover more
            </Link>
          </div>
          {/* {image}   */}
          <div>
            <div className="hidden lg:block">
              <img src={WomanImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
