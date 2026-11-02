import React from "react";

function Footer() {
  return (
    <div
      className="text-[#282828] h-[1.5px] w-full bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_8px,transparent_15px)]
    grid grid-cols-2 text-right "
    >
      <div className="h-[150px] mt-[10px]">
        <h4 className="font-[600] text-[22px] leading-[100%] tracking-normal text-right mb-[18px]">
          تورینو
        </h4>
        <ul className="[&>li]:h-[25px] [&>li]:font-normal [&>li]:text-[16px] [&>li]:leading-[100%] [&>li]:tracking-normal [&>li]:text-right">
          <li>درباره ما</li>
          <li>تماس با ما</li>
          <li>چرا تورینو</li>
          <li>بیمه مسافرتی</li>
        </ul>
      </div>
      <div className="h-[150px] mt-[10px]">
        <h4 className="font-[600] text-[22px] leading-[100%] tracking-normal text-right mb-[18px]">
          خدمات مشتریان
        </h4>
        <ul className="[&>li]:h-[25px] [&>li]:font-normal [&>li]:text-[16px] [&>li]:leading-[100%] [&>li]:tracking-normal [&>li]:text-right">
          <li>پشتیبانی آنلاین</li>
          <li>راهنمای خرید</li>
          <li>راهنمای استرداد</li>
          <li>پرسش و پاسخ</li>
        </ul>
      </div>

      <div className=" h-[80px] flex flex-wrap justify-center gap-2">
        <img
          src="/images/TrustBadges/ecunion.png"
          alt="ecunion"
          className="h-[38px]"
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
      <div className=" h-[80px] ">
        <img src="/images/torino.png" alt="torino logo" className="w-[100px]" />
        <div className="flex gap-2 ">
          <p>تلفن پشتیبانی: </p>
          <span dir="ltr">۰۲۱-۸۵۷۴</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
