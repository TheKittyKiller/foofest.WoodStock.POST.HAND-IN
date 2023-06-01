import React from "react";
import NumericInput from "react-numeric-input";

function InputField(props) {
  return (
    <div >
      <div >
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
      <div >
        

        {props.title === "Regular" && <NumericInput min={0} max={10} step={1} defaultValue={0} mobile onChange={props.updateRegTickets} />}

        {props.title === "VIP" && <NumericInput min={0} max={10} step={1} defaultValue={0} mobile onChange={props.updateVIPTickets} />}
      </div>
    </div>
  );
}
export default InputField;
