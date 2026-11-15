"use client";

import { useGetUserData } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isPending && !data?.data) router.replace("/");
  }, [isPending, data, router]);

  if (!isMounted || isPending) return null;
  return children;
}

export default AuthProvider;
