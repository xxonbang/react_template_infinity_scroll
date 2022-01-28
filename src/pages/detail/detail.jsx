import styles from "./detail.module.css";
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Detail = ({ match }) => {
  const BASE_URL = "http://localhost:3001/detail/";

  const [detail, setDetail] = useState({});

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get(BASE_URL + match.params.id);
      if (!data) return;
      setDetail(data.chart);
    } catch {
      throw new Error("fetch Error : Detail Page Data");
    }
  }, [match.params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles.backIcon} />
        </Link>
        <div>
          <div className={styles.header}>
            <div className={styles.title}>{detail.title}</div>
            {detail.imageFile && (
              <img
                className="li__imageFile"
                alt="img"
                src={require("../../assets/images/" + detail.imageFile).default}
              />
            )}
            <div className={styles.singer}>{detail.singer}</div>
          </div>
          <div className={styles.contents}>
            <div className={styles.lyricist}>
              <span className={styles.lyricist__title}>작사</span>
              <span className={styles.lyricist__contents}>
                {detail.lyricist}
              </span>
            </div>
            <div className={styles.melodizer}>
              <span className={styles.melodizer__title}>작곡</span>
              <span className={styles.melodizer__contents}>
                {detail.melodizer}
              </span>
            </div>
            <div className={styles.genre}>
              <span className={styles.genre__title}>장르</span>
              <span className={styles.genre__contents}>{detail.genre}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
