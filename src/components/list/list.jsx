import styles from "./list.module.css";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const List = ({ selectedTap }) => {
  const BASE_URL = "http://localhost:3001/";

  const [chartList, setChartList] = useState([]);
  const loadMoreBtn = useRef(null);

  const fetchData = useCallback(async (category) => {
    try {
      const { data } = await axios.get(BASE_URL + category);
      if (!data) return;
      setChartList((prev) => [...prev, ...data.chartList]);
      // scrollIntoView
      scrollIntoLoadMoreBtn();
    } catch {
      throw new Error("fetch error : list datas");
    }
  }, []);

  useEffect(() => {
    fetchData(selectedTap);
    // tap 변경을 위한 state 초기화
    return () => setChartList([]);
  }, [selectedTap, fetchData]);

  function scrollIntoLoadMoreBtn() {
    loadMoreBtn.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  function onClick() {
    fetchData("domestic");
  }

  function toTheTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {chartList && (
        <>
          <ul>
            {chartList.map((song, idx) => (
              <li key={idx}>
                <span className={styles.rank}>{song.rank}</span>
                <img
                  className={styles.imageFile}
                  alt="img"
                  src={require("../../assets/images/" + song.imageFile).default}
                />
                <Link to={`/detail/${song.id}`}>
                  <span>{song.title}</span>
                </Link>
                <span className={styles.singer}>{song.singer}</span>
              </li>
            ))}
          </ul>
          <div
            ref={loadMoreBtn}
            className={styles.loadMoreBtn}
            onClick={onClick}
          >
            Load More...
          </div>
          <div id="test" onClick={toTheTop}>
            to the top
          </div>          
        </>
      )}
    </>
  );
};

export default List;
