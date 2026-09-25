import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Calendar,
  Search,
  GitBranch,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { CAREER_PIVOTS } from '../data/marketResearchData';
import { LegacyTechModernizer } from './LegacyTechModernizer';

interface CareerPivotSimulatorProps {
  selectedCurrency?: string;
  isPPPEnabled?: boolean;
  onLaunchResearch: (query: string) => void;
  onNavigateTab?: (tab: any) => void;
}

export const CareerPivotSimulator: React.FC<CareerPivotSimulatorProps> = ({
  selectedCurrency = 'USD',
  isPPPEnabled = false,
  onLaunchResearch,
  onNavigateTab,
}) => {
  const [viewMode, setViewMode] = useState<'legacyModernizer' | 'classicPivot'>('legacyModernizer');
  const [selectedPivotId, setSelectedPivotId] = useState<string>(CAREER_PIVOTS[0].id);

  const pivot = CAREER_PIVOTS.find((p) => p.id === selectedPivotId) || CAREER_PIVOTS[0];

  return (
    <div className="space-y-6">
      {/* Top Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/90 p-2 rounded-2xl border border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setViewMode('legacyModernizer')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'legacyModernizer'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Legacy Tech & Old Titles Modernizer</span>
            <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-400/30">
              In-Depth
            </span>
          </button>

          <button
            onClick={() => setViewMode('classicPivot')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'classicPivot'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>General Pivot Matrix (High-ROI Roles)</span>
          </button>
        </div>

        <div className="text-[11px] text-slate-400 flex items-center gap-2 px-2">
          <span className="flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            Data Backed
          </span>
          <span>•</span>
          <span>Real-time research supported</span>
        </div>
      </div>

      {/* View 1: Flagship Legacy Tech & Old Titles Modernizer */}
      {viewMode === 'legacyModernizer' && (
        <LegacyTechModernizer
          selectedCurrency={selectedCurrency}
          isPPPEnabled={isPPPEnabled}
          onLaunchResearch={onLaunchResearch}
          onNavigateTab={onNavigateTab}
        />
      )}

      {/* View 2: Classic High-ROI Pivot Simulator */}
      {viewMode === 'classicPivot' && (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Compass className="w-6 h-6 text-sky-400" />
                Engineering Career Pivot Simulator
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Analyze skill transferability, estimated compensation uplift, and structured 90-day transition roadmaps into surging tech sectors.
              </p>
            </div>

            <button
              onClick={() =>
                onLaunchResearch(
                  `Live career transition guide and roadmap from ${pivot.fromRole} to ${pivot.toRole} in the 2026 tech job market`
                )
              }
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-700/20 transition-all cursor-pointer shrink-0"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Research Transition Guidance</span>
            </button>
          </div>

          {/* Preset Pivot Pathways Selector */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-xl">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Select High-ROI Career Pathway:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {CAREER_PIVOTS.map((p) => {
                const isSelected = p.id === selectedPivotId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPivotId(p.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-950 border-sky-500 shadow-md shadow-sky-500/10'
                        : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <span className="text-[11px] text-slate-400 block truncate">From: {p.fromRole}</span>
                    <span
                      className={`text-xs font-bold block truncate mt-0.5 ${
                        isSelected ? 'text-sky-300' : 'text-slate-200'
                      }`}
                    >
                      To: {p.toRole}
                    </span>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-400 font-bold">+{p.salaryIncreaseEstimatePct}% Salary</span>
                      <span className="text-slate-400 font-mono">{p.matchScorePct}% Match</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Pivot Pathway Deep Dive */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-6">
            {/* Banner with Metrics */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs text-slate-400 block">Current Discipline</span>
                  <strong className="text-base text-white">{pivot.fromRole}</strong>
                </div>

                <ArrowRight className="w-5 h-5 text-sky-400 shrink-0" />

                <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/60">
                  <span className="text-xs text-sky-400 block font-semibold">Target High-Demand Role</span>
                  <strong className="text-base text-sky-200">{pivot.toRole}</strong>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                    Est. Salary Uplift
                  </span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">
                    +{pivot.salaryIncreaseEstimatePct}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                    Skill Overlap
                  </span>
                  <span className="text-2xl font-black text-sky-400 font-mono">
                    {pivot.matchScorePct}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">
                    Timeline
                  </span>
                  <span className="text-2xl font-black text-slate-200 font-mono">
                    ~{pivot.avgTransitionMonths} mo
                  </span>
                </div>
              </div>
            </div>

            {/* Strengths vs Gaps Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Transferable Strengths */}
              <div className="rounded-xl bg-slate-950 border border-emerald-900/30 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Your Unfair Advantages & Transferable Strengths
                </h4>
                <ul className="space-y-2">
                  {pivot.transferableStrengths.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skill Gaps to Bridge */}
              <div className="rounded-xl bg-slate-950 border border-amber-900/30 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Critical Skill Gaps to Bridge
                </h4>
                <ul className="space-y-2">
                  {pivot.keyGaps.map((g, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3-Phase Execution Roadmap */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-sky-400" />
                Structured 90-Day Transition Roadmap
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/60 mb-2 inline-block">
                    Phase 1
                  </span>
                  <h5 className="text-xs font-bold text-white">{pivot.actionPlan.phase1.title}</h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {pivot.actionPlan.phase1.desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60 mb-2 inline-block">
                    Phase 2
                  </span>
                  <h5 className="text-xs font-bold text-white">{pivot.actionPlan.phase2.title}</h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {pivot.actionPlan.phase2.desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 mb-2 inline-block">
                    Phase 3
                  </span>
                  <h5 className="text-xs font-bold text-white">{pivot.actionPlan.phase3.title}</h5>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {pivot.actionPlan.phase3.desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Standout Capstone Project */}
            <div className="rounded-xl bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-slate-900 border border-sky-800/50 p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    Recommended Standout Portfolio Project:
                  </h5>
                  <p className="mt-1.5 text-xs text-slate-200 leading-relaxed">
                    {pivot.standoutProject}
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    Tip: Hiring managers look for production-readiness (handling edge cases, latency budgets, automated tests) rather than another generic tutorial clone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
