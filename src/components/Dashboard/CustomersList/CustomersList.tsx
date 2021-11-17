import { useContext } from "react";
import UIContext from "../../../store/UIContext";
import classes from "./CustomersList.module.scss";

import AdenikeAfolabi from "./../../../assets/AdenikeAfolabi.jpg";
import OpeoluwaBamidele from "./../../../assets/OpeoluwaBamidele.jpg";
import RonkeFashola from "./../../../assets/RonkeFashola.jpg";
import CynthiaIsong from "./../../../assets/CynthiaIsong.jpg";
import OnyebuchiAsinobi from "./../../../assets/OnyebuchiAsinobi.jpg";

const customersData = [
  {
    id: 1,
    customerName: "Adenike Afolabi",
    email: "adenike.a@gmail.com",
    img: AdenikeAfolabi
  },
  {
    id: 2,
    customerName: "Opeoluwa Bamidele",
    email: "opeoluwa.b@gmail.com",
    img: OpeoluwaBamidele
  },
  {
    id: 3,
    customerName: "Ronke Fashola",
    email: "ronke.f@gmail.com",
    img: RonkeFashola
  },
  {
    id: 4,
    customerName: "Cynthia Isong",
    email: "cynthia.i@gmail.com",
    img: CynthiaIsong
  },
  {
    id: 5,
    customerName: "Onyebuchi Asinobi",
    email: "onyebuchi.a@gmail.com",
    img: OnyebuchiAsinobi
  }
];

const CustomersList = () => {
  const uiCtx = useContext(UIContext);
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;
  return (
    <div className={`${classes.customerslist} ${themeClass}`}>
      <div className={classes.customerslist_header}>
        <h2 className={`${classes.customerslist_header_title} ${themeClass}`}>
          Customers List
        </h2>
      </div>
      <div className={classes.list}>
        {customersData.map(({ id, customerName, email, img }) => (
          <div className={classes.list_item} key={id}>
            <div className={classes.list_item_img}>
              <img src={img} alt={`${customerName} head shot`} className={classes.img} />
            </div>
            <div className={classes.list_item_info}>
              <span className={`${classes.name} ${themeClass}`}>{customerName}</span>
              <span className={`${classes.email} ${themeClass}`}>{email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersList;
