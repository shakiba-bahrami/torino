import React from "react";

function Footer() {
  return (
    <>
      <div className="h-[1.5px] w-full bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_8px,transparent_15px)]  my-[28px]" />
      <div className=" text-[#282828] grid grid-cols-2 text-right gap-6 ">
        <div className="">
          <h4 className="fw-600 text-[22px] leading-[100%] tracking-normal text-right mb-[18px]">
            تورینو
          </h4>
          <ul className="pt-[10px] [&>li]:h-[40px] [&>li]:font-normal [&>li]:text-[15px] [&>li]:leading-[100%] [&>li]:tracking-normal [&>li]:text-right">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>چرا تورینو</li>
            <li>بیمه مسافرتی</li>
          </ul>
        </div>
        <div className="">
          <h4 className="fw-600 text-[22px] leading-[100%] tracking-normal text-right mb-[18px]">
            خدمات مشتریان
          </h4>
          <ul className="pt-[10px] [&>li]:h-[40px] [&>li]:font-normal [&>li]:text-[15px] [&>li]:leading-[100%] [&>li]:tracking-normal [&>li]:text-right">
            <li>پشتیبانی آنلاین</li>
            <li>راهنمای خرید</li>
            <li>راهنمای استرداد</li>
            <li>پرسش و پاسخ</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex-2 flex justify-center flex-wrap items-center">
          <img
            src="/images/TrustBadges/ecunion.png"
            alt="ecunion"
            className="h-[38px] m-[10px]"
          />
          <img
            src="/images/TrustBadges/samandehi.png"
            alt="samandehi"
            className="h-[38px]"
          />
          <img
            src="/images/TrustBadges/airline.png"
            alt="airline"
            className="h-[38px]"
          />
          <img
            src="/images/TrustBadges/state-airline.png"
            alt="state-airline"
            className="h-[38px]"
          />
          <img
            src="/images/TrustBadges/passenger-rights.png"
            alt="passenger-rights"
            className="h-[38px]"
          />
        </div>
        <div className="flex-3 flex flex-col items-end justify-center w-full h-auto">
          <img
            src="/images/torino.png"
            alt="torino logo"
            className="w-[130px] h-[45px] -ml-[10px]"
          />
          <div className="flex gap-1 fw-400 ">
            <p>تلفن پشتیبانی: </p>
            <span dir="ltr">۰۲۱-۸۵۷۴</span>
          </div>
        </div>
      </div>

      <div className=""></div>
      <div className="h-[1px] w-full bg-[#000000]/25 my-[7px]" />
      <p className="text-[12px] text-[#000] text-center pb-[5px] fw-300">
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </p>
    </>
  );
}

export default Footer;
