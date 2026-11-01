import { useEffect, useState } from "react";
import { siteData } from "../data/portfolio";
import LampToggle from "./LampToggle";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { role, location, tagline, intro, links } = siteData;
  const [isLight, setIsLight] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("tk-theme") === "light",
  );

  useEffect(() => {
    if (isLight) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("tk-theme", isLight ? "light" : "dark");
  }, [isLight]);

  const toggleTheme = () => setIsLight((current) => !current);

  return (
    <section className={styles.heroSection} id="hero">
      <div className="portfolio-container">
        <div className={styles.heroGrid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            {/* Top row with status line and mobile-only compact lamp */}
            <div className={styles.topMetaRow}>
              <div className={styles.statusLine}>
                <span className={styles.statusDot}>●</span>
                <span className={styles.statusText}>
                  {role} / {location}
                </span>
              </div>
            </div>

            <div className={styles.titleWrap}>
              <span className={styles.watermark}>00</span>
              <h1 className={styles.name}>
                Talha Khan<span className={styles.dot}>.</span>
              </h1>
              <LampToggle
                className={styles.mobileLampWrap}
                variant="bulb"
                isLight={isLight}
                onToggle={toggleTheme}
              />
            </div>

            <p className={styles.tagline}>
              {tagline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>

            <p className={styles.intro}>{intro}</p>

            <div className={styles.linksRow}>
              <a href={`mailto:${links.email}`} className={styles.link}>
                <span className={styles.linkLabel}>Email</span>
                <span className={styles.arrow}>↗</span>
              </a>
              <span className={styles.pipe}>|</span>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.linkLabel}>GitHub</span>
                <span className={styles.arrow}>↗</span>
              </a>
              <span className={styles.pipe}>|</span>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <span className={styles.linkLabel}>LinkedIn</span>
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>

          {/* Desktop Right Column: Prominent Lamp Toggle */}
          <div className={styles.desktopLampCol}>
            <LampToggle isLight={isLight} onToggle={toggleTheme} />
          </div>
        </div>
      </div>
    </section>
  );
}
