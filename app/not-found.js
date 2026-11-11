import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center mt-[20px] relative pb-[100px]">
      <img
        className="w-[322px] h-[322px]"
        src="/images/ErrorTV.png"
        alt="error image"
      />
      <p className="fw-600 text-[24px] absolute top-[297px]">
        صفحه مورد نظر یافت نشد!
      </p>
      <Link
        href="/"
        className="w-[232px] h-[58px] rounded-[16px] bg-light-button flex justify-center items-center leading-[100%] text-primary text-[20px] mt-[32px] "
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default NotFound;
