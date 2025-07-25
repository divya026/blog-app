import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/themeContext/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  const handleClick = () => {
    toggle();
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme === "dark" ? "#fff" : "#333",
        borderColor: theme === "dark" ? "#333" : "#fff",
      }}
      onClick={handleClick}
    >
      <Image src="/moon.png" alt="" height={20} width={20} />
      <div
        className={styles.ball}
        style={{
          backgroundColor: theme === "dark" ? "#333" : "#fff",
          left: theme === "dark" ? "1.7rem" : "0.1rem",
        }}
      ></div>
      <Image src="/sun.png" alt="" height={20} width={20} />
    </div>
  );
};

export default ThemeToggle;
