import { DatePicker } from "zaman";
import { LuCalendarDays } from "react-icons/lu";

function DateRangePicker() {
  const handleDateChange = (e) => {
    console.log("از تاریخ:", e.from);
    console.log("تا تاریخ:", e.to);
  };

  return (
    <div className="relative">
      <LuCalendarDays className="w-[18px] h-auto text-black/50 absolute top-[27px] right-[8rem]" />
      <DatePicker
        range
        locale="fa"
        onChange={handleDateChange}
        inputClass="w-[328px] h-[47px] rounded-[12px] border-1 border-black/15 mt-[12px] text-center pr-[20px]"
        inputAttributes={{ placeholder: "تاریخ" }}
      />
    </div>
  );
}

export default DateRangePicker;
