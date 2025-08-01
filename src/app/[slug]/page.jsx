import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

const page = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h2>Cliffside Dreams: Where Time Meets the Sea</h2>
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.username}>Divya Dewangan</span>
                <span className={styles.date}>11.11.2024</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description}>
              <p>
                Tucked into the rugged cliffs of Italy’s Cinque Terre, Vernazza
                whispers stories of the sea with every crashing wave. This
                picturesque village, crowned with a medieval watchtower, clings
                boldly to the rock as if guarding centuries of secrets. With
                terracotta rooftops basking in the sun and turquoise waters
                stretching to the horizon, it’s a place where past and present
                blend into pure Mediterranean magic. From hidden alleys to
                vibrant harbor life, every corner invites you to slow down—and
                simply feel.
              </p>
            </div>
            <div className={styles.comments}>
              <Comments />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
