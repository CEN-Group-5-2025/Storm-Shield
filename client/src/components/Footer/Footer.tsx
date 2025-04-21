import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>STORMSHIELD © 2025</p>
      <p className={styles.footerText}>PRIVACY POLICY</p>
    </footer>
  )
}

export default Footer
