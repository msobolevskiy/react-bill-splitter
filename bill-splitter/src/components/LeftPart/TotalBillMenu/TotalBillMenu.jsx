import React from "react";
import s from "./TotalBillMenu.module.css";
import { NavLink } from "react-router-dom";
import icon from '../../../assets/images/icons1.png'

const TotalBillMenu = props => {

  let onNumberClick = (e)=>{
   
    let v = e.target.innerText;
    props.amountInputAC(v);
  }


  return (
    <div>
      <div className={s.wrap}>
        <div className={s.titleWrap}>
          <p className={s.title}>Enter bill subtotal</p>
        </div>
        <div className={s.counterWrap}>
        <div className={s.summ}>{props.billSubtotal}</div>
        <div className={s.gridWrap}>
          <div className={s.numberElem} onClick={onNumberClick}>1</div>
          <div className={s.numberElem} onClick={onNumberClick}>2</div>
          <div className={s.numberElem} onClick={onNumberClick}>3</div>
          <div className={s.numberElem} onClick={onNumberClick}>4</div>
          <div className={s.numberElem} onClick={onNumberClick}>5</div>
          <div className={s.numberElem} onClick={onNumberClick}>6</div>
          <div className={s.numberElem} onClick={onNumberClick}>7</div>
          <div className={s.numberElem} onClick={onNumberClick}>8</div>
          <div className={s.numberElem} onClick={onNumberClick}>9</div>
          <div className={s.numberElem} onClick={onNumberClick}>.</div>
          <div className={s.numberElem} onClick={onNumberClick}>0</div>
          <div className={s.numberElem} onClick={onNumberClick}><img className={s.icon} src={icon}/></div>
        </div>
        </div>
        <div className={s.buttonNextWrap}>
          <NavLink to="/BillSharingPage">
            {" "}
            <button className={s.buttonNext}>Next</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default TotalBillMenu;
