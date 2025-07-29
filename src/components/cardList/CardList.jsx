import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import data from "../../api/data";
import Image from "next/image";

const CardList = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Recent Posts</h1>
      </div>
      {data.destinations.map((val) => {
        return (
          <>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  className={styles.image}
                  src={val.image}
                  alt={val.location}
                  height={270}
                  width={250}
                />
              </div>
              <div className={styles.cardDesc}>
                <p className={styles.dateConatiner}>
                  <span className={styles.date}>{val.date}</span>
                  <span className={styles.culture}> {val.culture}</span>
                </p>
                <h3 className={`${styles.cardDescTitle} ${styles.space}`}>
                  {val.heading}
                </h3>
                <p className={`${styles.cardDescPara} ${styles.space}`}>
                  {val.paragraph}
                </p>
                <div>
                  <button className={`${styles.cardButton} ${styles.space}`}>
                    <b>Read More</b>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Pagination />
    </div>
  );
};

export default CardList;
