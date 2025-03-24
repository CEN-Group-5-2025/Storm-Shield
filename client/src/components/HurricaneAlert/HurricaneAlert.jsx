import React from "react";
import styles from "./HurricaneAlert.module.css";
import WarningIcon from "./WarningIcon";

const HurricaneAlert = () => {
  return (
    <section className={styles.alertContainer}>
      <div className={styles.iconWrapper}>
        <WarningIcon />
      </div>
      <h1 className={styles.alertTitle}>GET HURRICANE ALERTS</h1>
      <p className={styles.alertDescription}>
        Sign up for alerts to stay informed during emergencies
      </p>
    </section>
  );
};

export default HurricaneAlert; 