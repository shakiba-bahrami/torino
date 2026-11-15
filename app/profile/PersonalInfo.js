"use client";

import { useGetUserData } from "@/core/services/queries";
import { dateFormatter, toPersianDigits } from "@/core/utils/formatters";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "@/core/utils/profileSchema";
import { useEffect, useState } from "react";
import { DatePicker } from "zaman";
import { useAddUserData } from "@/core/services/mutations";

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
    console.log(formData);
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
          onSubmit={handleSubmit(onSubmit, (errors) =>
            console.log("Validation errors:", errors),
          )}
          className="flex flex-col gap-5 p-[20px] border border-black/20 rounded-[10px]"
        >
          <h4 className="text-[15px] fw-500">ویرایش اطلاعات شخصی</h4>

          <div className="flex flex-col gap-2">
            <label>نام</label>
            <input
              type="text"
              {...register("firstName")}
              className="border rounded-[8px] p-3"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label>نام خانوادگی</label>
            <input
              type="text"
              {...register("lastName")}
              className="border rounded-[8px] p-3"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label>کدملی</label>
            <input
              type="text"
              {...register("nationalCode")}
              className="border rounded-[8px] p-3"
            />
            {errors.nationalCode && (
              <p className="text-red-500 text-xs">
                {errors.nationalCode.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <select
              {...register("gender")}
              className="border rounded-[8px] p-3"
            >
              <option value="">جنسیت را انتخاب کنید</option>
              <option value="male">مرد</option>
              <option value="female">زن</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-xs">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value}
                  onChange={(date) => {
                    field.onChange(dateFormatter(date.value));
                  }}
                  locale="fa"
                  inputClass="w-full h-[47px] rounded-[12px] border border-black/15 !text-[14px] text-center  text-black/50 placeholder:pr-[35px] placeholder:text-black/50"
                  inputAttributes={{ placeholder: "تولد" }}
                  accentColor="#28a745"
                  round="x2"
                  className="!w-[331px] !h-[269px] !rounded-[12px] !bg-white !border !border-[#00000040] "
                />
              )}
            />
            {errors.birthDate && (
              <p className="text-red-500 text-xs">{errors.birthDate.message}</p>
            )}
          </div>
          <button type="submit">ذخیره تغییرات</button>
        </form>
      ) : (
        <div className="grid grid-cols-2 justify-between text-[14px] fw-300 gap-x-5 gap-y-7 p-[20px] fw-300 border border-black/20 rounded-[10px] mt-[20px] pr-[25px]">
          <h4 className="text-[15px] fw-500">اطلاعات شخصی</h4>
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="text-[13px] fw-400 text-info"
          >
            ویرایش اطلاعات
          </button>
          <p className="">نام و نام خانوادگی</p>
          <p className="fw-600 text-[14px]">{fullName || "ــــــــ"}</p>
          <p className="">کدملی</p>
          <p className="fw-600 text-[14px]">
            {userData?.nationalCode
              ? toPersianDigits(userData.nationalCode)
              : "ــــــــ"}
          </p>
          <p className="">جنسیت</p>
          <p className="fw-600 text-[14px]">{userData?.gender || "ــــــــ"}</p>
          <p className="">تاریخ تولد</p>
          <p className="fw-600 text-[14px]">
            {userData?.birthDate ? userData.birthDate : "ــــــــ"}
          </p>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
