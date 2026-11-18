"use client";
import { useForm } from "react-hook-form";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import SelectField from "./atoms/SelectField";
import DateRangePicker from "./atoms/DateRangePicker";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function TourSearchSection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      originId: searchParams.get("originId") || "",
      destinationId: searchParams.get("destinationId") || "",
      startDate: searchParams.get("startDate") || "",
      endDate: searchParams.get("endDate") || "",
    },
  });

  const submitHandler = (data) => {
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(
        ([, value]) => value !== undefined && value !== "",
      ),
    );
    router.push(`/?${new URLSearchParams(filteredData).toString()}`);
  };

  const clearFilter = (fieldNames) => {
    const params = new URLSearchParams(searchParams.toString());
    const fields = Array.isArray(fieldNames) ? fieldNames : [fieldNames];
    fields.forEach((field) => params.delete(field));
    router.push(params.size ? `/?${params.toString()}` : "/");
  };

  return (
    <div className="w-full my-[28px]">
      <form
        action=""
        onSubmit={handleSubmit(submitHandler)}
        className="md:flex md:gap-1 md:items-center md:h-[50px] lg:h-[70px] md:border md:border-black/15 md:rounded-[20px] md:mx-auto md:w-[79.02%] md:pr-[8px]"
      >
        <div className="w-full flex gap-2 md:flex-2 md:gap-0">
          <SelectField
            icon={HiOutlineLocationMarker}
            fieldName="originId"
            register={register}
            setValue={setValue}
            watch={watch}
            placeholder="مبدا"
            clearFilter={clearFilter}
          />
          <SelectField
            icon={HiOutlineGlobeAlt}
            fieldName="destinationId"
            register={register}
            setValue={setValue}
            watch={watch}
            placeholder="مقصد"
            clearFilter={clearFilter}
          />
        </div>
        <DateRangePicker setValue={setValue} clearFilter={clearFilter} />
        <button
          type="submit"
          className="w-full md:flex-1 md:w-[clamp(100px,13.2vw,190px)] !text-[20px] h-[47px] md:h-[35px] bg-primary rounded-[16px] md:rounded-[12px] p-[8px] !fw-400 text-white text-center mt-[22px] md:m-[0px] md:p-[0px] md:ml-[8px] lg:h-[50px]"
        >
          جستجو
        </button>
      </form>
    </div>
  );
}

export default TourSearchSection;
