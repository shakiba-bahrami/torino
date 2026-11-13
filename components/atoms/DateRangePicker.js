import { DatePicker } from "zaman";
import { LuCalendarDays } from "react-icons/lu";
import { dateFormatter } from "@/core/utils/formatters";
import { useState } from "react";

function DateRangePicker({ setValue }) {
  const [isShowPlaceholder, setIsShowPlaceholder] = useState(true);
  const dateChangeHandler = (e) => {
    console.log("از تاریخ:", e.from);
    console.log("تا تاریخ:", e.to);
    setIsShowPlaceholder(false);
    setValue("startDate", dateFormatter(e.from));
    setValue("endDate", dateFormatter(e.to));
  };

  return (
    <div className="relative mt-[15px] ">
      {isShowPlaceholder && (
        <LuCalendarDays className="absolute right-[140px] top-0 bottom-0 my-auto w-[18px] text-black/50 pointer-events-none" />
      )}
      <DatePicker
        range
        locale="fa"
        onChange={dateChangeHandler}
        inputClass="w-full h-[47px] rounded-[12px] border border-black/15 !text-[14px] text-center  text-black/50 placeholder:pr-[35px] placeholder:text-black/50"
        inputAttributes={{ placeholder: "تاریخ" }}
        accentColor="#28a745"
        round="x2"
        className="!w-[331px] !h-[269px] !rounded-[12px] !bg-white !border !border-[#00000040] "
      />
    </div>
  );
}

export default DateRangePicker;
