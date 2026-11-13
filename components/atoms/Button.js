"use client";
import { useRouter } from "next/navigation";

function Button({ children, href, onClick }) {
  
  const router = useRouter();
  
  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };
  
  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full h-[47px] bg-primary rounded-[16px] p-[8px] !text-[20px] !fw-400 text-white text-center"
    >
      {children}
    </button>
  );
}

export default Button;
