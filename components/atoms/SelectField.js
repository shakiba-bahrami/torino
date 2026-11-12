import { cities } from "@/core/constants/cities";

function SelectField({ icon: Icon, fieldName, register, placeholder }) {
  return (
    <div className="relative">
      <Icon className="absolute top-[11px] right-[52px] w-[20px] h-auto text-black/50" />
      <select
        required
        {...register(fieldName)}
        className="appearance-none w-[160px] h-[47px] border border-black/15 rounded-[12px] p-[8px] focus:outline-none pr-[75px] text-[16px] fw-400 text-black invalid:text-black/50"
      >
        <option default hidden value="">
          {placeholder}
        </option>
        <option disabled className="text-[13px] fw-300">
          پر تردد
        </option>
        {cities.map((city) => (
          <option
            key={city.id}
            value={city.id}
            className="text-black text-[14px]"
          >
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
