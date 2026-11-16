"use client";
import { GoChevronDown } from "react-icons/go";
import { toPersianDigits } from "@/core/utils/formatters";
import { IoPerson } from "react-icons/io5";
import { useAuth } from "@/core/hooks/useAuth";
import { useState } from "react";
import AccountDropdown from "../AccountDropdown";

function AuthSection({ setIsLoginOpen }) {
  const { user, isPending, isAuthenticated } = useAuth();
  const mobile = user?.mobile;
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden">
        {isPending || !isAuthenticated ? (
          <button type="button" onClick={() => setIsLoginOpen(true)}>
            <img
              src="/icons/login.svg"
              alt="ورود یا ثبت نام"
              className="w-[40px] h-auto ml-[5px]"
            />
          </button>
        ) : (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsAccountOpen((prev) => !prev)}
              className="flex items-center gap-1 text-primary text-[14px] -ml-[5px] cursor-pointer "
            >
              <IoPerson className="text-[12px] rounded-[50%]" />
              <p>{toPersianDigits(mobile)}</p>
              <GoChevronDown className="text-[18px]" />
            </button>

            {isAccountOpen && (
              <AccountDropdown
                onClose={() => setIsAccountOpen(false)}
                mobile={mobile}
              />
            )}
          </div>
        )}
      </div>
      <div className="hidden md:block">
        {isPending || !isAuthenticated ? (
          <button
            type="button"
            onClick={() => setIsLoginOpen(true)}
            className="w-[166px] h-auto ml-[5px] text-primary text-[18px] !fw-600 p-[10px] border-2 border-primary rounded-[8px]"
          >
            ورود | ثبت نام
          </button>
        ) : (
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsAccountOpen((prev) => !prev)}
              className="flex items-center gap-1 text-primary text-[14px] -ml-[5px] cursor-pointer "
            >
              <IoPerson className="text-[12px] rounded-[50%]" />
              <p>{toPersianDigits(mobile)}</p>
              <GoChevronDown className="text-[18px]" />
            </button>

            {isAccountOpen && (
              <AccountDropdown
                onClose={() => setIsAccountOpen(false)}
                mobile={mobile}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthSection;
