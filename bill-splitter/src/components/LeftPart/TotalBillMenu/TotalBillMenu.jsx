import React from "react";
import s from "./TotalBillMenu.module.css";
import {NavLink} from 'react-router-dom'

const TotalBillMenu = (props) => {
  return (
    <div><div className={s.wrap}>
    <div className={s.titleWrap}>
      <p className={s.title}>Enter total bill</p>
    </div>
    <div className={s.counterWrap}>
      <div className={s.buttons}>
        <button className={s.btn}>+</button>
        <button className={s.btn}>-</button>
      </div>
      <div className={s.counterSumm}>
        <p>0</p>
      </div>
    </div>
    <div className={s.buttonNextWrap}>
      <NavLink to="/BillSharingPage">
        {" "}
        <button className={s.buttonNext}>Next</button>
      </NavLink>
    </div>
  </div></div>
  );
};
export default TotalBillMenu;

