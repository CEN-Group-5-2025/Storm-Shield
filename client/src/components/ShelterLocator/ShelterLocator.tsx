import HouseIcon from "./HouseIcon";
import styles from "./ShelterLocator.module.css";

const ShelterLocator = () => {
  return (
    <section className={styles.shelterContainer}>
      <div className={styles.iconWrapper}>
        <HouseIcon />
      </div>
      <h1 className={styles.shelterTitle}>VIEW NEAREST SHELTER</h1>
      <p className={styles.shelterDescription}>
        Find safe shelter locations near you during emergencies
      </p>
    </section>
  );
};

export default ShelterLocator; 