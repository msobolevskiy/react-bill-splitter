import React from "react";
import s from "./LeftPart.module.css";
import { NavLink } from "react-router-dom";
import QuantityMenu from "./QuantityMenu/QuantityMenu";
import BillSharingPage from "./BillSharingPage/BillSharingPage";
import TotalBillMenu from "./TotalBillMenu/TotalBillMenu";
import { Route, Switch } from "react-router-dom";

const LeftPart = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => <QuantityMenu />} />,
      <Route path="/BillSharingPage" render={() => <BillSharingPage />} />,
      <Route path="/TotalBillMenu" render={() => <TotalBillMenu />} />
    </Switch>
  );
};
export default LeftPart;
