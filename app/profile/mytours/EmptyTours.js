import Button from "@/components/atoms/Button";
import Image from "next/image";

function EmptyTours() {
  return (
    <div className="text-center mb-[20px]">
      <div className="w-full  bg-[#28a745]/20 rounded-[12px] p-[20px] my-[20px] items-center">
        <p className="text-center text-black/50">
          تا به حال توری خریداری نشده!
        </p>
        <Image
          src="/images/empty-tours.svg"
          alt="توری پیدا نشد"
          width={1301}
          height={1600}
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

export default EmptyTours;
