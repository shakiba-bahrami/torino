"use client";
import Button from "@/components/atoms/Button";
import { useGetBasket, useGetUserData } from "@/core/services/queries";
import { toPersianDigits, toPersianPrice } from "@/core/utils/formatters";

import { DatePicker } from "zaman";
import EmptyBasket from "./EmptyBasket";

function BasketPage() {
  const userData = useGetUserData();
  const tourData = useGetBasket();

  if (userData.isPending || tourData.isPending) {
    return <p>در حال دریافت اطلاعات...</p>;
  }

  if (userData.isError || tourData.isError) {
    return <p>خطا در دریافت اطلاعات</p>;
  }
  const basket = tourData.data?.data;

  if (!basket) return <EmptyBasket />;

  const durationDays =
    (new Date(basket.endDate) - new Date(basket.startDate)) /
    (1000 * 60 * 60 * 24);

  const user = userData.data?.data;
  return (
    <>
      <div className="border border-black/20 rounded-[10px] p-[20px] mt-[20px] ">
        <h4 className="text-[24px] fw-400">مشخصات مسافر</h4>
        <form>
          <input
            type="text"
            defaultValue={user.firstName || ""}
            placeholder="نام"
            className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
          />

          <input
            type="text"
            defaultValue={user.lastName || ""}
            placeholder="نام خانوادگی"
            className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
          />

          <select
            name="gender"
            defaultValue={user.gender || ""}
            className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
          >
            <option value="" disabled>
              جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>

          <input
            type="text"
            defaultValue={user.nationalCode || ""}
            placeholder="کد ملی را وارد کنید"
            className="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
          />

          <DatePicker
            defaultValue={user.birthDate ? new Date(user.birthDate) : undefined}
            locale="fa"
            inputClass="w-full border border-black/50 h-[50px] rounded-[5px] mt-[20px] p-[10px]"
            inputAttributes={{ placeholder: "تاریخ تولد" }}
            accentColor="#28a745"
            round="x2"
          />
        </form>
      </div>

      <div className="border border-black/10 rounded-[10px] p-[20px] mt-[30px] text-center">
        <div className="flex justify-between">
          <h4 className="text-[24px] fw-600">تور {basket.title}</h4>
          <p>{`${toPersianDigits(durationDays)} روز و ${toPersianDigits(durationDays - 1)} شب`}</p>
        </div>
        <div className="h-[1.5px] w-full bg-[repeating-linear-gradient(to_right,#D9D9D9_0px,#D9D9D9_8px,transparent_8px,transparent_15px)]  my-[20px]" />

        <div className="flex justify-between px-[15px] items-center mb-[20px]">
          <p>قیمت نهایی</p>
          <div className="flex justify-between items-center gap-2 ">
            <p className="text-[28px] text-info">
              {toPersianPrice(basket.price)}
            </p>
            <p className="text-[12px] text-text-primary/50">تومان</p>
          </div>
        </div>
        <Button className="w-full h-[56px] rounded-[10px] !text-[24px] !fw-400">
          ثبت و خرید نهایی
        </Button>
      </div>
    </>
  );
}

export default BasketPage;
