import { useMutation } from "@tanstack/react-query";
import { api } from "@/core/config/api";
import { setCookie } from "../utils/cookies";
import { useQueryClient } from "@tanstack/react-query";

export const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);

  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("/auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 360);
    queryClient.invalidateQueries({
      queryKey: ["user-data"],
    });
  };

  return useMutation({ mutationFn, onSuccess });
};

export const useAddToBasket = () => {
  const mutationFn = (id) => api.put(`basket/${id}`);
  return useMutation({ mutationFn });
};

export const useAddUserData = () => {
  const mutationFn = (data) => api.put("/user/profile", data);
  return useMutation({ mutationFn });
};

import { toast } from "react-toastify";

export const useAddOrder = () => {
  const queryClient = useQueryClient();

  const mutationFn = (data) => api.post("/order", data);

  const onSuccess = (response) => {
    toast.success(response?.data?.message || "خرید تور با موفقیت انجام شد.");

    queryClient.setQueryData(["basket"], {
      data: null,
    });

    queryClient.invalidateQueries({
      queryKey: ["user-data"],
    });
  };

  const onError = (error) => {
    toast.error(error?.response?.data?.message || "خطا در ثبت سفارش");
  };

  return useMutation({ mutationFn, onSuccess, onError });
};
