import { DatePicker } from "zaman";
import { LuCalendarDays } from "react-icons/lu";
import { dateFormatter } from "@/core/utils/formatters";
import { useState } from "react";

function DateRangePicker({ setValue, clearFilter }) {
  const [selectedDate, setSelectedDate] = useState(false);
  const [key, setKey] = useState(0);

  const handleClear = () => {
    setValue("startDate", "");
    setValue("endDate", "");
    setSelectedDate(false);
    clearFilter(["startDate", "endDate"]);
    setKey((prev) => prev + 1);
  };

  const dateChangeHandler = (e) => {
    setSelectedDate(true);
    setValue("startDate", dateFormatter(e.from));
    setValue("endDate", dateFormatter(e.to));
  };

  return (
    <div className="md:flex-1 relative mt-[15px] md:mt-0 ">
      {!selectedDate && (
        <div className="absolute inset-0 flex items-center justify-center gap-1  md:left-auto">
          <LuCalendarDays className="w-[18px] md:w-[24px] text-black/50 md:text-[#2c2c2c]" />
          <span className="text-[14px] text-black/50 md:text-[#2c2c2c] md:text-[18px]">
            تاریخ
          </span>
        </div>
      )}

      {selectedDate && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute left-[10px] top-[11px] z-10"
        >
          ×
        </button>
      )}

      <DatePicker
        range
        locale="fa"
        onChange={dateChangeHandler}
        inputClass="w-full h-[47px] rounded-[12px] border border-black/15 text-center md:text_right text-black/50 md:border-none md:!text-[12.5px] md:w-[100px] lg:!text-[18px] lg:w-[135px]"
        accentColor="#28a745"
        round="x2"
        className="rounded-[16px] !bg-white border !border-[#00000040] "
        key={key}
      />
    </div>
  );
}

export default DateRangePicker;
