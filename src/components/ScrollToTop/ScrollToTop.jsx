import React from "react";
import styles from "./scroll.module.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className={styles.scrollToTopButton}>
      ↑
    </button>
  );
};

export default ScrollToTopButton;
