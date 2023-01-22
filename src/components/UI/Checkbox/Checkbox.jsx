import React from "react";
import styles from "./Checkbox.module.css";

function Checkbox({ children, ...props }) {
  return (
    <label className={styles.container}>
      {children}
      <input onChange={props.onChange} type="checkbox" checked={props.checked} />
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default Checkbox;
