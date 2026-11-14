"use client";
import Button from "@/components/atoms/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/core/hooks/useAuth";
import AuthModalManager from "@/components/authentication/AuthModalManager";
import { useAddToBasket } from "@/core/services/mutations";
import { toast } from "react-toastify";

function ReserveButton({ className, id }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { isPending, isAuthenticated } = useAuth();
  const { mutate } = useAddToBasket();
  const router = useRouter();

  const handleReserve = () => {
    if (isPending) return;

    if (isAuthenticated) {
      mutate(id, {
        onSuccess: (res) => {
          toast.success(res.message);
          router.push("/basket");
        },
        onError: (error) => {
          toast.error(
            error.response?.data?.message ||
              "افزودن تور به سبد خرید ناموفق بود.",
          );
        },
      });
    } else {
      setIsLoginOpen(true);
    }
  };

  return (
    <>
      <Button onClick={handleReserve} className={className}>
        رزرو و خرید
      </Button>
      <AuthModalManager
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
      />
    </>
  );
}

export default ReserveButton;
