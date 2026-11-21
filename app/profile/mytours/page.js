"use client";
import { useGetUserTours } from "@/core/services/queries";
import EmptyTours from "./EmptyTours";
import MyTourCard from "./MyTourCard";

function MyToursPage() {
  const { data, isPending, isError } = useGetUserTours();

  if (isPending) return <p>در حال دریافت تورها</p>;
  if (isError) return <p>خطا در دریافت تورها</p>;

  if (data?.data.length === 0) return <EmptyTours />;

  return (
    <div className="mt-[20px] lg:border lg:border-black/20 lg:px-[20px] lg:rounded-[10px] lg:w-full lg:flex-3">
      <ul>
        {data.data.map((tour,index) => (
          <li key={`${tour.id}-${index}`}>
            <MyTourCard tour={tour} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyToursPage;
