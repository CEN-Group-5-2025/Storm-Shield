import * as React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>STORMSHIELD © 2025</p>
      <p className={styles.footerText}>PRIVACY POLICY</p>
    </footer>
  );
}

export default Footer; 