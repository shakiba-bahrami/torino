const travelKind = (fleetVehicle) => {
  switch (fleetVehicle.toLowerCase()) {
    case "airplane":
      return "هواپیما";
    case "bus":
      return "اتوبوس";
    case "ship":
      return "کشتی";
    case "van":
      return "ون";
    case "train":
      return "قطار";
    case "suv":
      return "آفرود";

    default:
      return "";
  }
};
export { travelKind };
