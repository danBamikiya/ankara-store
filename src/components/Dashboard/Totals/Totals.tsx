import { useContext } from "react";
import UIContext from "../../../store/UIContext";
import classes from "./Totals.module.scss";
import TotalSalesSVG from "../../../assets/TotalSalesSVG";
import TotalProfitSVG from "../../../assets/TotalProfitSVG";
import TotalCostSVG from "../../../assets/TotalCostSVG";

const iconFill = "#33c863";
const totalsCards = [
  {
    id: 1,
    title: "Total Sales",
    total: "$512k",
    icon: <TotalSalesSVG fillColor={iconFill} />
  },
  {
    id: 2,
    title: "Total Profit",
    total: "$45k",
    icon: <TotalProfitSVG fillColor={iconFill} />
  },
  {
    id: 3,
    title: "Total Cost",
    total: "$204",
    icon: <TotalCostSVG fillColor={iconFill} />
  }
];

const Totals = () => {
  const uiCtx = useContext(UIContext);
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;

  return (
    <div className={classes.totals}>
      {totalsCards.map(({ id, title, total, icon }) => (
        <div className={`${classes.totals_card} ${themeClass}`} key={id}>
          <div className={classes.totals_card_icon}>
            <div className={classes.icon}>{icon}</div>
          </div>
          <div className={classes.totals_card_info}>
            <div className={`${classes.title} ${themeClass}`}>{title}</div>
            <div className={`${classes.total} ${themeClass}`}>{total}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Totals;
