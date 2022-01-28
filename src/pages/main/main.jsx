import styles from "./main.module.css";
import React, { useState } from "react";
import Header from "../../components/header/header";
import Tap from "../../components/tap/tap";
import List from "../../components/list/list";

const Main = () => {
  const [selectedTap, setSelectedTap] = useState("domestic");

  const handleTapClick = (tapCategory) => {
    setSelectedTap(tapCategory);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Tap handleTapClick={handleTapClick} />
        <List selectedTap={selectedTap} />
      </div>
    </div>
  );
};

export default Main;
