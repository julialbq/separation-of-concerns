import { representFragilityByTerm } from "../../utils/representFragilityByTerm";
import { representWearByTerm } from "../../infrastructure/inner/representWearByTerm";
import cx from "./InventoryItem.module.scss";
import { calculateWear } from "../../domain/calculateWear";
import { itemWearClassTable } from "../../utils/itemWearClassTable";

export const InventoryItem = ({ item }) => {
  const itemFragility = representFragilityByTerm(item.fragility);
  const itemWear = calculateWear(item.fragility, item.lastMaintenance)
  const representedItemWear = representWearByTerm(itemWear);
  const className = itemWearClassTable[representedItemWear]

  return (
    <div className={`${cx.itemContainer} ${cx[className]}`}>
      <h2 className={cx.itemTitle}>
        {item.type} | {item.brand} {item.model}
      </h2>
      <p className={cx.itemInfo}>Sector: {item.sector}</p>
      <p className={cx.itemInfo}>Fragility: {itemFragility}</p>
      <p className={cx.itemInfo}>Last Maintenance: {item.lastMaintenance.day}/{item.lastMaintenance.month}/{item.lastMaintenance.year}</p>
      <p className={cx.itemInfo}>Wear: {representedItemWear}</p>
    </div>
  );
};
