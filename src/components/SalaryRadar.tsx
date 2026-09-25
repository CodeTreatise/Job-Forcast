import React, { useState } from 'react';
import {
  DollarSign,
  TrendingUp,
  PieChart,
  Globe2,
  Building,
  Award,
  ArrowUpRight,
  Sparkles,
  Info,
  Scale,
} from 'lucide-react';
import { DOMAIN_PROFILES } from '../data/marketResearchData';
import { convertUSDToCurrency } from '../data/currencyData';

interface SalaryRadarProps {
  selectedCurrency?: string;
  isPPPEnabled?: boolean;
  onLaunchResearch: (query: string) => void;
}

export const SalaryRadar: React.FC<SalaryRadarProps> = ({
  selectedCurrency = 'USD',
  isPPPEnabled = false,
  onLaunchResearch,
}) => {
  const [selectedDomainId, setSelectedDomainId] = useState<string>(DOMAIN_PROFILES[0].id);
  const [experienceLevel, setExperienceLevel] = useState<'junior' | 'mid' | 'senior' | 'staff'>('senior');
  const [companyTier, setCompanyTier] = useState<'bigTech' | 'growthStartup' | 'enterprise'>('bigTech');

  const domain = DOMAIN_PROFILES.find((d) => d.id === selectedDomainId) || DOMAIN_PROFILES[0];

  // Multipliers by company tier
  const tierMultipliers = {
    bigTech: { baseMult: 1.05, equityMult: 1.25, bonusMult: 1.15, label: 'Big Tech / Hyperscaler' },
    growthStartup: { baseMult: 0.95, equityMult: 1.4, bonusMult: 0.8, label: 'Series B-D AI Startup' },
    enterprise: { baseMult: 0.9, equityMult: 0.7, bonusMult: 1.0, label: 'Fortune 500 Enterprise' },
  };

  const currentTier = tierMultipliers[companyTier];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-emerald-400" />
            Global Tech Compensation & Salary Radar
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Empirical compensation data across Base Salary, Equity (RSU/Options), and Annual Performance Bonus.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              `Live research on recent tech salary trends, equity vesting packages, and compensation negotiations in 2026 for ${domain.title}`
            )
          }
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Research Equity & Bonuses</span>
        </button>
      </div>

      {/* Control Panel: Filters */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Domain Dropdown */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Select Role / Discipline
            </label>
            <select
              value={selectedDomainId}
              onChange={(e) => setSelectedDomainId(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500"
            >
              {DOMAIN_PROFILES.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.title}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Level Selector */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Seniority Level
            </label>
            <div className="grid grid-cols-4 gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {(['junior', 'mid', 'senior', 'staff'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setExperienceLevel(lvl)}
                  className={`py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                    experienceLevel === lvl
                      ? 'bg-sky-500 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* Company Archetype */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Company Archetype
            </label>
            <select
              value={companyTier}
              onChange={(e) => setCompanyTier(e.target.value as any)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-sky-500"
            >
              <option value="bigTech">Big Tech / Hyperscaler (High RSUs)</option>
              <option value="growthStartup">Series B-D AI Startup (Equity upside)</option>
              <option value="enterprise">Global Enterprise (High Base/Stability)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Regional Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {domain.compensation.map((regionComp, idx) => {
          const raw = regionComp[experienceLevel];
          const adjustedBase = Math.round(raw.base * currentTier.baseMult);
          const equityBonusPortion = Math.max(0, raw.total - raw.base);
          const adjustedEquity = Math.round(equityBonusPortion * 0.75 * currentTier.equityMult);
          const adjustedBonus = Math.round(equityBonusPortion * 0.25 * currentTier.bonusMult);
          const adjustedTotal = adjustedBase + adjustedEquity + adjustedBonus;

          const isINR = raw.currency === '₹';
          const formatVal = (val: number) => {
            if (isINR) {
              return `${raw.currency}${(val / 100000).toFixed(1)}L`;
            }
            return `${raw.currency}${(val / 1000).toFixed(0)}k`;
          };

          const basePct = Math.round((adjustedBase / adjustedTotal) * 100);
          const equityPct = Math.round((adjustedEquity / adjustedTotal) * 100);
          const bonusPct = 100 - basePct - equityPct;

          return (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-lg hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-sky-400" />
                    {regionComp.region}
                  </span>
                  <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-[10px]">
                    {experienceLevel} Level
                  </span>
                </div>

                {/* Total Compensation Large Number */}
                <div className="mt-4">
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                    Estimated Total Comp (TC)
                  </span>
                  <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mt-0.5">
                    {formatVal(adjustedTotal)}
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Annualized Base + Equity + Performance Bonus
                  </span>
                </div>

                {/* Stacked Breakdown Bar */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>Base: {formatVal(adjustedBase)} ({basePct}%)</span>
                    <span>Equity: {formatVal(adjustedEquity)} ({equityPct}%)</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                    <div style={{ width: `${basePct}%` }} className="bg-sky-500 h-full" title="Base Salary"></div>
                    <div style={{ width: `${equityPct}%` }} className="bg-purple-500 h-full" title="Equity / RSUs"></div>
                    <div style={{ width: `${bonusPct}%` }} className="bg-emerald-500 h-full" title="Bonus"></div>
                  </div>
                </div>

                {/* Detailed Table */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                      Base Salary:
                    </span>
                    <strong className="font-mono text-white">{formatVal(adjustedBase)}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Equity / RSU Grants:
                    </span>
                    <strong className="font-mono text-white">{formatVal(adjustedEquity)}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Annual Bonus:
                    </span>
                    <strong className="font-mono text-white">{formatVal(adjustedBonus)}</strong>
                  </div>
                </div>
              </div>

              {/* Cost of Living / PPP Note */}
              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                {regionComp.region.includes('Bay Area') && (
                  <p>Highest nominal comp; high state taxes and housing costs lower net purchasing power.</p>
                )}
                {regionComp.region.includes('Remote') && (
                  <p>Optimal domestic purchasing power in low/mid-tax states (Texas, Florida, North Carolina).</p>
                )}
                {regionComp.region.includes('Western Europe') && (
                  <p>Includes comprehensive healthcare, 30+ days paid leave, and strong statutory pension security.</p>
                )}
                {regionComp.region.includes('India') && (
                  <p>Exceptional PPP purchasing power multiplier (~3.8x); ₹50L+ yields upper-tier executive lifestyle in Bengaluru.</p>
                )}
                {regionComp.region.includes('Latin America') && (
                  <p>Nearshore US timezone parity; growing rapidly for US venture-backed companies hiring via Deel/Rippling.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Purchasing Power Parity (PPP) Strategic Insights */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 shadow-xl">
        <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
          <Scale className="w-5 h-5 text-sky-400" />
          The Purchasing Power Parity (PPP) Reality in Tech
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          Nominal dollar comparisons often obscure standard of living. A Senior Engineer earning <strong>$240k</strong> in San Francisco pays approximately 38% in combined federal and California state taxes, plus $3,500/month average rent.
          Meanwhile, an engineer in <strong>Bengaluru or Hyderabad</strong> earning <strong>₹55 Lakhs ($66k USD nominal)</strong> commands a lifestyle equivalent to roughly <strong>$190,000 USD</strong> in the US when adjusted for local purchasing power parity (housing, dining, childcare, and healthcare costs).
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-white block">US Bay Area / NYC</span>
            <span className="text-slate-400 text-[11px]">Index 1.0 (Baseline highest cost of living & highest nominal ceiling)</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-white block">Western Europe (DE/UK)</span>
            <span className="text-slate-400 text-[11px]">Lower base nominal, but extensive social safety net, pensions, and healthcare</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
            <span className="font-semibold text-white block">India Tech Hubs (GCCs)</span>
            <span className="text-slate-400 text-[11px]">Highest disposable income savings rate relative to local cost of living</span>
          </div>
        </div>
      </div>
    </div>
  );
};
