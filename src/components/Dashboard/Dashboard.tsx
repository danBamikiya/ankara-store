import { useContext } from "react";
import UIContext from "../../store/UIContext";
import CustomersList from "./CustomersList/CustomersList";
import classes from "./Dashboard.module.scss";
import Earnings from "./Earnings/Earnings";
import Header from "./Header/Header";
import ProductSales from "./ProductSales/ProductSales";
import Totals from "./Totals/Totals";

const Dashboard = () => {
  const uiCtx = useContext(UIContext);
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;
  return (
    <div className={`${classes.scroll} ${themeClass}`}>
      <div className={`${classes.dashboard_container} ${themeClass}`}>
        <div className={classes.dashboard}>
          <Header />
          <Totals />
          <Earnings />
          <div className={classes.dashboard_bottom}>
            <ProductSales />
            <CustomersList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
