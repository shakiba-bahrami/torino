export const toPersianDigits = (value) =>
  value.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);

export const toPersianPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);
  return toPersianDigits(formattedPrice);
};

export const dateFormatter = (date) => {
  return date.toISOString().slice(0, 10);
};
