"use client";
import { useGetUserData } from "@/core/services/queries";

function Profile() {
  const { data, isPending } = useGetUserData();
  const userData = data?.data;
  console.log(userData);
  
}

export default Profile;
