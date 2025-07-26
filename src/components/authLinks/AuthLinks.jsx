"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  let status = "authenticated";
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        {status == "authenticated" ? (
          <Link href="/">Login</Link>
        ) : (
          <Link href="/">Logout</Link>
        )}
      </div>
      {!open && (
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
        </div>
      )}

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>About</Link>
          {status == "authenticated" ? (
            <Link href="/">Login</Link>
          ) : (
            <Link href="/">Logout</Link>
          )}
        </div>
      )}

      {open && (
        <div className={styles.close} onClick={() => setOpen(!open)}>
          {" "}
          Close
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
