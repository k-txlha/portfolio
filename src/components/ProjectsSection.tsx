import { projects, siteData } from "../data/portfolio";
import { Fragment } from "react";
import {
  Activity,
  FileCheck,
  Bell,
  Lock,
  Code2,
  Layers,
  GitMerge,
  Laptop,
  Zap,
  Radio,
  Database,
  ShieldAlert,
  UploadCloud,
  Search,
  Cpu,
} from "lucide-react";
import styles from "./ProjectsSection.module.css";

// Helper to get vector icon for pipeline nodes
function getPipelineIcon(nodeLabel: string) {
  switch (nodeLabel.toLowerCase()) {
    case "endpoint":
      return <Laptop size={13} className={styles.nodeIcon} />;
    case "fastapi":
      return <Zap size={13} className={styles.nodeIcon} />;
    case "kafka":
      return <Radio size={13} className={styles.nodeIcon} />;
    case "clickhouse":
      return <Database size={13} className={styles.nodeIcon} />;
    case "detection":
      return <ShieldAlert size={13} className={styles.nodeIcon} />;
    case "documents":
      return <UploadCloud size={13} className={styles.nodeIcon} />;
    case "embeddings":
      return <Layers size={13} className={styles.nodeIcon} />;
    case "hybrid":
      return <Search size={13} className={styles.nodeIcon} />;
    case "hybrid retrieval":
      return <Search size={13} className={styles.nodeIcon} />;
    case "rrf":
      return <GitMerge size={13} className={styles.nodeIcon} />;
    case "ollama":
      return <Cpu size={13} className={styles.nodeIcon} />;
    default:
      return null;
  }
}

export default function ProjectsSection() {
  const [sysmon, sift] = projects;

  return (
    <section className={styles.section} id="projects">
      <div className="portfolio-container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <span className={styles.sectionNum}>02</span>
            <h2 className={styles.sectionTitle}>SELECTED PROJECTS</h2>
          </div>
          <span className={styles.headerRight}>SECURITY / RETRIEVAL</span>
        </div>
        <div className={styles.sectionLine} />

        <div className={styles.projectsList}>
          {/* ── PROJECT 01: Sysmon ── */}
          <article className={styles.project}>
            {/* Left Column: Project index, name, and telemetry signals */}
            <div className={styles.leftCol}>
              <span className={styles.projectIndex}>PROJECT 01</span>
              <div className={styles.projectNameRow}>
                <h3 className={styles.projectName}>{sysmon.name}</h3>
                <a
                  className={`${styles.projectGithub} ${styles.mobileGithub}`}
                  href={sysmon.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${sysmon.name} on GitHub`}
                >
                  GitHub ↗
                </a>
              </div>

              {/* Signal list with vector icons */}
              <div className={styles.signalsList}>
                <div className={styles.signalItem}>
                  <Activity size={12} className={styles.signalIcon} />
                  <span>endpoint activity</span>
                </div>
                <div className={styles.signalItem}>
                  <FileCheck size={12} className={styles.signalIcon} />
                  <span>file integrity</span>
                </div>
                <div className={styles.signalItem}>
                  <Bell size={12} className={styles.signalIcon} />
                  <span>rule-based alerts</span>
                </div>
              </div>
            </div>

            {/* Right Column: Category Badge, Subtitle, Desc, Bullets, Pipeline, Tags */}
            <div className={styles.rightCol}>
              <div className={styles.categoryRow}>
                <span className={styles.categoryBadge}>{sysmon.category}</span>
              </div>

              <div className={styles.projectSubtitleRow}>
                <h4 className={styles.projectSubtitle}>{sysmon.subtitle}</h4>
                <a
                  className={`${styles.projectGithub} ${styles.desktopGithub}`}
                  href={sysmon.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${sysmon.name} on GitHub`}
                >
                  GitHub ↗
                </a>
              </div>
              <p className={styles.projectDesc}>{sysmon.description}</p>

              <ul className={styles.bullets}>
                {sysmon.bullets.map((b, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDash}>—</span>
                    <span className={styles.bulletText}>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Pipeline Container */}
              <div className={styles.pipelineWrap}>
                <div className={styles.pipelineHeaderRow}>
                  <span className={styles.pipelineTitle}>
                    {sysmon.pipelineTitle}
                  </span>
                  <span className={styles.scrollHint}>scroll →</span>
                </div>
                <div className={styles.pipelineScrollArea}>
                  <div
                    className={`${styles.pipelineBox} ${
                      sysmon.pipeline.length > 4
                        ? styles.pipelineBoxCompact
                        : ""
                    }`}
                  >
                    {sysmon.pipeline.map((node, i) => (
                      <Fragment key={node.label}>
                        <div className={styles.pipelineNode}>
                          <div className={styles.nodeIconHeader}>
                            {getPipelineIcon(node.label)}
                            <span className={styles.nodePrimary}>
                              {node.label}
                            </span>
                          </div>
                          <span className={styles.nodeSub}>
                            {node.sublabel}
                          </span>
                        </div>
                        {i < sysmon.pipeline.length - 1 && (
                          <span
                            className={styles.pipelineArrow}
                            aria-hidden="true"
                          />
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.tagsRow}>
                {sysmon.tags.map((tag, i) => (
                  <span className={styles.tagItem} key={tag}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Divider between Project 01 and Project 02 */}
          <div className={styles.projectDivider} />

          {/* ── PROJECT 02: Sift ── */}
          <article className={styles.project}>
            {/* Left Column: Project index and name */}
            <div className={styles.leftCol}>
              <span className={styles.projectIndex}>PROJECT 02</span>
              <div className={styles.projectNameRow}>
                <h3 className={styles.projectName}>{sift.name}</h3>
                <a
                  className={`${styles.projectGithub} ${styles.mobileGithub}`}
                  href={sift.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${sift.name} on GitHub`}
                >
                  GitHub ↗
                </a>
              </div>
              <div className={styles.signalsList}>
                <div className={styles.signalItem}>
                  <Lock size={12} className={styles.signalIcon} />
                  <span>session-isolated</span>
                </div>
                <div className={styles.signalItem}>
                  <Code2 size={12} className={styles.signalIcon} />
                  <span>source-aware</span>
                </div>
              </div>
            </div>

            {/* Right Column: Category Badge, Subtitle, Desc, Bullets, Pipeline, Tags */}
            <div className={styles.rightCol}>
              <div className={styles.categoryRow}>
                <span className={styles.categoryBadge}>{sift.category}</span>
              </div>

              <div className={styles.projectSubtitleRow}>
                <h4 className={styles.projectSubtitle}>{sift.subtitle}</h4>
                <a
                  className={`${styles.projectGithub} ${styles.desktopGithub}`}
                  href={sift.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${sift.name} on GitHub`}
                >
                  GitHub ↗
                </a>
              </div>
              <p className={styles.projectDesc}>{sift.description}</p>

              <ul className={styles.bullets}>
                {sift.bullets.map((b, i) => (
                  <li key={i} className={styles.bulletItem}>
                    <span className={styles.bulletDash}>—</span>
                    <span className={styles.bulletText}>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Pipeline Container */}
              <div className={styles.pipelineWrap}>
                <div className={styles.pipelineHeaderRow}>
                  <span className={styles.pipelineTitle}>
                    {sift.pipelineTitle}
                  </span>
                  <span className={styles.scrollHint}>scroll →</span>
                </div>
                <div className={styles.pipelineScrollArea}>
                  <div
                    className={`${styles.pipelineBox} ${
                      sift.pipeline.length > 4 ? styles.pipelineBoxCompact : ""
                    }`}
                  >
                    {sift.pipeline.map((node, i) => (
                      <Fragment key={node.label}>
                        <div className={styles.pipelineNode}>
                          <div className={styles.nodeIconHeader}>
                            {getPipelineIcon(node.label)}
                            <span className={styles.nodePrimary}>
                              {node.label}
                            </span>
                          </div>
                          <span className={styles.nodeSub}>
                            {node.sublabel}
                          </span>
                        </div>
                        {i < sift.pipeline.length - 1 && (
                          <span
                            className={styles.pipelineArrow}
                            aria-hidden="true"
                          />
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.tagsRow}>
                {sift.tags.map((tag, i) => (
                  <span className={styles.tagItem} key={tag}>
                    {i > 0 && <span aria-hidden="true">·</span>}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
        <div className={styles.moreProjectsRow}>
          <a
            className={styles.moreProjectsLink}
            href={siteData.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            More ↗
          </a>
        </div>
      </div>
    </section>
  );
}
