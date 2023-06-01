import React from "react";

function SelectionAreaOptions(props) {
  return (
    <div>
      <select onChange={props.selectedArea} name="select" id="select">
        <option value="choose" defaultValue>
          Choose your camping area
        </option>
        <option value={props.selectOption1}>
          {props.selectOption1} ({props.selectOption1Space} available)
        </option>
        <option value={props.selectOption2}>
          {props.selectOption2} ({props.selectOption2Space} available)
        </option>
        <option value={props.selectOption3}>
          {props.selectOption3} ({props.selectOption3Space} available)
        </option>
        <option value={props.selectOption4}>
          {props.selectOption4} ({props.selectOption4Space} available)
        </option>
        <option value={props.selectOption5}>
          {props.selectOption5} ({props.selectOption5Space} available)
        </option>
      </select>
    </div>
  );
}

export default SelectionAreaOptions;
