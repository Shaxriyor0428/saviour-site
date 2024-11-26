import React from "react";
import doctor_image from "../assets/doctor_image.png";
const Doctor = () => {
  return (
    <div className="container max-w-[1300px] mx-auto my-40">
      <div className="doctor grid grid-cols-2 gap-40">
        <div className="doctor__image">
          <img src={doctor_image} alt="doctor image" />
        </div>
        <div className="doctor__content flex flex-col justify-center gap-8 items-left">
          <h2 className="font-bold text-[36px] leading-[48px] text[#462E6A]">
            Find a Doctor near you
          </h2>
          <div className="w-14 h-[2px] rounded-[10px] bg-black"></div>
          <p className="font-light text-[18px] leading-8 text-[#7D7987]">
            Our app and web portal allows you to find the doctor to your nearest
            location.
          </p>
          <div className="btn">
            <button className="font-medium text-[18px] leading-[60px] text-[#458FF6] px-[50px] rounded-[50px] border-solid border-[1px] border-[#458FF6] hover:bg-[#458FF6] hover:text-white duration-300 mx-auto">
              Find now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
