export interface JobOpening {
  id: string;
  title: string;
  company: string;
  companyType: 'New AI/Venture Startup' | 'Old Fortune 500 & Banking' | 'Global Capability Center (GCC)' | 'Sovereign & State-Backed Lab';
  location: string;
  region: 'US' | 'Europe' | 'India' | 'China' | 'LatAm' | 'Global Remote';
  workMode: 'Remote' | 'Hybrid' | 'Onsite';
  salaryUSD: {
    min: number;
    max: number;
    equity: string;
    bonus: string;
  };
  nativeSalaryDisplay: string;
  experienceLevel: 'Junior (0-2y)' | 'Mid (3-5y)' | 'Senior (6-9y)' | 'Staff / Principal (10+y)';
  techStack: string[];
  description: string;
  directApplyUrl: string;
  hiringTeamNotes: string;
  postedDate: string;
}

export const JOB_OPENINGS_DATA: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior LLMOps & Inference Infrastructure Engineer',
    company: 'NexusAI Inference Systems',
    companyType: 'New AI/Venture Startup',
    location: 'San Francisco, CA / Remote (US)',
    region: 'US',
    workMode: 'Remote',
    salaryUSD: {
      min: 210000,
      max: 275000,
      equity: '0.4% - 0.8% Stock Options',
      bonus: '15% performance bonus'
    },
    nativeSalaryDisplay: '$210k - $275k Base + Equity',
    experienceLevel: 'Senior (6-9y)',
    techStack: ['Python', 'vLLM', 'CUDA', 'FastAPI', 'Kubernetes', 'Triton'],
    description: 'We are seeking an engineer to own our high-throughput model serving platform. You will optimize inference latency for 70B+ parameter models, implement continuous batching, and manage multi-cloud GPU provisioning.',
    directApplyUrl: 'https://www.google.com/search?q=Senior+LLMOps+Inference+Infrastructure+Engineer+jobs',
    hiringTeamNotes: 'Must understand KV cache memory bottlenecks and asynchronous token streaming. Coding round tests custom async generator yield and backpressure.',
    postedDate: '1 day ago'
  },
  {
    id: 'job-2',
    title: 'Lead Platform Engineer (Kubernetes & FinOps)',
    company: 'Goldman Sachs Global Tech GCC',
    companyType: 'Global Capability Center (GCC)',
    location: 'Bengaluru, India (Helios Business Park)',
    region: 'India',
    workMode: 'Hybrid',
    salaryUSD: {
      min: 55000,
      max: 85000,
      equity: '$20,000 USD Annual Global RSUs',
      bonus: '25% annual cash bonus'
    },
    nativeSalaryDisplay: '₹46L - ₹72L INR Base + Global RSUs',
    experienceLevel: 'Senior (6-9y)',
    techStack: ['Go (Golang)', 'Kubernetes', 'Terraform', 'Cilium', 'Kubecost', 'AWS'],
    description: 'Lead the cloud platform architecture for Goldman Sachs global trading infrastructure. You will architect internal developer platforms, enforce multi-tenant network security, and build automated FinOps cost-scaling operators.',
    directApplyUrl: 'https://www.google.com/search?q=Goldman+Sachs+Lead+Platform+Engineer+Bengaluru+jobs',
    hiringTeamNotes: 'Direct global ownership of core trading cluster. Interview focuses on Raft consensus, K8s Custom Resource Definitions (CRDs), and zero-downtime failover.',
    postedDate: '2 days ago'
  },
  {
    id: 'job-3',
    title: 'Staff Systems Engineer (Rust & Distributed Storage)',
    company: 'Helsing AI / Sovereign Systems',
    companyType: 'New AI/Venture Startup',
    location: 'Munich, Germany / London, UK',
    region: 'Europe',
    workMode: 'Hybrid',
    salaryUSD: {
      min: 145000,
      max: 195000,
      equity: '€40,000 VSOP Stock Options',
      bonus: '10% bonus'
    },
    nativeSalaryDisplay: '€130k - €175k Base + Equity',
    experienceLevel: 'Staff / Principal (10+y)',
    techStack: ['Rust', 'Tokio', 'eBPF', 'Distributed Consensus', 'Linux Kernel', 'gRPC'],
    description: 'Design and build sub-millisecond real-time sensor processing pipelines for sovereign European aerospace and defense systems in pure memory-safe Rust.',
    directApplyUrl: 'https://www.google.com/search?q=Staff+Systems+Engineer+Rust+Munich+London+jobs',
    hiringTeamNotes: 'Deep understanding of memory-mapped files (mmap), lock-free ring buffers, and Tokio async scheduling without heap allocations.',
    postedDate: '3 days ago'
  },
  {
    id: 'job-4',
    title: 'Senior Data Platform & Lakehouse Architect',
    company: 'Walmart Global Tech GCC',
    companyType: 'Global Capability Center (GCC)',
    location: 'Hyderabad / Bengaluru, India',
    region: 'India',
    workMode: 'Hybrid',
    salaryUSD: {
      min: 48000,
      max: 72000,
      equity: '$18,000 Walmart Stock RSUs',
      bonus: '20% performance bonus'
    },
    nativeSalaryDisplay: '₹40L - ₹60L INR Base + RSUs',
    experienceLevel: 'Senior (6-9y)',
    techStack: ['PySpark', 'Databricks', 'Apache Iceberg', 'Kafka', 'SQL', 'dbt'],
    description: 'Architect petabyte-scale streaming lakehouse pipelines powering inventory forecasting and real-time supply chain intelligence across 10,000+ retail hubs.',
    directApplyUrl: 'https://www.google.com/search?q=Walmart+Global+Tech+Senior+Data+Architect+Hyderabad+jobs',
    hiringTeamNotes: 'Emphasis on Delta Lake/Iceberg schema evolution, data quality observability alerts, and Spark partition skew remediation.',
    postedDate: 'Just now'
  },
  {
    id: 'job-5',
    title: 'Senior Full-Stack Product Engineer (US Nearshore)',
    company: 'Cerebro Health (US Series B)',
    companyType: 'New AI/Venture Startup',
    location: 'São Paulo, Brazil / Remote LatAm',
    region: 'LatAm',
    workMode: 'Remote',
    salaryUSD: {
      min: 90000,
      max: 130000,
      equity: '0.25% Stock Options',
      bonus: 'Annual bonus in USD'
    },
    nativeSalaryDisplay: '$90k - $130k USD (Direct B2B Contractor)',
    experienceLevel: 'Senior (6-9y)',
    techStack: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    description: 'Work directly alongside our San Francisco medical engineering team. You will build physician diagnosis interfaces, streaming transcription components, and reliable clinical state workflows.',
    directApplyUrl: 'https://www.google.com/search?q=Full+Stack+Product+Engineer+Remote+LatAm+Nextjs+jobs',
    hiringTeamNotes: 'Full US EST time-zone alignment required. Tested on client performance optimization (Core Web Vitals) and optimistic UI rollback.',
    postedDate: '1 day ago'
  },
  {
    id: 'job-6',
    title: 'Algorithmic Optimization & NPU Kernel Engineer',
    company: 'Open Frontier AI Lab (Qwen/DeepSeek Ecosystem)',
    companyType: 'Sovereign & State-Backed Lab',
    location: 'Shenzhen / Hangzhou, China',
    region: 'China',
    workMode: 'Onsite',
    salaryUSD: {
      min: 85000,
      max: 145000,
      equity: 'High Tech Incentive Units',
      bonus: '¥200,000 RMB Performance Bonus'
    },
    nativeSalaryDisplay: '¥600k - ¥1.05M RMB Base + Bonus',
    experienceLevel: 'Senior (6-9y)',
    techStack: ['C++', 'Huawei CANN', 'PyTorch NPU', 'MoE Routing', 'FP8 Quantization', 'CUDA'],
    description: 'Optimize frontier Mixture-of-Experts (MoE) reasoning models on domestic NPU clusters. Accelerate Multi-Head Latent Attention (MLA) kernels and minimize cross-rack interconnect latency.',
    directApplyUrl: 'https://www.google.com/search?q=Kernel+Optimization+Engineer+Shenzhen+Hangzhou+PyTorch+jobs',
    hiringTeamNotes: 'Requires proven mathematical understanding of tensor matrix multiplications and hardware assembly memory tiling.',
    postedDate: '2 days ago'
  },
  {
    id: 'job-7',
    title: 'Principal Cloud Security & Zero Trust Architect',
    company: 'JPMorgan Chase & Co.',
    companyType: 'Old Fortune 500 & Banking',
    location: 'New York, NY / Hybrid',
    region: 'US',
    workMode: 'Hybrid',
    salaryUSD: {
      min: 240000,
      max: 330000,
      equity: '$75,000 Annual RSUs',
      bonus: '30% performance bonus'
    },
    nativeSalaryDisplay: '$240k - $330k Base + $75k RSUs',
    experienceLevel: 'Staff / Principal (10+y)',
    techStack: ['AWS IAM', 'Cloud Security Posture Management', 'Zero Trust', 'Python', 'Kubernetes Security', 'SIEM'],
    description: 'Oversee corporate cloud security posture, software supply chain verification (SBOM), and container runtime defenses across 6,000+ microservices.',
    directApplyUrl: 'https://www.google.com/search?q=JPMorgan+Chase+Principal+Cloud+Security+Architect+jobs',
    hiringTeamNotes: 'High-stakes threat modeling interview. Must defend zero-trust identity architectures under state-actor attack simulations.',
    postedDate: '4 days ago'
  },
  {
    id: 'job-8',
    title: 'Quality Platform & SDET Automation Engineer',
    company: 'Revolut Global FinTech',
    companyType: 'New AI/Venture Startup',
    location: 'London, UK / Krakow, Poland',
    region: 'Europe',
    workMode: 'Remote',
    salaryUSD: {
      min: 85000,
      max: 120000,
      equity: 'Stock Options Plan',
      bonus: '15% bonus'
    },
    nativeSalaryDisplay: '£65k - £95k GBP / 320k - 450k PLN',
    experienceLevel: 'Mid (3-5y)',
    techStack: ['Playwright', 'TypeScript', 'Docker', 'k6 Load Testing', 'GitHub Actions', 'Postman'],
    description: 'Build automated end-to-end regression frameworks and synthetic financial transaction load generators for Revolut mobile and web banking.',
    directApplyUrl: 'https://www.google.com/search?q=Revolut+SDET+Playwright+Automation+Engineer+jobs',
    hiringTeamNotes: 'Hands-on live coding round: Build a parallelized Playwright test framework with API mocks and zero flaky retries.',
    postedDate: '5 days ago'
  }
];
