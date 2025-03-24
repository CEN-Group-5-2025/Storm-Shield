import React from "react";
import styles from "./VolunteerHelp.module.css";
import VolunteerIcon from "./VolunteerIcon";

const VolunteerHelp = () => {
  return (
    <section className={styles.volunteerContainer}>
      <div className={styles.iconWrapper}>
        <VolunteerIcon />
      </div>
      <h1 className={styles.volunteerTitle}>VOLUNTEER & FIND HELP</h1>
      <p className={styles.volunteerDescription}>
        Sign up to be a volunteer or to be matched with volunteers
      </p>
    </section>
  );
};

export default VolunteerHelp; 