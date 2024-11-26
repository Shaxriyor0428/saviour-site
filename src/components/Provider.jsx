import React from "react";
import provider from "../assets/provider.png";
const Provider = () => {
  return (
    <div className="container max-w-[1300px] mx-auto my-24">
      <div className="provider grid grid-cols-2 gap-[90px]">
        <div className="provider__image">
          <img src={provider} alt="Image provider" className="h-[100%]"/>
        </div>
        <div className="content flex flex-col justify-center items-start gap-8">
          <p className="font-bold leading-[56px] text-[36px] text[#462E6A] w-[90%]">
            Leading healthcare providers
          </p>
          <div className="w-14 h-[2px] rounded-[10px] bg-black"></div>
          <p className="font-light text-lg text-[#7D7987]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <div className="btn">
            <button className="font-medium text-[18px] leading-[60px] text-[#458FF6] px-[50px] rounded-[50px] border-solid border-[1px] border-[#458FF6] hover:bg-[#458FF6] hover:text-white duration-300 block mx-auto">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;
