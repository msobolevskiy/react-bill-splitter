import React from "react";
import QuantityMenuContainer from "./QuantityMenu/QuantityMenuContainer";
import BillSharingPage from "./BillSharingPage/BillSharingPage";
import TotalBillMenuContainer from "./TotalBillMenu/TotalBillMenuContainer";
import { Route, Switch } from "react-router-dom";

const LeftPart = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => <QuantityMenuContainer />} />,
      <Route path="/TotalBillMenu" render={() => <TotalBillMenuContainer />} />,
      <Route path="/BillSharingPage" render={() => <BillSharingPage />} />
    </Switch>
  );
};
export default LeftPart;
