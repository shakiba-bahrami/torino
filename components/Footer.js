function Footer() {
  return (
    <footer className="w-full text-[#282828]">
      <div className="mb-[28px] h-[1.5px] w-full bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_8px,transparent_15px)]" />

      <div className="flex flex-wrap justify-center gap-y-8 lg:flex-nowrap lg:items-start lg:justify-between">
        <div className="flex gap-x-[clamp(24px,5vw,60px)]">
          <div>
            <h4 className="mb-4 text-[clamp(16px,2vw,24px)] fw-600">تورینو</h4>
            <ul className="space-y-4 text-[clamp(12px,1.5vw,18px)] fw-400">
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[clamp(16px,2vw,24px)] fw-600">
              خدمات مشتریان
            </h4>
            <ul className="space-y-4 text-[clamp(12px,1.5vw,18px)] fw-400">
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-5 lg:flex-col lg:justify-between lg:w-auto lg:items-end lg:gap-6 md:flex-col ">
          <div className="flex shrink-0 flex-col items-center sm:items-start lg:items-end">
            <img
              src="/images/torino.png"
              alt="Torino"
              className="h-auto w-[clamp(110px,9vw,130px)]"
            />
            <div className="mt-3 flex gap-1 whitespace-nowrap text-[12px] fw-400 ml:text-[14px] lg:text-[15px]">
              <p>تلفن پشتیبانی:</p>
              <span dir="ltr">۰۲۱-۸۵۷۴</span>
            </div>
          </div>

          <div className="flex flex-row-reverse flex-wrap  items-center justify-center gap-x-3 gap-y-3 sm:justify-end">
            <img
              src="/images/TrustBadges/ecunion.png"
              alt="ecunion"
              className="h-auto w-[clamp(40px,4.72vw,68px)] object-contain"
            />
            <img
              src="/images/TrustBadges/samandehi.png"
              alt="samandehi"
              className="h-auto w-[clamp(40px,4.72vw,68px)] object-contain"
            />
            <img
              src="/images/TrustBadges/airline.png"
              alt="airline"
              className="h-auto w-[clamp(40px,4.72vw,68px)] object-contain"
            />
            <img
              src="/images/TrustBadges/state-airline.png"
              alt="state-airline"
              className="h-auto w-[clamp(40px,4.72vw,68px)] object-contain"
            />
            <img
              src="/images/TrustBadges/passenger-rights.png"
              alt="passenger-rights"
              className="h-auto w-[clamp(40px,4.72vw,68px)] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="my-3 h-[1px] w-full bg-[#000000]/25" />

      <p className="pb-2 text-center text-[11px] fw-300 sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] lg:fw-400">
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </p>
    </footer>
  );
}

export default Footer;
