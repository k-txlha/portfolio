import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 1400);
    const removeTimer = window.setTimeout(() => {
      document.documentElement.classList.remove("is-loading");
      setIsVisible(false);
    }, 1900);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.loadingScreen} ${isLeaving ? styles.leaving : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className={styles.frame}>
        <header className={styles.header}>
          <span className={styles.brand}>
            tk<span className={styles.accent}>.</span>
          </span>
          <span className={styles.headerNote}>PORTFOLIO / 2026</span>
        </header>

        <main className={styles.main}>
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            <span>SOFTWARE ENGINEER / MUMBAI, INDIA</span>
          </div>
          <p className={styles.message}>
            <span className={styles.greeting}>Hola, Amigo,</span>
            <span className={styles.question}>kaise ho, theek ho?</span>
          </p>
        </main>

        <footer className={styles.footer}>
          <div className={styles.progressMeta}>
            <span>INITIALIZING PORTFOLIO</span>
            <span>01 <span className={styles.accent}>/</span> 05</span>
          </div>
          <div className={styles.progressTrack} aria-hidden="true">
            <span className={styles.progressFill} />
          </div>
          <span className={styles.footerNote}>TALHA KHAN — BACKEND ENGINEER</span>
        </footer>
      </div>
    </div>
  );
}
