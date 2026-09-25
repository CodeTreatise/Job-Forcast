import React from 'react';
import {
  TrendingUp,
  AlertCircle,
  Briefcase,
  Users,
  Compass,
  ArrowUpRight,
  Sparkles,
  Search,
  ShieldCheck,
  Cpu,
  Layers,
  Building2,
  DollarSign,
  Clock,
  BarChart2,
  Network,
  Globe2,
  GitBranch,
} from 'lucide-react';
import { MACRO_METRICS, DOMAIN_PROFILES } from '../data/marketResearchData';
import { convertUSDToCurrency } from '../data/currencyData';

interface ExecutiveOverviewProps {
  selectedCurrency: string;
  isPPPEnabled: boolean;
  onNavigateTab: (tab: any) => void;
  onLaunchResearch: (query: string) => void;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  selectedCurrency,
  isPPPEnabled,
  onNavigateTab,
  onLaunchResearch,
}) => {
  const quickResearchPrompts = [
    {
      label: 'AI & LLMOps Inference Demand',
      query: 'Current hiring demand, tech stack expectations, and compensation for AI/LLMOps inference engineers in 2026',
    },
    {
      label: 'Indian GCC Hiring Boom',
      query: 'Growth of Global Capability Centers (GCCs) in India for Cloud, AI, and Cybersecurity engineering roles',
    },
    {
      label: 'Rust vs Go in Systems',
      query: 'Enterprise adoption rates, memory safety mandates, and salary premiums for Rust vs Go backend engineers',
    },
    {
      label: 'Chinese Open-Weight AI Surge',
      query: 'Impact of DeepSeek MoE and Qwen open-weight models on global AI engineering talent demand',
    },
  ];

  const avgSalaryDisplay = convertUSDToCurrency(MACRO_METRICS.avgTechSalaryUSD, selectedCurrency, isPPPEnabled).formatted;

  return (
    <div className="space-y-8">
      {/* Hero Executive Banner */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/60 border border-slate-800 p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            2026 Global Tech Labor & Engineering Intelligence
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The State of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">IT Job Market</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            A comprehensive, data-grounded synthesis of global tech hiring dynamics. Following the post-ZIRP correction, the IT labor market has transitioned into a discipline of <strong>selective high-leverage hiring</strong>, massive capital reallocation to <strong>AI infrastructure</strong>, and the rise of <strong>Global Capability Centers (GCCs)</strong>.
          </p>

          {/* Quick Action Navigation Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigateTab('terminal')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-sky-500/20 cursor-pointer"
            >
              <BarChart2 className="w-4 h-4" />
              Open Market Terminal
            </button>

            <button
              onClick={() => onNavigateTab('pivots')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 font-semibold text-sm border border-indigo-500/50 transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
            >
              <GitBranch className="w-4 h-4 text-indigo-400" />
              <span>Legacy Tech Modernizer</span>
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            </button>

            <button
              onClick={() => onNavigateTab('regions')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <Globe2 className="w-4 h-4 text-sky-400" />
              Regional Scopes (US, EU, India, China)
            </button>

            <button
              onClick={() => onNavigateTab('pathways')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              Granular Learning Paths
            </button>

            <button
              onClick={() => onNavigateTab('jobs')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              Job Hunter Portal
            </button>
          </div>
        </div>
      </div>

      {/* Macro Indicators Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Tech Postings Index */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Global Tech Postings Index</span>
            <TrendingUp className="w-4 h-4 text-sky-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{MACRO_METRICS.globalTechPostingsIndex}</span>
            <span className="text-xs font-semibold text-emerald-400 flex items-center">
              +14% vs 2023 Low
            </span>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-normal">
            Baseline 100 in 2021. Stabilized after post-pandemic correction with strong polarization toward AI, cloud & systems roles.
          </p>
        </div>

        {/* Card 2: Tech Unemployment */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Tech Unemployment Rate</span>
            <Users className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{MACRO_METRICS.techUnemploymentRatePct}%</span>
            <span className="text-xs text-slate-400">vs {MACRO_METRICS.overallJobMarketUnemploymentRatePct}% national</span>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-normal">
            Remains nearly half of the general workforce unemployment rate, demonstrating resilient baseline demand for technical talent.
          </p>
        </div>

        {/* Card 3: Days to Hire */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Median Days to Hire</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">44 days</span>
            <span className="text-xs text-amber-400">Strict technical bars</span>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-normal">
            Employers are taking longer to evaluate candidates with extensive practical system design and hands-on architecture defense.
          </p>
        </div>

        {/* Card 4: AI CapEx */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Hyperscaler AI CapEx</span>
            <Cpu className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">${MACRO_METRICS.aiInvestmentCapexBillionsUSD}B+</span>
            <span className="text-xs text-purple-400">Annual Run-rate</span>
          </div>
          <p className="mt-2 text-xs text-slate-400 leading-normal">
            Capital expenditure in GPUs, datacenters, and inference infrastructure driving the highest compensation premiums in the sector.
          </p>
        </div>
      </div>

      {/* Quick Launchpad to Specific Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => onNavigateTab('terminal')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-sky-400">
                <BarChart2 className="w-4 h-4" /> Market Terminal
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-sky-300" />
            </div>
            <h4 className="text-sm font-bold text-white">Capital Inflow & Longevity</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Track $240B+ annual investment streams, why technologies win, and 5-10 year runway predictions.
            </p>
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('pivots')}
          className="p-5 rounded-2xl bg-indigo-950/30 border border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-950/50 transition-all cursor-pointer group flex flex-col justify-between shadow-lg shadow-indigo-950/30"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-indigo-300 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-indigo-400">
                <GitBranch className="w-4 h-4" /> Tech Modernizer
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-400/30">
                NEW
              </span>
            </div>
            <h4 className="text-sm font-bold text-white">Old Titles & Tech Progression</h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Working in Angular, Manual QA, Java Monoliths, or Sysadmin? Discover verified next-step roadmaps & +35-65% comp uplifts.
            </p>
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('products')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-sky-400">
                <Network className="w-4 h-4" /> Products & Network
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-sky-300" />
            </div>
            <h4 className="text-sm font-bold text-white">In-Demand Tech & Graphs</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Explore vLLM, DeepSeek MoE/MLA, Kubernetes, and eBPF alongside interconnected prerequisite skills.
            </p>
          </div>
        </div>

        <div
          onClick={() => onNavigateTab('pathways')}
          className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 font-bold text-amber-400">
                <Compass className="w-4 h-4" /> Granular Learning
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:text-amber-300" />
            </div>
            <h4 className="text-sm font-bold text-white">Domain-Specific Sub-Topics</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Understand why Python for AI differs from Python for LLMOps, with official documentation links and capstones.
            </p>
          </div>
        </div>
      </div>

      {/* Workplace Flexibility Distribution */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-400" />
              Workplace Flexibility Distribution (Global IT Postings)
            </h3>
            <p className="text-xs text-slate-400">
              The post-mandate equilibrium: Hybrid (2-3 days office) is the enterprise norm, while specialized senior/staff engineers command full remote options.
            </p>
          </div>
          <span className="text-xs text-slate-400 shrink-0 font-mono">Sample: 450,000+ tech job listings</span>
        </div>

        {/* Visual Progress Bar */}
        <div className="h-4 w-full bg-slate-800 rounded-full overflow-hidden flex">
          <div
            style={{ width: `${MACRO_METRICS.hybridSharePct}%` }}
            className="bg-indigo-500 h-full flex items-center justify-center text-[10px] font-bold text-white transition-all"
            title={`Hybrid: ${MACRO_METRICS.hybridSharePct}%`}
          >
            Hybrid {MACRO_METRICS.hybridSharePct}%
          </div>
          <div
            style={{ width: `${MACRO_METRICS.remoteSharePct}%` }}
            className="bg-sky-400 h-full flex items-center justify-center text-[10px] font-bold text-slate-950 transition-all"
            title={`Remote: ${MACRO_METRICS.remoteSharePct}%`}
          >
            Remote {MACRO_METRICS.remoteSharePct}%
          </div>
          <div
            style={{ width: `${MACRO_METRICS.onsiteSharePct}%` }}
            className="bg-slate-600 h-full flex items-center justify-center text-[10px] font-bold text-slate-200 transition-all"
            title={`On-site: ${MACRO_METRICS.onsiteSharePct}%`}
          >
            On-site {MACRO_METRICS.onsiteSharePct}%
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></span>
            <span>Hybrid (56%) - Dominant across Enterprise & Banking</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-sky-400"></span>
            <span>Fully Remote (24%) - High in Series A-C & Staff roles</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-600"></span>
            <span>On-site Only (20%) - Defense, Hardware & Legacy Gov</span>
          </div>
        </div>
      </div>

      {/* The 4 Major Structural Forces */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">The Four Structural Market Forces</h2>
            <p className="text-xs text-slate-400">Core economic and organizational shifts reshaping tech hiring</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Force 1 */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-5 hover:border-sky-500/40 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">1. The AI Systems & Inference Shift</h3>
                <span className="text-[11px] font-medium text-purple-300">Beyond simple API prompts</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Generic chatbot wrappers have dried up. Budgets are directed toward engineers who master <strong>inference cost optimization</strong> (vLLM, quantization), <strong>deterministic evaluation harnesses</strong> (Ragas, TruLens), and multi-agent workflow orchestration. High compensation premiums of 25-40% apply to engineers bridging ML research and distributed systems.
            </p>
          </div>

          {/* Force 2 */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-5 hover:border-sky-500/40 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">2. The Seniority Bifurcation</h3>
                <span className="text-[11px] font-medium text-amber-300">Junior compression vs. Staff-level premium</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Entry-level postings (0-2 years) are down 34% from 2021 highs as AI coding assistants handle routine boilerplate, unit tests, and repetitive CRUD tasks. In contrast, Staff and Principal-level engineers with proven track records in <strong>fault isolation, distributed architecture, and technical roadmap execution</strong> face intense bidding wars.
            </p>
          </div>

          {/* Force 3 */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-5 hover:border-sky-500/40 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">3. Platform Engineering & FinOps Discipline</h3>
                <span className="text-[11px] font-medium text-sky-300">Internal platforms and cloud cost governance</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              The era of reckless cloud spending is over. Companies are consolidating DevOps into formal <strong>Platform Engineering teams</strong> that deliver Internal Developer Platforms (IDPs using Backstage/Port) and enforce automated FinOps (Kubecost, automated spot instance scheduling), reducing cognitive load on application developers.
            </p>
          </div>

          {/* Force 4 */}
          <div className="rounded-xl bg-slate-900/60 border border-slate-800/80 p-5 hover:border-sky-500/40 transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">4. The GCC Era & Global Talent Redirection</h3>
                <span className="text-[11px] font-medium text-emerald-300">Owned offshore hubs replacing 3rd-party outsourcing</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              Fortune 500 enterprises are pivoting away from third-party outsourcing IT contractors and aggressively scaling <strong>Global Capability Centers (GCCs)</strong> in India (Bengaluru, Hyderabad, Pune), Poland, and Mexico. These owned subsidiaries manage high-impact core products, algorithmic engines, and enterprise AI roadmaps with competitive global compensation.
            </p>
          </div>
        </div>
      </div>

      {/* Sector Hiring Velocity Radar Snapshot */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Hiring Velocity by IT Domain</h2>
            <p className="text-xs text-slate-400">Year-over-Year job requisition growth and recruitment difficulty</p>
          </div>
          <button
            onClick={() => onNavigateTab('domains')}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
          >
            Detailed Domain Breakdown <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {DOMAIN_PROFILES.map((domain) => {
            const isExtreme = domain.demandLevel === 'Extreme';
            const isVeryHigh = domain.demandLevel === 'Very High';
            return (
              <div
                key={domain.id}
                onClick={() => onNavigateTab('domains')}
                className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 hover:border-sky-500/50 hover:bg-slate-800/40 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isExtreme
                        ? 'bg-purple-950 text-purple-300 border border-purple-800/60'
                        : isVeryHigh
                        ? 'bg-sky-950 text-sky-300 border border-sky-800/60'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {domain.demandLevel} Demand
                  </span>
                  <span className="text-xs font-bold text-emerald-400">+{domain.growthYoY}% YoY</span>
                </div>

                <h4 className="mt-3 text-sm font-semibold text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                  {domain.title}
                </h4>

                <p className="mt-1 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {domain.overview}
                </p>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Hiring Cycle: <strong>{domain.avgDaysToHire} days</strong></span>
                  <span className="text-sky-400 flex items-center gap-0.5">
                    View <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Quick Deep Research Launcher */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-slate-900 border border-sky-800/40 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              Live Grounded Research Queries
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              Want real-time data on a specific niche or role?
            </h3>
            <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
              Launch our Gemini 3.8 Flash search-grounded deep research agent to synthesize real-time compensation data, job statistics, and company hiring trends with clickable citations.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('research')}
            className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shrink-0 transition-all cursor-pointer"
          >
            Open Research Console
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {quickResearchPrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => onLaunchResearch(p.query)}
              className="text-left p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-sky-500/60 hover:bg-slate-850 transition-all group cursor-pointer"
            >
              <div className="text-xs font-semibold text-sky-300 group-hover:text-sky-200 flex items-center justify-between">
                <span>{p.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{p.query}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
