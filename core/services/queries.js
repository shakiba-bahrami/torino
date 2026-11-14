import { getUserData } from "@/core/services/authService";
import { useQuery } from "@tanstack/react-query";
import { api } from "../config/api";

export const useGetUserData = () => {
  const queryFn = getUserData;
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey, retry: false });
};

export const useGetBasket = () => {
  const queryFn = () => api.get("/basket");
  const queryKey = ["basket"];
  return useQuery({ queryFn, queryKey, retry: false });
};
