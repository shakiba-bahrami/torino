export const getTourSummary = (tour) => {
  //   console.log(tour);
  const date = new Date(tour.startDate);
  const month = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "long",
    timeZone: "UTC",
  }).format(date);
  const monthName = `${month} ماه`;
  const durationDays = `${(new Date(tour.endDate) - new Date(tour.startDate)) / (1000 * 60 * 60 * 24)} روزه`;
  let travelKind;
  switch (tour.fleetVehicle) {
    case "airplane":
      travelKind = "پرواز";
      break;
    case "bus":
      travelKind = "اتوبوس";
      break;
    case "ship":
      travelKind = "کشتی";
      break;
    case "train":
      travelKind = "قطار";
      break;
    default:
      travelKind = "";
  }
  return `${monthName} . ${durationDays} - ${travelKind} - ${tour.options[1]} ${tour.options[0]}`;
};
