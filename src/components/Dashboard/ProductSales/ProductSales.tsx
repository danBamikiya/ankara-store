import { useContext } from "react";
import UIContext from "../../../store/UIContext";
import classes from "./ProductSales.module.scss";
import SalesTable from "./SalesTable/SalesTable";

const ProductSales = () => {
  const uiCtx = useContext(UIContext);
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;
  return (
    <div className={`${classes.productsales} ${themeClass}`}>
      <div className={classes.productsales_header}>
        <h2 className={`${classes.productsales_header_title} ${themeClass}`}>
          Product Sales
        </h2>
      </div>
      <SalesTable />
    </div>
  );
};

export default ProductSales;
