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
