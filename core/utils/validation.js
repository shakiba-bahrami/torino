import {
  zMelliCode,
  zShenaseMelli,
  zIranianMobile,
  zLandline,
  zPostalCode,
} from "zod-ir";

export const isValidMobile = (mobile) => {
  return zIranianMobile().safeParse(mobile).success;
};
