"use client";
import { useRouter } from "next/navigation";

function Button({ children, href, onClick, className = "" }) {
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
      className={`bg-primary !fw-400 text-white text-center ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
