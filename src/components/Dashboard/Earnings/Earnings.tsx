import { useContext } from "react";
import ArrowDownSVG from "../../../assets/ArrowDownSVG";
import UIContext from "../../../store/UIContext";
import ChartContainer from "./ChartContainer/ChartContainer";
import classes from "./Earnings.module.scss";

const Earnings = () => {
  const uiCtx = useContext(UIContext);
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;

  return (
    <div className={`${classes.earnings} ${themeClass}`}>
      <div className={classes.earnings_headline}>
        <h2 className={`${classes.earnings_headline_title} ${themeClass}`}>Earnings</h2>
        <div className={classes.earnings_headline_content}>
          <div className={classes.legend}>
            <div className={classes.legend_item}>
              <div className={classes.green} />
              <span className={themeClass}>Sales</span>
            </div>
            <div className={classes.legend_item}>
              <div className={classes.orange} />
              <span className={themeClass}>Profit</span>
            </div>
          </div>
          <div className={`${classes.filter} ${themeClass}`}>
            <span>Filter</span>
            <ArrowDownSVG fillColor={uiCtx.theme === "light" ? "#929292" : "#fff"} />
          </div>
        </div>
      </div>
      <div className={classes.earnings_chart}>
        <ChartContainer />
      </div>
    </div>
  );
};

export default Earnings;
