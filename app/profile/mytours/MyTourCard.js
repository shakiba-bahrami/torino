import { cities } from "@/core/constants/cities";
import {
  toPersianDate,
  toPersianDigits,
  toPersianPrice,
} from "@/core/utils/formatters";
import { travelKind } from "@/core/utils/travelKind";
import React from "react";
import { WiHorizonAlt } from "react-icons/wi";
import { fleetVehicle } from "@/core/constants/fleetVehicle";

function MyTourCard({ tour }) {
  console.log(tour);
  // console.log(tour.destination.id);
  // console.log(tour.origin.id);
  console.log(cities);
  const fleetVehicleType = tour.fleetVehicle.toLowerCase();
  const now = new Date();

  const isCompleted = new Date(tour.endDate) < now;
  const isOngoing =
    new Date(tour.startDate) <= now && new Date(tour.endDate) >= now;

  const status = isCompleted
    ? "به اتمام رسیده"
    : isOngoing
      ? "در حال برگزاری"
      : "در انتظار برگزاری";

  return (
    <div className="relative border border-black/15 rounded-[8px] p-[20px] my-[20px] lg:my-[10px] pb-[0px]">
      <div className="pt-[10px] grid grid-col-1 lg:grid-cols-2 gap-4 mb-[20px]">
        <span
          className={`text-[6px] rounded-full px-2 py-1 absolute top-2 left-2 ${
            isCompleted
              ? "bg-green-100 text-green-500"
              : isOngoing
                ? "bg-yellow-100 text-yellow-700"
                : "bg-blue-100 text-blue-700"
          }`}
        >
          {status}
        </span>
        <div className="flex justify-between lg:flex-start text-[12px] lg:text-[14px] lg:col-span-2 lg:max-w-[500px]">
          <div className="flex gap-2 items-center ">
            <WiHorizonAlt className="text-[20px]" />
            <p>تور اقلیم {tour.title}</p>
          </div>
          <div className="flex gap-2 items-center">
            {fleetVehicle[fleetVehicleType][0]}
            <p>سفر با {travelKind(tour.fleetVehicle)}</p>
          </div>
        </div>
        <div className="flex justify-between lg:justify-start lg:gap-4">
          <p className="text-[14px] fw-600">
            {cities[tour?.origin.id].name} به{" "}
            {cities[tour?.destination.id].name}
          </p>

          <p className="text-black/50 text-[12px] fw-400">{`. ${toPersianDate(tour.startDate)}`}</p>
        </div>
        <div className="flex justify-between  lg:justify-start lg:gap-4">
          <p className="text-[14px] fw-600">تاریخ برگشت</p>
          <p className="text-black/50 text-[12px] fw-400">{`. ${toPersianDate(tour.endDate)}`}</p>
        </div>
      </div>
      <div
        className="h-[50px] items-center -mx-[20px] px-[20px] border-t border-black/15 flex  justify-between
   justify-between text-[12px]"
      >
        <div className="h-[30px] flex gap-3 items-center lg:flex-1">
          <p className="text-[10px] text-black/50 ">شماره تور</p>
          <p className="text-[12px]">{tour.id.slice(-9)}</p>
        </div>
        <div className="h-[30px] flex gap-2 border-r border-black/15 pr-[10px]  items-center lg:flex-4">
          <p className="text-[10px] text-black/50 ">مبلغ پرداخت شده</p>
          <div className="flex gap-1 items-center">
            <p className="text-[12px]">{toPersianPrice(tour.price)}</p>
            <p className="text-[8px] text-black/50">تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTourCard;
