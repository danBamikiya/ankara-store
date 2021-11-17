import { useContext } from "react";
import UIContext from "../store/UIContext";
import AppBar from "../components/AppBar/AppBar";
import Dashboard from "../components/Dashboard/Dashboard";
import classes from "./Home.module.scss";

const Home = () => {
  const uiCtx = useContext(UIContext);
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;
  return (
    <>
      <div className={`${classes.home_container} ${themeClass}`}>
        <div className={classes.home}>
          <AppBar />
          <Dashboard />
        </div>
      </div>
    </>
  );
};

export default Home;
