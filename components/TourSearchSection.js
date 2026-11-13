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
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <div className="flex justify-between">
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
          className="w-[328px] h-[47px] bg-primary rounded-[16px] p-[8px] !text-[20px] !fw-400 text-white text-center mt-[22px]"
        >
          جستجو
        </button>
      </form>
    </div>
  );
}

export default TourSearchSection;
