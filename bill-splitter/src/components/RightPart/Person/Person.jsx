import React from "react";
import s from "./Person.module.css";

const Person = (props) => {
 
  return (
    <div className={s.personWrap}>
      {props.id}
    </div>
  );
};
export default Person;

