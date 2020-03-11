import React from "react";
import RightPart from "./RightPart";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    summOfPersons: state.personsReducer.personsAmount,
    persons: state.personsReducer.persons
  };
};
let mapDispatchToProps = dispatch => {
  return {};
};

const RightPartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RightPart);

export default RightPartContainer;
