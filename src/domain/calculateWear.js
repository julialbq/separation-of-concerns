import { differenceInDays } from "date-fns";

export const calculateWear = (fragility, lastMaintenance) => {
  const fragilityMultiplier = [0.5, 3, 6, 11, 27];

  const daysSinceLastMaintenance = differenceInDays(
    new Date(),
    new Date(
      parseInt(lastMaintenance.year),
      parseInt(lastMaintenance.month),
      parseInt(lastMaintenance.day)
    )
  );

  const wear = fragilityMultiplier[fragility - 1] * daysSinceLastMaintenance;

  return Math.min(1000, wear);
};
