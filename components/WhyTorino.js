import { toPersianDigits } from "@/core/utils/formatters";
import TourSlider from "./TourSlider";
import { BsFillQuestionOctagonFill } from "react-icons/bs";

function WhyTorino() {
  return (
    <div className="mt-[50px] overflow-hidden relative lg:mt-[clamp(100px,13.2vw,190px)]">
      <div className="mr-[20px] flex items-center gap-3 text-[24px] fw-800 mb-[20px] lg:mb-[30px] lg:text-[48px]">
        <BsFillQuestionOctagonFill className="text-primary" />
        <h3 className="text-[clamp(24px,2.78vw,40px)] ">
          چرا <span className="text-primary">تورینو</span> ؟
        </h3>
      </div>

      <div className="flex flex-col md:flex-row md:gap-[clamp(20px,4vw,58px)]">
        <div className="w-full min-w-0 md:w-1/2 md:flex-1 md:pr-[20px]">
          <div className="hidden md:block">
            <h4 className="mb-[20px] text-[clamp(16px,1.75vw,24px)] fw-500">
              تور طبیعت گردی و تاریخی
            </h4>
            <p className="text-justify text-[clamp(14px,1.8vw,20px)] fw-400 leading-[220%]">
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:flex-none md:min-w-0 md:-translate-y-[50px] lg:-translate-y-[80px]">
          <TourSlider />
        </div>
      </div>

      <div className="mt-[80px] md:mt-[40px] lg:mt-0 mb-[40px] h-[1px] w-full bg-black/25" />

      <div className="py-[30px] lg:flex lg:items-center lg:justify-between lg:gap-4 lg:pt-0">
        <div className="mb-[30px] flex items-center justify-center gap-4 lg:mb-0 lg:flex-1 lg:gap-[clamp(8px,1.2vw,17px)]">
          <img
            src="/images/whyTorino/1.png"
            alt=""
            className="w-[clamp(75px,9vw,121px)] shrink-0"
          />
          <div className="min-w-0 lg:h-[110px] lg:flex lg:flex-col lg:justify-start">
            <p className="text-[clamp(18px,2vw,26px)] fw-600">
              بصرفه ترین قیمت
            </p>
            <p className="w-full max-w-[225px] text-[clamp(14px,1.4vw,17px)] fw-300">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>

        <div className="mb-[30px] flex items-center justify-center gap-4 md:mb-0 lg:flex-1 lg:gap-[clamp(8px,1.2vw,17px)]">
          <img
            src="/images/whyTorino/2.png"
            alt=""
            className="w-[clamp(75px,9vw,121px)] shrink-0"
          />
          <div className="min-w-0 lg:h-[110px] lg:flex lg:flex-col lg:justify-start">
            <p className="text-[clamp(18px,2vw,26px)] fw-600">پشتیبانی</p>
            <p className="w-full max-w-[225px] text-[clamp(14px,1.4vw,17px)] fw-300">
              پشتیبانی و همراهی {toPersianDigits(24)} ساعته در تمامی مراحل سفر
              شما.
            </p>
          </div>
        </div>

        <div className="mb-[30px] flex items-center justify-center gap-4 lg:mb-0 lg:flex-1 lg:gap-[clamp(8px,1.2vw,17px)]">
          <img
            src="/images/whyTorino/3.png"
            alt=""
            className="w-[clamp(75px,9vw,121px)] shrink-0"
          />
          <div className="min-w-0 lg:h-[110px] lg:flex lg:flex-col lg:justify-start">
            <p className="text-[clamp(18px,2vw,26px)] fw-600">رضایت کاربران</p>
            <p className="w-full max-w-[225px] text-[clamp(14px,1.4vw,17px)] fw-300">
              رضایت بیش از {toPersianDigits(10)} هزار کاربر از تور های ما.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
