import React, { useState, useMemo } from 'react';
import {
  Compass,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  ExternalLink,
  DollarSign,
  Briefcase,
  Layers,
  Award,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Scale,
  RefreshCw,
  GitBranch,
  BookOpen,
  Target,
  FileCode,
  Flame,
} from 'lucide-react';
import {
  LEGACY_TECH_PROFILES,
  LegacyTechProfile,
  ProgressivePath,
} from '../data/legacyTechProgressionData';
import { convertUSDToCurrency } from '../data/currencyData';

interface LegacyTechModernizerProps {
  selectedCurrency: string;
  isPPPEnabled: boolean;
  onLaunchResearch: (query: string) => void;
  onNavigateTab?: (tab: any) => void;
}

export const LegacyTechModernizer: React.FC<LegacyTechModernizerProps> = ({
  selectedCurrency,
  isPPPEnabled,
  onLaunchResearch,
  onNavigateTab,
}) => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>(
    LEGACY_TECH_PROFILES[0].id
  );
  const [selectedPathId, setSelectedPathId] = useState<string>(
    LEGACY_TECH_PROFILES[0].progressivePaths[0].id
  );
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTabDetail, setActiveTabDetail] = useState<
    'roadmap' | 'skills' | 'capstone' | 'resources'
  >('roadmap');

  // Filter profiles based on category and search query
  const filteredProfiles = useMemo(() => {
    return LEGACY_TECH_PROFILES.filter((profile) => {
      const matchesSearch =
        profile.legacyTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.primaryTechStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      if (!matchesSearch) return false;

      if (activeCategoryFilter === 'frontend') {
        return profile.id.includes('angular') || profile.id.includes('php');
      }
      if (activeCategoryFilter === 'qa') {
        return profile.id.includes('qa');
      }
      if (activeCategoryFilter === 'backend') {
        return profile.id.includes('java') || profile.id.includes('php');
      }
      if (activeCategoryFilter === 'infra') {
        return (
          profile.id.includes('sysadmin') ||
          profile.id.includes('network') ||
          profile.id.includes('dba')
        );
      }
      if (activeCategoryFilter === 'data') {
        return (
          profile.id.includes('etl') ||
          profile.id.includes('dba') ||
          profile.id.includes('analyst')
        );
      }
      return true;
    });
  }, [activeCategoryFilter, searchQuery]);

  // Current active profile
  const currentProfile = useMemo(() => {
    return (
      LEGACY_TECH_PROFILES.find((p) => p.id === selectedProfileId) ||
      LEGACY_TECH_PROFILES[0]
    );
  }, [selectedProfileId]);

  // Current active path
  const currentPath = useMemo(() => {
    return (
      currentProfile.progressivePaths.find((path) => path.id === selectedPathId) ||
      currentProfile.progressivePaths[0]
    );
  }, [currentProfile, selectedPathId]);

  // Handle switching profile
  const handleSelectProfile = (profile: LegacyTechProfile) => {
    setSelectedProfileId(profile.id);
    setSelectedPathId(profile.progressivePaths[0].id);
  };

  // Currency formatted salary
  const convertedSalary = useMemo(() => {
    return convertUSDToCurrency(
      currentPath.avgSalaryUSD,
      selectedCurrency,
      isPPPEnabled
    );
  }, [currentPath.avgSalaryUSD, selectedCurrency, isPPPEnabled]);

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <GitBranch className="w-3.5 h-3.5" />
              <span>Legacy Technology & Title Progression Engine</span>
              <span className="w-1 h-1 rounded-full bg-indigo-400"></span>
              <span className="text-slate-400">Updated for 2026/2027 Market Cycles</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Tech Modernizer & Career Progression Navigator
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Working in traditional technologies like <strong className="text-sky-300">AngularJS</strong>,{' '}
              <strong className="text-amber-300">Manual QA</strong>, <strong className="text-emerald-300">Java Monoliths</strong>, or{' '}
              <strong className="text-purple-300">On-Prem Sysadmin</strong>? Explore data-backed future progression paths,
              skill overlap analysis, 90-day execution roadmaps, and compensation multipliers to stay ahead of market obsolescence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
            <button
              onClick={() =>
                onLaunchResearch(
                  `Comprehensive 2026 career transition guide from ${currentProfile.legacyTitle} to ${currentPath.targetRole} with salary outlook and industry adoption`
                )
              }
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Research Live Transition Demand</span>
            </button>
            <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                Data Verified
              </span>
              <span>Levels.fyi & Stack Overflow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Category Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-900/60 p-2 rounded-xl border border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar py-1">
          {[
            { id: 'all', label: 'All Legacy Roles' },
            { id: 'frontend', label: 'Frontend & Web' },
            { id: 'qa', label: 'QA & Testing' },
            { id: 'backend', label: 'Backend & Enterprise' },
            { id: 'infra', label: 'Sysadmin & Infra' },
            { id: 'data', label: 'Data & Analytics' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search role or stack (e.g. Angular, QA)..."
            className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Role Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {filteredProfiles.map((profile) => {
          const isSelected = profile.id === currentProfile.id;
          return (
            <button
              key={profile.id}
              onClick={() => handleSelectProfile(profile)}
              className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-950/40 border-indigo-500/80 shadow-md shadow-indigo-900/20 ring-1 ring-indigo-500/50'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      profile.currentMarketStatus.marketRiskLevel === 'Critical'
                        ? 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
                        : profile.currentMarketStatus.marketRiskLevel === 'High'
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                    }`}
                  >
                    Risk: {profile.currentMarketStatus.marketRiskLevel}
                  </span>
                  <span className="text-[10px] font-mono text-rose-400 font-semibold flex items-center">
                    <TrendingDown className="w-2.5 h-2.5 mr-0.5" />
                    {profile.currentMarketStatus.postingsDeclineYoY}% YoY
                  </span>
                </div>
                <h4
                  className={`text-xs font-bold leading-snug ${
                    isSelected ? 'text-white' : 'text-slate-200'
                  }`}
                >
                  {profile.legacyTitle}
                </h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {profile.primaryTechStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {profile.primaryTechStack.length > 3 && (
                    <span className="text-[10px] text-slate-500">
                      +{profile.primaryTechStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-medium">
                  {profile.progressivePaths.length} Target Paths
                </span>
                <span className="text-indigo-400 font-semibold flex items-center gap-0.5">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Profile Diagnostic Banner */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-lg space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Current Diagnostic Profile:
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 text-slate-300">
                {currentProfile.historicalEra}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              {currentProfile.legacyTitle}
            </h2>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <span className="text-slate-400 block text-[10px]">Hiring Trajectory</span>
              <span className="text-rose-400 font-bold flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                {currentProfile.currentMarketStatus.hiringTrajectory}
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <span className="text-slate-400 block text-[10px]">Transition Window</span>
              <span className="text-amber-300 font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {currentProfile.currentMarketStatus.timeWindowToTransition}
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <span className="text-slate-400 block text-[10px]">Salary Dynamics</span>
              <span className="text-slate-200 font-medium">
                {currentProfile.currentMarketStatus.salaryCapInsight.split('.')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Warning Diagnostic & Reasons for Shift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-300">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Market Obsolescence Warning</span>
            </div>
            <p className="leading-relaxed text-amber-200/90 text-[11px]">
              {currentProfile.currentMarketStatus.stagnationWarning}
            </p>
          </div>

          <div className="md:col-span-2 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2">
            <span className="font-semibold text-slate-300 block text-[11px] uppercase tracking-wide">
              Root Causes of Market Shift:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
              {currentProfile.reasonsForShift.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stay vs Switch Verdict */}
        <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-900/40 text-xs grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <span className="text-rose-400 font-bold block mb-1 text-[11px]">
              ⚠️ Risk of Inaction (Staying):
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {currentProfile.stayOrSwitchVerdict.stayRisk}
            </p>
          </div>
          <div>
            <span className="text-emerald-400 font-bold block mb-1 text-[11px]">
              🚀 Reward of Action (Switching):
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {currentProfile.stayOrSwitchVerdict.switchReward}
            </p>
          </div>
          <div>
            <span className="text-sky-300 font-bold block mb-1 text-[11px]">
              🎯 Senior Engineer's Bottom Line:
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {currentProfile.stayOrSwitchVerdict.bottomLine}
            </p>
          </div>
        </div>
      </div>

      {/* Target Evolution Pathway Selector */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            <span>Select Future Progressive Scope (What's Next?):</span>
          </h3>
          <span className="text-xs text-slate-400">
            {currentProfile.progressivePaths.length} Tailored Progression Routes Available
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {currentProfile.progressivePaths.map((path) => {
            const isSelected = path.id === currentPath.id;
            const pathConvertedSalary = convertUSDToCurrency(
              path.avgSalaryUSD,
              selectedCurrency,
              isPPPEnabled
            );

            return (
              <button
                key={path.id}
                onClick={() => setSelectedPathId(path.id)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-950/60 to-slate-900 border-indigo-500 shadow-xl shadow-indigo-950/40 ring-1 ring-indigo-500'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        path.category === 'High-Growth Pivot'
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                      }`}
                    >
                      {path.category}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" />
                      +{path.salaryIncreasePct}% Comp Gain
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white leading-tight mb-1">
                    {path.targetRole}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                    {path.tagline}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-t border-b border-slate-800/80 mb-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Transferable Fit</span>
                      <span className="text-indigo-300 font-bold font-mono">
                        {path.matchScorePct}% Match
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Timeline</span>
                      <span className="text-slate-200 font-bold">
                        {path.estimatedTimelineMonths} Months
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">Hiring Velocity</span>
                      <span className="text-emerald-400 font-bold font-mono">
                        +{path.postingsGrowthYoY}% YoY
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">
                        Avg Benchmark ({selectedCurrency})
                      </span>
                      <span className="text-amber-300 font-bold font-mono">
                        {pathConvertedSalary.formatted}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    Demand: <strong className="text-white">{path.demandVerdict}</strong>
                  </span>
                  <span
                    className={`font-semibold text-xs flex items-center gap-1 ${
                      isSelected ? 'text-indigo-400' : 'text-slate-400'
                    }`}
                  >
                    {isSelected ? 'Active Plan' : 'Select'} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Pathway In-Depth Blueprint */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 shadow-xl space-y-6">
        {/* Banner with Target Role, Comp & Longevity */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                Target Pathway Blueprint:
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60 font-mono">
                {currentPath.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {currentPath.targetRole}
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              {currentPath.marketContextWhySuccess}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium uppercase">
                Expected Total Comp
              </span>
              <span className="text-lg font-black text-emerald-400 font-mono">
                {convertedSalary.formatted}
              </span>
              <span className="text-[10px] text-emerald-400/80 block font-semibold">
                +{currentPath.salaryIncreasePct}% vs Legacy
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block font-medium uppercase">
                Trend Longevity
              </span>
              <span className="text-sm font-bold text-white font-mono">
                {currentPath.trendLongevityYears}
              </span>
              <span className="text-[10px] text-slate-500 block">Future-Proof Score</span>
            </div>
          </div>
        </div>

        {/* Blueprint Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto no-scrollbar">
          {[
            { id: 'roadmap', label: '90-Day Execution Roadmap', icon: Clock },
            { id: 'skills', label: 'Strengths & Critical Gaps', icon: Layers },
            { id: 'capstone', label: 'Standout Portfolio Project', icon: FileCode },
            { id: 'resources', label: 'Free Learning Docs & Certs', icon: BookOpen },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTabDetail === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabDetail(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: 90-180 Day Roadmap */}
        {activeTabDetail === 'roadmap' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-indigo-400" />
                Structured Transition Action Plan ({currentPath.estimatedTimelineMonths} Months)
              </h4>
              <span className="text-xs text-slate-400">
                Difficulty: <strong className="text-indigo-300">{currentPath.transitionDifficulty}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentPath.actionPhases.map((phase, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-950 p-4 border border-slate-800 flex flex-col justify-between space-y-3 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-sky-400" />
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-indigo-400 font-bold uppercase text-[11px]">
                        {phase.phase} • {phase.weeks}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-white mb-2">{phase.focus}</h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {phase.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 bg-slate-900/50 -mx-4 -mb-4 p-3 rounded-b-xl">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block mb-0.5">
                      Concrete Milestone Deliverable:
                    </span>
                    <p className="text-xs text-indigo-200 font-medium">
                      {phase.deliverable}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Skills & Gaps */}
        {activeTabDetail === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Transferable Strengths */}
            <div className="rounded-xl bg-slate-950 p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Your Transferable Unfair Advantages ({currentPath.matchScorePct}% Match)
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                Skills you already possess from {currentProfile.legacyTitle} that directly translate to this new role:
              </p>
              <div className="space-y-2.5">
                {currentPath.transferableStrengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs space-y-1"
                  >
                    <span className="font-bold text-emerald-300 block">{str.skill}</span>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {str.howItHelps}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Skill Gaps */}
            <div className="rounded-xl bg-slate-950 p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Critical Skill Gaps to Close
                </h4>
              </div>
              <p className="text-xs text-slate-400">
                High-priority competencies required to pass senior interviews and clear recruiter screens:
              </p>
              <div className="space-y-2.5">
                {currentPath.criticalSkillGaps.map((gap, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-amber-950/20 border border-amber-900/40 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-amber-300">{gap.skill}</span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                          gap.priority === 'Critical'
                            ? 'bg-rose-500/20 text-rose-300'
                            : 'bg-amber-500/20 text-amber-300'
                        }`}
                      >
                        {gap.priority} Priority
                      </span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      {gap.whyNeeded}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Standout Portfolio Capstone */}
        {activeTabDetail === 'capstone' && (
          <div className="rounded-xl bg-slate-950 p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <FileCode className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider block">
                    Proof-of-Work Project
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {currentPath.capstoneProject.title}
                  </h4>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Guaranteed Recruiter Eyeball Magnet
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {currentPath.capstoneProject.description}
            </p>

            <div className="p-3.5 rounded-lg bg-indigo-950/30 border border-indigo-800/40 text-xs">
              <span className="text-indigo-300 font-bold block mb-1">
                Measurable Resume Impact Metric:
              </span>
              <p className="text-white font-medium italic">
                "{currentPath.capstoneProject.measurableImpact}"
              </p>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-400 block mb-1.5 uppercase">
                Recommended Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentPath.capstoneProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Free Learning References & Certifications */}
        {activeTabDetail === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Documentation & Courses */}
            <div className="rounded-xl bg-slate-950 p-5 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-sky-400" />
                Verified Reference Documentation & Courses
              </h4>
              <p className="text-xs text-slate-400">
                Primary documentation and free interactive tutorials to learn this stack cleanly:
              </p>
              <div className="space-y-2">
                {currentPath.learningResources.map((res, idx) => (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all text-xs group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {res.title}
                        </span>
                        {res.free && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-300 font-semibold">
                            Free
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500">{res.type}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Recognized Certifications */}
            <div className="rounded-xl bg-slate-950 p-5 border border-slate-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                Recognized Certifications & Industry Credentials
              </h4>
              <p className="text-xs text-slate-400">
                Credentials that hiring managers and ATS filters actively look for during resume screening:
              </p>
              {currentPath.recognizedCertifications &&
              currentPath.recognizedCertifications.length > 0 ? (
                <div className="space-y-2">
                  {currentPath.recognizedCertifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2.5 text-xs"
                    >
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-semibold text-slate-200">{cert}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
                  For this particular role, open-source GitHub projects and live deployed demos carry far more weight with hiring managers than standardized certifications. Focus 100% on the capstone deliverable!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
