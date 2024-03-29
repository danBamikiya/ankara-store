import { useContext } from "react";
import UIContext from "../../../../store/UIContext";
import classes from "./SalesTable.module.scss";

const productSalesData = [
  {
    id: 1,
    productName: "Dashiki",
    sales: "330",
    stock: "645",
    amount: "415.01",
    status: true
  },
  {
    id: 2,
    productName: "Gold print",
    sales: "568",
    stock: "321",
    amount: "326.51",
    status: true
  },
  {
    id: 3,
    productName: "Kente",
    sales: "124",
    stock: "880",
    amount: "180.50",
    status: true
  },
  {
    id: 4,
    productName: "Mud print",
    sales: "710",
    stock: "0",
    amount: "60.25",
    status: false
  },
  {
    id: 5,
    productName: "Aso Oke",
    sales: "654",
    stock: "0",
    amount: "86.43",
    status: false
  },
  {
    id: 6,
    productName: "Morogoro",
    sales: "256",
    stock: "0",
    amount: "106.54",
    status: false
  },
  {
    id: 7,
    productName: "Bogolan",
    sales: "256",
    stock: "0",
    amount: "106.54",
    status: false
  },
  {
    id: 8,
    productName: "Kikoy",
    sales: "256",
    stock: "0",
    amount: "106.54",
    status: false
  }
];

const SalesTable = () => {
  const uiCtx = useContext(UIContext);
  const themeClass = uiCtx.theme === "light" ? classes.light_mode : classes.dark_mode;
  return (
    <table className={`${classes.table} ${themeClass}`}>
      <thead>
        <tr className={`${classes.table_head} ${themeClass}`}>
          <th>Product Name</th>
          <th>Sales</th>
          <th>Stock</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {productSalesData.map(({ id, productName, sales, stock, amount, status }) => (
          <tr key={id}>
            <td>
              <span>{productName}</span>
            </td>
            <td>{sales}</td>
            <td>{stock}</td>
            <td>{amount}</td>
            <td style={status ? { color: "#33c863" } : { color: "#eb5757" }}>
              {status ? "In Stock" : "No Stock"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
