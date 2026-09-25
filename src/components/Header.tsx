import React from 'react';
import {
  TrendingUp,
  Search,
  Layers,
  DollarSign,
  Zap,
  Compass,
  FileText,
  Activity,
  Globe2,
  Cpu,
  BarChart2,
  Briefcase,
  Network,
  ShieldCheck,
  GitBranch,
} from 'lucide-react';
import { MACRO_METRICS } from '../data/marketResearchData';
import { CurrencySelector } from './CurrencySelector';

export type ActiveTab =
  | 'overview'
  | 'terminal'
  | 'regions'
  | 'products'
  | 'pathways'
  | 'jobs'
  | 'research'
  | 'domains'
  | 'salaries'
  | 'skills'
  | 'pivots'
  | 'dossiers';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedCurrency: string;
  onSelectCurrency: (code: string) => void;
  isPPPEnabled: boolean;
  onTogglePPP: () => void;
  onOpenSourcesModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedCurrency,
  onSelectCurrency,
  isPPPEnabled,
  onTogglePPP,
  onOpenSourcesModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* Top Banner / Ticker with Quick Controls */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live IT Market Intelligence Hub
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:flex items-center gap-1">
              Tech Unemployment: <strong className="text-slate-200">{MACRO_METRICS.techUnemploymentRatePct}%</strong>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1">
              AI Capex: <strong className="text-purple-300">${MACRO_METRICS.aiInvestmentCapexBillionsUSD}B+</strong>
            </span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1 text-[11px]">
              Hybrid: <span className="text-indigo-300 font-semibold">{MACRO_METRICS.hybridSharePct}%</span> / Remote: <span className="text-sky-300 font-semibold">{MACRO_METRICS.remoteSharePct}%</span>
            </span>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Global Currency & PPP Selector */}
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onSelectCurrency={onSelectCurrency}
              isPPPEnabled={isPPPEnabled}
              onTogglePPP={onTogglePPP}
            />

            {/* Verified Sources Button */}
            <button
              onClick={onOpenSourcesModal}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/50 transition-colors cursor-pointer"
              title="View audited sources and citations (Levels.fyi, CompTIA, Stack Overflow, GitHub, NASSCOM, BLS)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Data Sources</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setActiveTab('overview')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-sky-900/30 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Activity className="w-5 h-5 text-sky-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-white">
                  TechTalent<span className="text-sky-400">IQ</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold px-1.5 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded hidden sm:inline">
                  Deep Research
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                Global IT Labor, Capital & Skills Terminal
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Overview
            </button>

            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'terminal'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5 text-sky-400" />
              Market Terminal
            </button>

            <button
              onClick={() => setActiveTab('regions')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'regions'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              Regional Scopes
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'products'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              Products & Network
            </button>

            <button
              onClick={() => setActiveTab('pathways')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'pathways'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Learning Paths
            </button>

            <button
              onClick={() => setActiveTab('pivots')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'pivots'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
              <span>Tech Modernizer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            </button>

            <button
              onClick={() => setActiveTab('jobs')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'jobs'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Job Hunter
            </button>

            <button
              onClick={() => setActiveTab('salaries')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'salaries'
                  ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              Salary Radar
            </button>

            <button
              onClick={() => setActiveTab('research')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all relative ${
                activeTab === 'research'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-sky-400" />
              Live Deep Research
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping"></span>
            </button>
          </nav>

          {/* Search Button CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('research')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium text-xs shadow-md shadow-sky-700/20 transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Query Intelligence</span>
            </button>
          </div>
        </div>

        {/* Secondary Sub-Nav Bar (Responsive & Tablet) */}
        <div className="xl:hidden flex items-center gap-1.5 overflow-x-auto py-2 border-t border-slate-800/60 no-scrollbar text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-md shrink-0 ${activeTab === 'overview' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`px-3 py-1 rounded-md shrink-0 flex items-center gap-1 ${activeTab === 'terminal' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            <BarChart2 className="w-3 h-3 text-sky-400" /> Market Terminal
          </button>
          <button
            onClick={() => setActiveTab('regions')}
            className={`px-3 py-1 rounded-md shrink-0 flex items-center gap-1 ${activeTab === 'regions' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            <Globe2 className="w-3 h-3 text-sky-400" /> Regions
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-3 py-1 rounded-md shrink-0 flex items-center gap-1 ${activeTab === 'products' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            <Network className="w-3 h-3 text-sky-400" /> Products & Network
          </button>
          <button
            onClick={() => setActiveTab('pathways')}
            className={`px-3 py-1 rounded-md shrink-0 flex items-center gap-1 ${activeTab === 'pathways' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            <Compass className="w-3 h-3 text-sky-400" /> Learning Paths
          </button>
          <button
            onClick={() => setActiveTab('pivots')}
            className={`px-3 py-1 rounded-md shrink-0 flex items-center gap-1 ${activeTab === 'pivots' ? 'bg-indigo-500/20 text-indigo-300 font-semibold' : 'text-slate-400'}`}
          >
            <GitBranch className="w-3 h-3 text-indigo-400" /> Tech Modernizer
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-3 py-1 rounded-md shrink-0 flex items-center gap-1 ${activeTab === 'jobs' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            <Briefcase className="w-3 h-3 text-sky-400" /> Job Hunter
          </button>
          <button
            onClick={() => setActiveTab('salaries')}
            className={`px-3 py-1 rounded-md shrink-0 ${activeTab === 'salaries' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            Salaries
          </button>
          <button
            onClick={() => setActiveTab('domains')}
            className={`px-3 py-1 rounded-md shrink-0 ${activeTab === 'domains' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            Domains
          </button>
          <button
            onClick={() => setActiveTab('research')}
            className={`px-3 py-1 rounded-md shrink-0 flex items-center gap-1 ${activeTab === 'research' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400'}`}
          >
            <Search className="w-3 h-3 text-sky-400" /> Live Research
          </button>
        </div>
      </div>
    </header>
  );
};
