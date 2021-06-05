import './tap.css'
import React, { useState } from "react";

const Tap = ({ handleTapClick }) => {

  const [category, setCategory] = useState('domestic');

  const onClick = (flag) => {
    setCategory(flag);
    handleTapClick(flag);
  }

  return (
    <div className="tap">
      <div className={`tap__domestic ${category === 'domestic' ? 'selected' : ''}`}>
        <span className="tap__domestic__text" onClick={() => onClick('domestic')}>국내</span>
      </div>
      <div className={`tap__overseas ${category === 'overseas' ? 'selected' : ''}`}>
        <span className="tap__overseas__text" onClick={() => onClick('overseas')}>해외</span>
      </div>
    </div>
  );
};

export default Tap;
