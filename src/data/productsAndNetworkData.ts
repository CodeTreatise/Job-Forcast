export interface TechProductItem {
  id: string;
  name: string;
  category: 'AI/LLM Serving' | 'Open AI Model Architectures' | 'Cloud & Container Platforms' | 'Data Lakehouse & Analytics' | 'Systems & Languages' | 'Security & Networking';
  status: 'Surging Momentum' | 'Emerging Breakout' | 'Dominant Standard' | 'Cooling / Replaced';
  longevityRunway: string; // e.g. "8-10+ yrs (Permanent architectural foundation)"
  marketCapOrInvestment: string; // e.g. "$12B+ ecosystem"
  successDrivers: string[];
  vulnerabilitiesOrRisks: string[];
  associatedSkills: string[];
  topCompaniesHiring: string[];
  architectureVerdict: string;
}

export interface SkillNodeConnection {
  sourceProduct: string;
  targetSkill: string;
  relationship: 'Core Prerequisite' | 'Performance Differentiator' | 'Ecosystem Standard';
  importanceWeight: number; // 1 to 5
}

export const IN_DEMAND_PRODUCTS: TechProductItem[] = [
  {
    id: 'prod-vllm',
    name: 'vLLM (PagedAttention Inference Engine)',
    category: 'AI/LLM Serving',
    status: 'Surging Momentum',
    longevityRunway: '7-9 years (Standard open-source inference standard)',
    marketCapOrInvestment: '$4B+ enterprise compute shift',
    successDrivers: [
      'PagedAttention eliminates 96% of internal GPU memory fragmentation in KV caching',
      'Dynamic continuous request batching dramatically increases token throughput per second per dollar',
      'Supported out-of-the-box by all major cloud providers and open model architectures'
    ],
    vulnerabilitiesOrRisks: ['Competition from dedicated hardware ASIC compilers (Groq, Cerebras)'],
    associatedSkills: ['Python', 'CUDA / GPU Memory Layout', 'FastAPI Async Streaming', 'Continuous Batching', 'Docker/K8s'],
    topCompaniesHiring: ['Anyscale', 'Scale AI', 'Modal Labs', 'Together AI', 'Enterprise AI Labs'],
    architectureVerdict: 'The de facto industry runtime for self-hosting open-weight models with maximum cost efficiency.'
  },
  {
    id: 'prod-deepseek-arch',
    name: 'DeepSeek MoE & MLA Architecture (V3 / R1)',
    category: 'Open AI Model Architectures',
    status: 'Emerging Breakout',
    longevityRunway: '8-10+ years (Foundational algorithmic standard)',
    marketCapOrInvestment: 'Global open model ecosystem shakeup',
    successDrivers: [
      'Multi-Head Latent Attention (MLA) reduces inference KV cache memory footprint by 93%',
      'Mixture of Experts (MoE) with 256 fine-grained experts activates only 37B parameters per token out of 671B',
      'Multi-token prediction and rule-based reinforcement learning (RLVR) drastically reducing training compute cost'
    ],
    vulnerabilitiesOrRisks: ['Hardware interconnect requirements (high cross-node networking bandwidth needed for MoE routing)'],
    associatedSkills: ['MoE Routing Algorithms', 'PyTorch Low-Rank Factorization', 'FP8 Mixed Precision Training', 'Reinforcement Learning with Verifiable Rewards'],
    topCompaniesHiring: ['DeepSeek', 'Alibaba Cloud (Qwen team)', 'Baidu', 'Tencent', 'Hugging Face'],
    architectureVerdict: 'Proved that mathematical and architectural ingenuity can beat raw brute-force compute scaling.'
  },
  {
    id: 'prod-k8s',
    name: 'Kubernetes & CNCF Ecosystem',
    category: 'Cloud & Container Platforms',
    status: 'Dominant Standard',
    longevityRunway: '10+ years (The undisputed operating system of the cloud)',
    marketCapOrInvestment: '$60B+ global cloud management market',
    successDrivers: [
      'Declarative reconciliation loop architecture provides self-healing resilience',
      'Universal abstraction across AWS, GCP, Azure, and on-premise bare-metal GPU clusters',
      'Massive ecosystem of custom controllers, operators, and storage CSI drivers'
    ],
    vulnerabilitiesOrRisks: ['Cognitive complexity for junior developers; requires platform engineering abstraction'],
    associatedSkills: ['Golang (Controller Runtime)', 'Helm & Kustomize', 'ArgoCD / GitOps', 'Linux cgroups & namespaces', 'Prometheus & OpenTelemetry'],
    topCompaniesHiring: ['Google Cloud', 'AWS', 'Microsoft Azure', 'JP Morgan Chase', 'Netflix', 'Uber'],
    architectureVerdict: 'Completely recession-proof; the foundational substrate for all modern enterprise computing and AI training/inference.'
  },
  {
    id: 'prod-ebpf-cilium',
    name: 'Cilium & eBPF Networking / Security',
    category: 'Security & Networking',
    status: 'Surging Momentum',
    longevityRunway: '8-10+ years (Permanent Linux kernel programmability shift)',
    marketCapOrInvestment: '$10B+ infrastructure networking sector',
    successDrivers: [
      'Runs sandboxed programs inside the Linux kernel without changing kernel source code or loading modules',
      'Replaces slow iptables/kube-proxy packet processing with sub-microsecond kernel-level BPF routing',
      'Provides zero-overhead observability (Hubble) and runtime threat detection (Tetragon)'
    ],
    vulnerabilitiesOrRisks: ['Steep learning curve requiring deep kernel and C/Rust systems proficiency'],
    associatedSkills: ['eBPF (BPF bytecode)', 'C / Rust', 'Linux Kernel Internals', 'Kubernetes CNI', 'Network Protocols (BGP, WireGuard)'],
    topCompaniesHiring: ['Isovalent (Cisco)', 'Datadog', 'Cloudflare', 'Palantir', 'Financial Market Makers'],
    architectureVerdict: 'The future of cloud-native networking, service meshes, and low-overhead runtime security.'
  },
  {
    id: 'prod-rust',
    name: 'Rust Systems Toolchain',
    category: 'Systems & Languages',
    status: 'Surging Momentum',
    longevityRunway: '15+ years (Long-term replacement for C/C++ in systems infrastructure)',
    marketCapOrInvestment: 'Strategic language for Linux kernel, Android, and AWS infrastructure',
    successDrivers: [
      'Compile-time ownership model guarantees memory safety without garbage collector pauses',
      'Fearless concurrency and thread-safe abstractions',
      'Exceptional developer ergonomics with Cargo package manager and compiler error diagnostics'
    ],
    vulnerabilitiesOrRisks: ['Long compile times on massive codebases and high initial learning curve'],
    associatedSkills: ['Memory Ownership & Lifetimes', 'Tokio Async Runtime', 'Unsafe Rust & FFI', 'WebAssembly (WASM)', 'Systems Architecture'],
    topCompaniesHiring: ['Microsoft', 'AWS', 'Meta', 'Cloudflare', 'Jane Street / Citadel', 'Solana Labs'],
    architectureVerdict: 'Commanding the highest salary premiums across tech infrastructure; impossible to automate by shallow AI models.'
  },
  {
    id: 'prod-databricks-lakehouse',
    name: 'Databricks Lakehouse & Apache Spark / Iceberg',
    category: 'Data Lakehouse & Analytics',
    status: 'Dominant Standard',
    longevityRunway: '8-10+ years (Foundational enterprise data layer)',
    marketCapOrInvestment: '$43B+ enterprise valuation',
    successDrivers: [
      'Unifies data warehousing (BI) with machine learning data science on open storage formats (Delta Lake, Apache Iceberg)',
      'ACID transactions over low-cost cloud object storage (S3/GCS)',
      'Seamless integration with Unity Catalog for centralized governance and AI model registries'
    ],
    vulnerabilitiesOrRisks: ['High enterprise cloud consumption billing if not governed strictly by FinOps'],
    associatedSkills: ['PySpark & Distributed Compute', 'SQL Window Functions', 'Delta Lake / Iceberg Formats', 'Data Modeling', 'dbt'],
    topCompaniesHiring: ['Databricks', 'Walmart Global Tech', 'Apple', 'Target', 'Goldman Sachs'],
    architectureVerdict: 'The primary data foundation feeding enterprise generative AI models and regulatory reporting.'
  },
  {
    id: 'prod-langgraph-dspy',
    name: 'LangGraph & DSPy (Agentic Orchestration Frameworks)',
    category: 'AI/LLM Serving',
    status: 'Emerging Breakout',
    longevityRunway: '4-6 years (Active rapid evolution phase)',
    marketCapOrInvestment: '$2B+ agentic framework ecosystem',
    successDrivers: [
      'Replaces brittle linear chains with stateful, multi-actor cyclic graphs capable of self-correction',
      'DSPy programmatically optimizes prompt weights via compiler algorithms instead of manual trial-and-error',
      'Built-in state persistence and human-in-the-loop checkpoints'
    ],
    vulnerabilitiesOrRisks: ['Rapid API churn and potential consolidation into core model provider agent SDKs'],
    associatedSkills: ['State Machine Design', 'Python Asyncio', 'Tool Calling / Function Schemas', 'Deterministic Evaluation'],
    topCompaniesHiring: ['AI Startups', 'Enterprise Innovation Labs', 'Consulting AI Practices'],
    architectureVerdict: 'Rapidly superseding basic LangChain for complex enterprise agent workflows.'
  }
];

export const NETWORK_CONNECTIONS: SkillNodeConnection[] = [
  { sourceProduct: 'vLLM (PagedAttention Inference Engine)', targetSkill: 'Python Asyncio Streaming', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'vLLM (PagedAttention Inference Engine)', targetSkill: 'CUDA / GPU Memory Layout', relationship: 'Performance Differentiator', importanceWeight: 5 },
  { sourceProduct: 'vLLM (PagedAttention Inference Engine)', targetSkill: 'Kubernetes Platform Engineering', relationship: 'Ecosystem Standard', importanceWeight: 4 },
  { sourceProduct: 'DeepSeek MoE & MLA Architecture (V3 / R1)', targetSkill: 'PyTorch Low-Rank Factorization', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'DeepSeek MoE & MLA Architecture (V3 / R1)', targetSkill: 'Reinforcement Learning with Verifiable Rewards', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'DeepSeek MoE & MLA Architecture (V3 / R1)', targetSkill: 'FP8 Mixed Precision Training', relationship: 'Performance Differentiator', importanceWeight: 4 },
  { sourceProduct: 'Kubernetes & CNCF Ecosystem', targetSkill: 'Golang (Controller Runtime)', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'Kubernetes & CNCF Ecosystem', targetSkill: 'Linux cgroups & namespaces', relationship: 'Core Prerequisite', importanceWeight: 4 },
  { sourceProduct: 'Kubernetes & CNCF Ecosystem', targetSkill: 'ArgoCD / GitOps', relationship: 'Ecosystem Standard', importanceWeight: 4 },
  { sourceProduct: 'Cilium & eBPF Networking / Security', targetSkill: 'eBPF (BPF bytecode)', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'Cilium & eBPF Networking / Security', targetSkill: 'Rust Systems Toolchain', relationship: 'Performance Differentiator', importanceWeight: 4 },
  { sourceProduct: 'Rust Systems Toolchain', targetSkill: 'Memory Ownership & Lifetimes', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'Rust Systems Toolchain', targetSkill: 'Tokio Async Runtime', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'Databricks Lakehouse & Apache Spark / Iceberg', targetSkill: 'PySpark & Distributed Compute', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'Databricks Lakehouse & Apache Spark / Iceberg', targetSkill: 'Delta Lake / Iceberg Formats', relationship: 'Core Prerequisite', importanceWeight: 4 },
  { sourceProduct: 'LangGraph & DSPy (Agentic Orchestration Frameworks)', targetSkill: 'Python Asyncio Streaming', relationship: 'Core Prerequisite', importanceWeight: 5 },
  { sourceProduct: 'LangGraph & DSPy (Agentic Orchestration Frameworks)', targetSkill: 'Deterministic Evaluation', relationship: 'Performance Differentiator', importanceWeight: 4 },
];
