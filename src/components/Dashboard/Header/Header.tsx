import { useContext } from "react";
import UIContext from "../../../store/UIContext";
import classes from "./Header.module.scss";

import SearchSVG from "../../../assets/SearchSVG";
import NotificationSVG from "../../../assets/NotificationSVG";
import MamaGodswill from "./../../../assets/MamaGodswill.jpg";

const Header = () => {
  const uiCtx = useContext(UIContext);
  const iconFill = uiCtx.theme === "light" ? "#929292" : "#fff";
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;

  return (
    <div className={classes.header}>
      <h2 className={`${classes.header_title} ${themeClass}`}>Dashboard</h2>
      <div className={classes.header_content}>
        <div className={classes.header_content_links}>
          <div className={classes.link_icon}>
            <SearchSVG fillColor={iconFill} />
          </div>
          <div className={`${classes.link_icon} ${classes.link_icon_notification}`}>
            <NotificationSVG fillColor={iconFill} />
          </div>
        </div>
        <div className={`${classes.header_content_divider} ${themeClass}`} />
        <div className={classes.header_content_profile}>
          <span className={`${classes.profile_name} ${themeClass}`}>Mama Godswill</span>
          <div className={classes.profile_img}>
            <img src={MamaGodswill} alt="Profile" className={classes.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
