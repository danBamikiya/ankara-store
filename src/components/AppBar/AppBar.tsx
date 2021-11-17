import { useContext, useState } from "react";
import CartSVG from "../../assets/CartSVG";
import CustomersSVG from "../../assets/CustomersSVG";
import DashboardSVG from "../../assets/DashboardSVG";
import EarningsSVG from "../../assets/EarningsSVG";
import SettingsSVG from "../../assets/SettingsSVG";
import StoreManagementSVG from "../../assets/StoreManagementSVG";
import UIContext from "../../store/UIContext";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";
import classes from "./AppBar.module.scss";

const initialNavList = [
  {
    id: 0,
    text: "Dashboard",
    isActive: true,
    icon: (fillColor: string) => <DashboardSVG fillColor={fillColor} />
  },
  {
    id: 1,
    text: "Customers",
    isActive: false,
    icon: (fillColor: string) => <CustomersSVG fillColor={fillColor} />
  },
  {
    id: 2,
    text: "Earnings",
    isActive: false,
    icon: (fillColor: string) => <EarningsSVG fillColor={fillColor} />
  },
  {
    id: 3,
    text: "Product Sales",
    isActive: false,
    icon: (fillColor: string) => <CartSVG fillColor={fillColor} />
  },
  {
    id: 4,
    text: "Store Management",
    isActive: false,
    icon: (fillColor: string) => <StoreManagementSVG fillColor={fillColor} />
  },
  {
    id: 5,
    text: "Settings",
    isActive: false,
    icon: (fillColor: string) => <SettingsSVG fillColor={fillColor} />
  }
];

const AppBar = () => {
  const uiCtx = useContext(UIContext);
  const [navList, setNavList] = useState(initialNavList);

  const isActiveHandler = (id: number) => {
    const arr = [...navList];
    const idOfActive = arr.find((item) => item.isActive === true)!.id;
    arr[idOfActive].isActive = false;
    arr[id].isActive = true;
    setNavList(arr);
  };

  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;
  return (
    <div className={`${classes.appbar_container} ${themeClass}`}>
      <div className={classes.appbar}>
        <div className={classes.appbar_logo}>
          <h1 className={classes.appbar_logo_title}>
            <span className={classes.appbar_logo_title_bg}>Ankara</span>
            <span className={themeClass}>Store</span>
          </h1>
        </div>
        <ul className={classes.appbar_menu}>
          {navList.map(({ id, text, isActive, icon }) => (
            <li key={id} className={isActive ? classes.isActive : ""}>
              <a
                href={`#${text}`}
                className={classes.link}
                onClick={() => isActiveHandler(id)}
              >
                <div className={classes.link_icon}>
                  {icon(
                    isActive ? "#33c861" : uiCtx.theme === "light" ? "#929292" : "#fff"
                  )}
                </div>
                <span className={`${classes.link_text} ${themeClass}`}>{text}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className={`${classes.appbar_divider} ${themeClass}`} />
        <div className={classes.appbar_themetoggler}>
          <ToggleSwitch toggle={uiCtx.toggleTheme} />
          <span className={`${classes.toggle_title} ${themeClass}`}>Night Mode</span>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
