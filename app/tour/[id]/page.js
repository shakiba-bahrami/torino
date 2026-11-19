import { serverFetch } from "@/core/services/http";
import {
  getTourDuration,
  toPersianDate,
  toPersianDigits,
  toPersianPrice,
} from "@/core/utils/formatters";
import Image from "next/image";
import { optionIcons } from "@/core/constants/optionIcon";
import { fleetVehicle } from "@/core/constants/fleetVehicle";
import { MdPeopleAlt } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import ReserveButton from "@/components/ReserveButton";
import { cities } from "@/core/constants/cities";
import { FaRoute } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

async function TourDetailsPage({ params }) {
  const { id } = await params;
  const tourDetails = await serverFetch(`/tour/${id}`, { cache: "no-cache" });
  const { days, nights } = getTourDuration(
    tourDetails.startDate,
    tourDetails.endDate,
  );
  const fleetVehicleType = tourDetails.fleetVehicle.toLowerCase();

  return (
    <div className="bg-[#F3F3F3] lg:px-[clamp(40px,calc(10.75vw_-_28.8px),126px)]  lg:relative lg:right-1/2 lg:w-screen lg:translate-x-1/2 lg:pt-[30px] max-w-[1440px] flex-1 lg:pb-[30px]">
      <div className="w-full bg-white flex flex-col justify-center items-center lg:border lg:border-black/20 lg:rounded-[10px] lg:p-[20px]">
        <div className="lg:flex lg:flex-row lg:justify-between lg:w-full ">
          <div className="relative w-[clamp(330px,27.56vw,397px)] h-[clamp(220px,calc(4.29vw_+_203.29px),265px)] mx-auto lg:mx-0 mt-[10px] lg:shrink-0">
            <Image
              src={tourDetails.image}
              alt="تصویر تور"
              fill
              className="rounded-[11px] object-cover"
              unoptimized
              loading="eager"
            />
          </div>
          <div className="w-[330px] md:w-[400px] lg:w-auto lg:w-full lg:px-[20px]">
            <div className=" w-full flex justify-between mt-[17px] lg:flex-col lg:gap-4">
              <h2 className="fw-700 text-[24px] lg:text-[32px] text-black">{`تور ${tourDetails.title}`}</h2>
              <p className="text-[15px] lg:text-[20px] fw-400 flex items-center lg:fw-500">
                {toPersianDigits(days)} روز و {toPersianDigits(nights)} شب
              </p>
            </div>
            <div className="flex justify-around my-[20px] lg:my-[30px] text-[#7D7D7D] text-[13px] lg:text-[20px] ">
              {tourDetails.options.map((option) => (
                <div key={option} className="flex items-center gap-1">
                  {optionIcons[option]}
                  <p>{option}</p>
                </div>
              ))}
            </div>

            <div className="mt-[35px] grid grid-cols-3 grid-rows-2 gap-1 items-center text-center h-[70px] -mx-[25px] lg:hidden">
              <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] fw-400 ">
                {fleetVehicle[fleetVehicleType][0]}
                <p>حمل و نقل</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] fw-400">
                <MdPeopleAlt />
                <p>ظرفیت</p>
              </div>
              <div className="flex justify-center items-center gap-2 text-[#444444] text-[16px] fw-400 ">
                <AiOutlineFileProtect />
                <p>بیمه</p>
              </div>
              <p className="text-[14px] fw-600 ">
                {fleetVehicle[fleetVehicleType][1]}
              </p>
              <p className="text-[14px] fw-600 ">{`حداکثر ${toPersianDigits(tourDetails.availableSeats)} نفر`}</p>
              <p className="text-[14px] fw-600 min-w-[115px]">
                {tourDetails.insurance
                  ? `بیمه ${toPersianDigits(50)} هزار دیناری`
                  : "ندارد"}
              </p>
            </div>

            <div className="flex flex-row-reverse justify-between mt-[26px] mb-[25px]">
              <ReserveButton
                className={
                  "w-[154px] lg:w-[204px] h-[42px] lg:h-[56px] !text-[18px] lg:!text-[24px] rounded-[10px]"
                }
                id={tourDetails.id}
              />
              <div className="flex gap-2 items-center">
                <span className="text-[24px] lg:text-[28px] text-info fw-600">
                  {toPersianPrice(tourDetails.price * 1000)}
                </span>
                <p className="text-[10px] lg:text-[14px] text-text-primary/80">
                  تومان
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden  lg:grid grid-cols-6 w-full text-center mt-[20px] divide-x divide-black/20 [&>*:nth-child(6n)]:border-l-0">
          <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] lg:text-[18px] fw-400 py-[20px]">
            <FaRoute />
            <p>مبدا</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] lg:text-[18px] fw-400 ">
            <FaCalendarAlt />
            <p>تاریخ رفت</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] lg:text-[18px] fw-400 ">
            <FaCalendarAlt />
            <p>تاریخ برگشت</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] lg:text-[18px] fw-400 ">
            {fleetVehicle[fleetVehicleType][0]}
            <p>حمل و نقل</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] lg:text-[18px] fw-400">
            <MdPeopleAlt />
            <p>ظرفیت</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#444444] text-[16px] lg:text-[18px] fw-400 ">
            <AiOutlineFileProtect />
            <p>بیمه</p>
          </div>

          <p>
            {
              cities.find((city) => city.id === String(tourDetails.origin.id))
                ?.name
            }
          </p>
          <p className="text-[14px] lg:text-[16px] fw-600">
            {toPersianDate(tourDetails.startDate)}
          </p>
          <p className="text-[14px] lg:text-[16px] fw-600">
            {toPersianDate(tourDetails.endDate)}
          </p>
          <p className="text-[14px] lg:text-[16px] fw-600 ">
            {fleetVehicle[fleetVehicleType][1]}
          </p>
          <p className="text-[14px] lg:text-[16px] fw-600 ">{`حداکثر ${toPersianDigits(tourDetails.availableSeats)} نفر`}</p>
          <p className="text-[14px] lg:text-[16px] fw-600 min-w-[115px]">
            {tourDetails.insurance
              ? `بیمه ${toPersianDigits(50)} هزار دیناری`
              : "ندارد"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
