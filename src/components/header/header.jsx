import './header.css';
import React from "react";
import moment from "moment";

const Header = () => {
  const today = moment().format("YYYY년 M월 D일 HH:mm");
  //   const today = moment();

  return (
    <div className="header">
      <div className="header__app-title">음악 차트</div>
      <div className="header__date">{today}</div>
    </div>
  );
};

export default Header;
