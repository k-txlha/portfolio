import { toolkit } from "../data/portfolio";
import styles from "./ToolkitSection.module.css";

export default function ToolkitSection() {
  return (
    <section className={styles.section} id="toolkit">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionNum}>03</span>
            <h2 className={styles.sectionTitle}>TECHNICAL TOOLKIT</h2>
          </div>
          <span className={styles.headerRight}>TOOLS OF THE TRADE</span>
        </div>
        <div className={styles.sectionLine} />

        {/* 5 Rows */}
        <div className={styles.rowsList}>
          {toolkit.map((item) => (
            <div key={item.group} className={styles.row}>
              <div className={styles.leftCol}>
                <span className={styles.groupName}>{item.group}</span>
              </div>
              <div className={styles.rightCol}>
                <div className={styles.chipsWrap}>
                  {item.skills.map((skill) => (
                    <span key={skill} className={styles.skillChip}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
