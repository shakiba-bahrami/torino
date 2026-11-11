import Image from "next/image";

function Banner() {
  return (
    <section className="-mx-[31px]">
      {/* <img
        src="/images/bannerImage.png"
        alt="banner image"
        className="w-full h-[120px] "
      /> */}
      <Image
        src="/images/bannerImage.png"
        width={2732}
        height={721}
        alt="تصویر بنر وبسایت"
        loading="eager"
        className="w-full h-auto"
      />
      <h1 className=" text-text text-[16px] font-[600] text-center text-center mt-[28px]">
        <span className="text-primary text-[16px]">تورینو</span> برگزار کننده
        بهترین تور های داخلی و خارجی
      </h1>
    </section>
  );
}

export default Banner;
