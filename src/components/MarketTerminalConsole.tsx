import React, { useState } from 'react';
import {
  Activity,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Cpu,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Search,
  ArrowUpRight,
  Sliders,
  Layers,
  BarChart3,
  Flame,
  Globe2,
} from 'lucide-react';
import { REGIONAL_MARKETS_DATA } from '../data/regionalMarketsData';
import { IN_DEMAND_PRODUCTS } from '../data/productsAndNetworkData';
import { convertUSDToCurrency } from '../data/currencyData';

interface MarketTerminalConsoleProps {
  selectedCurrency: string;
  isPPPEnabled: boolean;
  onLaunchResearch: (query: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const MarketTerminalConsole: React.FC<MarketTerminalConsoleProps> = ({
  selectedCurrency,
  isPPPEnabled,
  onLaunchResearch,
  onNavigateTab,
}) => {
  const [activeSectorFilter, setActiveSectorFilter] = useState<'All' | 'AI' | 'Cloud' | 'Security' | 'FinTech'>('All');

  // Aggregated investment sectors across regional data
  const allInvestmentSectors = REGIONAL_MARKETS_DATA.flatMap((reg) =>
    reg.topInvestmentSectors.map((sec) => ({
      ...sec,
      regionName: reg.regionName,
      flagEmoji: reg.flagEmoji,
    }))
  );

  const filteredSectors = allInvestmentSectors.filter((sec) => {
    if (activeSectorFilter === 'AI') return sec.sector.toLowerCase().includes('ai') || sec.sector.toLowerCase().includes('model');
    if (activeSectorFilter === 'Cloud') return sec.sector.toLowerCase().includes('cloud') || sec.sector.toLowerCase().includes('platform') || sec.sector.toLowerCase().includes('kubernetes');
    if (activeSectorFilter === 'Security') return sec.sector.toLowerCase().includes('security') || sec.sector.toLowerCase().includes('trust');
    if (activeSectorFilter === 'FinTech') return sec.sector.toLowerCase().includes('fintech') || sec.sector.toLowerCase().includes('banking');
    return true;
  });

  // Ticker items
  const TICKER_ITEMS = [
    { symbol: 'vLLM/PagedAttn', change: '+82.4%', isUp: true, metric: 'Token/s/$ Lead' },
    { symbol: 'Rust/Tokio', change: '+48.1%', isUp: true, metric: 'Systems Top Tier' },
    { symbol: 'DeepSeek-MLA', change: '+94.0%', isUp: true, metric: 'KV Memory -93%' },
    { symbol: 'Kubernetes/CNCF', change: '+26.2%', isUp: true, metric: 'Cloud OS Standard' },
    { symbol: 'eBPF/Cilium', change: '+33.5%', isUp: true, metric: 'Kernel Networking' },
    { symbol: 'India GCC Corridor', change: '+52.0%', isUp: true, metric: '₹50L+ Median Senior' },
    { symbol: 'US Bay AI Infer', change: '+38.5%', isUp: true, metric: '$320k TC Avg' },
    { symbol: 'Manual QA/Spreadsheet', change: '-28.4%', isUp: false, metric: 'Contracting Headcount' },
    { symbol: 'Legacy PHP/CRUD', change: '-14.2%', isUp: false, metric: 'Margin Squeeze' },
  ];

  return (
    <div className="space-y-6">
      {/* Stock Market Style Live Ticker Tape */}
      <div className="relative overflow-hidden rounded-xl bg-slate-950 border border-slate-800 p-2 shadow-inner">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 shrink-0 flex items-center gap-1">
            <Activity className="w-3 h-3 animate-pulse" /> LIVE TERMINAL TICKER
          </span>
          <div className="flex items-center gap-4 shrink-0 text-xs">
            {TICKER_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800/80 font-mono"
              >
                <span className="font-semibold text-slate-200">{item.symbol}</span>
                <span
                  className={`text-[11px] font-bold flex items-center ${
                    item.isUp ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {item.isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                  {item.change}
                </span>
                <span className="text-[10px] text-slate-500 hidden sm:inline">({item.metric})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Terminal Command Bar */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Market Regime: Disciplined High-Leverage Expansion (Post-ZIRP Equilibrium)
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Tech Labor Market Capital & Runway Terminal
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl">
              Real-time monitoring of where global tech venture and enterprise capex is flowing, why specific architectures win, and mathematical longevity estimates before obsolescence.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => onNavigateTab('products')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Products & Network Graph</span>
            </button>
            <button
              onClick={() => onNavigateTab('pathways')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-600/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Granular Learning Paths</span>
            </button>
          </div>
        </div>

        {/* Global Market Gauges */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Annual AI Capex Inflow</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-white">$240B+</span>
              <span className="text-xs text-purple-400 font-semibold font-mono">Runway 10y+</span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Hardware, datacenters & inference</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Hiring Velocity Index</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-emerald-400">89 / 100</span>
              <span className="text-xs text-slate-400 font-mono">Resilient</span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Zero involuntary layoffs in AI/Infra</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Senior vs Junior Disparity</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-amber-400">3.4x</span>
              <span className="text-xs text-amber-300 font-mono">Bifurcation</span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Staff level demand vs entry freeze</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 uppercase font-semibold block">Global GCC Migration</span>
            <div className="mt-1 flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-sky-400">1,650+</span>
              <span className="text-xs text-sky-300 font-mono">Captive Hubs</span>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block">Owned enterprise subsidiaries</span>
          </div>
        </div>
      </div>

      {/* Investment Sectors Longevity & Success Factors Matrix */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-sky-400" />
              Investment Sectors: Capital Deployment, Longevity & Why They Win
            </h3>
            <p className="text-xs text-slate-400">
              Examining the durability of hiring trends—distinguishing multi-year structural waves from fleeting 12-month wrapper cycles.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800 self-start sm:self-auto">
            {(['All', 'AI', 'Cloud', 'Security', 'FinTech'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSectorFilter(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeSectorFilter === cat
                    ? 'bg-sky-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSectors.map((sector, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-lg hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{sector.flagEmoji}</span>
                    <span className="text-xs font-semibold text-slate-300">{sector.regionName}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-950 text-sky-300 border border-sky-800/60 font-mono text-xs font-bold">
                    {sector.annualCapitalUSD} CapEx
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mt-3 leading-snug">
                  {sector.sector}
                </h4>

                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {sector.keyDrivers}
                </p>

                {/* Longevity Runway Badge */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    Trend Longevity Runway:
                  </span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {sector.runwayLongevityYears}
                  </span>
                </div>

                {/* Why They Succeed */}
                <div className="mt-4 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Architectural Reasons for Success:
                  </span>
                  <ul className="space-y-1">
                    {sector.successFactors.map((factor, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Risk Factors */}
                <div className="mt-3 pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1 mb-1">
                    <AlertTriangle className="w-3 h-3" /> Vulnerabilities & Downside Risks:
                  </span>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {sector.riskFactors.join('; ')}
                  </p>
                </div>
              </div>

              {/* Research CTA */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Live Search Grounded Analysis</span>
                <button
                  onClick={() =>
                    onLaunchResearch(
                      `Deep research on capital investment, longevity runway, and enterprise hiring standards in ${sector.sector}`
                    )
                  }
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
                >
                  Analyze Sector <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
