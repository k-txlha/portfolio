// Portfolio data — edit content here without touching layout components

export const siteData = {
  name: "Talha Khan",
  role: "SOFTWARE ENGINEER",
  location: "MUMBAI, INDIA",
  tagline: "Backend systems, data pipelines,\nand the details that make them reliable.",
  intro:
    "I'm a software engineer working with Python, FastAPI and distributed data systems. My work spans enterprise integrations, security telemetry and retrieval-augmented generation.",
  sideNote: "one more debug log.",
  links: {
    email: "talhakhan7640@gmail.com",
    github: "https://github.com/k-txlha",
    githubDisplay: "github.com/k-txlha",
    linkedin: "https://linkedin.com/in/k-talha",
    linkedinDisplay: "linkedin.com/in/k-talha",
    phone: "+91 8976311903",
  },
};

export interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  dates: string;
  location: string;
  bullets: string[];
  metrics?: { value: string; label: string }[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Zeron",
    type: "Full-time",
    dates: "Dec 2025 – Jun 2026",
    location: "Mumbai, Maharashtra",
    bullets: [
      "Designed FastAPI microservices for production bursts of up to 600K records/batch, sustaining 5,000+ events/sec across 8+ live client deployments.",
      "Architected ClickHouse schemas for 18+ external integrations, enabling sub-second queries on large-scale datasets.",
      "Led end-to-end integrations for 12+ enterprise platforms, from gathering requirements to resolving live credential and network-port blockers.",
      "Wrote analytical SQL to automate compliance evidence for key operational metrics, translating SEBI CSCRF requirements into engineering deliverables.",
      "Set up distributed tracing and monitoring with SigNoz across microservices, improving observability and cutting incident response time.",
    ],
    metrics: [
      { value: "600K", label: "records / batch" },
      { value: "5K+", label: "events / sec" },
      { value: "18+", label: "integrations" },
      { value: "8+", label: "live clients" },
    ],
  },
  {
    title: "SDE Intern",
    company: "Zeron",
    type: "Internship",
    dates: "Sep 2025 – Nov 2025",
    location: "Mumbai, Maharashtra",
    bullets: [
      "Built a Pydantic validation layer to catch malformed payloads before they reached production data stores, improving pipeline reliability.",
      "Automated scheduled Apache Airflow jobs across 18+ external tools in a multi-tenant environment.",
      "Built internal CLI diagnostics that sped up client onboarding and reduced integration troubleshooting time.",
    ],
  },
];

export interface ProjectItem {
  id: string;
  name: string;
  githubUrl: string;
  category: string;
  subtitle: string;
  description: string;
  bullets: string[];
  pipeline: { label: string; sublabel: string }[];
  pipelineTitle: string;
  tags: string[];
  sideLabels?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "01",
    name: "Sysmon",
    githubUrl: "https://github.com/k-txlha/sysmon",
    category: "ENDPOINT SECURITY",
    subtitle: "Distributed Endpoint Security Telemetry Platform",
    description:
      "Endpoint monitoring for process activity, persistence mechanisms and file integrity, with rule-based detection and alerting.",
    bullets: [
      "Built a FastAPI and Kafka ingestion backend to persist endpoint telemetry in ClickHouse for detection and analysis.",
      "Implemented bulk writes and rate limiting with exponential backoff for high-volume ingestion and prevention of consumer timeouts.",
    ],
    pipelineTitle: "DATA PIPELINE",
    pipeline: [
      { label: "Endpoint", sublabel: "agent" },
      { label: "FastAPI", sublabel: "ingest" },
      { label: "Apache Kafka", sublabel: "stream" },
      { label: "ClickHouse", sublabel: "store" },
      { label: "Detection", sublabel: "rules" },
    ],
    tags: [
      "Python",
      "FastAPI",
      "Apache Kafka",
      "ClickHouse",
      "Redis/Valkey",
      "Docker",
    ],
    sideLabels: ["endpoint activity", "file integrity", "rule-based alerts"],
  },
  {
    id: "02",
    name: "Sift",
    githubUrl: "https://github.com/k-txlha/SIFT-RAG-",
    category: "APPLIED AI / RAG",
    subtitle: "Hybrid Retrieval-Augmented Generation System",
    description:
      "A document Q&A system for uploading documents and querying their contents through a FastAPI backend.",
    bullets: [
      "Combined dense vector retrieval and BM25 keyword search with Reciprocal Rank Fusion (RRF) for context retrieval.",
      "Used ChromaDB persistent vector storage and local LLM inference via Ollama, with session-isolated collections and source-aware retrieval.",
    ],
    pipelineTitle: "RETRIEVAL PIPELINE",
    pipeline: [
      { label: "Documents", sublabel: "upload" },
      { label: "FastAPI", sublabel: "ingest" },
      { label: "Embeddings", sublabel: "process" },
      { label: "Hybrid Retrieval", sublabel: "search" },
      { label: "Ollama", sublabel: "generate" },
    ],
    tags: [
      "Python",
      "FastAPI",
      "ChromaDB",
      "BM25",
      "Sentence Transformers",
      "Ollama",
    ],
    sideLabels: ["dense vectors", "BM25 keywords", "RRF fusion", "Ollama LLM"],
  },
];

export interface SkillGroup {
  group: string;
  skills: string[];
}

export const toolkit: SkillGroup[] = [
  { group: "Languages", skills: ["Python", "JavaScript/TypeScript", "SQL", "C++"] },
  { group: "Frameworks", skills: ["FastAPI", "Node.js", "REST APIs"] },
  {
    group: "Data & messaging",
    skills: ["PostgreSQL", "ClickHouse", "MongoDB", "Redis", "Apache Kafka"],
  },
  {
    group: "AI / ML",
    skills: ["RAG", "Hybrid Search", "BM25", "Sentence Transformers", "Ollama"],
  },
  { group: "Tools", skills: ["Docker", "Git", "Linux", "Apache Airflow", "SigNoz"] },
];

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    institution: "Smt. Indira Gandhi College of Engineering",
    location: "Mumbai, Maharashtra",
    date: "May 2025",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "A.R Kalsekar Polytechnic",
    location: "Navi Mumbai, Maharashtra",
    date: "May 2021",
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
}

export const certifications: CertificationItem[] = [
  { name: "Introduction to Model Context Protocol", issuer: "Anthropic" },
  { name: "Building with the Claude API", issuer: "Anthropic" },
];
