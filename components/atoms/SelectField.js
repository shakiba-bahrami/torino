import { cities } from "@/core/constants/cities";
import { useState, useRef, useEffect } from "react";

function SelectField({
  icon: Icon,
  fieldName,
  register,
  placeholder,
  setValue,
  watch,
  clearFilter,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCity = watch(fieldName);

  const selectedCityName = cities.find(
    (city) => city.id === selectedCity,
  )?.name;

  const dropdownRef = useRef(null);
  // const field = register(fieldName);

  const handleClear = () => {
    setValue(fieldName, "");
    clearFilter(fieldName);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      {selectedCity && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleClear();
          }}
          className="absolute left-[10px] top-1/2 -translate-y-1/2"
        >
          ×
        </button>
      )}
      <Icon className="absolute top-[11px] right-[45px] w-[20px] h-auto text-black/50" />
      <div className="w-[160px] h-[47px] border border-black/15 rounded-[12px] p-[8px]  pr-[30px]  ">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className=" w-full h-full fw-400 text-black/50 "
        >
          {selectedCityName || placeholder}
        </button>
        {isOpen && (
          <div className="bg-white z-10 border border-black/15 rounded-[11px] w-[160px] max-h-[220px] overflow-y-auto absolute top-[52px] right-0">
            <ul>
              <li className="w-full h-[35px] bg-[#F8F8F8] rounded-t-[11px] text-[13px] text-text-primary/70 px-[5px] flex items-center">
                پرتردد
              </li>

              {cities.map((city) => (
                <li
                  key={city.id}
                  onClick={() => {
                    setIsOpen(false);
                    setValue(fieldName, city.id, {
                      shouldValidate: true,
                      shouldDirty: true,
                      shouldTouch: true,
                    });
                  }}
                  className="cursor-pointer w-full h-[53px]  border-b border-b-black/12 text-[14px] fw-400 flex gap-2 items-center pr-[15px] text-text-primary"
                >
                  <Icon />

                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* <select
        required
        {...register(fieldName)}
        className="appearance-none w-[160px] h-[47px] border border-black/15 rounded-[12px] p-[8px] focus:outline-none pr-[75px] text-[16px] fw-400 text-black invalid:text-black/50"
      >
          <option default hidden value="">
            {placeholder}
          </option>
  
          <optgroup label="پرتردد" className="text-[14px] fw-300  bg-blue-400">

          {cities.map((city) => (
            <option
              key={city.id}
              value={city.id}
              className="text-black text-[14px]"
            >
              {city.name}
            </option>
          ))}
          </optgroup>

      </select> */}
    </div>
  );
}

export default SelectField;
