import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.menuSubtitle}>what's hot</h3>
      <h2 className={styles.menuTitle}>Most Popular</h2>
      <MenuPosts withImage={false} />
      <h3 className={styles.menuSubtitle}>Discover by topic</h3>
      <h2 className={styles.menuTitle}>Categories</h2>
      <MenuCategories />
      <h3 className={styles.menuSubtitle}>Chosen by the editor</h3>
      <h2 className={styles.menuTitle}>Editors Pick</h2>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
