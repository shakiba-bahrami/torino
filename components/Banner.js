import Image from "next/image";

function Banner() {
  return (
    <section className="relative w-screen right-1/2 translate-x-1/2">
      <Image
        src="/images/banner.png"
        width={2732}
        height={721}
        alt="تصویر بنر وبسایت"
        loading="eager"
        className="w-full h-[clamp(119px,24.31vw,350px)]"
      />
      <h1 className=" text-text text-[clamp(16px,1.94vw,28px)] fw-600 text-center mt-[25px] md:mt-[18px]">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h1>
    </section>
  );
}

export default Banner;
