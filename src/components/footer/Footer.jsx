import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.footerTitle}>
          <span className={styles.imageContainer}>
            <Image
              src="/profile_pic.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.image}
            />
          </span>
          <h2 className={styles.imageTitle}>DivyaBlog</h2>
        </div>
        <div className={styles.footerDesc}>
          <p>
            {`DivyaBlog is your window to timeless destinations, cultural wonders,
            and soul-stirring journeys. From city lights to cliffside escapes,
            we bring you stories that inspire, inform, and ignite your
            wanderlust.`}
          </p>
        </div>
        <div className={styles.footerSocial}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="facebook" width={24} height={24} />
          <Image src="/youtube.png" alt="facebook" width={24} height={24} />
        </div>
      </div>
      <div className={styles.link}>
        <div className={styles.links}>
          <h4>Links</h4>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.links}>
          {" "}
          <h4>Tags</h4>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Coding</Link>
          <Link href={"/"}>Travel</Link>
        </div>
        <div className={styles.links}>
          {" "}
          <h4>Socials</h4>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
