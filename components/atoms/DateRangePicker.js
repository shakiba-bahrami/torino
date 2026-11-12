import { DatePicker } from "zaman";
import { LuCalendarDays } from "react-icons/lu";

function DateRangePicker() {
  const handleDateChange = (e) => {
    console.log("از تاریخ:", e.from);
    console.log("تا تاریخ:", e.to);
  };

  return (
    <div className="relative mt-[15px] ">
      <LuCalendarDays className="absolute right-[140px] top-0 bottom-0 my-auto w-[18px] text-black/50 pointer-events-none" />
      <DatePicker
        range
        locale="fa"
        onChange={handleDateChange}
        inputClass="w-full h-[47px] rounded-[12px] border border-black/15 text-center pr-[35px] "
        inputAttributes={{ placeholder: "تاریخ" }}
        accentColor="#28a745"
        round="x2"
        className="!w-[331px] !h-[269px] !rounded-[12px] !bg-white !border !border-[#00000040]"
      />
    </div>
  );
}

export default DateRangePicker;
