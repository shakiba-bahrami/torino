import { serverFetch } from "@/core/services/http";
import {
  getTourDuration,
  toPersianDigits,
  toPersianPrice,
} from "@/core/utils/formatters";
import Image from "next/image";
import { optionIcons } from "@/core/constants/optionIcon";
import { fleetVehicle } from "@/core/constants/fleetVehicle";
import { MdPeopleAlt } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";
import ReserveButton from "@/components/ReserveButton";

async function TourDetailsPage({ params }) {
  const { id } = await params;
  //a1b2c3d4-e5f6-7890-abcd-ef1234567890
  const tourDetails = await serverFetch(`/tour/${id}`, { cache: "no-cache" });
  console.log(tourDetails);
  const { days, nights } = getTourDuration(
    tourDetails.startDate,
    tourDetails.endDate,
  );
  return (
    <div className="mt-[20px]">
      <div className="relative w-[330px] h-[220px]">
        <Image
          src={tourDetails.image}
          alt="تصویر تور"
          fill
          className="rounded-[11px] object-cover"
          unoptimized
          loading="eager"
        />
      </div>
      <div className="flex justify-between mt-[17px] ">
        <h2 className="fw-700 text-[24px] text-black">{`تور ${tourDetails.title}`}</h2>
        <p className="text-[15px] fw-400 flex items-center">
          {toPersianDigits(days)} روز و {toPersianDigits(nights)} شب
        </p>
      </div>
      <div className="flex justify-around my-[20px] text-[#7D7D7D] text-[13px]">
        {tourDetails.options.map((option) => (
          <div key={option} className="flex items-center gap-1">
            {optionIcons[option]}
            <p>{option}</p>
          </div>
        ))}
      </div>

      <div className="mt-[35px] grid grid-cols-3 grid-rows-2 gap-1 items-center text-center h-[70px] -mx-[25px]">
        <div className="flex items-center justify-center gap-2 text-[#444444] text-[16px] fw-400 ">
          {fleetVehicle[tourDetails.fleetVehicle][0]}
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
          {fleetVehicle[tourDetails.fleetVehicle][1]}
        </p>
        <p className="text-[14px] fw-600 ">{`حداکثر ${toPersianDigits(tourDetails.capacity)} نفر`}</p>
        <p className="text-[14px] fw-600 min-w-[115px]">
          {tourDetails.insurance
            ? `بیمه ${toPersianDigits(50)} هزار دیناری`
            : "ندارد"}
        </p>
      </div>

      <div className="flex justify-between mt-[26px] mb-[25px]">
        <ReserveButton
          className={"w-[154px] h-[42px] !text-[18px] rounded-[10px]"}
        />
        <div className="flex gap-2 items-center">
          <span className="text-[24px] text-info fw-600">
            {toPersianPrice(tourDetails.price * 1000)}
          </span>
          <p className="text-[10px] text-text-primary/80">تومان</p>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
