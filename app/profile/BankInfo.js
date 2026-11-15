"use client"
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddUserData } from "@/core/services/mutations";
import { useGetUserData } from "@/core/services/queries";
import { bankAccountSchema } from "@/core/utils/profileSchema";
import { toast } from "react-toastify";

function BankInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const { data } = useGetUserData();
  const userData = data?.data;

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

  const { mutate } = useAddUserData();
  const queryClient = useQueryClient();

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

  const submitHandler = (formData) => {
    mutate(
      { payment: formData.payment },
      {
        onSuccess: (res) => {
          console.log("Success:", res.data.userData);
          toast.success(res.data.message);
          setIsEditing(false);
          queryClient.invalidateQueries({ queryKey: ["user-data"] });
        },
        onError: (error) => {
          console.log("Error:", error.response?.data || error);
          toast.error(error.response?.data?.message || error.message);
        },
      },
    );
  };

  return (
    <div className="grid grid-cols-2 justify-between text-[14px] fw-300 gap-x-5 gap-y-7 p-[20px] fw-300 border border-black/20 rounded-[10px] mt-[20px] pr-[25px]">
      <h4 className="text-[15px] fw-500 ">اطلاعات حساب بانکی</h4>
      <button
        onClick={() => setIsEditing(true)}
        className="text-[13px] fw-400 text-info"
      >
        ویرایش اطلاعات
      </button>
      {isEditing ? (
        <>
          <form onSubmit={handleSubmit(submitHandler)}>
            <input type="text" {...register("payment.shaba_code")} />
            {errors.payment?.shaba_code && (
              <p>{errors.payment.shaba_code.message}</p>
            )}
            <input type="text" {...register("payment.debitCard_code")} />
            {errors.payment?.debitCard_code && (
              <p>{errors.payment.debitCard_code.message}</p>
            )}
            <input type="text" {...register("payment.accountIdentifier")} />
            {errors.payment?.accountIdentifier && (
              <p>{errors.payment.accountIdentifier.message}</p>
            )}
            <button type="submit">تایید</button>
          </form>
          <button
            type="button"
            onClick={() => {
              reset();
              setIsEditing(false);
            }}
          >
            انصراف
          </button>
        </>
      ) : (
        <>
          <p className="">شماره کارت</p>
          <p className="fw-600 text-[14px]">
            {userData?.payment?.debitCard_code || "ــــــــ"}
          </p>
          <p className="">شماره شبا</p>
          <p className="fw-600 text-[14px]">
            {userData?.payment?.shaba_code || "ــــــــ"}
          </p>
          <p className="">شماره حساب</p>
          <p className="fw-600 text-[14px]">
            {userData?.payment?.accountIdentifier || "ــــــــ"}
          </p>
        </>
      )}
    </div>
  );
}

export default BankInfo;
