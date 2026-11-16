import { toPersianDigits } from "@/core/utils/formatters";
import TourSlider from "./TourSlider";
import { BsFillQuestionOctagonFill } from "react-icons/bs";

function WhyTorino() {
  return (
    <div className="mt-[50px]">
      <div className="mr-[20px] flex items-center gap-3 text-[24px] fw-800">
        <BsFillQuestionOctagonFill className="text-primary" />
        <h3 className=" ">
          چرا <span className="text-primary">تورینو</span> ؟
        </h3>
      </div>
      <TourSlider />
      <div className="w-full h-[1px] bg-black/25 my-[30px]"></div>
      <div className="pt-[20px]">
        <div className="flex justify-between items-center mb-[30px]">
          <img
            src="/images/whyTorino/1.png"
            alt=""
            className="w-[70px] mr-[10px]"
          />
          <div>
            <p className="text-[14px] fw-600">بصرفه ترین قیمت</p>
            <p className="text-[12px] fw-300 w-[225px]">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[30px]">
          <img
            src="/images/whyTorino/1.png"
            alt=""
            className="w-[70px] mr-[10px]"
          />
          <div>
            <p className="text-[14px] fw-600">پشتیبانی</p>
            <p className="text-[12px] fw-300 w-[225px]">
              پشتیبانی و همراهی {toPersianDigits(24)} ساعته در تمامی مراحل سفر
              شما.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[30px]">
          <img
            src="/images/whyTorino/1.png"
            alt=""
            className="w-[70px] mr-[10px]"
          />
          <div>
            <p className="text-[14px] fw-600">رضایت کاربران</p>
            <p className="text-[12px] fw-300 w-[225px]">
              رضایت بیش از {toPersianDigits(10)} هزار کاربر از تور های ما.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
