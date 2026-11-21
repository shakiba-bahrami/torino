export const toPersianDigits = (value) => {
  if (value == null) return "";
  return value.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
};

export const toPersianPrice = (price) => {
  if (price == null || price === "") return "";
  const formattedPrice = new Intl.NumberFormat("en-US").format(price);
  return toPersianDigits(formattedPrice);
};

export const dateFormatter = (date) => {
  if (!date) return "";
  return date.toISOString().slice(0, 10);
};

export const getTourDuration = (startDate, endDate) => {
  if (!startDate || !endDate) return null;

  const duration = new Date(endDate) - new Date(startDate);
  const nights = Math.round(duration / (1000 * 60 * 60 * 24));

  return {
    days: nights + 1,
    nights,
  };
};

export function toPersianDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("fa-IR", {
    calendar: "persian",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Tehran",
  }).format(new Date(date));
}