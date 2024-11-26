import React from "react";
import { SERVICES_LINKS } from "../static";

const Services = () => {
  const service__links = SERVICES_LINKS.map((link) => (
    <div
      className="image__item py-[58px] px-[36px] w-[350px] h-[354px] flex flex-col justify-center items-center gap-6 bg-[#FFFFFF] rounded-[10px] text-left hover:bg-[#cfdeed] duration-[.3s] hover:scale-[1.03]"
      key={link.id}
    >
      <div className="img">
        <img src={link.image} alt="Image service" />
      </div>
      <h2 className="font-bold text-center text-[24px] leading-6 text-black">
        {link.title}
      </h2>
      <p className="font-normal">{link.text} </p>
    </div>
  ));
  return (
    <div className="container max-w-[1300px] mx-auto mb-[100px]">
      <div className="content">
        <h2 className="font-bold text-[45px] leading-[56px] text-center text-[#462E6A]">
          Services we Offer
        </h2>
        <div className="w-[100%] flex justify-center mt-6">
          <div className="w-14 h-[2px] rounded-[10px] bg-black"></div>
        </div>

        <p className="my-12 font-medium leading-7 text-center text-[20px] text-[#CCD2E9] w-[85%] mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="service__images grid grid-cols-3 gap-8">
        {service__links}
      </div>
      <div className="btn my-[50px] w-[100%]">
        <button className="font-medium text-[18px] leading-[60px] text-[#458FF6] px-[50px] rounded-[50px] border-solid border-[1px] border-[#458FF6] hover:bg-[#458FF6] hover:text-white duration-300 block mx-auto">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Services;
