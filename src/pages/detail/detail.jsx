import './detail.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { LISTDETAIL } from "../../mockData/listDetail";

const Detail = () => {

  const detail = LISTDETAIL.chart;

  return (
    <div className="pages__detail">
      <Link to={"/"}>
        <FontAwesomeIcon icon={ faArrowLeft } />
      </Link>
      <div>
        <div className="detail__header">
          <div className="detail__title">{detail.title}</div>
          <div className="detail__singer">{detail.singer}</div>
        </div>
        <div className="detail__contents">
          <div className="detail__lyricist">
            <span className="detail__lyricist__title">작사</span>
            <span className="detail__lyricist__contents">{detail.lyricist}</span>
          </div>
          <div className="detail__melodizer">
            <span className="detail__melodizer__title">작곡</span>
            <span className="detail__melodizer__contents">{detail.melodizer}</span>
          </div>
          <div className="detail__genre">
            <span className="detail__genre__title">장르</span>
            <span className="detail__genre__contents">{detail.genre}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


// http 통신 구현
// const Detail = ({ http, match }) => {

//   const [detail, setDetail] = useState({});

//   useEffect(() => {
//     http
//       .searchDetail(match.params.id)
//       .then(res => setDetail(res.chart));
//   }, []);

//   return (
  //   <div className="pages__detail">
  //   <Link to={"/"}>
  //     <FontAwesomeIcon icon={ faArrowLeft } />
  //   </Link>
  //   <div>
  //     <div className="detail__header">
  //       <div className="detail__title">{detail.title}</div>
  //       <div className="detail__singer">{detail.singer}</div>
  //     </div>
  //     <div className="detail__contents">
  //       <div className="detail__lyricist">
  //         <span className="detail__lyricist__title">작사</span>
  //         <span className="detail__lyricist__contents">{detail.lyricist}</span>
  //       </div>
  //       <div className="detail__melodizer">
  //         <span className="detail__melodizer__title">작곡</span>
  //         <span className="detail__melodizer__contents">{detail.melodizer}</span>
  //       </div>
  //       <div className="detail__genre">
  //         <span className="detail__genre__title">장르</span>
  //         <span className="detail__genre__contents">{detail.genre}</span>
  //       </div>
  //     </div>
  //   </div>
  // </div>
//   );
// };

export default Detail;
