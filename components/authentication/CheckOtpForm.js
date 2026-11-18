"use client";
import { useCheckOtp } from "@/core/services/mutations";
import { toPersianDigits } from "@/core/utils/formatters";
import { OTPInput } from "input-otp";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
const INITIAL_TIME = 60;

function CheckOtpForm({ setStep, mobile, setMobile, code, setIsLoginOpen }) {
  const [otp, setOtp] = useState("");
  const { mutate, isPending } = useCheckOtp();
  const [time, setTime] = useState(60);

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
  useEffect(() => {
    if (time === 0) {
      setTime(INITIAL_TIME);
      setStep(1);
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);
  return (
    <div className="relative flex h-[362px] w-[clamp(358px,49.21vw,561px)] flex-col items-center justify-center px-[40px] text-center">
      <button
        type="button"
        onClick={() => {
          setStep(1);
          setOtp("");
        }}
      >
        <IoIosArrowRoundBack className="absolute left-2 top-2 h-auto w-[40px] pl-[2px] pt-[2px]" />
      </button>

      <form onSubmit={submitHandler} className="flex w-full flex-col">
        <h4 className="text-[clamp(22px,1.94vw,28px)] fw-600">
          کد تایید را وارد کنید.
        </h4>

        <label className="mt-[17px] text-[clamp(14px,1.12vw,16px)] fw-400">
          کد تایید به شماره {toPersianDigits(mobile)} ارسال شد
        </label>

        <div dir="ltr" className="mt-[21px]">
          <OTPInput
            autoFocus
            maxLength={6}
            render={({ slots }) => (
              <div className="flex justify-center gap-[clamp(4px,0.56vw,8px)]">
                {slots.map((slot, idx) => (
                  <div
                    key={idx}
                    className="flex h-[clamp(40px,3.13vw,45px)] w-[clamp(40px,3.48vw,50px)] items-center justify-center rounded-[6px] border border-[#00000040]"
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

        <p className="mt-[24px] text-[12px] text-muted fw-300">
          {toPersianDigits(time)} ثانیه تا ارسال مجدد کد
        </p>

        <button
          type="submit"
          className="mx-auto mt-[27px] h-[54px] w-full rounded-[6px] bg-primary text-white !text-[clamp(16px,1.25vw,18px)] disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isPending}
        >
          {isPending ? "در حال بررسی..." : "ورود به تورینو"}
        </button>
      </form>
    </div>
  );
}

export default CheckOtpForm;
