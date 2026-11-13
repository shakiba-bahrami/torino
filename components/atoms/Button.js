"use client";
import { useRouter } from "next/navigation";

function Button({ children, href }) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => {
        router.push(href);
      }}
      className="w-full h-[47px] bg-primary rounded-[16px] p-[8px] !text-[20px] !fw-400 text-white text-center"
    >
      {children}
    </button>
  );
}

export default Button;
