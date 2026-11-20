"use client";
import { toPersianDigits } from "@/core/utils/formatters";
import React, { useEffect, useState } from "react";
import { useGetUserData } from "@/core/services/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { emailSchema } from "@/core/utils/profileSchema";
import { useAddUserData } from "@/core/services/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { BiEditAlt } from "react-icons/bi";

function AccountInfo() {
  const { data, isPending } = useGetUserData();
  const userData = data?.data;
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: userData?.email || "",
    },
  });
  const { mutate } = useAddUserData();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (userData) {
      reset({
        email: userData?.email || "",
      });
    }
  }, [userData, reset]);

  const onSubmit = (formData) => {
    mutate(
      { email: formData.email },
      {
        onSuccess: (res) => {
          toast.success(res.data.message);
          setIsEditing(false);
          queryClient.invalidateQueries({ queryKey: ["user-data"] });
        },
        onError: (error) => {
          toast.error(error.response?.data?.message || error.message);
        },
      },
    );
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-6 border border-black/20 rounded-[10px] p-[20px]">
      <div className="flex flex-col gap-6">
        <h4 className="text-[15px] lg:text-[16px] fw-500">
          اطلاعات حساب کاربری
        </h4>
        <div className="flex justify-between lg:gap-13  text-[14px] fw-300">
          <p>شماره موبایل</p>
          <p className="fw-600">
            {userData?.mobile ? toPersianDigits(userData.mobile) : "ــــــــ"}
          </p>
        </div>
      </div>
      {isEditing ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:flex lg:items-end"
        >
          <div className="w-full flex gap-3 lg:items-end justify-between lg:justify-around">
            <input
              type="email"
              placeholder="ادرس ایمیل"
              {...register("email")}
              className="w-[255px] h-[45px] flex-4 border border-black/50 rounded-[5px] !text-[14px] p-[5px]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
            <button
              type="submit"
              className="w-[122px] h-[45px] bg-primary text-white flex-1 rounded-[5px]"
            >
              تایید
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="lg:flex-2 flex justify-between lg:justify-around text-[14px] fw-300 lg:items-end">
            <p className="text-[14px]">ایمیل</p>
            <p className="fw-600 text-[14px]">
              {userData?.email || "ــــــــ"}
            </p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="text-info fw-400 flex gap-2 mr-auto lg:mt-auto"
          >
            <BiEditAlt />
            <p className="text-[13px]"> افزودن</p>
          </button>
        </>
      )}
    </div>
  );
}

export default AccountInfo;
