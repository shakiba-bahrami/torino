import { useSendOtp } from "@/core/services/mutations";
import { isValidMobile } from "@/core/utils/validation";
import React from "react";
import { toast } from "react-toastify";

function SendOtpForm({ setStep, setMobile, mobile, code, setCode ,setIsLoginOpen}) {
  const { isPending, mutate } = useSendOtp();

  const submitHandler = (e) => {
    e.preventDefault();
    if (isPending) return;
    if (!isValidMobile(mobile)) {
      toast.error("لطفا شماره موبایل معتبر وارد کنید");
      setMobile("");
    } else {
      mutate(
        { mobile },
        {
          onSuccess: (response) => {
            toast.success(response.data.message);
            setCode(response.data.code);
            setStep(2);
          },
        },
      );
    }
  };

  return (
    <div className="w-[358px] h-[362px] flex flex-col justify-center items-start pr-[40px] relative">
      <button className="text-black !fw-350 absolute left-[25px] top-[17px] scale-x-[1.7] scale-y-[1.3]  ">
        x
      </button>
      <form onSubmit={submitHandler} className="flex flex-col">
        <h4 className="text-[22px] text-[#282828] fw-600 pb-[45px] text-center  mt-[19px]">
          ورود به تورینو
        </h4>
        <label
          htmlFor="phoneInput"
          className="text-[#000000] fw-300 text-[16px]"
        >
          شماره موبایل خود را وارد کنید
        </label>
        <input
          autoFocus
          type="text"
          placeholder="۰۹۱۲***۴۲۵۳"
          dir="ltr"
          id="phoneInput"
          value={mobile}
          className="focus:outline-none mt-[10px] border-[1px] border-black/25 w-[278px] h-[54px] text-right pr-[8px] rounded-[6px]"
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary w-[278px] h-[54px] rounded-[6px]  text-white !text-[18px] mt-[41px]"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOtpForm;
