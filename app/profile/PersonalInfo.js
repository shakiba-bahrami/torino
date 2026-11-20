"use client";

import { useGetUserData } from "@/core/services/queries";
import {
  dateFormatter,
  toPersianDate,
  toPersianDigits,
} from "@/core/utils/formatters";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "@/core/utils/profileSchema";
import { useEffect, useState } from "react";
import { DatePicker } from "zaman";
import { useAddUserData } from "@/core/services/mutations";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const { data, isPending } = useGetUserData();
  const userData = data?.data;

  const queryClient = useQueryClient();
  const { mutate } = useAddUserData();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: userData?.firstName || "",
      lastName: userData?.lastName || "",
      nationalCode: userData?.nationalCode || "",
      gender: userData?.gender || "",
      birthDate: userData?.birthDate || "",
    },
  });

  useEffect(() => {
    if (userData) {
      reset({
        firstName: userData.firstName || "",
        lastName: userData.lastName || "",
        nationalCode: userData.nationalCode || "",
        gender: userData.gender || "",
        birthDate: userData.birthDate || "",
      });
    }
  }, [userData, reset]);

  let fullName = "";
  if (userData?.firstName) fullName += userData.firstName;
  if (userData?.lastName) fullName += ` ${userData.lastName}`;

  const onSubmit = (formData) => {
    mutate(formData, {
      onSuccess: (res) => {
        toast.success(res.data.message);
        setIsEditing(false);
        queryClient.invalidateQueries({
          queryKey: ["user-data"],
        });
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || error.message);
      },
    });
  };

  return (
    <div className="mt-[20px]">
      {isEditing ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-x-8 gap-y-6 p-[20px] border border-black/20 rounded-[10px] lg:grid-cols-3"
        >
          <h4 className="text-[15px] fw-500 lg:col-span-3">
            ویرایش اطلاعات شخصی
          </h4>

          <div className="min-w-0">
            <input
              type="text"
              placeholder="نام"
              {...register("firstName")}
              className="w-full min-w-0 border border-black/20 rounded-[8px] p-3 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <input
              type="text"
              placeholder="نام خانوادگی"
              {...register("lastName")}
              className="w-full min-w-0 border border-black/20 rounded-[8px] p-3 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <input
              type="text"
              placeholder="کدملی"
              {...register("nationalCode")}
              className="w-full min-w-0 border border-black/20 rounded-[8px] p-3 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40"
            />
            {errors.nationalCode && (
              <p className="text-red-500 text-xs">
                {errors.nationalCode.message}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <select
              {...register("gender")}
              className="w-full min-w-0 border border-black/20 rounded-[8px] p-3 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40"
            >
              <option value="">جنسیت </option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={(date) =>
                    field.onChange(dateFormatter(date.value))
                  }
                  locale="fa"
                  inputClass="w-full rounded-[8px] !p-3 !border !border-black/20 !text-[15px] text-center !text-black/50 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40 placeholder:text-black h-full"
                  inputAttributes={{ placeholder: "تاریخ تولد" }}
                  accentColor="#28a745"
                  round="x2"
                  className="!h-[275px] !rounded-[12px] !bg-white !border !border-[#00000040] !text-center !text-[18px] "
                />
              )}
            />
            {errors.birthDate && (
              <p className="text-red-500 text-xs">
                {errors.birthDate.message}
              </p>
            )}
          </div>

          <div className="w-[300px] col-span-full flex  gap-3 mr-auto">
            <button
              type="submit"
              className="flex-1 h-[48px] rounded-[8px] bg-primary text-white"
            >
              تایید
            </button>

            <button
              type="button"
              onClick={() => {
                reset({
                  firstName: userData?.firstName || "",
                  lastName: userData?.lastName || "",
                  nationalCode: userData?.nationalCode || "",
                  gender: userData?.gender || "",
                  birthDate: userData?.birthDate || "",
                });
                setIsEditing(false);
              }}
              className="flex-1 h-[48px] rounded-[8px] border-2 border-primary text-primary text-[16px] fw-600"
            >
              انصراف
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-2 justify-between text-[14px] fw-300 gap-x-12 gap-y-7 p-[20px] border border-black/20 rounded-[10px] mt-[20px] pr-[25px] lg:grid-cols-4">
          <h4 className="text-[15px] fw-500 lg:col-span-2">
            اطلاعات شخصی
          </h4>

          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex gap-2 text-info mr-auto lg:col-span-2"
          >
            <BiEditAlt />
            <p className="text-[13px] fw-400">ویرایش اطلاعات</p>
          </button>

          <p>نام و نام خانوادگی</p>
          <p className="fw-600 text-[14px]">{fullName || "ــــــــ"}</p>

          <p>کد ملی</p>
          <p className="fw-600 text-[14px]">
            {userData?.nationalCode
              ? toPersianDigits(userData.nationalCode)
              : "ــــــــ"}
          </p>

          <p>جنسیت</p>
          <p className="fw-600 text-[14px]">
            {userData?.gender === "male"
              ? "مرد"
              : userData?.gender === "female"
                ? "زن"
                : "ــــــــ"}
          </p>

          <p>تاریخ تولد</p>
          <p className="fw-600 text-[14px]">
            {userData?.birthDate
              ? toPersianDate(userData.birthDate)
              : "ــــــــ"}
          </p>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;