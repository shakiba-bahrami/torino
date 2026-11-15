import { toPersianDigits, toPersianPrice } from "@/core/utils/formatters";
import React from "react";

function MyTourCard({ tour }) {
  console.log(tour);

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
    <div className="relative border border-black/15 rounded-[8px] p-[20px] mt-[20px] pb-[0px]">
      <div className="pt-[10px]">
        <span
          className={`text-[6px] rounded-full px-2 py-1 absolute top-2 left-2 ${
            isCompleted
              ? "bg-gray-100 text-gray-500"
              : isOngoing
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {status}
        </span>
        <div className="flex justify-between">
          <p>تور اقلیم {tour.title}</p>
          <p>سفر با {tour.fleetVehicle}</p>
        </div>
        <div className="flex justify-between">
          <p>
            {tour.origin.name} به {tour.destination.name}
          </p>
          <p>{tour.startDate}</p>
        </div>
        <div className="flex justify-between">
          <p>تاریخ برگشت</p>
          <p>{tour.endDate}</p>
        </div>
      </div>
      <div
        className="h-[50px] items-center -mx-[20px] px-[20px] border-t border-black/15 flex  justify-between
 justify-between text-[12px]"
      >
        <div className="flex gap-1 h-full items-center">
          <p className="text-[10px] text-black/50 ">شماره تور</p>
          <p>{toPersianDigits(tour.id.slice(-9))}</p>
        </div>
        <div className="flex gap-1 border-r border-black/15 pr-[10px] h-full items-center">
          <p className="text-[10px] text-black/50 ">مبلغ پرداخت شده</p>
          <div className="flex gap-1">
            <p>{toPersianPrice(tour.price)}</p>
            <p className="text-[10px] text-black/50">تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTourCard;
