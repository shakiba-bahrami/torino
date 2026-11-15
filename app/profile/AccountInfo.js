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
    <div className="border border-black/20 rounded-[10px] p-[20px] flex flex-col gap-8">
      <h4 className="text-[15px] fw-500">اطلاعات حساب کاربری</h4>
      <div className="flex justify-between text-[14px] fw-300">
        <p>شماره موبایل</p>
        <p className="fw-400">
          {userData?.mobile ? toPersianDigits(userData.mobile) : "ــــــــ"}
        </p>
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="ادرس ایمیل" {...register("email")} />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
          <button type="submit">تایید</button>
        </form>
      ) : (
        <div className="flex justify-between text-[14px] fw-300">
          <p>ایمیل</p>
          <p className="fw-400">{userData?.email || "ــــــــ"}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="text-info fw-400"
          >
            افزودن
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountInfo;
