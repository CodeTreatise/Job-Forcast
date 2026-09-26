import React, { useState, useRef, useEffect } from 'react';
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
  BarChart2,
  Briefcase,
  Network,
  ShieldCheck,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  LayoutGrid,
  Check,
  Sparkles,
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

export interface TabDefinition {
  id: ActiveTab;
  label: string;
  shortLabel: string;
  category: 'Market Pulse' | 'Careers & Comp' | 'Skills & Tech' | 'Research';
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  badge?: string;
  badgeColor?: string;
}

export const NAVIGATION_TABS: TabDefinition[] = [
  // Market Pulse
  {
    id: 'overview',
    label: 'Overview',
    shortLabel: 'Overview',
    category: 'Market Pulse',
    icon: TrendingUp,
    description: 'Executive macro trends, tech unemployment rate & capex telemetry',
  },
  {
    id: 'terminal',
    label: 'Market Terminal',
    shortLabel: 'Terminal',
    category: 'Market Pulse',
    icon: BarChart2,
    description: 'Live hiring telemetry, layoff velocity & sector momentum indices',
  },
  {
    id: 'regions',
    label: 'Regional Scopes',
    shortLabel: 'Regions',
    category: 'Market Pulse',
    icon: Globe2,
    description: 'Tech hubs across US, EMEA, APAC & LatAm with cost multipliers',
  },

  // Careers & Compensation
  {
    id: 'salaries',
    label: 'Salary Radar',
    shortLabel: 'Salaries',
    category: 'Careers & Comp',
    icon: DollarSign,
    description: 'Global P25 to P90 compensation percentiles, equity & PPP parity',
  },
  {
    id: 'jobs',
    label: 'Job Hunter',
    shortLabel: 'Job Hunter',
    category: 'Careers & Comp',
    icon: Briefcase,
    description: 'Real-time verified technical job openings & verified salary tags',
  },
  {
    id: 'pivots',
    label: 'Tech Modernizer',
    shortLabel: 'Modernizer',
    category: 'Careers & Comp',
    icon: GitBranch,
    description: 'Legacy-to-Modern skill pathways, salary upside & 90-day roadmaps',
    badge: 'HOT',
    badgeColor: 'bg-amber-400 text-slate-950 font-bold',
  },

  // Skills & Tech
  {
    id: 'skills',
    label: 'Skill Velocity',
    shortLabel: 'Skills',
    category: 'Skills & Tech',
    icon: Zap,
    description: 'Fastest growing skills vs fading legacy tech with salary premiums',
  },
  {
    id: 'products',
    label: 'Product Network',
    shortLabel: 'Products',
    category: 'Skills & Tech',
    icon: Network,
    description: 'Tech ecosystem graph, framework adoption & architecture stacks',
  },
  {
    id: 'pathways',
    label: 'Learning Paths',
    shortLabel: 'Paths',
    category: 'Skills & Tech',
    icon: Compass,
    description: 'Structured roadmaps for AI Engineering, Cloud & Security roles',
  },
  {
    id: 'domains',
    label: 'Domain Profiles',
    shortLabel: 'Domains',
    category: 'Skills & Tech',
    icon: Layers,
    description: 'Specialized domain telemetry in FinTech, CyberSec, AI & HealthTech',
  },

  // Research
  {
    id: 'research',
    label: 'Live Deep Research',
    shortLabel: 'Live Research',
    category: 'Research',
    icon: Search,
    description: 'Search-grounded interactive market research & synthesis engine',
    badge: 'LIVE',
    badgeColor: 'bg-emerald-400 text-slate-950 font-bold',
  },
  {
    id: 'dossiers',
    label: 'Research Dossiers',
    shortLabel: 'Dossiers',
    category: 'Research',
    icon: FileText,
    description: 'Audited market intelligence whitepapers & analytical forecasts',
  },
];

const CATEGORIES = ['Market Pulse', 'Careers & Comp', 'Skills & Tech', 'Research'] as const;

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
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Check scroll bounds to show/hide clean smooth scroll chevrons
  const checkScrollBounds = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
  };

  useEffect(() => {
    checkScrollBounds();
    window.addEventListener('resize', checkScrollBounds);
    return () => window.removeEventListener('resize', checkScrollBounds);
  }, []);

  // Smoothly scroll active tab into view when activeTab changes
  useEffect(() => {
    const activeBtn = document.getElementById(`nav-btn-${activeTab}`);
    if (activeBtn && scrollContainerRef.current) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
    checkScrollBounds();
  }, [activeTab]);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMegaMenuOpen]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 280;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setTimeout(checkScrollBounds, 300);
  };

  const currentTab = NAVIGATION_TABS.find((t) => t.id === activeTab) || NAVIGATION_TABS[0];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      {/* 1. TOP METRICS TICKER & GLOBAL CONTROLS */}
      <div className="bg-slate-900 border-b border-slate-800/90 px-3 sm:px-6 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Live Market Signals */}
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-0.5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live IT Market Telemetry
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="text-slate-300 hidden sm:flex items-center gap-1 shrink-0">
              Tech Unemployment: <strong className="text-white font-bold">{MACRO_METRICS.techUnemploymentRatePct}%</strong>
            </span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="text-slate-300 hidden md:flex items-center gap-1 shrink-0">
              AI Capex: <strong className="text-purple-300 font-bold">${MACRO_METRICS.aiInvestmentCapexBillionsUSD}B+</strong>
            </span>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <span className="text-slate-300 hidden lg:flex items-center gap-1 text-[11px] shrink-0">
              Remote/Hybrid: <strong className="text-sky-300">{MACRO_METRICS.hybridSharePct + MACRO_METRICS.remoteSharePct}%</strong>
            </span>
          </div>

          {/* Currency, PPP & Audited Sources Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <CurrencySelector
              selectedCurrency={selectedCurrency}
              onSelectCurrency={onSelectCurrency}
              isPPPEnabled={isPPPEnabled}
              onTogglePPP={onTogglePPP}
            />

            <button
              onClick={onOpenSourcesModal}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 hover:text-white hover:bg-emerald-800/60 text-xs font-semibold transition-colors cursor-pointer"
              title="View audited sources (Levels.fyi, CompTIA, Stack Overflow, GitHub, BLS)"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Audited Data</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY BRAND ROW */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 gap-3">
          {/* Brand Logo & Current View Kicker */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('overview')}
              className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-none group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-cyan-400 p-0.5 shadow-md shadow-sky-900/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Activity className="w-5 h-5 text-sky-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-extrabold tracking-tight text-white">
                    TechTalent<span className="text-sky-400">IQ</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 bg-slate-800 text-sky-300 border border-slate-700 rounded hidden sm:inline">
                    Terminal
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 hidden md:block">
                  Global IT Labor, Capital & Skills Intelligence
                </p>
              </div>
            </button>

            {/* Breadcrumb / Active Module Indicator */}
            <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-slate-800 text-xs text-slate-400">
              <span className="text-slate-500">{currentTab.category}</span>
              <span className="text-slate-600">/</span>
              <span className="text-sky-300 font-semibold flex items-center gap-1">
                <currentTab.icon className="w-3.5 h-3.5 text-sky-400" />
                {currentTab.label}
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Direct Deep Research Action */}
            <button
              onClick={() => setActiveTab('research')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer ${
                activeTab === 'research'
                  ? 'bg-sky-400 text-slate-950 shadow-sky-400/30'
                  : 'bg-sky-600 hover:bg-sky-500 text-white shadow-sky-700/30'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Deep Research</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping hidden sm:inline"></span>
            </button>

            {/* Mobile / Tablet Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. ULTRA-USABLE, HIGH-CONTRAST NAVIGATION BAR (DESKTOP & TABLET) */}
      <div className="bg-slate-900/90 border-t border-slate-800/80 px-2 sm:px-4 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Mega-Menu Trigger: "All Modules (12)" */}
          <div className="relative shrink-0 pr-2 border-r border-slate-800 hidden md:block" ref={megaMenuRef}>
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isMegaMenuOpen
                  ? 'bg-sky-400 text-slate-950 shadow-md shadow-sky-400/20'
                  : 'bg-slate-850 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600'
              }`}
              title="Explore all 12 intelligence modules"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-sky-400" />
              <span>All Modules</span>
              <span className="px-1.5 py-0.2 rounded bg-slate-950/60 text-[10px] text-sky-300 font-semibold border border-sky-400/20">
                12
              </span>
            </button>

            {/* MEGA-MENU DROPDOWN */}
            {isMegaMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-[680px] bg-slate-950 border border-slate-700/90 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <div className="flex items-center gap-2">
                    <LayoutGrid className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Intelligence Terminal Directory
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">12 Real-Time Modules</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {CATEGORIES.map((cat) => (
                    <div key={cat} className="space-y-1.5">
                      <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider px-2 py-0.5">
                        {cat}
                      </div>
                      <div className="space-y-1">
                        {NAVIGATION_TABS.filter((t) => t.category === cat).map((tab) => {
                          const isActive = activeTab === tab.id;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => {
                                setActiveTab(tab.id);
                                setIsMegaMenuOpen(false);
                              }}
                              className={`w-full text-left flex items-start gap-2.5 p-2 rounded-xl text-xs transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                                  : 'text-slate-200 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800'
                              }`}
                            >
                              <div
                                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                  isActive
                                    ? 'bg-slate-950 text-sky-400'
                                    : 'bg-slate-800/80 text-sky-400'
                                }`}
                              >
                                <tab.icon className="w-3.5 h-3.5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold truncate">{tab.label}</span>
                                  {tab.badge && (
                                    <span
                                      className={`text-[9px] px-1 rounded uppercase tracking-wider ml-1 ${
                                        isActive
                                          ? 'bg-slate-950 text-white font-bold'
                                          : tab.badgeColor
                                      }`}
                                    >
                                      {tab.badge}
                                    </span>
                                  )}
                                </div>
                                <p
                                  className={`text-[10px] line-clamp-1 ${
                                    isActive ? 'text-slate-900 font-medium' : 'text-slate-400'
                                  }`}
                                >
                                  {tab.description}
                                </p>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Horizontal Scrolling Bar (NO UGLY DEFAULT SCROLLBAR, CLEAN ARROWS) */}
          <div className="relative flex-1 min-w-0 flex items-center">
            {/* Left Scroll Chevron & Gradient Fade */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent pr-4 pl-1">
                <button
                  onClick={() => handleScroll('left')}
                  className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-white hover:bg-sky-500 hover:text-slate-950 flex items-center justify-center shadow-lg transition-all cursor-pointer"
                  title="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Scrollable Container with .no-scrollbar */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollBounds}
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 px-1 w-full scroll-smooth"
            >
              {NAVIGATION_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`nav-btn-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer relative group ${
                      isActive
                        ? 'bg-sky-400 text-slate-950 font-bold shadow-md shadow-sky-400/25 border border-sky-300'
                        : 'bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-750 hover:border-slate-600'
                    }`}
                  >
                    <tab.icon
                      className={`w-3.5 h-3.5 shrink-0 ${
                        isActive ? 'text-slate-950 stroke-[2.5]' : 'text-sky-400 group-hover:text-sky-300'
                      }`}
                    />
                    <span>{tab.label}</span>

                    {/* Tag / Badge */}
                    {tab.badge && (
                      <span
                        className={`text-[9px] px-1 py-0.2 rounded uppercase tracking-wider font-bold shrink-0 ${
                          isActive
                            ? 'bg-slate-950 text-sky-400'
                            : tab.badgeColor || 'bg-sky-950 text-sky-300 border border-sky-700/60'
                        }`}
                      >
                        {tab.badge}
                      </span>
                    )}

                    {/* Active Accent Dot */}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Chevron & Gradient Fade */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent pl-4 pr-1">
                <button
                  onClick={() => handleScroll('right')}
                  className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-white hover:bg-sky-500 hover:text-slate-950 flex items-center justify-center shadow-lg transition-all cursor-pointer"
                  title="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. MOBILE SLIDE-DOWN DRAWER MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="space-y-1.5">
              <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider px-1">
                {cat}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {NAVIGATION_TABS.filter((t) => t.category === cat).map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all text-left w-full cursor-pointer ${
                        isActive
                          ? 'bg-sky-400 text-slate-950 font-bold shadow-md shadow-sky-400/20'
                          : 'bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-850 border border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <tab.icon
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? 'text-slate-950 stroke-[2.5]' : 'text-sky-400'
                          }`}
                        />
                        <div className="truncate">
                          <div>{tab.label}</div>
                          <div
                            className={`text-[10px] truncate ${
                              isActive ? 'text-slate-900' : 'text-slate-400 font-normal'
                            }`}
                          >
                            {tab.description}
                          </div>
                        </div>
                      </div>

                      {isActive ? (
                        <Check className="w-4 h-4 text-slate-950 shrink-0 ml-2" />
                      ) : tab.badge ? (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-bold shrink-0 ml-2 ${tab.badgeColor}`}
                        >
                          {tab.badge}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
