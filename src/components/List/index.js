import React from "react";
import { bool, string, number, func } from "prop-types";
import { cx } from 'emotion';

import { listWrapper, checkedStyle, deleteStyle } from "./styles";

const List = ({ id, text, isChecked, onCheck, onDelete }) => {
  return (
    <div className={cx(listWrapper, isChecked ? checkedStyle : '')}>
      <input
        type="checkbox"
        name={id}
        checked={isChecked}
        onChange={() => onCheck(id, !isChecked)}
      />
      <span onClick={() => onCheck(id, !isChecked)}>{text}</span>
      {isChecked && <button className={deleteStyle} onClick={() => onDelete(id)}>x</button>}
    </div>
  );
};

List.propTypes = {
  id: number,
  isChecked: bool,
  onCheck: func.isRequired,
  onDelete: func.isRequired,
  text: string.isRequired
};

List.defaultProps = {
  isChecked: false
};

export default List;
