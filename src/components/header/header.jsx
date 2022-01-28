import styles from "./header.module.css";
import React from "react";
import moment from "moment";

const Header = () => {
  const today = moment().format("YYYY년 M월 D일 HH:mm");

  return (
    <div className={styles.header}>
      <div className={styles.title}>음악 차트</div>
      <div className={styles.date}>{today}</div>
    </div>
  );
};

export default Header;
