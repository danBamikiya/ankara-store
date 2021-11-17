import { useState } from "react";
import { ToggleFn } from "../../store/types";

import classes from "./ToggleSwitch.module.scss";

const ToggleSwitch = ({ toggle }: ToggleFn) => {
  const [switchOn, setSwitchOn] = useState(false);

  const switchToggleHandler = () => {
    setSwitchOn((val) => !val);
    toggle();
  };

  const switchOnClass = switchOn ? classes.on : "";

  return (
    <div className={`${classes.switch} ${switchOnClass}`} onClick={switchToggleHandler}>
      <div className={classes.switch_thumb}></div>
    </div>
  );
};

export default ToggleSwitch;
