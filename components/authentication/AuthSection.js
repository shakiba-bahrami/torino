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
      {isPending || !isAuthenticated ? (
        <>
          <div className="md:hidden mt-[10px]">
            <button type="button" onClick={() => setIsLoginOpen(true)}>
              <img
                src="/icons/login.svg"
                alt="ورود یا ثبت نام"
                className="w-[40px] h-auto"
              />
            </button>
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => setIsLoginOpen(true)}
              className="flex items-center gap-2 w-[150px] h-[45px] text-primary text-[14px] !fw-600 p-[clamp(6px,0.7vw,10px)] border-2 border-primary rounded-[8px]"
            >
              <IoPerson className="text-[22px] my-auto rounded-[50%]" />
              <p>
              ورود  |  ثبت نام

              </p>

            </button>
          </div>
        </>
      ) : (
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsAccountOpen((prev) => !prev)}
            className="flex items-center gap-[clamp(4px,0.42vw,6px)] text-primary text-[clamp(12px,0.97vw,14px)] -ml-[5px] cursor-pointer md:text-[14px]"
          >
            <IoPerson className="rounded-[50%] md:text-[22px]" />
            <p className="text-[14px] lg:text-[20px]">{toPersianDigits(mobile)}</p>
            <GoChevronDown className="text-[clamp(16px,1.25vw,18px)]" />
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
  );
}

export default AuthSection;
