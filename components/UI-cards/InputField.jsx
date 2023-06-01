import React from "react";
import NumericInput from "react-numeric-input";
import styles from "../UI-cards/InputField.module.css"

function InputField(props) {
  return (
    <div >
      <div >
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
      <div >
         {props.title === "Regular" && <NumericInput  className={styles.inputz} min={0} max={10} step={1} defaultValue={0} mobile onChange={props.updateRegularTickets} />}

        {props.title === "VIP" && <NumericInput className={styles.inputz} min={0} max={10} step={1} defaultValue={0} mobile onChange={props.updateVIPTickets} />}
      </div>
    </div>
  );
}
export default InputField;
