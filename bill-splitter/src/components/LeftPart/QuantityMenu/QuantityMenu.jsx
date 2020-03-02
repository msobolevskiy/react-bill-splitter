import React from "react";
import s from "./QuantityMenu.module.css";
import {NavLink} from 'react-router-dom'

const QuantityMenu = (props) => {
  return (
    <div className={s.wrap}>
      <div className={s.titleWrap}><p className={s.title}>How many people?</p></div>
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
            <button className={s.buttonNext}>Next</button>
          </div>
     
    </div>
  );
};
export default QuantityMenu;

