"use client";
import TourCard from "./TourCard";
import { FaChevronDown } from "react-icons/fa6";
import { useState, useEffect } from "react";

function TourList({ toursData }) {
  const [visibleToursCount, setVisibleToursCount] = useState(5);

  useEffect(() => {
    setVisibleToursCount(window.innerWidth >= 768 ? 8 : 5);
  }, []);

  
  return (
    <div className="my-[48px]">
      <h2 className="fw-400 text-[20px] md:text-[32px] text-black translate-y-4">
        همه تور ها
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mt-[20px]">
        {toursData.slice(0, visibleToursCount).map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {visibleToursCount < toursData.length && (
        <button
          onClick={() =>
            setVisibleToursCount((prev) => Math.min(prev + 4, toursData.length))
          }
          className="flex gap-2 items-center  text-black/50 mx-auto mt-[20px]"
        >
          <p className="text-[14px] "> مشاهده بیشتر</p>
          <FaChevronDown className="w-[12px]" />
        </button>
      )}
    </div>
  );
}

export default TourList;
