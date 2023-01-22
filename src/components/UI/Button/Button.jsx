import React from "react";
import styles from "./Button.module.css";

function Button({ children, ...props }) {
  const { type } = props;
  let buttonStyle = styles.button;
  if (type === "primary") {
    buttonStyle = [styles.button, styles.primary].join(" ");
  }
  if (type === "delete") {
    buttonStyle = [styles.button, styles.delete].join(" ");
  }
  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
}

export default Button;
