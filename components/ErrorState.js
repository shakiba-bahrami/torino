"use client";
import Image from "next/image";
import Button from "./atoms/Button";
import { useRouter } from "next/navigation";

function ErrorState() {
  const router = useRouter();
  return (
    <div className="flex flex-col ">
      <div className="w-full  bg-[#28a745]/20 rounded-[12px] p-[20px] my-[20px]">
        <p className="text-center text-black/50">خطا در دریافت تورها</p>
        <Image
          src="/images/travel-not-found.svg"
          alt="توری پیدا نشد"
          width={200}
          height={200}
          className="m-auto"
        />
      </div>
      <Button onClick={() => router.refresh()}
        className="w-[220px] h-[40px] rounded-[8px] mb-[20px] mx-auto"
        >تلاش مجدد</Button>
    </div>
  );
}

export default ErrorState;
