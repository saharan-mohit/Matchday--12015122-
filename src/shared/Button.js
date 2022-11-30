import React from "react";
import styles from "./Button.module.css";
const Button = ({ btnValue, onHandleClick }) => {
  return (
    <div className={styles.btn} onClick={onHandleClick}>
      {btnValue}
    </div>
  );
};

export default Button;
