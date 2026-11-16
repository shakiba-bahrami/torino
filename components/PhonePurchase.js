import { toPersianDigits } from "@/core/utils/formatters";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

function PhonePurchase() {
  return (
    <div className="w-[327px] h-[230px] relative py-[10px] overflow-hidden">
      <div className="overflow-hidden rounded-[10px] mt-[20px] border border-black/25 h-[190px]">
        <Image
          src="/images/phone-operator.svg"
          alt="خرید تلفنی"
          width={390}
          height={316}
          className="m-auto mt-[10px] w-[195px] h-[159px] absolute top-[-11px] left-0"
          loading="eager"
        />
        <div className="bg-primary h-[126px]">
          <h3 className="text-[22px] text-white fw-800  p-[8px]">
            خرید تلفنی از <span className="text-secondary">تورینو</span>
          </h3>
          <p className="text-[14px] fw-400 text-white pr-[10px]">
            به هرکجا که میخواهید!
          </p>
        </div>

        <div className="bg-white flex justify-between py-[15px] px-[30px]">
          <div className="flex gap-3 justify-center items-center">
            <a href="tel:0211840" className="fw-700 text-[20px]">
              {toPersianDigits("021-1840")}
            </a>
            <FaPhone />
          </div>

          <Link
            href="/contact-us"
            className="w-[136px] h-[38px] bg-secondary rounded-[9px] text-white !text-[14px] fw-500 flex items-center justify-center"
          >
            اطلاعات بیشتر
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhonePurchase;
