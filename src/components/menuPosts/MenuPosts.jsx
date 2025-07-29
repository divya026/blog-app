import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";
import Link from "next/link";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.menuItems}>
      <Link href={"/"} className={styles.menuItem}>
        {withImage && (
          <div className={styles.menuImageContainer}>
            <Image src="/paris.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.menuTextContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h4 className={styles.menuPostTitle}>
            The Eiffel Tower rises as a timeless symbol of romance and artistic
            grace.
          </h4>
          <div className={styles.menuPostDetails}>
            <span className={styles.username}>Srishti D</span>
            <span className={styles.date}>10.10.2024</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.menuItem}>
        {withImage && (
          <div className={styles.menuImageContainer}>
            <Image
              src="/switzerland.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.menuTextContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h4 className={styles.menuPostTitle}>
            A serene escape where alpine beauty and silence compose nature’s
            finest symphony.
          </h4>
          <div className={styles.menuPostDetails}>
            <span className={styles.username}>Divya Dewangan</span>
            <span className={styles.date}>11.11.2024</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.menuItem}>
        {withImage && (
          <div className={styles.menuImageContainer}>
            <Image src="/europe.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.menuTextContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h4 className={styles.menuPostTitle}>
            A seaside village clinging to Italy’s cliffs, where waves and
            history whisper together.
          </h4>
          <div className={styles.menuPostDetails}>
            <span className={styles.username}>Harshal Bokade</span>
            <span className={styles.date}>11.12.2024</span>
          </div>
        </div>
      </Link>
      <Link href={"/"} className={styles.menuItem}>
        {withImage && (
          <div className={styles.menuImageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.menuTextContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h4 className={styles.menuPostTitle}>
            A continent woven with history, culture, and timeless human stories.
          </h4>
          <div className={styles.menuPostDetails}>
            <span className={styles.username}>Aishwarya D</span>
            <span className={styles.date}>01.01.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
