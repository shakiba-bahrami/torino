
import { toPersianDigits } from "@/core/utils/formatters";
import TourSlider from "./TourSlider";
import { BsFillQuestionOctagonFill } from "react-icons/bs";

function WhyTorino() {
  return (
    <div className="mt-[50px] overflow-hidden lg:relative lg:mt-[100px] xl:mt-[190px]">
      <div className="mr-[20px] flex items-center gap-3 text-[24px] fw-800 lg:mb-[30px] lg:text-[48px]">
        <BsFillQuestionOctagonFill className="text-primary" />
        <h3 className="text-[clamp(24px,2.78vw,40px)]">
          چرا <span className="text-primary">تورینو</span> ؟
        </h3>
      </div>

      <div className="lg:flex">
        <div className="hidden flex-1 min-w-0 pr-[20px] lg:block">
          <h4 className="mb-[20px] text-[clamp(16px,1.75vw,24px)] fw-500">
            تور طبیعت گردی و تاریخی
          </h4>
          <p className="w-full max-w-[517px] text-justify text-[clamp(12px,1.3889vw,20px)] fw-400 leading-[220%]">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>

        <div className="xl:left-[-25%]">
          <TourSlider />
        </div>
      </div>

      <div className="my-[30px] h-[1px] w-full bg-black/25 lg:mt-[145px]" />

      <div className="pt-[20px] lg:flex lg:justify-between lg:pt-0">
        <div className="mb-[30px] flex items-center justify-between">
          <img src="/images/whyTorino/1.png" alt="" className="mr-[10px] w-[70px] lg:w-[121px]" />
          <div>
            <p className="text-[14px] fw-600 lg:text-[26px]">بصرفه ترین قیمت</p>
            <p className="w-[225px] text-[12px] fw-300 lg:text-[17px]">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>

        <div className="mb-[30px] flex items-center justify-between">
          <img src="/images/whyTorino/2.png" alt="" className="mr-[10px] w-[70px] lg:w-[121px]" />
          <div>
            <p className="text-[14px] fw-600 lg:text-[26px]">پشتیبانی</p>
            <p className="w-[225px] text-[12px] fw-300 lg:text-[17px]">
              پشتیبانی و همراهی {toPersianDigits(24)} ساعته در تمامی مراحل سفر شما.
            </p>
          </div>
        </div>

        <div className="mb-[30px] flex items-center justify-between">
          <img src="/images/whyTorino/3.png" alt="" className="mr-[10px] w-[70px] lg:w-[121px]" />
          <div>
            <p className="text-[14px] fw-600 lg:text-[26px]">رضایت کاربران</p>
            <p className="w-[225px] text-[12px] fw-300 lg:text-[17px]">
              رضایت بیش از {toPersianDigits(10)} هزار کاربر از تور های ما.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
