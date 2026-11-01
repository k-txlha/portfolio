import { experience } from "../data/portfolio";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  const [swe, intern] = experience;

  return (
    <section className={styles.section} id="experience">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionNum}>01</span>
            <h2 className={styles.sectionTitle}>EXPERIENCE</h2>
          </div>
          <span className={styles.headerRight}>BUILDING IN PRODUCTION</span>
        </div>
        <div className={styles.sectionLine} />

        {/* Roles List */}
        <div className={styles.entriesList}>
          {/* Software Engineer */}
          <article className={styles.entry}>
            <div className={styles.leftCol}>
              <span className={styles.dates}>{swe.dates}</span>
              <span className={styles.location}>{swe.location}</span>
              <span className={styles.companyBadge}>{swe.company}</span>
            </div>

            <div className={styles.rightCol}>
              <div className={styles.titleRow}>
                <h3 className={styles.roleTitle}>{swe.title}</h3>
                <span className={styles.roleType}>{swe.type}</span>
              </div>

              {swe.metrics && (
                <div className={styles.metricsBox}>
                  {swe.metrics.map((m) => (
                    <div key={m.label} className={styles.metricCell}>
                      <span className={styles.metricVal}>{m.value}</span>
                      <span className={styles.metricLbl}>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className={styles.bullets}>
                {swe.bullets.map((b, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDot}>·</span>
                    <span className={styles.bulletText}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Divider between roles */}
          <div className={styles.entryDivider} />

          {/* SDE Intern */}
          <article className={styles.entry}>
            <div className={styles.leftCol}>
              <span className={styles.dates}>{intern.dates}</span>
              <span className={styles.location}>{intern.location}</span>
              <span className={styles.companyBadge}>{intern.company}</span>
            </div>

            <div className={styles.rightCol}>
              <div className={styles.titleRow}>
                <h3 className={styles.roleTitle}>{intern.title}</h3>
                <span className={styles.roleType}>{intern.type}</span>
              </div>

              <ul className={styles.bullets}>
                {intern.bullets.map((b, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDot}>·</span>
                    <span className={styles.bulletText}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
