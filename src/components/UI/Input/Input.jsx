import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, inputRef) => {
  const { icon } = props;
  const InputIcon = icon ? (
    <svg className={styles.inputIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      {icon}
    </svg>
  ) : null;
  return (
    <div className={styles.inputContainer}>
      {InputIcon}
      <input
        ref={inputRef}
        style={icon ? { paddingLeft: "26px" } : null}
        className={styles.Input}
        {...props}
      />
    </div>
  );
});

export default Input;
