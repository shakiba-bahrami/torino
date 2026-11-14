import { useGetUserData } from "../services/queries";

export function useAuth() {
  const { data, isPending } = useGetUserData();

  const user = data?.data;
  const isAuthenticated = !!user;

  return { user, isPending, isAuthenticated };
}