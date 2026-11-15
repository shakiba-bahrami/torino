import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { setCookie } from "@/core/utils/cookies";
import { toPersianDigits } from "@/core/utils/formatters";

function AccountDropdown({ onClose, mobile }) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);

    queryClient.removeQueries({ queryKey: ["user-data"] });

    onClose();
    router.replace("/");
  };
  return (
    <div className="w-[157px] h-[114px] absolute left-0 top-full mt-2 bg-white z-10 rounded-[11px] text-[12px] text-center shadow-md">
      <ul className="p-[10px]">
        <li className="h-[35px]">{toPersianDigits(mobile)}</li>
        <li className="h-[35px]">
          <Link href="/profile" onClick={onClose}>
            اطلاعات حساب کاربری
          </Link>
        </li>
        <li className="h-[35px]">
          <button
            type="button"
            onClick={handleLogout}
            className="text-[#D40000]"
          >
            خروج از حساب کاربری
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AccountDropdown;
