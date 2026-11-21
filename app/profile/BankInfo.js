
"use client";

import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddUserData } from "@/core/services/mutations";
import { useGetUserData } from "@/core/services/queries";
import { bankAccountSchema } from "@/core/utils/profileSchema";
import { toast } from "react-toastify";
import { BiEditAlt } from "react-icons/bi";
import { toPersianDigits } from "@/core/utils/formatters";

function BankInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const { data } = useGetUserData();
  const userData = data?.data;

  const queryClient = useQueryClient();
  const { mutate } = useAddUserData();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bankAccountSchema),
    defaultValues: {
      payment: {
        shaba_code: userData?.payment?.shaba_code || "",
        debitCard_code: userData?.payment?.debitCard_code || "",
        accountIdentifier: userData?.payment?.accountIdentifier || "",
      },
    },
  });

  useEffect(() => {
    if (userData) {
      reset({
        payment: {
          shaba_code: userData?.payment?.shaba_code || "",
          debitCard_code: userData?.payment?.debitCard_code || "",
          accountIdentifier: userData?.payment?.accountIdentifier || "",
        },
      });
    }
  }, [userData, reset]);

  const onSubmit = (formData) => {
    mutate(
      { payment: formData.payment },
      {
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
      },
    );
  };

  const cancelEditing = () => {
    reset({
      payment: {
        shaba_code: userData?.payment?.shaba_code || "",
        debitCard_code: userData?.payment?.debitCard_code || "",
        accountIdentifier: userData?.payment?.accountIdentifier || "",
      },
    });
    setIsEditing(false);
  };

  return (
    <div className="mt-[20px]">
      {isEditing ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 p-[20px] border border-black/20 rounded-[10px] lg:grid-cols-3"
        >
          <h4 className="text-[15px] fw-500 lg:col-span-3">
            ویرایش اطلاعات حساب بانکی
          </h4>

          <div className="min-w-0">
            <input
              placeholder="شماره شبا"
              type="text"
              {...register("payment.shaba_code")}
              className="w-full min-w-0 h-[40px] border border-black/20 rounded-[8px] p-3 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40"
            />
            {errors.payment?.shaba_code && (
              <p className="text-red-500 text-xs">
                {errors.payment.shaba_code.message}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <input
              placeholder="شماره کارت"
              type="text"
              {...register("payment.debitCard_code")}
              className="w-full min-w-0 h-[40px] border border-black/20 rounded-[8px] p-3 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40"
            />
            {errors.payment?.debitCard_code && (
              <p className="text-red-500 text-xs">
                {errors.payment.debitCard_code.message}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <input
              placeholder="شماره حساب"
              type="text"
              {...register("payment.accountIdentifier")}
              className="w-full min-w-0 h-[40px] border border-black/20 rounded-[8px] p-3 focus:!outline-none focus:!ring-0 focus:!shadow-none focus:!border-black/40"
            />
            {errors.payment?.accountIdentifier && (
              <p className="text-red-500 text-xs">
                {errors.payment.accountIdentifier.message}
              </p>
            )}
          </div>

          <div className="w-[300px] col-span-full flex gap-3 mr-auto">
            <button
              type="submit"
              className="flex-1 h-[48px] rounded-[8px] bg-primary text-white"
            >
              تایید
            </button>

            <button
              type="button"
              onClick={cancelEditing}
              className="flex-1 h-[48px] rounded-[8px] border-2 border-primary text-primary text-[16px] fw-600"
            >
              انصراف
            </button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-2 justify-between text-[14px] fw-300 gap-x-12 gap-y-7 p-[20px] border border-black/20 rounded-[10px] pr-[25px] lg:grid-cols-4">
          <h4 className="text-[15px] fw-500 lg:col-span-2">
            اطلاعات حساب بانکی
          </h4>

          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="flex fw-400 gap-2 text-info mr-auto lg:col-span-2"
          >
            <BiEditAlt />
            <p className="text-[13px] fw-400">ویرایش اطلاعات</p>
          </button>

          <p>شماره کارت</p>
          <p className="fw-600 text-[14px] text-left">
            {toPersianDigits(userData?.payment?.debitCard_code) || "ــــــــ"}
          </p>

          <p>شماره شبا</p>
          <p className="fw-600 text-[14px] break-all min-w-0 text-left">
            {toPersianDigits(userData?.payment?.shaba_code) || "ــــــــ"}
          </p>

          <p>شماره حساب</p>
          <p className="fw-600 text-[14px] text-left">
            {toPersianDigits(userData?.payment?.accountIdentifier) || "ــــــــ"}
          </p>
        </div>
      )}
    </div>
  );
}

export default BankInfo;
