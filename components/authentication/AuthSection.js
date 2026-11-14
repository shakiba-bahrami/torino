"use client";
import { GoChevronDown } from "react-icons/go";
import { useRouter } from "next/navigation";

import { toPersianDigits } from "@/core/utils/formatters";
import { IoPerson } from "react-icons/io5";
import { useAuth } from "@/core/hooks/useAuth";

function AuthSection({ setIsLoginOpen }) {
  const { user, isPending, isAuthenticated } = useAuth();
  const mobile = user?.mobile;
  const router = useRouter();

  return (
    <div>
      <div>
        {isPending || !isAuthenticated ? (
          <button onClick={() => setIsLoginOpen(true)}>
            <img
              src="/icons/login.svg"
              alt="ورود یا ثبت نام"
              className="w-[40px] h-auto ml-[5px]"
            />
          </button>
        ) : (
          <div
            onClick={() => router.push("/profile")}
            className="flex items-center gap-1 text-primary text-[14px] -ml-[5px]"
          >
            <IoPerson className="text-[12px] rounded-[50%]" />
            <p>{toPersianDigits(mobile)}</p>
            <GoChevronDown className="text-[18px]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthSection;
