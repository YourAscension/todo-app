import React from "react";
import styles from "./ToolTip.module.css";

function ToolTip({ children, ...props }) {
  const { target, isActive } = props;
  return isActive ? (
    <div
      className={[styles.tooltip, styles.bottom].join(" ")}
      style={{ top: target.bottom + 2, left: target.left }}
    >
      <div className={styles.tooltipArrow} />
      <div className={styles.tooltipLabel}>{children}</div>
    </div>
  ) : null;
}

export default ToolTip;
