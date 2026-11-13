import Image from "next/image";
import Button from "./atoms/Button";

function EmptyState() {
  return (
    <>
    <div className="w-full  bg-[#28a745]/20 rounded-[12px] p-[20px] my-[20px]">
      <p className="text-center text-black/50">
        توری با این مشخصات پیدا نشد!
      </p>
      <Image
        src="/images/travel-not-found.svg"
        alt="توری پیدا نشد"
        width={200}
        height={200}
        className="m-auto"
        />
    </div>
    <Button href="/">بازگشت به صفحه اصلی</Button>
        </>
  );
}

export default EmptyState;
