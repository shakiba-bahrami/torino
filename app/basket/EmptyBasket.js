import Button from "@/components/atoms/Button";
import Image from "next/image";

function EmptyBasket() {
  return (
    <div className="text-center">
      <div className="w-full  bg-[#28a745]/20 rounded-[12px] p-[20px] my-[20px] items-center">
        <p className="text-center text-black/50">سبد خرید شما خالیست!</p>
        <Image
          src="/images/empty-basket.svg"
          alt="سبد خالی"
          width={1792}
          height={1495}
          className="m-auto mt-[10px] w-[200px]"
          loading="eager"
        />
      </div>
      <Button href="/" className="p-[8px] rounded-[16px] ">
        بازگشت به صفحه اصلی
      </Button>
    </div>
  );
}

export default EmptyBasket;
