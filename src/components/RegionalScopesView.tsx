import React, { useState } from 'react';
import {
  Globe2,
  Building2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Search,
  Sparkles,
  ArrowUpRight,
  PieChart,
  Users,
  Compass,
} from 'lucide-react';
import { REGIONAL_MARKETS_DATA, RegionalMarketProfile } from '../data/regionalMarketsData';
import { convertUSDToCurrency } from '../data/currencyData';

interface RegionalScopesViewProps {
  selectedCurrency: string;
  isPPPEnabled: boolean;
  onLaunchResearch: (query: string) => void;
}

export const RegionalScopesView: React.FC<RegionalScopesViewProps> = ({
  selectedCurrency,
  isPPPEnabled,
  onLaunchResearch,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(REGIONAL_MARKETS_DATA[0].id);

  const region = REGIONAL_MARKETS_DATA.find((r) => r.id === selectedRegionId) || REGIONAL_MARKETS_DATA[0];

  const formatComp = (usd: number) => {
    return convertUSDToCurrency(usd, selectedCurrency, isPPPEnabled).formatted;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Globe2 className="w-6 h-6 text-sky-400" />
            Global Regional Labor Scopes & Market Dynamics
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            In-depth empirical breakdown across the US, Europe, India GCCs, China AI Ecosystem, and Latin America nearshore.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              `Live deep research on current IT hiring trends, salary ranges, and tech stack demand in ${region.regionName} for 2026`
            )
          }
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-600/20 transition-all cursor-pointer shrink-0"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Research {region.regionName.split('(')[0]}</span>
        </button>
      </div>

      {/* Region Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {REGIONAL_MARKETS_DATA.map((r) => {
          const isSelected = r.id === selectedRegionId;
          return (
            <button
              key={r.id}
              onClick={() => setSelectedRegionId(r.id)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 border-sky-500 shadow-md shadow-sky-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">{r.flagEmoji}</span>
                <span className="text-[10px] font-mono font-bold text-emerald-400">
                  Vel: {r.hiringVelocityIndex}/100
                </span>
              </div>
              <h4
                className={`text-xs font-bold mt-1.5 line-clamp-1 ${
                  isSelected ? 'text-sky-300' : 'text-slate-200'
                }`}
              >
                {r.regionName.split('(')[0]}
              </h4>
              <span className="text-[10px] text-slate-400 block truncate mt-0.5">
                {r.marketStatus}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Region Deep Dive Panel */}
      <div className="space-y-6">
        {/* Banner with Overview & Macro Indicators */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{region.flagEmoji}</span>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Regional Focus • {region.marketStatus}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">{region.regionName}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                {region.executiveSynthesis}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 shrink-0 text-right">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                Hiring Velocity Score
              </span>
              <span className="text-3xl font-black text-emerald-400 font-mono">
                {region.hiringVelocityIndex}
                <span className="text-sm text-slate-500 font-normal"> / 100</span>
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Annual Expansion Cadence</span>
            </div>
          </div>

          {/* Workplace Mode Breakdown Bar */}
          <div className="mt-5 space-y-2">
            <div className="flex justify-between items-center text-xs text-slate-300">
              <span className="font-semibold text-white flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                Workplace Flexibility Distribution:
              </span>
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <span className="text-sky-300 font-semibold">{region.workModeBreakdown.remotePct}% Remote</span>
                <span className="text-indigo-300 font-semibold">{region.workModeBreakdown.hybridPct}% Hybrid</span>
                <span className="text-slate-400 font-semibold">{region.workModeBreakdown.onsitePct}% On-site</span>
              </div>
            </div>

            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${region.workModeBreakdown.remotePct}%` }}
                className="bg-sky-400 h-full"
                title={`Remote: ${region.workModeBreakdown.remotePct}%`}
              ></div>
              <div
                style={{ width: `${region.workModeBreakdown.hybridPct}%` }}
                className="bg-indigo-500 h-full"
                title={`Hybrid: ${region.workModeBreakdown.hybridPct}%`}
              ></div>
              <div
                style={{ width: `${region.workModeBreakdown.onsitePct}%` }}
                className="bg-slate-600 h-full"
                title={`On-site: ${region.workModeBreakdown.onsitePct}%`}
              ></div>
            </div>

            <p className="text-[11px] text-slate-400 italic pt-1">
              Policy Nuance: {region.workModeBreakdown.remotePolicyNotes}
            </p>
          </div>

          {/* Regional Compensation Tiers */}
          <div className="mt-6 pt-5 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Estimated Average Annual Total Compensation ({selectedCurrency} {isPPPEnabled ? '• PPP Adjusted' : ''}):
              </span>
              <span className="text-[11px] text-slate-500">Live Converted Currency</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Entry / Junior</span>
                <span className="text-lg font-bold text-white font-mono">
                  {formatComp(region.averageCompBandsUSD.entry)}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Mid-Level (3-5y)</span>
                <span className="text-lg font-bold text-sky-400 font-mono">
                  {formatComp(region.averageCompBandsUSD.mid)}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Senior (6-9y)</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">
                  {formatComp(region.averageCompBandsUSD.senior)}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block font-semibold">Staff+ / Principal</span>
                <span className="text-lg font-bold text-purple-300 font-mono">
                  {formatComp(region.averageCompBandsUSD.staff)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Types: New AI Startups vs Old Fortune 500 vs GCCs */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-indigo-400" />
            Company Ecosystem Distribution: New AI Startups vs Old Enterprises vs GCCs
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {region.dominantCompanyTypes.map((cType, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold text-white">{cType.type}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-sky-400">
                      {cType.sharePct}% Market Share
                    </span>
                  </div>
                  <div className="mt-3 space-y-2 text-xs text-slate-300">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 block">Hiring Profile:</span>
                      <p className="leading-relaxed">{cType.hiringProfile}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px]">
                  <span className="font-semibold text-emerald-400 block mb-0.5">Compensation Philosophy:</span>
                  <p className="text-slate-400 leading-normal">{cType.compensationPhilosophy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Skillset Priorities */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-sky-400" />
            Specific Skillset Priorities for {region.regionName.split('(')[0]}
          </h4>
          <p className="text-xs text-slate-300 italic">
            Regional Nuance: {region.regionalSkillsetPriorities.specialtyNuance}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/40">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Critical High Demand
              </span>
              <div className="flex flex-wrap gap-1.5">
                {region.regionalSkillsetPriorities.criticalHighDemand.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-slate-900 border border-emerald-800/60 text-emerald-200 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-sky-900/40">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                Moderate Stable Demand
              </span>
              <div className="flex flex-wrap gap-1.5">
                {region.regionalSkillsetPriorities.moderateDemand.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-slate-900 border border-sky-800/60 text-sky-200 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-amber-900/40">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Regional Declining Skills
              </span>
              <div className="flex flex-wrap gap-1.5">
                {region.regionalSkillsetPriorities.regionalDecliningSkills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-slate-900 border border-amber-800/60 text-amber-200 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Sovereign Environment */}
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
          <strong className="text-white block font-semibold">Macro Legal & Regulatory Backdrop:</strong>
          <p className="leading-relaxed text-slate-400">{region.macroRegulatoryContext}</p>
        </div>
      </div>
    </div>
  );
};
