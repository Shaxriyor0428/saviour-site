import React from "react";
import mob_image from "../assets/mobile.png";
import { FaArrowDownLong } from "react-icons/fa6";

const Mobile = () => {
  return (
    <div className="container max-w-[1300px] mx-auto my-24">
      <div className="mobile grid grid-cols-2">
        <div className="content flex flex-col justify-center gap-10 items-start">
          <h2 className="font-bold text-[36px] leading-[46px] text-[#462E6A]">
            Download our Saviour Care mobile app
          </h2>
          <div className="w-14 h-[2px] rounded-[10px] bg-black"></div>
          <p className="font-light text-[18px] leading-8 text-[#7D7987]">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <div className="btn relative group">
            <button className="relative flex items-center justify-center font-medium text-[18px] leading-[60px] text-[#458FF6] px-[50px] pl-[40px] rounded-[50px] border-solid border-[1px] border-[#458FF6] hover:bg-[#458FF6] hover:text-white duration-300 block mx-auto group-hover:bg-[#458FF6] group-hover:text-white">
              <FaArrowDownLong className="absolute cursor-pointer text-[#458FF6] right-[15px] top-[50%] translate-y-[-50%] duration-300 group-hover:text-white hover:text-white" />
              Download
            </button>
          </div>
        </div>
        <div className="image">
          <img src={mob_image} alt="image mobile" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
