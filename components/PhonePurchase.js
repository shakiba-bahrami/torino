import { toPersianDigits } from "@/core/utils/formatters";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

function PhonePurchase() {
  return (
      <div className="overflow-visible relative md:mt-[80px] lg:flex lg:border lg:border-black/25 lg:rounded-xl ">
        <div className="bg-primary w-full h-[128px] lg:h-[250px] rounded-t-lg border border-black/25 border-b-0 overflow-visible lg:flex-3 lg:border-0 lg:rounded-tl-none lg:rounded-br-xl lg:pr-[40px]">
          <Image
            src="/images/phone-operator.svg"
            alt="خرید تلفنی"
            width={390}
            height={316}
            className="m-auto w-[195px] absolute left-0 top-[-30px] md:w-[250px] md:top-[-75px] lg:w-[308px] lg:h-[225px] lg:top-[25px] lg:left-[clamp(100px,22.22vw,320px)]"
            loading="eager"
          />
          <div className="md:p-[20px]">
              <h3 className="text-[22px] md:text-[30px] lg:text-[48px] text-white fw-800  p-[8px]">
                خرید تلفنی از <span className="text-secondary">تورینو</span>
              </h3>
              <p className="text-[14px] lg:text-[32px]  fw-400 text-white pr-[10px]">
                به هرکجا که میخواهید!
              </p>
            </div>
        </div>
        <div className="w-full h-[70px] lg:h-[250px] rounded-b-lg border border-black/25 border-t-0 lg:flex-1 lg:border-0 ">
        <div className="flex justify-between items-center py-[15px] px-[30px] lg:flex-col lg:h-full lg:py-[60px]">
            <div className="flex gap-3 justify-center items-center md:flex-1 lg:text-[28px] lg:mb-[20px]">
              <a href="tel:0211840" className="fw-700 text-[20px] lg:text-[28px]">
                {toPersianDigits("021-1840")}
              </a>
              <FaPhone />
            </div>
            <Link
              href="/contact-us"
              className="w-[136px] lg:w-[175px] h-[38px] lg:!h-[41px] bg-secondary rounded-[9px] text-white !text-[14px] lg:!text-[16px] fw-500 flex items-center justify-center md:flex-1 lg:mt-[10px]"
            >
              اطلاعات بیشتر
            </Link>
          </div>
        </div>
      </div>
  );
}

export default PhonePurchase;
