export interface DataSource {
  id: string;
  name: string;
  organization: string;
  category: 'Compensation' | 'Labor & Postings' | 'Developer Ecosystem' | 'Regional GCC' | 'AI & LLM Benchmark';
  coverage: string;
  sampleSize: string;
  lastUpdated: string;
  updateFrequency: string;
  url: string;
  description: string;
  methodologyNotes: string;
  extractedMetrics: string[];
}

export const DATA_SOURCES_REGISTRY: DataSource[] = [
  {
    id: 'src-levels',
    name: 'Levels.fyi Real-Time Engineering Compensation Index',
    organization: 'Levels.fyi Inc.',
    category: 'Compensation',
    coverage: 'US, Canada, Europe, India, Singapore, Australia, LatAm',
    sampleSize: '350,000+ verified tech offer submissions with W2/Offer letter audits',
    lastUpdated: 'Updated Q3 2026',
    updateFrequency: 'Continuous real-time',
    url: 'https://www.levels.fyi',
    description: 'Gold standard for tech compensation benchmarking, breaking down Base Salary, Stock Grants (RSU/Options), and Annual Performance Bonuses across strict engineering bands (L3 through L8/Staff/Fellow).',
    methodologyNotes: 'Data is validated via pay stubs, offer letters, and corporate email verification. Outliers are removed via IQR statistical trimming.',
    extractedMetrics: ['Base vs RSU ratios by tier', 'Regional compensation disparity factors', 'Staff/Principal equity cliff benchmarks']
  },
  {
    id: 'src-stackoverflow',
    name: 'Stack Overflow Annual Developer & Technology Intelligence Survey',
    organization: 'Stack Overflow / Prosus',
    category: 'Developer Ecosystem',
    coverage: 'Global (180+ countries)',
    sampleSize: '65,000+ active professional software developers',
    lastUpdated: 'Annual Edition (2025/2026 Series)',
    updateFrequency: 'Annual with mid-year pulse checks',
    url: 'https://survey.stackoverflow.co',
    description: 'Definitive developer sentiment, framework popularity, toolchain adoption, and language velocity survey across the global developer community.',
    methodologyNotes: 'Stratified sampling across software engineers, DevOps practitioners, and ML researchers with bias-correction weighting.',
    extractedMetrics: ['Most loved vs dreaded technologies', 'Language salary premiums (Rust, Go, Zig)', 'AI coding assistant penetration rates']
  },
  {
    id: 'src-comptia',
    name: 'CompTIA State of the Tech Workforce & Tech Jobs Report',
    organization: 'Computing Technology Industry Association',
    category: 'Labor & Postings',
    coverage: 'North America, UK, and European Metropolitan Hubs',
    sampleSize: 'Analysis of 1.2M+ active tech job postings tracked monthly',
    lastUpdated: 'Monthly Tech Employment Tracker 2026',
    updateFrequency: 'Monthly',
    url: 'https://www.comptia.org',
    description: 'Comprehensive macro analysis tracking tech unemployment rates, hiring velocity, metropolitan tech cluster shifts, and job posting volumes.',
    methodologyNotes: 'Synthesized with US Bureau of Labor Statistics (BLS) and European labor ministries data using Lightcast posting scraping.',
    extractedMetrics: ['Tech sector unemployment rate (2.3% vs national 4.1%)', 'Metropolitan days-to-hire velocity', 'Emerging tech hiring density']
  },
  {
    id: 'src-github',
    name: 'GitHub State of the Octoverse',
    organization: 'GitHub / Microsoft Corp.',
    category: 'Developer Ecosystem',
    coverage: '100M+ developers across global repositories',
    sampleSize: 'Over 500 million pull requests and repo interactions analyzed',
    lastUpdated: 'Annual Intelligence Release 2025/2026',
    updateFrequency: 'Annual',
    url: 'https://github.blog/news-insights/octoverse/',
    description: 'Empirical tracking of open-source repository creation, language growth rates, AI generative workflow adoption, and global developer geography.',
    methodologyNotes: 'Full-telemetry repository graph analysis tracking active contributors, stars, pull requests, and commit velocity.',
    extractedMetrics: ['Python passing JavaScript in enterprise repos', 'Fastest growing languages (Rust, TypeScript, Go)', 'GenAI repo proliferation rate']
  },
  {
    id: 'src-nasscom',
    name: 'NASSCOM-Zinnov GCC India Landscape & Global Talents Report',
    organization: 'NASSCOM & Zinnov Management Consulting',
    category: 'Regional GCC',
    coverage: 'India (Bengaluru, Hyderabad, Pune, NCR, Chennai) & Eastern Europe',
    sampleSize: '1,650+ Global Capability Centers employing 1.7M+ high-tech professionals',
    lastUpdated: 'Strategic Report 2025/2026',
    updateFrequency: 'Biannual',
    url: 'https://nasscom.in',
    description: 'Authoritative data on the evolution of GCCs from cost-arbitrage back-offices into strategic global product, AI, and systems engineering hubs.',
    methodologyNotes: 'Direct corporate census of Fortune 500 captive engineering centers in India, Poland, and Mexico.',
    extractedMetrics: ['₹40L-₹1.2Cr compensation bands in Tier-1 GCCs', 'Direct offshore IP ownership share (rising to 62%)', 'Annual hiring intake in AI/Cloud']
  },
  {
    id: 'src-huggingface',
    name: 'Hugging Face Open LLM & Model Hub Velocity Tracker',
    organization: 'Hugging Face Inc.',
    category: 'AI & LLM Benchmark',
    coverage: 'Global Open-Source AI Ecosystem & Enterprise Deployments',
    sampleSize: 'Over 1,200,000 public models, datasets, and inference endpoints',
    lastUpdated: 'Live Continuous 2026',
    updateFrequency: 'Daily real-time',
    url: 'https://huggingface.co',
    description: 'Tracks model downloads, fine-tuning checkpoints, inference latency benchmarks, and open-weight model architectures (DeepSeek, Llama, Qwen, Mistral).',
    methodologyNotes: 'API telemetry, Open LLM leaderboard evaluations (MMLU-Pro, GSM8K, Arena Hard), and model runtime execution benchmarks.',
    extractedMetrics: ['Adoption rates of vLLM / Ollama runtimes', 'Open-weight vs Closed API market share shift', 'Small Language Model (SLM) edge deployments']
  },
  {
    id: 'src-bls',
    name: 'US Bureau of Labor Statistics (BLS) Occupational Employment Statistics',
    organization: 'United States Department of Labor',
    category: 'Labor & Postings',
    coverage: 'United States national, state, and metropolitan statistical areas',
    sampleSize: 'Semi-annual mail survey of 1.1 million establishments',
    lastUpdated: 'BLS Employment Projections',
    updateFrequency: 'Semi-Annual',
    url: 'https://www.bls.gov/ooh/computer-and-information-technology/',
    description: 'Official US government benchmark for occupational wage statistics, 10-year employment growth trajectories, and labor force participation.',
    methodologyNotes: 'Mandatory establishment-level reporting categorized under SOC codes (15-1252 Software Developers, 15-1212 InfoSec Analysts).',
    extractedMetrics: ['Software engineering 10-yr growth rate (+17%)', 'Cybersecurity demand growth (+32%)', 'National median tech wage benchmarks']
  }
];
