"use client";
import Button from "@/components/atoms/Button";
import { useGetBasket, useGetUserData } from "@/core/services/queries";

import { DatePicker } from "zaman";

function BasketPage() {
  const userData = useGetUserData();
  const tourData = useGetBasket();
  console.log("USER:", userData.data?.data);
  console.log("BASKET:", tourData.data?.data);
  return (
    <>
      <div>
        <h4>مشخصات مسافر</h4>
        <form action="">
          <input type="text" />
          <select name="" id="">
            <option value="" disabled default>
              جنسیت
            </option>
            <option value="" disabled default>
              مرد
            </option>
            <option value="" disabled default>
              زن
            </option>
          </select>
          <input type="number" placeholder="کد ملی را وارد کنید" />
          <DatePicker />
        </form>
      </div>

      <div>
        <div>
          <h4>{}</h4>
          <p>{}</p>
        </div>
        <div>
          <p>{}</p>
        </div>
        <Button>ثبت و خرید نهایی</Button>
      </div>
    </>
  );
}

export default BasketPage;
