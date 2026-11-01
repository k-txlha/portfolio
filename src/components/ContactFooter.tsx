import { siteData } from "../data/portfolio";
import styles from "./ContactFooter.module.css";

export default function ContactFooter() {
  const { links } = siteData;

  return (
    <footer className={styles.footer} id="contact">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionNum}>05</span>
            <h2 className={styles.sectionTitle}>GET IN TOUCH</h2>
          </div>
        </div>
        <div className={styles.sectionLine} />

        {/* Content */}
        <div className={styles.contentWrap}>
          <span className={styles.label}>LET'S TALK</span>
          <h3 className={styles.heading}>
            Have something in <span className={styles.questionMark}>mind?</span>
          </h3>

          <div className={styles.contactGrid}>
            <div className={styles.contactLeft}>
              <a href={`mailto:${links.email}`} className={styles.linkPrimary}>
                {links.email} <span className={styles.arrow}>↗</span>
              </a>
              <a href={`tel:${links.phone}`} className={styles.linkSecondary}>
                {links.phone}
              </a>
            </div>

            <div className={styles.contactRight}>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                {links.githubDisplay} <span className={styles.arrow}>↗</span>
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkPrimary}
              >
                {links.linkedinDisplay} <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider line before signature */}
        <div className={styles.footerLine} />

        {/* Footer Signature */}
        <div className={styles.signatureRow}>
          <span>© 2026 TALHA KHAN</span>
          <span>END OF PAGE. NOT THE WORK.</span>
        </div>
      </div>
    </footer>
  );
}
