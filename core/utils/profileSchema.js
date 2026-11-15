import { z } from "zod";
import { zMelliCode } from "zod-ir";

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "نام را وارد کنید"),
  lastName: z.string().min(1, "نام خانوادگی را وارد کنید"),
  nationalCode: zMelliCode(),
  gender: z.enum(["male", "female"], {
    message: "جنسیت را انتخاب کنید",
  }),
  birthDate: z.string().min(1, "تاریخ تولد را وارد کنید"),
});

export const emailSchema = z.object({
  email: z.string().email("ایمیل معتبر وارد کنید"),
});

export const bankAccountSchema = z.object({
  payment: z.object({
    shaba_code: z
      .string()
      .regex(/^IR\d{24}$/, "شماره شبا باید با IR شروع شود و ۲۴ رقم داشته باشد"),

    debitCard_code: z.string().regex(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد"),

    accountIdentifier: z.string().min(1, "شماره حساب را وارد کنید"),
  }),
});
