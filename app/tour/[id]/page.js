import { serverFetch } from "@/core/services/http";
import { getTourDuration, toPersianPrice } from "@/core/utils/formatters";
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
    <div>
      <Image
        src={tourDetails.image}
        alt="تصویر تور"
        width={330}
        height={220}
        className=""
        unoptimized
        loading="eager"
      />
      <div className="flex justify-between">
        <h2>{tourDetails.title}</h2>
        <p>
          {" "}
          {days} روز و {nights} شب
        </p>
      </div>
      <div className="flex justify-between  my-[10px]">
        {tourDetails.options.map((option) => (
          <div key={option} className="flex items-center gap-1">
            {optionIcons[option]}
            <p className="text-[10px]">{option}</p>
          </div>
        ))}
      </div>

      <div className=" my-[10px] grid grid-cols-3  text-[12px] text-center">
        <div>
          <div className="flex justify-center">
            {fleetVehicle[tourDetails.fleetVehicle][0]}
            <p>حمل و نقل</p>
          </div>
          <p>{fleetVehicle[tourDetails.fleetVehicle][1]}</p>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <MdPeopleAlt />
            <p>ظرفیت</p>
          </div>
          <p>{tourDetails.capacity}</p>
        </div>

        <div>
          <div className="flex justify-center">
            <AiOutlineFileProtect />
            <p>بیمه</p>
          </div>
          <p>{tourDetails.insurance ? "بیمه 50 هزار دیناری" : "ندارد"}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <ReserveButton />
        <div className="flex gap-1">
          <span>{toPersianPrice(tourDetails.price)}</span>
          <p>تومان</p>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
