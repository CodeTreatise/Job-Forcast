export interface DomainProfile {
  id: string;
  title: string;
  category: string;
  demandLevel: 'Extreme' | 'Very High' | 'High' | 'Moderate';
  growthYoY: number; // e.g. +38%
  hiringDifficulty: 'Extreme' | 'Very High' | 'High' | 'Moderate';
  avgDaysToHire: number;
  overview: string;
  primaryDrivers: string[];
  mustHaveSkills: string[];
  emergingSkills: string[];
  decliningSkills: string[];
  interviewBar: {
    systemDesignWeight: string;
    codingPracticalWeight: string;
    domainKnowledgeWeight: string;
    keyThemes: string[];
  };
  compensation: {
    region: string;
    junior: { base: number; total: number; currency: string };
    mid: { base: number; total: number; currency: string };
    senior: { base: number; total: number; currency: string };
    staff: { base: number; total: number; currency: string };
  }[];
  deepResearchNotes: string[];
  futureOutlook: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'AI/ML' | 'Cloud & Infra' | 'Programming Languages' | 'Frontend' | 'Data' | 'Security';
  trend: 'Surging' | 'Growing' | 'Stable' | 'Cooling';
  postingsShare: number; // percentage of tech job postings mentioning it
  growthYoY: number; // percentage change
  salaryPremiumPct: number; // avg salary uplift
  summary: string;
}

export interface CareerPivot {
  id: string;
  fromRole: string;
  toRole: string;
  matchScorePct: number;
  salaryIncreaseEstimatePct: number;
  avgTransitionMonths: number;
  keyGaps: string[];
  transferableStrengths: string[];
  actionPlan: {
    phase1: { title: string; desc: string };
    phase2: { title: string; desc: string };
    phase3: { title: string; desc: string };
  };
  standoutProject: string;
}

export interface MarketMacroMetrics {
  globalTechPostingsIndex: number; // Baseline 100 in 2021
  techUnemploymentRatePct: number;
  overallJobMarketUnemploymentRatePct: number;
  avgTechSalaryUSD: number;
  remoteSharePct: number;
  hybridSharePct: number;
  onsiteSharePct: number;
  aiInvestmentCapexBillionsUSD: number;
  layoffStabilizationIndex: string;
}

export interface ResearchDossierArticle {
  id: string;
  title: string;
  readingTime: string;
  category: string;
  date: string;
  summary: string;
  contentMarkdown: string;
}

export const MACRO_METRICS: MarketMacroMetrics = {
  globalTechPostingsIndex: 114, // Stabilized & recovering selectively from 2023 dip (88)
  techUnemploymentRatePct: 2.3,
  overallJobMarketUnemploymentRatePct: 4.1,
  avgTechSalaryUSD: 142000,
  remoteSharePct: 24,
  hybridSharePct: 56,
  onsiteSharePct: 20,
  aiInvestmentCapexBillionsUSD: 240,
  layoffStabilizationIndex: 'Normalizing (selective targeted re-hiring)',
};

export const DOMAIN_PROFILES: DomainProfile[] = [
  {
    id: 'ai-ml-llm',
    title: 'AI, Machine Learning & LLMOps Engineering',
    category: 'Artificial Intelligence',
    demandLevel: 'Extreme',
    growthYoY: 52,
    hiringDifficulty: 'Very High',
    avgDaysToHire: 54,
    overview: 'The highest velocity sector across enterprise and venture-backed tech. The shift is transitioning from generic prompt engineering to production-grade model orchestration, inference optimization, RAG architectures, evaluation pipelines, and fine-tuning specialized domain models.',
    primaryDrivers: [
      'Enterprise transition from generative AI prototypes to secure, cost-controlled production deployments.',
      'Massive demand for inference cost reduction (vLLM, quantization, batching, GPU scheduling).',
      'Autonomous agentic workflows and multi-tool orchestration replacing static single-prompt wrappers.'
    ],
    mustHaveSkills: ['Python', 'PyTorch', 'Vector Databases (Pinecone/Milvus/Qdrant)', 'RAG architectures', 'LLM Evaluation & Guardrails', 'LangChain / LlamaIndex / DSPy'],
    emergingSkills: ['vLLM & Triton Inference Server', 'LoRA / QLoRA Fine-tuning', 'Synthetic Data Generation', 'Small Language Model (SLM) on-device deployment', 'Agentic Swarms'],
    decliningSkills: ['Basic generic prompt writing', 'Trivial single-call wrapper APIs', 'Theoretical ML without production deployment experience'],
    interviewBar: {
      systemDesignWeight: '45% (focus on RAG latency, context caching, GPU budgeting, hallucination prevention)',
      codingPracticalWeight: '35% (Python algorithms, async data pipelines, token stream handling)',
      domainKnowledgeWeight: '20% (embeddings, attention mechanisms, loss curves, quantization)',
      keyThemes: ['Cost vs. latency trade-offs in inference', 'End-to-end evaluation harnesses (Ragas, TruLens)', 'Handling non-deterministic model failure modes']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 145000, total: 185000, currency: '$' }, mid: { base: 195000, total: 275000, currency: '$' }, senior: { base: 240000, total: 390000, currency: '$' }, staff: { base: 310000, total: 580000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 125000, total: 150000, currency: '$' }, mid: { base: 165000, total: 220000, currency: '$' }, senior: { base: 205000, total: 310000, currency: '$' }, staff: { base: 260000, total: 450000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 65000, total: 75000, currency: '€' }, mid: { base: 90000, total: 115000, currency: '€' }, senior: { base: 125000, total: 175000, currency: '€' }, staff: { base: 170000, total: 250000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 1800000, total: 2200000, currency: '₹' }, mid: { base: 3200000, total: 4200000, currency: '₹' }, senior: { base: 5000000, total: 7200000, currency: '₹' }, staff: { base: 7800000, total: 12000000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 42000, total: 48000, currency: '$' }, mid: { base: 65000, total: 80000, currency: '$' }, senior: { base: 95000, total: 125000, currency: '$' }, staff: { base: 130000, total: 175000, currency: '$' } }
    ],
    deepResearchNotes: [
      'Top compensation packages in 2025/2026 exceed traditional software roles by 22% to 40% due to an acute shortage of engineers who bridge ML research with production systems engineering.',
      'Enterprise hiring managers report that 80% of applicants who claim "AI experience" only possess surface-level API prompting knowledge; candidates with deep evaluation frameworks and inference optimization immediately reach final rounds.'
    ],
    futureOutlook: 'Strongest multi-year secular tailwind. Engineers who master small language model deployment, agentic orchestration, and hardware-aware inference will remain in top demand.'
  },
  {
    id: 'cloud-devops-platform',
    title: 'Cloud, DevOps & Platform Engineering',
    category: 'Infrastructure & Reliability',
    demandLevel: 'Very High',
    growthYoY: 28,
    hiringDifficulty: 'High',
    avgDaysToHire: 42,
    overview: 'DevOps has matured into Platform Engineering: building internal developer platforms (IDPs), standardizing Kubernetes multi-tenant clusters, enforcing FinOps cloud cost optimization, and automating zero-trust security across cloud-native environments.',
    primaryDrivers: [
      'Cloud sprawl and ballooning AWS/GCP bills driving aggressive FinOps engineering initiatives.',
      'Need to accelerate developer velocity by abstracting complex cloud infrastructure through self-service internal portals.',
      'GPU cluster networking and high-performance computing infrastructure setup for machine learning workloads.'
    ],
    mustHaveSkills: ['Kubernetes (EKS/GKE)', 'Terraform / OpenTofu', 'AWS / Azure / GCP', 'CI/CD (GitHub Actions/ArgoCD)', 'Prometheus / Datadog / OpenTelemetry', 'Linux & Networking'],
    emergingSkills: ['FinOps automation (Kubecost/CAST AI)', 'Backstage / Port IDPs', 'eBPF (Cilium)', 'GitOps with ArgoCD/Flux', 'GPU Infrastructure provisioning'],
    decliningSkills: ['Manual server provisioning', 'Jenkins declarative pipelines without container orchestration', 'Ad-hoc Bash scripting without version-controlled state'],
    interviewBar: {
      systemDesignWeight: '40% (high availability, multi-region failover, disaster recovery, zero-downtime migrations)',
      codingPracticalWeight: '30% (Go or Python automation, Kubernetes controllers, Terraform modules)',
      domainKnowledgeWeight: '30% (Linux kernel, TCP/IP, DNS, TLS certificates, container security)',
      keyThemes: ['Root-cause analysis incident triage', 'Observability SLOs and SLIs', 'Cost-governed multi-cluster architecture']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 130000, total: 155000, currency: '$' }, mid: { base: 170000, total: 220000, currency: '$' }, senior: { base: 215000, total: 320000, currency: '$' }, staff: { base: 275000, total: 440000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 110000, total: 130000, currency: '$' }, mid: { base: 145000, total: 185000, currency: '$' }, senior: { base: 180000, total: 250000, currency: '$' }, staff: { base: 235000, total: 360000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 58000, total: 66000, currency: '€' }, mid: { base: 82000, total: 100000, currency: '€' }, senior: { base: 110000, total: 145000, currency: '€' }, staff: { base: 148000, total: 205000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 1400000, total: 1700000, currency: '₹' }, mid: { base: 2600000, total: 3300000, currency: '₹' }, senior: { base: 4200000, total: 5800000, currency: '₹' }, staff: { base: 6500000, total: 9500000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 36000, total: 42000, currency: '$' }, mid: { base: 56000, total: 68000, currency: '$' }, senior: { base: 82000, total: 105000, currency: '$' }, staff: { base: 112000, total: 148000, currency: '$' } }
    ],
    deepResearchNotes: [
      'Platform Engineering is consistently cited by 73% of tech leaders as essential to prevent developer burnout and cloud cost overruns.',
      'SREs and Platform Engineers with deep Kubernetes and eBPF networking knowledge remain virtually unaffected by broader tech layoffs.'
    ],
    futureOutlook: 'Resilient and mission-critical. Growth will center around AI workload orchestration, automated remediation, and green cloud computing.'
  },
  {
    id: 'backend-systems-go-rust',
    title: 'Systems & Backend Software Engineering',
    category: 'Backend & Systems',
    demandLevel: 'High',
    growthYoY: 19,
    hiringDifficulty: 'High',
    avgDaysToHire: 38,
    overview: 'Core backend engineering is dividing: basic CRUD REST APIs are increasingly assisted by AI coding tools, while demand has surged for engineers who can architect high-throughput, low-latency distributed systems using Go, Rust, Java/Spring Boot, and modern asynchronous architectures.',
    primaryDrivers: [
      'Microservice consolidation and high-performance services migration to Go and Rust.',
      'Real-time streaming (Kafka, Redpanda, Flink) and distributed database concurrency requirements.',
      'Need for robust fault tolerance, transactional consistency, and data protection.'
    ],
    mustHaveSkills: ['Go / Rust / Java / Python / C++', 'PostgreSQL / Distributed SQL', 'Kafka / RabbitMQ', 'REST & gRPC APIs', 'Redis / Caching', 'Docker & System Design'],
    emergingSkills: ['Rust for high-concurrency systems', 'Temporal / Cadence workflow engines', 'ClickHouse / Apache Pinot for real-time analytics', 'Event-driven architectures with CloudEvents'],
    decliningSkills: ['Monolithic monolithic PHP/Ruby without performance scaling', 'Generic ORM-only developers unable to write optimized raw SQL', 'Blocking synchronous HTTP cascades'],
    interviewBar: {
      systemDesignWeight: '45% (concurrency, idempotency, CAP theorem, database sharding & indexing)',
      codingPracticalWeight: '40% (multithreading, memory management, data structures, edge case resilience)',
      domainKnowledgeWeight: '15% (protocols, transactions, distributed locks)',
      keyThemes: ['Designing for failure and network partition', 'Database indexing strategies under heavy write loads', 'API versioning and zero-downtime migrations']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 135000, total: 165000, currency: '$' }, mid: { base: 175000, total: 235000, currency: '$' }, senior: { base: 220000, total: 335000, currency: '$' }, staff: { base: 285000, total: 470000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 115000, total: 135000, currency: '$' }, mid: { base: 150000, total: 190000, currency: '$' }, senior: { base: 185000, total: 260000, currency: '$' }, staff: { base: 240000, total: 375000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 60000, total: 68000, currency: '€' }, mid: { base: 84000, total: 105000, currency: '€' }, senior: { base: 112000, total: 150000, currency: '€' }, staff: { base: 155000, total: 215000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 1500000, total: 1800000, currency: '₹' }, mid: { base: 2800000, total: 3600000, currency: '₹' }, senior: { base: 4500000, total: 6200000, currency: '₹' }, staff: { base: 7000000, total: 10500000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 38000, total: 44000, currency: '$' }, mid: { base: 58000, total: 72000, currency: '$' }, senior: { base: 85000, total: 110000, currency: '$' }, staff: { base: 118000, total: 155000, currency: '$' } }
    ],
    deepResearchNotes: [
      'Rust demand has grown by 42% YoY in fintech, blockchain, cryptography, and cloud systems infrastructure.',
      'Senior backend engineers who understand database internal mechanics (MVCC, WAL, B-trees) outperform peers in hiring pipelines.'
    ],
    futureOutlook: 'Backend roles are increasingly evaluated on end-to-end systems architecture and resilience rather than syntactic boilerplate.'
  },
  {
    id: 'cybersecurity-cloud-secops',
    title: 'Cybersecurity, Cloud Security & DevSecOps',
    category: 'Security & Governance',
    demandLevel: 'Very High',
    growthYoY: 34,
    hiringDifficulty: 'Very High',
    avgDaysToHire: 48,
    overview: 'With the proliferation of ransomware, supply chain attacks, AI-driven phishing, and strict regulatory standards (NIS2, DORA, SEC disclosures), cybersecurity talent commands exceptional job security and rapid salary growth.',
    primaryDrivers: [
      'Mandatory corporate cyber disclosure regulations and heavy penalties for data breaches.',
      'AI threats (automated vulnerability scanning, deepfakes, LLM prompt injection and data poisoning).',
      'Migration to Zero Trust architecture, identity-first security, and continuous posture management.'
    ],
    mustHaveSkills: ['Cloud Security (AWS IAM/GCP Security Command)', 'SIEM/SOAR (Splunk/Sentinel)', 'Vulnerability Assessment & Pen Testing', 'Zero Trust Architecture', 'Network Security', 'Python/Go scripting'],
    emergingSkills: ['LLM Security & OWASP Top 10 for GenAI', 'Software Supply Chain Security (SBOM, Sigstore)', 'Identity Threat Detection & Response (ITDR)', 'Cloud Infrastructure Entitlement Management (CIEM)'],
    decliningSkills: ['Pure compliance checkbox ticking without technical testing', 'Perimeter-only firewall management without identity governance', 'Manual audit logs inspection'],
    interviewBar: {
      systemDesignWeight: '35% (threat modeling, least privilege architecture, incident containment)',
      codingPracticalWeight: '25% (security automation scripts, log parsing, detection engineering)',
      domainKnowledgeWeight: '40% (cryptography, MITRE ATT&CK framework, exploit mitigation)',
      keyThemes: ['Scenario-based breach investigation simulation', 'Threat modeling a modern cloud microservices deployment', 'DevSecOps pipeline security gates']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 140000, total: 170000, currency: '$' }, mid: { base: 180000, total: 245000, currency: '$' }, senior: { base: 230000, total: 350000, currency: '$' }, staff: { base: 295000, total: 500000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 120000, total: 140000, currency: '$' }, mid: { base: 155000, total: 200000, currency: '$' }, senior: { base: 195000, total: 275000, currency: '$' }, staff: { base: 250000, total: 390000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 62000, total: 70000, currency: '€' }, mid: { base: 88000, total: 110000, currency: '€' }, senior: { base: 118000, total: 160000, currency: '€' }, staff: { base: 160000, total: 225000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 1600000, total: 1900000, currency: '₹' }, mid: { base: 2900000, total: 3800000, currency: '₹' }, senior: { base: 4600000, total: 6500000, currency: '₹' }, staff: { base: 7200000, total: 11000000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 40000, total: 46000, currency: '$' }, mid: { base: 60000, total: 75000, currency: '$' }, senior: { base: 88000, total: 115000, currency: '$' }, staff: { base: 120000, total: 160000, currency: '$' } }
    ],
    deepResearchNotes: [
      'The global cybersecurity workforce gap remains above 3.5 million professionals according to ISC2.',
      'Engineers who combine DevOps automation skills with Cloud Security Posture Management (CSPM) are among the fastest recruited talent in tech.'
    ],
    futureOutlook: 'Recession-proof domain driven by regulatory mandates and continuous threat evolution.'
  },
  {
    id: 'data-engineering-modern-stack',
    title: 'Data Engineering & Analytics Architecture',
    category: 'Data & Analytics',
    demandLevel: 'High',
    growthYoY: 22,
    hiringDifficulty: 'Moderate',
    avgDaysToHire: 36,
    overview: 'The modern data stack has moved past bloated tools into consolidated platforms (Databricks Lakehouse, Snowflake) with strict focus on data contracts, streaming ingestion, governance, and feeding clean data into AI models.',
    primaryDrivers: [
      'Enterprise AI models are only as good as the underlying data pipeline cleanliness and governance.',
      'Consolidation of legacy data warehouses into lakehouses to slash licensing overhead.',
      'Real-time streaming analytics replacing slow overnight batch ETL.'
    ],
    mustHaveSkills: ['Python & Advanced SQL', 'Apache Spark / Databricks', 'Snowflake / BigQuery', 'dbt (data build tool)', 'Data Modeling (Kimball / Medallion)', 'Airflow / Dagster'],
    emergingSkills: ['Streaming ETL (Kafka / Flink)', 'Data Contracts & Data Mesh', 'Iceberg & Delta Lake open formats', 'Vector database ingestion pipelines'],
    decliningSkills: ['Legacy proprietary on-premise ETL tools (SSIS, Informatica PowerCenter)', 'Unstructured data dumps without governance', 'Manual Excel data reporting'],
    interviewBar: {
      systemDesignWeight: '40% (pipeline idempotency, partitioning, schema evolution, backfill management)',
      codingPracticalWeight: '35% (complex window functions, PySpark transformations, data structures)',
      domainKnowledgeWeight: '25% (ACID lakehouse transactions, star vs snowflake schemas, cost optimization)',
      keyThemes: ['Debugging pipeline skew and memory bottlenecks in Spark', 'Designing data quality observability alerts', 'Managing incremental dbt models']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 130000, total: 155000, currency: '$' }, mid: { base: 165000, total: 220000, currency: '$' }, senior: { base: 210000, total: 315000, currency: '$' }, staff: { base: 270000, total: 430000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 110000, total: 130000, currency: '$' }, mid: { base: 140000, total: 180000, currency: '$' }, senior: { base: 175000, total: 245000, currency: '$' }, staff: { base: 230000, total: 350000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 56000, total: 64000, currency: '€' }, mid: { base: 80000, total: 98000, currency: '€' }, senior: { base: 108000, total: 142000, currency: '€' }, staff: { base: 148000, total: 200000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 1400000, total: 1700000, currency: '₹' }, mid: { base: 2600000, total: 3400000, currency: '₹' }, senior: { base: 4200000, total: 5800000, currency: '₹' }, staff: { base: 6600000, total: 9800000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 36000, total: 42000, currency: '$' }, mid: { base: 56000, total: 68000, currency: '$' }, senior: { base: 82000, total: 106000, currency: '$' }, staff: { base: 112000, total: 148000, currency: '$' } }
    ],
    deepResearchNotes: [
      'Data engineering continues to outgrow traditional data science roles in job volume by 2.4x because companies realized they lack the clean plumbing to train or fine-tune models.',
      'Apache Iceberg has emerged as the universal standard table format across AWS, Snowflake, and Google Cloud.'
    ],
    futureOutlook: 'Sustained demand as the foundational pillar for enterprise artificial intelligence.'
  },
  {
    id: 'frontend-mobile-client',
    title: 'Frontend, Mobile & Product Engineering',
    category: 'Client & Mobile',
    demandLevel: 'Moderate',
    growthYoY: 8,
    hiringDifficulty: 'Moderate',
    avgDaysToHire: 32,
    overview: 'The frontend market has undergone significant consolidation. Entry-level hiring for pure React component styling has tightened due to AI-assisted coding tools. However, senior engineers who understand full-stack client architectures, web performance (Core Web Vitals), cross-platform native frameworks, and complex interactive canvas/WebGL apps remain highly sought after.',
    primaryDrivers: [
      'Evolution from pure "frontend" to "product engineer" with full-stack TypeScript/Next.js and Edge compute capabilities.',
      'Mobile consolidation: cross-platform frameworks (React Native / Expo, Flutter) reducing dual-team overheads.',
      'High-performance client needs: offline-first, WebAssembly, rich interactive canvases, and micro-frontends.'
    ],
    mustHaveSkills: ['TypeScript', 'React / Next.js', 'State Management (Zustand/TanStack Query)', 'Modern CSS (Tailwind)', 'Web Performance & Core Web Vitals', 'Testing (Playwright/Jest)'],
    emergingSkills: ['Server Components & Server Actions', 'React Native + Expo for unified web/mobile', 'WebAssembly (WASM) for client computing', 'Accessibility (WCAG AAA compliance)', 'AI SDKs integration in browser'],
    decliningSkills: ['Vanilla jQuery / Legacy Angular JS', 'Basic slice-and-dice PSD to HTML', 'Client-only CRA (Create React App) architectures'],
    interviewBar: {
      systemDesignWeight: '35% (client state architecture, caching, bundle optimization, CDN edge caching)',
      codingPracticalWeight: '50% (building resilient, accessible interactive components from scratch with zero libraries)',
      domainKnowledgeWeight: '15% (DOM event loop, rendering pipeline, Web APIs)',
      keyThemes: ['Optimizing large list rendering (virtualization)', 'Managing optimistic UI updates and network rollback', 'Cross-browser performance profiling']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 120000, total: 140000, currency: '$' }, mid: { base: 155000, total: 200000, currency: '$' }, senior: { base: 195000, total: 280000, currency: '$' }, staff: { base: 250000, total: 390000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 100000, total: 118000, currency: '$' }, mid: { base: 130000, total: 165000, currency: '$' }, senior: { base: 165000, total: 225000, currency: '$' }, staff: { base: 215000, total: 320000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 52000, total: 58000, currency: '€' }, mid: { base: 74000, total: 90000, currency: '€' }, senior: { base: 100000, total: 130000, currency: '€' }, staff: { base: 138000, total: 185000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 1100000, total: 1350000, currency: '₹' }, mid: { base: 2200000, total: 2800000, currency: '₹' }, senior: { base: 3600000, total: 4800000, currency: '₹' }, staff: { base: 5500000, total: 8000000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 32000, total: 36000, currency: '$' }, mid: { base: 50000, total: 60000, currency: '$' }, senior: { base: 74000, total: 94000, currency: '$' }, staff: { base: 100000, total: 132000, currency: '$' } }
    ],
    deepResearchNotes: [
      'Frontend has seen the highest influx of self-taught and bootcamp applicants over the past 5 years, making junior screening extremely strict.',
      'Candidates who demonstrate "Product Engineer" capabilities (talking to users, measuring product conversion, owning backend schema design) command top tier offers.'
    ],
    futureOutlook: 'Repositioning into Product Engineering. Mastery of full-stack edge TypeScript, UX performance, and mobile cross-platform will define the winning engineers.'
  },
  {
    id: 'sdet-qa-reliability',
    title: 'SDET & Automated Quality Engineering',
    category: 'Quality & Reliability',
    demandLevel: 'Moderate',
    growthYoY: 12,
    hiringDifficulty: 'Moderate',
    avgDaysToHire: 30,
    overview: 'Manual QA is largely being phased out or assisted by synthetic AI test generators. The high-value demand is for Software Development Engineers in Test (SDETs) who build custom test automation harnesses, chaos engineering suites, performance load simulations, and AI quality evaluation benchmarks.',
    primaryDrivers: [
      'Rapid continuous deployment cycles requiring bulletproof automated regression pipelines.',
      'Performance and stress testing for massive scale distributed backends.',
      'Evaluation testing of non-deterministic AI features (hallucination scoring, safety filters).'
    ],
    mustHaveSkills: ['Playwright / Cypress', 'Python / TypeScript / Java', 'CI/CD pipeline integration', 'API automated testing (Postman / k6)', 'Docker', 'Performance Load Testing (k6 / Locust)'],
    emergingSkills: ['AI-driven autonomous test generation', 'Chaos engineering (Gremlin / Chaos Mesh)', 'LLM application quality benchmarking', 'Contract testing (Pact)'],
    decliningSkills: ['Pure manual test case spreadsheets without automation', 'Old Selenium suites without parallelization', 'Record-and-playback GUI tools'],
    interviewBar: {
      systemDesignWeight: '25% (test infrastructure architecture, parallel runners, test data management)',
      codingPracticalWeight: '55% (writing modular test frameworks, mocking complex external APIs)',
      domainKnowledgeWeight: '20% (test pyramids, exploratory testing strategy, defect metrics)',
      keyThemes: ['Building a zero-flake CI test runner', 'Simulating 50,000 concurrent user load spikes', 'Automated security scan integration']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 115000, total: 132000, currency: '$' }, mid: { base: 145000, total: 185000, currency: '$' }, senior: { base: 185000, total: 260000, currency: '$' }, staff: { base: 235000, total: 350000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 95000, total: 110000, currency: '$' }, mid: { base: 125000, total: 155000, currency: '$' }, senior: { base: 155000, total: 210000, currency: '$' }, staff: { base: 200000, total: 290000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 48000, total: 54000, currency: '€' }, mid: { base: 70000, total: 84000, currency: '€' }, senior: { base: 92000, total: 118000, currency: '€' }, staff: { base: 125000, total: 165000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 1000000, total: 1200000, currency: '₹' }, mid: { base: 1900000, total: 2400000, currency: '₹' }, senior: { base: 3200000, total: 4200000, currency: '₹' }, staff: { base: 4800000, total: 6800000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 30000, total: 34000, currency: '$' }, mid: { base: 46000, total: 55000, currency: '$' }, senior: { base: 68000, total: 85000, currency: '$' }, staff: { base: 92000, total: 120000, currency: '$' } }
    ],
    deepResearchNotes: [
      'Companies have decreased dedicated manual QA headcount by 45% since 2022, shifting budget toward engineers who code custom test platforms.',
      'Playwright has overtaken Cypress as the most requested modern end-to-end framework in enterprise job requisitions.'
    ],
    futureOutlook: 'Evolution toward Quality Platform Engineers responsible for whole-lifecycle observability, chaos resilience, and automated release validation.'
  },
  {
    id: 'engineering-leadership-staff',
    title: 'Staff+ Engineering & Technical Leadership',
    category: 'Leadership & Architecture',
    demandLevel: 'High',
    growthYoY: 16,
    hiringDifficulty: 'Extreme',
    avgDaysToHire: 65,
    overview: 'As organizations flatten their management hierarchies, demand has heavily shifted from middle managers to hands-on Staff/Principal Engineers and high-leverage Engineering Managers who can navigate organizational architecture, technical roadmaps, and high-impact technology choices.',
    primaryDrivers: [
      'De-layering of intermediate management layers across tech giants and mid-sized companies.',
      'High business stakes of multi-million dollar cloud architecture and AI vendor selections.',
      'Mentorship and force-multiplying younger engineers using modern AI-assisted engineering practices.'
    ],
    mustHaveSkills: ['Distributed System Architecture', 'Cross-functional Technical Strategy', 'Team Mentorship & Culture', 'Budget & Vendor Evaluation', 'Stakeholder Communication', 'Hands-on Prototyping'],
    emergingSkills: ['AI-Augmented Engineering Team Productivity Metrics', 'Socio-Technical System Design', 'FinOps Governance at scale', 'Navigating Open-Source vs Proprietary Model IP'],
    decliningSkills: ['Command-and-control middle management with zero technical literacy', 'Pure agile ceremony facilitation (Scrum-only masters)', 'Ivory tower architects who write slide decks without verifying implementation reality'],
    interviewBar: {
      systemDesignWeight: '50% (organization-wide platform architecture, fault domains, multi-year migration plans)',
      codingPracticalWeight: '15% (technical depth verification, reviewing architecture code, PR critique)',
      domainKnowledgeWeight: '35% (conflict resolution, influence without authority, engineering economics)',
      keyThemes: ['Resolving high-stakes technical deadlock between teams', 'Recovering a failing critical enterprise project', 'Setting technical standards across 100+ engineers']
    },
    compensation: [
      { region: 'US Bay Area / NYC', junior: { base: 190000, total: 260000, currency: '$' }, mid: { base: 240000, total: 360000, currency: '$' }, senior: { base: 310000, total: 550000, currency: '$' }, staff: { base: 420000, total: 850000, currency: '$' } },
      { region: 'US Remote / Tier 2', junior: { base: 165000, total: 220000, currency: '$' }, mid: { base: 200000, total: 290000, currency: '$' }, senior: { base: 260000, total: 420000, currency: '$' }, staff: { base: 340000, total: 620000, currency: '$' } },
      { region: 'Western Europe (UK/DE)', junior: { base: 95000, total: 120000, currency: '€' }, mid: { base: 130000, total: 180000, currency: '€' }, senior: { base: 175000, total: 270000, currency: '€' }, staff: { base: 240000, total: 410000, currency: '€' } },
      { region: 'India Tech Hubs (BLR/HYD)', junior: { base: 3200000, total: 4200000, currency: '₹' }, mid: { base: 5200000, total: 7500000, currency: '₹' }, senior: { base: 8500000, total: 13500000, currency: '₹' }, staff: { base: 14000000, total: 25000000, currency: '₹' } },
      { region: 'Latin America (Nearshore)', junior: { base: 65000, total: 80000, currency: '$' }, mid: { base: 95000, total: 125000, currency: '$' }, senior: { base: 135000, total: 180000, currency: '$' }, staff: { base: 185000, total: 260000, currency: '$' } }
    ],
    deepResearchNotes: [
      'Staff+ engineers and hands-on Directors represent the hardest tech positions to fill, with median search times exceeding 2.5 months.',
      'The "Player-Coach" model has become standard: leaders are expected to maintain enough technical sharpness to review PRs and architect key subsystems.'
    ],
    futureOutlook: 'Extremely durable. Automation increases the value of strategic human judgment, team alignment, and risk management.'
  }
];

export const SKILLS_MATRIX: SkillItem[] = [
  { id: 'sk-1', name: 'Python', category: 'Programming Languages', trend: 'Surging', postingsShare: 44.2, growthYoY: 21, salaryPremiumPct: 14, summary: 'The lingua franca of AI, data engineering, and automation. Ubiquitous across enterprise machine learning and backend.' },
  { id: 'sk-2', name: 'Rust', category: 'Programming Languages', trend: 'Surging', postingsShare: 11.5, growthYoY: 48, salaryPremiumPct: 26, summary: 'Commanding the highest compensation premiums due to memory safety, raw performance in cloud infrastructure, and low talent supply.' },
  { id: 'sk-3', name: 'Go (Golang)', category: 'Programming Languages', trend: 'Growing', postingsShare: 24.8, growthYoY: 18, salaryPremiumPct: 18, summary: 'The de facto language of cloud-native infrastructure, Kubernetes operators, and high-concurrency microservices.' },
  { id: 'sk-4', name: 'TypeScript', category: 'Programming Languages', trend: 'Stable', postingsShare: 39.0, growthYoY: 9, salaryPremiumPct: 11, summary: 'Standard across modern web development, Node/Deno backend, and full-stack enterprise applications.' },
  { id: 'sk-5', name: 'Kubernetes (K8s)', category: 'Cloud & Infra', trend: 'Surging', postingsShare: 32.4, growthYoY: 26, salaryPremiumPct: 22, summary: 'The operating system of the modern cloud. Critical for both enterprise scale and AI model training/inference clusters.' },
  { id: 'sk-6', name: 'Terraform / OpenTofu', category: 'Cloud & Infra', trend: 'Growing', postingsShare: 28.1, growthYoY: 15, salaryPremiumPct: 16, summary: 'Standard Infrastructure as Code (IaC) tool for repeatable, multi-cloud and hybrid deployments.' },
  { id: 'sk-7', name: 'PyTorch', category: 'AI/ML', trend: 'Surging', postingsShare: 18.6, growthYoY: 54, salaryPremiumPct: 28, summary: 'Dominant framework for deep learning research and production model fine-tuning; outpaced TensorFlow significantly.' },
  { id: 'sk-8', name: 'Vector Databases (Pinecone/Milvus/Qdrant)', category: 'AI/ML', trend: 'Surging', postingsShare: 14.2, growthYoY: 68, salaryPremiumPct: 24, summary: 'Essential backbone for semantic search, RAG pipelines, and enterprise LLM context memory retrieval.' },
  { id: 'sk-9', name: 'vLLM / Inference Optimization', category: 'AI/ML', trend: 'Surging', postingsShare: 8.9, growthYoY: 82, salaryPremiumPct: 32, summary: 'Top-tier skill for serving high-throughput LLMs with PagedAttention and GPU memory reduction.' },
  { id: 'sk-10', name: 'Snowflake & Databricks', category: 'Data', trend: 'Growing', postingsShare: 26.5, growthYoY: 24, salaryPremiumPct: 19, summary: 'Leading modern enterprise lakehouse and data warehouse platforms consolidating corporate intelligence.' },
  { id: 'sk-11', name: 'Cloud Security / Zero Trust', category: 'Security', trend: 'Surging', postingsShare: 22.0, growthYoY: 33, salaryPremiumPct: 23, summary: 'Vital defense posture replacing perimeter security; mandatory in financial, healthcare, and public sectors.' },
  { id: 'sk-12', name: 'React & Next.js', category: 'Frontend', trend: 'Stable', postingsShare: 35.8, growthYoY: 5, salaryPremiumPct: 8, summary: 'Dominant web framework; high volume of job listings with standard market compensation.' },
  { id: 'sk-13', name: 'Docker', category: 'Cloud & Infra', trend: 'Stable', postingsShare: 46.5, growthYoY: 4, salaryPremiumPct: 10, summary: 'Universal containerization requirement across all software engineering levels.' },
  { id: 'sk-14', name: 'PostgreSQL', category: 'Data', trend: 'Growing', postingsShare: 38.4, growthYoY: 14, salaryPremiumPct: 13, summary: 'Most beloved and versatile relational database, expanding into vector search (pgvector) and distributed models.' },
  { id: 'sk-15', name: 'Legacy Monolithic PHP / WordPress', category: 'Programming Languages', trend: 'Cooling', postingsShare: 12.1, growthYoY: -14, salaryPremiumPct: -8, summary: 'Contracting market share in modern tech organizations; mostly localized to maintenance contracts.' },
  { id: 'sk-16', name: 'Manual QA Testing', category: 'Frontend', trend: 'Cooling', postingsShare: 9.4, growthYoY: -28, salaryPremiumPct: -18, summary: 'Rapidly shrinking footprint as automated Playwright frameworks and AI test generation become the baseline.' }
];

export const CAREER_PIVOTS: CareerPivot[] = [
  {
    id: 'frontend-to-ai-systems',
    fromRole: 'Frontend Developer',
    toRole: 'AI Systems / LLM Application Engineer',
    matchScorePct: 62,
    salaryIncreaseEstimatePct: 38,
    avgTransitionMonths: 4,
    keyGaps: ['Python & Async backend architectures', 'Vector databases & embedding mechanics', 'RAG evaluation frameworks (Ragas, TruLens)', 'Streaming token lifecycle & backpressure'],
    transferableStrengths: ['Deep UX empathy for streaming interfaces', 'TypeScript / JavaScript proficiency', 'Client state management & optimistic rendering', 'API consumption & error boundary handling'],
    actionPlan: {
      phase1: { title: 'Month 1: Python & LLM API Core', desc: 'Master modern asynchronous Python (FastAPI, Pydantic, asyncio) and direct API interactions with OpenAI & Gemini models.' },
      phase2: { title: 'Month 2: RAG, Embeddings & Vectors', desc: 'Build an end-to-end Retrieval Augmented Generation service using pgvector or Qdrant with document chunking strategies.' },
      phase3: { title: 'Month 3: Production LLMOps & Evaluation', desc: 'Implement automated regression evaluation, cost tracking, token throttling, and agentic multi-step tool calls.' }
    },
    standoutProject: 'Build an autonomous multi-document research assistant that ingests complex SEC 10-K filings, performs hybrid keyword-vector retrieval, provides verifiable footnotes with citations, and benchmarks response faithfulness.'
  },
  {
    id: 'backend-to-platform-eng',
    fromRole: 'Traditional Backend Engineer',
    toRole: 'Platform / DevOps Engineer',
    matchScorePct: 74,
    salaryIncreaseEstimatePct: 24,
    avgTransitionMonths: 3,
    keyGaps: ['Kubernetes architecture & custom controllers', 'Terraform / OpenTofu state management', 'eBPF networking and service mesh concepts', 'FinOps cloud cost governance'],
    transferableStrengths: ['Proficiency with systems programming (Go/Java/Python)', 'Database administration and SQL tuning', 'Understanding of microservice communication protocols (gRPC/REST)', 'Debugging production logs and traces'],
    actionPlan: {
      phase1: { title: 'Month 1: Kubernetes Deep Dive (CKA focus)', desc: 'Set up local multi-node clusters (Kind/K3s), deploy stateful sets, manage ingress controllers, and write Helm charts.' },
      phase2: { title: 'Month 2: Infrastructure as Code & GitOps', desc: 'Provision full AWS/GCP VPCs using modular Terraform and establish an automated GitOps deployment pipeline using ArgoCD.' },
      phase3: { title: 'Month 3: Observability & Developer Portal', desc: 'Deploy OpenTelemetry collectors, create Prometheus alerts, and prototype a simple self-service developer internal portal with Backstage.' }
    },
    standoutProject: 'Design an Internal Developer Platform (IDP) blueprint that allows developers to spin up an ephemeral preview environment with isolated database copies via a single GitHub PR label.'
  },
  {
    id: 'manual-qa-to-sdet',
    fromRole: 'Manual QA Specialist',
    toRole: 'Software Development Engineer in Test (SDET)',
    matchScorePct: 58,
    salaryIncreaseEstimatePct: 45,
    avgTransitionMonths: 5,
    keyGaps: ['Core programming in TypeScript or Python', 'Test framework architecture from scratch (Playwright)', 'CI/CD pipeline integration (GitHub Actions)', 'API and database mocking techniques'],
    transferableStrengths: ['Exceptional test case design and edge case discovery', 'Thorough understanding of business user workflows', 'Cross-team communication and defect reporting rigor', 'User acceptance testing (UAT) ownership'],
    actionPlan: {
      phase1: { title: 'Months 1-2: Programming Foundations', desc: 'Learn TypeScript or Python fundamentals, object-oriented concepts, asynchronous promises, and clean code principles.' },
      phase2: { title: 'Month 3-4: Automation Framework Mastery', desc: 'Build a production Playwright test suite using the Page Object Model (POM), parallel test execution, and API stubbing.' },
      phase3: { title: 'Month 5: CI Integration & Performance Load', desc: 'Integrate automated smoke test gates into GitHub Actions with Slack alerting, and run distributed load tests with k6.' }
    },
    standoutProject: 'Develop a complete automated testing harness for an e-commerce checkout flow with synthetic test data generation, matrix browser testing, and automated visual regression diffing.'
  },
  {
    id: 'sysadmin-to-cloud-security',
    fromRole: 'Sysadmin / IT Support',
    toRole: 'Cloud Security / SecOps Specialist',
    matchScorePct: 68,
    salaryIncreaseEstimatePct: 40,
    avgTransitionMonths: 4,
    keyGaps: ['Cloud IAM policies & least-privilege automation', 'Infrastructure as Code vulnerability scanning', 'SIEM detection engineering & threat hunting', 'Zero Trust networking models'],
    transferableStrengths: ['Deep operating systems knowledge (Linux/Windows)', 'Networking fundamentals (DNS, firewalls, subnets, VPNs)', 'Incident response protocol and crisis composure', 'Identity directories experience (Active Directory/LDAP)'],
    actionPlan: {
      phase1: { title: 'Month 1: Cloud Architecture & IAM', desc: 'Attain AWS Certified Solutions Architect or Security Specialty; master IAM policy conditions and role delegation.' },
      phase2: { title: 'Month 2: DevSecOps & CSPM', desc: 'Integrate static code analysis (Trivy, Semgrep) and Cloud Security Posture Management tools into CI pipelines.' },
      phase3: { title: 'Months 3-4: Threat Detection & Incident Simulation', desc: 'Set up automated detection rules in cloud SIEMs, analyze adversary behavior via MITRE ATT&CK, and write containment scripts.' }
    },
    standoutProject: 'Build a simulated cloud breach detection system that triggers automated quarantine alerts whenever unauthorized S3 bucket public access or root credential logins are attempted.'
  }
];

export const RESEARCH_DOSSIERS: ResearchDossierArticle[] = [
  {
    id: 'macro-labor-shift-2026',
    title: 'The Great AI Reallocation: How Enterprise Tech Headcount Shifted Post-ZIRP',
    readingTime: '6 min read',
    category: 'Macro Economics',
    date: 'Updated September 2026',
    summary: 'An empirical investigation into how hyperscaler capex, higher interest rates, and AI developer tooling permanently changed the engineering hiring curve.',
    contentMarkdown: `### 1. The Post-ZIRP Reality: Efficiency Over Land-Grabs
Between 2020 and 2022, zero interest-rate policy (ZIRP) created an unprecedented hiring surge where technology organizations hoarded talent ahead of demand. When capital costs normalized to 4-5%, boards demanded operating margin discipline.

The resulting shift was not an abandonment of software engineering, but a fundamental reallocation:
- **Capital Expenditure (CapEx) Shift:** Hyperscalers (Microsoft, Alphabet, Amazon, Meta) allocated over $240 billion to data centers, GPU clusters, and power infrastructure.
- **Selective Team Sizing:** Rather than hiring 10 generalist developers for CRUD feature work, teams now operate with 4-5 senior engineers augmented by AI tooling, reallocating savings into specialized infrastructure and security roles.

### 2. The Seniority Bifurcation
The hardest-hit demographic remains junior/entry-level engineers (0-2 years of experience), where job posting volumes are 34% below 2021 highs. Senior and Staff-level postings, conversely, have rebounded to within 5% of all-time highs.

Why? Junior work—such as boilerplate UI components, unit tests, and repetitive glue code—is precisely what LLM-assisted tools (Cursor, GitHub Copilot, Gemini Code Assist) handle with high fidelity. Senior work—such as fault isolation, distributed database partitioning, cross-system dependency mitigation, and security posture—requires seasoned context that AI cannot invent.

### 3. Key Takeaway for Job Seekers
To break through the current market, candidates cannot rely on generic portfolio projects (e.g., standard to-do apps, basic blog clones). Hiring committees seek proof of **production readiness**: observability, cost consciousness, automated testing, and resilient architecture under failure scenarios.`
  },
  {
    id: 'gcc-phenomenon',
    title: 'Global Capability Centers (GCCs): The New Engine of High-End Tech Hiring',
    readingTime: '5 min read',
    category: 'Global Labor Trends',
    date: 'Updated September 2026',
    summary: 'Why Fortune 500 enterprises are pivoting from third-party outsourcing vendors to owned engineering hubs in India, Poland, and Mexico.',
    contentMarkdown: `### 1. The Death of Low-Tier Outsourcing
For decades, western enterprises relied on third-party IT service vendors for outsourced maintenance. Today, that model is undergoing massive disruption. 

Enterprises have realized that software and AI are core proprietary differentiators, not cost centers to be handed off to external vendors. The result is the explosive growth of **Global Capability Centers (GCCs)**—fully owned, captive engineering subsidiaries of global giants (e.g., Goldman Sachs, Walmart Global Tech, Target, Airbus, Siemens, JP Morgan).

### 2. India, Eastern Europe, and Latin America Transformation
- **India (Bengaluru, Hyderabad, Pune, Chennai):** GCCs now employ over 1.7 million professionals in India alone, with average compensation for AI, Cloud, and Cybersecurity engineers skyrocketing into the ₹40L-₹80L+ band. These centers are no longer back-offices; they own global products, core risk models, and cloud platform architecture.
- **Latin America (Nearshore):** Time-zone alignment with the US East/West coast has made Colombia, Mexico, Argentina, and Brazil prime hubs for real-time agile engineering collaboration.
- **Eastern Europe (Poland, Romania):** Retains deep strength in algorithms, embedded systems, and systems-level C++/Rust development.

### 3. The Arbitrage Evolution
Geographic arbitrage is no longer about "cheap labor"—it is about tapping into elite global technical talent pools that operate with direct company equity, high retention, and ownership of high-impact strategic roadmaps.`
  },
  {
    id: 'ai-workforce-immunity',
    title: 'The Skill Immunity Index: Which Engineering Roles Are Truly AI-Resistant?',
    readingTime: '7 min read',
    category: 'AI Workforce Dynamics',
    date: 'Updated September 2026',
    summary: 'A rigorous evaluation of task automation risk across software engineering disciplines, and how to position yourself as an indispensable engineer.',
    contentMarkdown: `### 1. What AI Actually Automates
To understand job safety, we must separate *syntactic generation* from *systems synthesis*:
- **Syntactic Generation (High Automation Risk):** Translating standard requirements into code, writing simple REST endpoints, converting designs into CSS, drafting basic unit tests.
- **Systems Synthesis (Zero Automation Risk):** Determining *what* to build, trade-offs between eventual consistency vs ACID transactions, untangling legacy monolith dependencies, validating compliance with regulatory authorities, and negotiating requirements with stakeholders.

### 2. The Four Pillars of AI Immunity
1. **Domain Context & Business Empathy:** The engineer who understands why a hospital or hedge fund operates a certain way is 10x more valuable than someone who just writes code specs.
2. **Deep Systems & Kernel Literacy:** Understanding memory safety, eBPF, kernel bypass, GPU memory bandwidth bottlenecks, and distributed consensus (Raft/Paxos).
3. **Cybersecurity & Failure Mode Anticipation:** AI cannot be held liable for a data breach or legal compliance failure. Humans must guarantee the security boundaries.
4. **Platform & Developer Experience:** Crafting the guardrails, tooling, and deployment pipelines that allow hundreds of other engineers to move safely at speed.

### 3. The Modern Formula: 10x Engineer = Human Judgment + AI Throughput
The prevailing consensus among engineering VPs is clear: AI will not replace software engineers, but software engineers who leverage AI for 3x leverage will replace those who resist it.`
  }
];
