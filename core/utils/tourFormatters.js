import { travelKind } from "./travelKind";
const getTourSummary = (tour) => {
  const date = new Date(tour.startDate);
  const month = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "long",
    timeZone: "UTC",
  }).format(date);
  const monthName = `${month} ماه`;
  const durationDays = `${(new Date(tour.endDate) - new Date(tour.startDate)) / (1000 * 60 * 60 * 24)} روزه`;

  let myTravelKind = travelKind(tour.fleetVehicle);
  return `${monthName} . ${durationDays} - ${myTravelKind} - ${tour.options[1]} ${tour.options[0]}`;
};

export { getTourSummary };
