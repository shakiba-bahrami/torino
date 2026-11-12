import { toPersianPrice } from "@/core/utils/formatters";
import { getTourSummary } from "@/core/utils/tourFormatters";

function TourCard({ tour }) {
  const tourSummary = getTourSummary(tour);

  return (
    <div className="w-full my-[24px] rounded-[10px] border-[1px] border-black/12">
      <img src={tour.image} alt="" className="w-full h-[159px]" />
      <h3 className="fw-400 text-[22px] text-black pr-[10px] pt-[10px]">
        {tour.title}
      </h3>
      <p className="truncate max-w-[305px] text-text-primary/70 px-[10px] py-[8px] text-[15px]">
        {tourSummary}
      </p>
      <div className="w-full border-t border-black/12 flex justify-between items-center px-[10px] py-[5px]">
        <button className="w-[99px] h-[29px] bg-primary rounded-[4px] text-white !text-[15px] !fw-400 ">
          رزرو
        </button>
        <p className="fw-400 text-[12px] text-black">
          <span className="text-info text-[16px] fw-400 pl-[5px] ">
            {toPersianPrice(tour.price)}
          </span>
          تومان
        </p>
      </div>
    </div>
  );
}

export default TourCard;
