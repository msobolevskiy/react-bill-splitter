import React from "react";
import QuantityMenu from "./QuantityMenu";
import { connect } from "react-redux";
import {
  addPersonAC, removePersonAC
} from "../../../redux/persons-reducer";


let mapStateToProps = (state) => {
  return {
    quantityOfPerson: state.personsReducer.personsAmount
}}

let mapDispatchToProps = (dispatch) => {
 
  return {
    btnPlusClick: () => {
        dispatch(addPersonAC())
    },
    btnMinusClick: () => {
      dispatch(removePersonAC())
  }
  }
} 


const QuantityMenuContainer = connect(mapStateToProps, mapDispatchToProps)(QuantityMenu);
export default QuantityMenuContainer;
