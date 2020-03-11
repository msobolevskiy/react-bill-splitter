import React from "react";
import TotalBillMenu from "./TotalBillMenu";
import { connect } from "react-redux";
import {
  amountInputAC
} from "../../../redux/persons-reducer";


let mapStateToProps = (state) => {
  return {
    billSubtotal: state.personsReducer.billSubtotal
}}

let mapDispatchToProps = (dispatch) => {
 
  return {
    amountInputAC: (value) => {
        dispatch(amountInputAC(value))
    }
  }
} 


const TotalBillMenuContainer = connect(mapStateToProps, mapDispatchToProps)(TotalBillMenu);
export default TotalBillMenuContainer;
