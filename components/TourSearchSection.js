"use client";
import { useForm } from "react-hook-form";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import SelectField from "./atoms/SelectField";
import DateRangePicker from "./atoms/DateRangePicker";

function TourSearchSection() {
  const { register, handleSubmit, setValue,watch } = useForm();
  return (
    <div className="w-full my-[28px]">
      <form action="">
        <div className="flex justify-between">
          <SelectField
            icon={HiOutlineLocationMarker}
            fieldName="originId"
            register={register}
            setValue={setValue}
            watch={watch}
            placeholder="مبدا"
          />
          <SelectField
            icon={HiOutlineGlobeAlt}
            fieldName="destinationId"
            register={register}
            setValue={setValue}
            watch={watch}
            placeholder="مقصد"
          />
        </div>
        <DateRangePicker />
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
