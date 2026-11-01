import { education, certifications } from "../data/portfolio";
import styles from "./EducationSection.module.css";

export default function EducationSection() {
  const [be, diploma] = education;

  return (
    <section className={styles.section} id="education">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionNum}>04</span>
            <h2 className={styles.sectionTitle}>EDUCATION</h2>
          </div>
        </div>
        <div className={styles.sectionLine} />

        {/* Education Entries */}
        <div className={styles.entriesList}>
          {/* BE */}
          <article className={styles.entry}>
            <div className={styles.leftCol}>
              <span className={styles.date}>{be.date}</span>
            </div>
            <div className={styles.rightCol}>
              <h3 className={styles.degreeTitle}>{be.degree}</h3>
              <p className={styles.institution}>{be.institution}</p>
              <span className={styles.location}>{be.location}</span>
            </div>
          </article>

          <div className={styles.entryDivider} />

          {/* Diploma */}
          <article className={styles.entry}>
            <div className={styles.leftCol}>
              <span className={styles.date}>{diploma.date}</span>
            </div>
            <div className={styles.rightCol}>
              <h3 className={styles.degreeTitle}>{diploma.degree}</h3>
              <p className={styles.institution}>{diploma.institution}</p>
              <span className={styles.location}>{diploma.location}</span>
            </div>
          </article>

          {/* <div className={styles.entryDivider} /> */}

          {/* Certifications Row
          <div className={styles.entry}>
            <div className={styles.leftCol}>
              <span className={styles.certHeading}>CERTIFICATIONS</span>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.certList}>
                {certifications.map((c, i) => (
                  <div key={c.name} className={styles.certRow}>
                    <span className={styles.certName}>{c.name}</span>
                    <span className={styles.certIssuerBadge}>{c.issuer}</span>
                    {i < certifications.length - 1 && (
                      <div className={styles.certLine} />
                    )}
                  </div>
                ))}
              </div>
            </div> 
        </div> */}
        </div>
      </div>
    </section >
  );
}
