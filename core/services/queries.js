import { getUserData } from "@/core/services/authService";
import { useQuery } from "@tanstack/react-query";

export const useGetUserData = () => {
  const queryFn = getUserData;
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey });
};
