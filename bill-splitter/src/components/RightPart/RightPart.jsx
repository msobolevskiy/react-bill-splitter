import React from "react";
import s from "./RightPart.module.css";
import Person from "./Person/Person";

const RightPart = props => {
  let PersonRender = props.persons.map(p => (
    <Person billAmount={p.billAmount} key={p.id} id={p.id} />
  ));

  return <div className={s.wrap}>{PersonRender}</div>;
};
export default RightPart;
