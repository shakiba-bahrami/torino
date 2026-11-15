"use client";
import AuthProvider from "@/provider/AuthProvider";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { PiSunHorizonFill } from "react-icons/pi";
import { TbReplaceFilled } from "react-icons/tb";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function ProfileLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (pathname) {
        case "/profile":
          if (e.key === "ArrowLeft") router.push("/profile/mytours");
          break;

        case "/profile/mytours":
          if (e.key === "ArrowLeft") router.push("/profile/transactions");
          if (e.key === "ArrowRight") router.push("/profile");
          break;

        case "/profile/transactions":
          if (e.key === "ArrowRight") router.push("/profile/mytours");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pathname, router]);

  return (
    <AuthProvider>
      <div className="mt-[10px]">
        <nav className="w-full h-[38px] flex gap-2 justify-between text-center border-b-1 border-black/15 text-[12px]">
          <Link
            href="/profile"
            className={`flex-1 flex justify-center gap-2 items-center -mb-[2px] pl-[5px] ${pathname === "/profile" && "border-b-2 border-primary text-primary"}`}
          >
            <IoPerson className="rounded-[50%] w-[16px] h-auto" />
            <p className="">پروفایل</p>
          </Link>

          <Link
            href="/profile/mytours"
            className={`flex-1 flex justify-center gap-2 items-center -mb-[2px] pl-[5px] ${pathname === "/profile/mytours" && "border-b-2 border-primary text-primary"}`}
          >
            <PiSunHorizonFill className="w-[16px] h-auto" />
            <p>تورهای من</p>
          </Link>
          <Link
            href="/profile/transactions"
            className={`flex-1 flex justify-center gap-2 items-center -mb-[2px] pl-[5px] ${pathname === "/profile/transactions" && "border-b-2 border-primary text-primary"}`}
          >
            <TbReplaceFilled className="w-[16px] h-auto" />
            <p>تراکنش ها</p>
          </Link>
        </nav>
      </div>
      {children}
    </AuthProvider>
  );
}

export default ProfileLayout;
