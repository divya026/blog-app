import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>
          <b>Hey there ! </b>Stories that speak, ideas that shine. Come explore
          what I’ve brought to life.
        </h2>
      </div>
      <div className={styles.post}>
        <div className={styles.postImg}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
        <div className={styles.postDesc}>
          <h3 className={styles.postDescTitle}>
            Cliffside Dreams: Where Time Meets the Sea
          </h3>
          <p className={styles.postDescPara}>
            Tucked into the rugged cliffs of Italy’s Cinque Terre, Vernazza
            whispers stories of the sea with every crashing wave. This
            picturesque village, crowned with a medieval watchtower, clings
            boldly to the rock as if guarding centuries of secrets. With
            terracotta rooftops basking in the sun and turquoise waters
            stretching to the horizon, it’s a place where past and present blend
            into pure Mediterranean magic. From hidden alleys to vibrant harbor
            life, every corner invites you to slow down—and simply feel.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
