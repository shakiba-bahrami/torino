"use client";
import TourCard from "./TourCard";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

function TourList({ toursData }) {
  const [visibleToursCount, setVisibleToursCount] = useState(4);
  return (
    <div className="my-[48px]">
      <h2 className="fw-400 text-[20px] text-black translate-y-4">
        همه تور ها
      </h2>

      {toursData.slice(0, visibleToursCount).map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}

      {visibleToursCount < toursData.length && (
        <button
          onClick={() => setVisibleToursCount(toursData.length)}
          className="flex gap-2 items-center  text-black/50 mx-auto  -translate-y-2"
        >
          <p className="text-[13px]"> مشاهده بیشتر</p>
          <FaChevronDown className="w-[12px]" />
        </button>
      )}
    </div>
  );
}

export default TourList;
