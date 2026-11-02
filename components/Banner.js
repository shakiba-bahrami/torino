import React from "react";

function Banner() {
  return (
    <section className="w-full ">
      <img
        src="/images/bannerImage.png"
        alt="banner image"
        className="w-full h-[120px] "
      />
      <h1 className=" text-text text-[17.7px] font-[600] text-center leading-[100%]  tracking-[2px] text-center mt-[28px]">
        {/* <h1 className="text-text text-[16px] font-[600] text-center leading-[100%]  tracking-[0%] text-center mt-[24px]"> */}
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h1>
    </section>
  );
}

export default Banner;
