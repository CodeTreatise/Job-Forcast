import React, { useState } from 'react';
import {
  Layers,
  TrendingUp,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  ExternalLink,
  Briefcase,
  Sliders,
} from 'lucide-react';
import { DOMAIN_PROFILES, DomainProfile } from '../data/marketResearchData';

interface DomainProfilesViewProps {
  onLaunchResearch: (query: string) => void;
}

export const DomainProfilesView: React.FC<DomainProfilesViewProps> = ({ onLaunchResearch }) => {
  const [selectedId, setSelectedId] = useState<string>(DOMAIN_PROFILES[0].id);
  const [seniorityLevel, setSeniorityLevel] = useState<'junior' | 'mid' | 'senior' | 'staff'>('senior');

  const selectedDomain = DOMAIN_PROFILES.find((d) => d.id === selectedId) || DOMAIN_PROFILES[0];

  const getDemandColor = (level: string) => {
    switch (level) {
      case 'Extreme':
        return 'bg-purple-950/80 text-purple-300 border-purple-800/80';
      case 'Very High':
        return 'bg-sky-950/80 text-sky-300 border-sky-800/80';
      case 'High':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-sky-400" />
            Specialized Tech Domain Deep Dives
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Empirical role breakdowns across tech stack standards, interview evaluation bars, and global compensation tiers.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              `Live deep research on ${selectedDomain.title} hiring trends, salary ranges, and required skills for 2026`
            )
          }
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-700/20 transition-all cursor-pointer shrink-0"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Live Research on {selectedDomain.category}</span>
        </button>
      </div>

      {/* Main Container: Sidebar + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Domain Selector List */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block px-1">
            Select Tech Discipline ({DOMAIN_PROFILES.length})
          </span>

          <div className="space-y-1.5">
            {DOMAIN_PROFILES.map((domain) => {
              const isSelected = domain.id === selectedId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedId(domain.id)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-slate-900 border-sky-500 shadow-md shadow-sky-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-400">{domain.category}</span>
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${getDemandColor(
                          domain.demandLevel
                        )}`}
                      >
                        {domain.demandLevel}
                      </span>
                    </div>
                    <h4
                      className={`text-sm font-bold truncate mt-1 ${
                        isSelected ? 'text-sky-300' : 'text-slate-200'
                      }`}
                    >
                      {domain.title}
                    </h4>
                  </div>

                  <span className="text-xs font-bold text-emerald-400 shrink-0">
                    +{domain.growthYoY}%
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: In-Depth Domain Profile */}
        <div className="lg:col-span-8 space-y-6">
          {/* Domain Title & KPI Strip */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  {selectedDomain.category} Discipline
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedDomain.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedDomain.overview}
                </p>
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg border shrink-0 ${getDemandColor(
                  selectedDomain.demandLevel
                )}`}
              >
                {selectedDomain.demandLevel} Demand
              </span>
            </div>

            {/* Metrics Ribbon */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="text-[11px] text-slate-400 block">Growth Rate</span>
                <span className="text-lg font-bold text-emerald-400">+{selectedDomain.growthYoY}% YoY</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="text-[11px] text-slate-400 block">Hiring Difficulty</span>
                <span className="text-lg font-bold text-slate-200">{selectedDomain.hiringDifficulty}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="text-[11px] text-slate-400 block">Average Days to Hire</span>
                <span className="text-lg font-bold text-sky-400">{selectedDomain.avgDaysToHire} days</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="text-[11px] text-slate-400 block">Senior Base (US Bay)</span>
                <span className="text-lg font-bold text-purple-300">
                  ${(selectedDomain.compensation[0].senior.base / 1000).toFixed(0)}k
                </span>
              </div>
            </div>

            {/* Primary Market Drivers */}
            <div className="mt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Primary Market Drivers:
              </h4>
              <ul className="space-y-1.5">
                {selectedDomain.primaryDrivers.map((driver, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                    <span>{driver}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skill Matrix Breakdown: Must-Haves, Emerging, Declining */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Must-Have Skills */}
            <div className="rounded-xl bg-slate-900 border border-emerald-900/40 p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Must-Have Core Baseline</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedDomain.mustHaveSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded bg-slate-950 border border-emerald-800/50 text-emerald-200 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Emerging Superpowers */}
            <div className="rounded-xl bg-slate-900 border border-sky-900/40 p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 mb-3">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>High-Value Differentiators</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedDomain.emergingSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded bg-slate-950 border border-sky-800/50 text-sky-200 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Declining / Saturated */}
            <div className="rounded-xl bg-slate-900 border border-amber-900/40 p-4">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Declining / Low-Leverage</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedDomain.decliningSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded bg-slate-950 border border-amber-800/50 text-amber-200 text-xs font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Regional Compensation Benchmark Table */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Regional Compensation Benchmark
                </h4>
                <p className="text-xs text-slate-400">
                  Base Salary vs Total Compensation (Base + Equity/RSU grants + Bonus)
                </p>
              </div>

              {/* Seniority Level Filter */}
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800 self-start sm:self-auto">
                {(['junior', 'mid', 'senior', 'staff'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSeniorityLevel(lvl)}
                    className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-all cursor-pointer ${
                      seniorityLevel === lvl
                        ? 'bg-sky-500 text-slate-950 font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="py-2.5 px-3">Region</th>
                    <th className="py-2.5 px-3">Seniority Tier</th>
                    <th className="py-2.5 px-3">Base Salary</th>
                    <th className="py-2.5 px-3 text-right">Total Compensation (TC)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {selectedDomain.compensation.map((comp, idx) => {
                    const data = comp[seniorityLevel];
                    const formatVal = (num: number, curr: string) => {
                      if (curr === '₹') {
                        return `${curr}${(num / 100000).toFixed(1)} Lakhs`;
                      }
                      return `${curr}${num.toLocaleString()}`;
                    };

                    return (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-3 font-semibold text-white">{comp.region}</td>
                        <td className="py-3 px-3 capitalize text-sky-400">{seniorityLevel}</td>
                        <td className="py-3 px-3 font-mono">{formatVal(data.base, data.currency)}</td>
                        <td className="py-3 px-3 text-right font-mono font-bold text-emerald-400">
                          {formatVal(data.total, data.currency)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Interview Evaluation Bar */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl">
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <Sliders className="w-4 h-4 text-sky-400" />
              Interview Evaluation Bar & Scoring Weights
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-1">System Design</span>
                <span className="font-semibold text-sky-300">
                  {selectedDomain.interviewBar.systemDesignWeight}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-1">Practical Coding</span>
                <span className="font-semibold text-indigo-300">
                  {selectedDomain.interviewBar.codingPracticalWeight}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <span className="text-slate-400 block mb-1">Domain Depth</span>
                <span className="font-semibold text-purple-300">
                  {selectedDomain.interviewBar.domainKnowledgeWeight}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                Key Examined Themes in Final Rounds:
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedDomain.interviewBar.keyThemes.map((theme, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deep Research Strategic Notes & Future Outlook */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950/30 border border-slate-800 p-6 shadow-xl">
            <h4 className="text-base font-bold text-white flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-sky-400" />
              Strategic Research Notes & 2-3 Year Outlook
            </h4>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              {selectedDomain.deepResearchNotes.map((note, i) => (
                <p key={i} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  {note}
                </p>
              ))}

              <div className="mt-4 pt-4 border-t border-slate-800">
                <strong className="text-sky-300 font-semibold block mb-1">Future Outlook:</strong>
                <p>{selectedDomain.futureOutlook}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
