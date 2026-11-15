import { zIranianMobile } from "zod-ir";

export const isValidMobile = (mobile) => {
  return zIranianMobile().safeParse(mobile).success;
};
