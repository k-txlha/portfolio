import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.headerWrapper}>
      <div className="portfolio-container">
        <div className={styles.headerInner}>
          <a href="#" className={styles.brand} aria-label="Talha Khan — Home">
            tk<span className={styles.dot}>.</span>
          </a>
          <nav className={styles.nav} aria-label="Main Navigation">
            <a href="#experience" className={styles.navLink}>
              work
            </a>
            <a href="#toolkit" className={styles.navLink}>
              toolkit
            </a>
            <a href="#contact" className={styles.navLink}>
              contact <span className={styles.arrow}>↗</span>
            </a>
          </nav>
        </div>
        <div className={styles.headerLine} />
      </div>
    </header>
  );
}
