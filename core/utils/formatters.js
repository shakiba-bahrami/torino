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
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Tehran",
  }).format(new Date(date));
}

export function toPersianDateTime(date) {
  if (!date) return "";

  const parts = new Intl.DateTimeFormat("en-US-u-ca-persian-nu-latn", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZone: "Asia/Tehran",
  }).formatToParts(new Date(date));

  const get = (type) => parts.find((part) => part.type === type)?.value;

  return toPersianDigits(
    `${get("hour")}:${get("minute")} - ${get("year")}/${get("month")}/${get("day")}`
  );
}