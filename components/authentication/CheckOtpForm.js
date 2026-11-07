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
  }, [code]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (isPending) return;
    if (otp.length !== 6) {
      toast.warning("لطفا کد ۶ رقمی را وارد کنید.");
      return;
    }
    mutate(
      { mobile, code: otp },
      {
        onSuccess: () => {
          toast.success("شما با موفقیت به حساب کاربری خود وارد شدید.");
          setOtp("");
          setStep(1);
          setMobile("");
          setIsLoginOpen(false);
        },
        onError: (error) => {
          toast.error(
            error.response?.data?.message || "کد وارد شده اشتباه است!",
          );
        },
      },
    );
  };

  return (
    <div className="w-[358px] h-[362px] flex flex-col justify-center items-center text-center relative">
      <button
        type="button"
        onClick={() => {
          setStep(1);
          setOtp("");
        }}
      >
        <IoIosArrowRoundBack className="w-[40px] h-auto absolute top-2 left-2 pl-[2px]  pt-[2px]" />
      </button>
      <form onSubmit={submitHandler} className="flex flex-col">
        <h4 className="text-[22px] fw-600 ">کد تایید را وارد کنید.</h4>
        <label className="text-[14px] mt-[17px] fw-400">
          کد تایید به شماره {mobile} ارسال شد
        </label>
        <div dir="ltr" className="mt-[21px]">
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
        <p className="text-[12px] text-muted fw-300 mt-[24px]">
          تا ارسال مجدد کد
        </p>
        <button
          type="submit"
          className="bg-primary w-[278px] h-[54px] rounded-[6px]  text-white mx-auto mt-[27px] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        >
          {isPending ? "در حال بررسی..." : " ورود به تورینو"}
        </button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
