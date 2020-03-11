import React from "react";
import s from "./QuantityMenu.module.css";
import { NavLink } from "react-router-dom";

// let onButtonPlusClick =()=>{
//   let summ = props.quantityOfPerson
// }


const QuantityMenu = props => {

  let onButtonPlusClick = ()=>{
    props.btnPlusClick();
  }
  let onButtonMinusClick = ()=>{
    props.btnMinusClick();
  }
  
console.log(props.quantityOfPerson);
  return (
    <div className={s.wrap}>
      <div className={s.titleWrap}>
        <p className={s.title}>How many persons?</p>
      </div>
      <div className={s.counterWrap}>
        <div className={s.buttons}>
          <button className={s.btn} onClick={onButtonPlusClick}>+</button>
          <button className={s.btn} onClick={onButtonMinusClick}>-</button>
        </div>
        <div className={s.counterSumm}>
          <p>{props.quantityOfPerson}</p>
        </div>
      </div>
      <div className={s.buttonNextWrap}>
        <NavLink to="/TotalBillMenu">
          <button className={s.buttonNext}>Next</button>
        </NavLink>
      </div>
    </div>
  );
};
export default QuantityMenu;
