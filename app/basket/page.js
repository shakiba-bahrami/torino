"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker } from "zaman";

import EmptyBasket from "./EmptyBasket";

import { useGetBasket, useGetUserData } from "@/core/services/queries";
import { personalInfoSchema } from "@/core/utils/profileSchema";
import {
  dateFormatter,
  toPersianDigits,
  toPersianPrice,
} from "@/core/utils/formatters";
import { useAddOrder } from "@/core/services/mutations";

function BasketPage() {
  const userData = useGetUserData();
  const tourData = useGetBasket();

  const user = userData.data?.data;

  const { mutate, isPending } = useAddOrder();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      nationalCode: "",
      birthDate: "",
    },
  });

  useEffect(() => {
    if (user) {
      console.log("birthDate:", user.birthDate);
      reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        gender: user.gender || "",
        nationalCode: user.nationalCode || "",
        birthDate: user.birthDate || "",
      });
    }
  }, [user, reset]);

  const onSubmit = (formData) => {
    mutate({
      nationalCode: formData.nationalCode,
      fullName: `${formData.firstName} ${formData.lastName}`,
      gender: formData.gender,
      birthDate: formData.birthDate,
    });
  };

  console.log("User error:", userData.error);
  console.log("Basket error:", tourData.error);

  if (userData.isPending || tourData.isPending) {
    return <p>در حال دریافت اطلاعات...</p>;
  }

  if (userData.isError || tourData.isError) {
    return <p>خطا در دریافت اطلاعات</p>;
  }

  const basket = tourData.data?.data;

  if (!basket) return <EmptyBasket />;

  const durationDays =
    (new Date(basket.endDate) - new Date(basket.startDate)) /
    (1000 * 60 * 60 * 24);

  return (
    <>
      <div className="bg-[#F3F3F3] lg:px-[clamp(40px,calc(10.75vw_-_28.8px),126px)] lg:relative lg:right-1/2 lg:w-screen lg:translate-x-1/2 lg:pt-[30px] max-w-[1440px] flex-1 mb-[30px] lg:mb-0 lg:pb-[30px] flex-1">
        <div className="w-full bg-white flex flex-col justify-center items-center lg:border lg:border-black/20 lg:rounded-[10px] lg:grid lg:grid-cols-[3fr_1fr] lg:gap-4 lg:items-stretch lg:bg-[#F3F3F3] lg:border-none">
          <div className="border border-black/20 rounded-[10px] p-[20px] mt-[20px] md:mt-[35px] w-full md:w-[640px] lg:mt-0 lg:m-0 lg:w-auto lg:bg-white lg:p-[20px]">
            <h4 className="text-[24px] fw-400">مشخصات مسافر</h4>

            <form id="basket-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:grid lg:grid-cols-3 lg:gap-x-3">
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="نام"
                  className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">
                    {errors.firstName.message}
                  </p>
                )}

                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="نام خانوادگی"
                  className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">
                    {errors.lastName.message}
                  </p>
                )}

                <select
                  {...register("gender")}
                  className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
                >
                  <option value="">جنسیت</option>
                  <option value="male">مرد</option>
                  <option value="female">زن</option>
                </select>
                {errors.gender && (
                  <p className="text-red-500 text-xs">
                    {errors.gender.message}
                  </p>
                )}

                <div>
                  <input
                    type="text"
                    {...register("nationalCode")}
                    placeholder="کد ملی را وارد کنید"
                    className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
                  />
                  {errors.nationalCode && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.nationalCode.message}
                    </p>
                  )}
                </div>

                <div className="mt-[20px]">
                  <Controller
                    name="birthDate"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        key={field.value}
                        defaultValue={
                          field.value
                            ? new Date(`${field.value}T12:00:00`)
                            : undefined
                        }
                        onChange={(date) => {
                          field.onChange(dateFormatter(date.value));
                        }}
                        locale="fa"
                        inputClass="w-full border border-black/50 h-[50px] rounded-[5px] p-[10px]"
                        inputAttributes={{ placeholder: "تاریخ تولد" }}
                        accentColor="#28a745"
                        round="x2"
                      />
                    )}
                  />
                  {errors.birthDate && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.birthDate.message}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          <div className="border border-black/10 rounded-[10px] p-[20px] mt-[30px] text-center w-full md:w-[640px] lg:mt-0 lg:w-auto lg:bg-white">
            <div className="flex justify-between">
              <h4 className="text-[24px] fw-600">تور {basket.title}</h4>
              <p>
                {`${toPersianDigits(durationDays)} روز و ${toPersianDigits(durationDays - 1)} شب`}
              </p>
            </div>

            <div className="h-[1.5px] w-full bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_8px,transparent_15px)] my-[20px]" />

            <div className="flex justify-between px-[15px] items-center mb-[20px]">
              <p>قیمت نهایی</p>
              <div className="flex justify-between items-center gap-2">
                <p className="text-[28px] text-info">
                  {toPersianPrice(basket.price)}
                </p>
                <p className="text-[12px] text-text-primary/50">تومان</p>
              </div>
            </div>

            <button
              type="submit"
              form="basket-form"
              disabled={isPending}
              className="w-full h-[56px] rounded-[10px] !text-[24px] !fw-400 bg-primary text-white"
            >
              ثبت و خرید نهایی
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasketPage;
