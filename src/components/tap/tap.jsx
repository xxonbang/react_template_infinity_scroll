import styles from "./tap.module.css";
import React, { useState } from "react";

const Tap = ({ handleTapClick }) => {
  const [category, setCategory] = useState("domestic");

  const onClick = (flag) => {
    setCategory(flag);
    handleTapClick(flag);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.domestic} ${
          category === "domestic" ? styles.selected : ""
        }`}
      >
        <span
          className={styles.domesticTitle}
          onClick={() => onClick("domestic")}
        >
          국내
        </span>
      </div>
      <div
        className={`${styles.overseas} ${
          category === "overseas" ? styles.selected : ""
        }`}
      >
        <span
          className={styles.overseasTitle}
          onClick={() => onClick("overseas")}
        >
          해외
        </span>
      </div>
    </div>
  );
};

export default Tap;
