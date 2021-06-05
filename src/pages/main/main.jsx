import './main.css';
import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import Tap from "../../components/tap/tap";
import List from "../../components/list/list";

const Main = () => {

  const [clickedTap, setClickedTap] = useState('domestic');

  const handleTapClick = (tapCate) => {
    setClickedTap(tapCate);
  };

  return (
    <div className="pages__main">
      <Header />
      <Tap handleTapClick={handleTapClick} />
      <List clickedTap={clickedTap}/>
    </div>
  );
};


// http 통신 구현
// const Main = ({ http }) => {

//   const [chartList, setChartList] = useState([]);
//   const [selectedTap, setSelectedTap] = useState('domestic');

//   // tab category 별 검색
//   const search = (tapCate) => {
//     http
//     .searchList(tapCate) //
//     .then(res => setChartList(res.chartList));
//   }

//   // 최초 생성 시, 국내 챠트 list 검색
//   useEffect(() => {
//     search('domestic');
//   }, [search])

//   const handleTapClick = (tapCate) => {
//     setSelectedTap(tapCate); // http 통신 방식으로 변경되면 해당 useState 필요 없음
//     search(tapCate);
//   };

//   return (
//     <>
//       <Header />
//       <Tap handleTapClick={handleTapClick} />
//       <List clickedTap={selectedTap}/>
//       {/* <List chartList={chartList}/> */}
//     </>
//   );
// };

export default Main;
