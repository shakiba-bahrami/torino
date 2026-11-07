import { useMutation } from "@tanstack/react-query";
import { api } from "@/core/config/api";
import { setCookie } from "../utils/cookies";

export const useSendOtp = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);

  return useMutation({ mutationFn });
};

export const useCheckOtp = () => {
  const mutationFn = (data) => api.post("/auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 360);
  };

  return useMutation({ mutationFn, onSuccess });
};
