export const toPersianDigits = (value) =>
  value.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);

export const toPersianPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);
  return toPersianDigits(formattedPrice);
};

export const dateFormatter = (date) => {
  return date.toISOString().slice(0, 10);
};

export const getTourDuration = (startDate, endDate) => {
  const duration = new Date(endDate) - new Date(startDate);
  const nights = Math.round(duration / (1000 * 60 * 60 * 24));
  return {
    days: nights + 1,
    nights,
  };
};
