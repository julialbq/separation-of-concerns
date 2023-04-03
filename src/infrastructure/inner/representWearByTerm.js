export const representWearByTerm = (wear) => {
  if (wear >= 0 && wear < 40) {
    return "None";
  }
  if (wear >= 40 && wear < 200) {
    return "Low";
  }
  if (wear >= 200 && wear < 400) {
    return "Moderate";
  }
  if (wear >= 400 && wear < 700) {
    return "High";
  }
  if (wear >= 700) {
    return "Very High";
  }
};
