import "./list.css";
import React from "react";
import DLIST from "../../mockData/dlist";
import OLIST from "../../mockData/olist";
import { Link } from "react-router-dom";

const List = ({ clickedTap }) => {

  //TODO: dummy data, 삭제 예정
  const domestic = DLIST.chartList;
  const overseas = OLIST.chartList;
  
  // const IMG_BASE_PATH = "../../assets/images/";

  //   function getImagePath(song) {
  //     const path = IMG_BASE_PATH + song.imageFile;
  //     return path;
  //     const img = song.imageFile;
  // const imgFile = `../../assets/${img}`;
  // return imgFile;

  //     const image = new Image();
  //     image.src = "../../assets/" + song.imageFile;
  //     return image;
  //   }

  return (
    <>
      { clickedTap && clickedTap === 'domestic' &&
        <ul>
          {domestic.map((song) => (
            <li key={song.id}>
              <span className="li__rank">{song.rank}</span>
              <img
                className="li__imageFile"
                alt="img"
                src={require("../../assets/images/" + song.imageFile).default}
              />
              <Link to={`/detail/${song.id}`}>
                <span className="li__title">{song.title}</span>
              </Link>
              <span className="li__singer">{song.singer}</span>
            </li>
          ))}
        </ul>
      }
      { clickedTap && clickedTap === 'overseas' &&
        <ul>
          {overseas.map((song) => (
            <li key={song.id}>
              <span>{song.rank}</span>
              <img
                alt="img"
                src={require("../../assets/images/" + song.imageFile).default}
              />
              <Link to={`/detail/${song.id}`}>
                <span>{song.title}</span>
              </Link>
              <span>{song.singer}</span>
            </li>
          ))}
        </ul>
      }
    </>
  );
};


// http 통신 구현
// const List = ({ chartList }) => {

// useState, loading 활용하여 loading 중일 떈 spinner, 로딩 완료되면 contents 보이도록 처리 -> detail page 에도 적용

//   return (
//     <>
//       { chartList &&
//         <ul>
//           {chartList.map((song) => (
//             <li key={song.id}>
//               <span>{song.rank}</span>
//               <img
//                 alt="img"
//                 src={require("../../assets/images/" + song.imageFile).default}
//               />
//               <Link to={`/detail/${song.id}`}>
//                 <span>{song.title}</span>
//               </Link>
//               <span>{song.singer}</span>
//             </li>
//           ))}
//         </ul>
//       }
//     </>
//   );
// };

export default List;
