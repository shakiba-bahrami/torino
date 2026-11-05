"use client";
import { useCheckOtp } from "@/core/services/mutations";
import { OTPInput } from "input-otp";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";

function CheckOtpForm({ setStep, mobile, setMobile, code, setIsLoginOpen }) {
  const [otp, setOtp] = useState("");

  const { mutate, isPending } = useCheckOtp();

  useEffect(() => {
    toast.info(code);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isPending) return;
    if (!otp) toast.warning("لطفا کد را وارد کنید.");
    if (otp !== code) {
      toast.error("کد وارد شده اشتباه است!");
      setOtp("");
    } else {
      mutate(
        { mobile, code },
        {
          onSuccess: (response) => {
            toast.success("شما با موفقیت به حساب کاربری خود وارد شدید.");
            setStep(1);
            setIsLoginOpen(false);
            setMobile("");
          },
        },
      );
    }
  };

  return (
    <div className="w-[358px] h-[362px] flex flex-col justify-center items-center text-center relative">
      <button>
        <IoIosArrowRoundBack className="w-[40px] h-auto absolute top-2 left-2 pl-[2]  pt-[2]" />
      </button>
      <form onSubmit={submitHandler} className="flex flex-col">
        <h4 className="text-[22px] text fw-600 ">کد تایید را وارد کنید.</h4>
        <label htmlFor="" className="text-[14px] mt-[17px] fw-400">
          کد تایید به شماره {mobile} ارسال شد
        </label>
        <div dir="ltr" className="mt-[21]">
          <OTPInput
            autoFocus
            maxLength={6}
            render={({ slots }) => (
              <div style={{ display: "flex", gap: 4 }}>
                {slots.map((slot, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: 50,
                      height: 45,
                      border: "1px solid #00000040",
                      borderRadius: 6,
                      outline: null,
                    }}
                  >
                    {slot.char}
                  </div>
                ))}
              </div>
            )}
            value={otp}
            onChange={setOtp}
          />
        </div>
        <p className="text-[12px] text-muted fw-300 mt-[24]">
          تا ارسال مجدد کد
        </p>
        <button
          type="submit"
          className="bg-primary w-[278px] h-[54px] rounded-[6px]  text-white mx-auto mt-[27]"
        >
          ورود به تورینو
        </button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
