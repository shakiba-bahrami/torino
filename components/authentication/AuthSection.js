"use client";
import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

import { useGetUserData } from "@/core/services/queries";
import AuthModalManager from "./AuthModalManager";
import { toPersianDigits } from "@/core/utils/formatters";
import { IoPerson } from "react-icons/io5";
function AuthSection() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { data, isPending } = useGetUserData();

  const mobile = data?.data?.mobile;

  return (
    <div>
      {mobile ? (
        <div className="flex items-center gap-1 text-primary text-[14px] -ml-[5px]">
          <IoPerson className="text-[12px] rounded-[50%] " />
          <p className="">{toPersianDigits(mobile)}</p>
          <GoChevronDown className="text-[18px]" />
        </div>
      ) : (
        <button onClick={() => setIsLoginOpen(true)}>
          <img
            src="/icons/login.svg"
            alt="ورود یا ثبت نام"
            className="w-[40px] h-auto ml-[5px]"
          />
        </button>
      )}

      <AuthModalManager
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
      />
    </div>
  );
}

export default AuthSection;
