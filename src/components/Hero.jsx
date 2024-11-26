import React from "react";
import hero_image from "../assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero container  max-w-[1300px] mx-auto flex gap-3 mb-[100px]">
      <div className="hero__content flex flex-col gap-[60px] justify-center items-start">
        <h1 className="text-[#3C567B] text-[48px] leading-[48px] font-bold">
          Virtual healthcare Saviour for you
        </h1>
        <p className="font-medium leading-7 text-[20px] text-[#93C1F9]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <button className="font-bold text-[20px] text-[white] leading-[60px] px-[40px] bg-[#458FF6] rounded-3xl hover:bg-[dodgerblue] hover:text-slate-600">
          Consult today
        </button>
      </div>
      <div className="hero__image">
        <img src={hero_image} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
