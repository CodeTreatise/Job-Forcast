import React, { useState } from 'react';
import {
  Layers,
  Network,
  Cpu,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Search,
  ExternalLink,
  Flame,
  Zap,
} from 'lucide-react';
import { IN_DEMAND_PRODUCTS, NETWORK_CONNECTIONS, TechProductItem } from '../data/productsAndNetworkData';

interface ProductNetworkExplorerProps {
  onLaunchResearch: (query: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const ProductNetworkExplorer: React.FC<ProductNetworkExplorerProps> = ({
  onLaunchResearch,
  onNavigateTab,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(IN_DEMAND_PRODUCTS[0].id);
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string | null>(null);

  const activeProduct = IN_DEMAND_PRODUCTS.find((p) => p.id === selectedProductId) || IN_DEMAND_PRODUCTS[0];

  // Connected skills for active product
  const connectedSkills = NETWORK_CONNECTIONS.filter((conn) => conn.sourceProduct === activeProduct.name);

  // All unique skills across the network
  const allUniqueSkills = Array.from(new Set(NETWORK_CONNECTIONS.map((c) => c.targetSkill)));

  const getStatusBadge = (status: TechProductItem['status']) => {
    switch (status) {
      case 'Surging Momentum':
        return 'bg-purple-950 text-purple-300 border-purple-800/80';
      case 'Emerging Breakout':
        return 'bg-emerald-950 text-emerald-300 border-emerald-800/80';
      case 'Dominant Standard':
        return 'bg-sky-950 text-sky-300 border-sky-800/80';
      case 'Cooling / Replaced':
        return 'bg-amber-950 text-amber-300 border-amber-800/80';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Network className="w-6 h-6 text-sky-400" />
            Products in Demand & Skill Network Explorer
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Analyzing emerging products/frameworks, architectural moats, longevity runways, and their interconnected skill dependency graph.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              `Live research on enterprise adoption, architectural advantages, and hiring trends for ${activeProduct.name}`
            )
          }
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-600/20 transition-all cursor-pointer shrink-0"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Research {activeProduct.name.split('(')[0]}</span>
        </button>
      </div>

      {/* Main Grid: Products Selector + In-Depth Architecture Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Products in Demand List */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block px-1">
            Key In-Demand Products & Frameworks ({IN_DEMAND_PRODUCTS.length})
          </span>

          <div className="space-y-1.5">
            {IN_DEMAND_PRODUCTS.map((prod) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <button
                  key={prod.id}
                  onClick={() => {
                    setSelectedProductId(prod.id);
                    setSelectedSkillFilter(null);
                  }}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 text-[10px]">
                    <span className="text-slate-400 font-medium">{prod.category}</span>
                    <span className={`px-1.5 py-0.2 rounded border font-semibold ${getStatusBadge(prod.status)}`}>
                      {prod.status}
                    </span>
                  </div>
                  <h4
                    className={`text-sm font-bold mt-1 line-clamp-1 ${
                      isSelected ? 'text-sky-300' : 'text-slate-200'
                    }`}
                  >
                    {prod.name}
                  </h4>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="text-emerald-400">{prod.longevityRunway.split('(')[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep Product Breakdown & Connected Network */}
        <div className="lg:col-span-8 space-y-6">
          {/* Product Deep Profile */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  {activeProduct.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-0.5">{activeProduct.name}</h3>
                <p className="mt-1 text-xs text-slate-300 font-mono">
                  Market Scale / Momentum: <strong>{activeProduct.marketCapOrInvestment}</strong>
                </p>
              </div>

              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg border shrink-0 ${getStatusBadge(activeProduct.status)}`}>
                {activeProduct.status}
              </span>
            </div>

            {/* Architectural Verdict */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
              <strong className="text-sky-300 block mb-1">Architecture & Enterprise Verdict:</strong>
              <p className="text-slate-300 leading-relaxed">{activeProduct.architectureVerdict}</p>
            </div>

            {/* Longevity Runway Indicator */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 to-indigo-950/30 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-semibold block flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Trend Longevity Runway:
                </span>
                <span className="text-base font-bold text-emerald-400 font-mono mt-0.5 block">
                  {activeProduct.longevityRunway}
                </span>
              </div>
              <span className="text-xs text-slate-400 sm:max-w-xs sm:text-right">
                Grounded by architectural replacement friction and enterprise multi-year contracts.
              </span>
            </div>

            {/* Why This Product Succeeds (Drivers) */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Why It Succeeds & Disrupts Legacy Alternatives:
              </h4>
              <ul className="space-y-1.5">
                {activeProduct.successDrivers.map((driver, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{driver}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vulnerabilities */}
            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Key Architectural Vulnerabilities / Replacement Risks:
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeProduct.vulnerabilitiesOrRisks.join('; ')}
              </p>
            </div>

            {/* Top Companies Hiring */}
            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">
                Top Companies Hiring for this Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeProduct.topCompaniesHiring.map((comp, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-medium"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Skill Connection Network Graph */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Network className="w-5 h-5 text-indigo-400" />
                  Connected Skill Graph for {activeProduct.name.split('(')[0]}
                </h4>
                <p className="text-xs text-slate-400">
                  Required competencies and their structural dependency on this product ecosystem.
                </p>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {connectedSkills.length} Core Connections
              </span>
            </div>

            {/* Visual Node Connection Cards */}
            <div className="space-y-2.5">
              {connectedSkills.map((conn, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 font-mono text-xs font-bold shrink-0">
                      {conn.importanceWeight}★
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-bold text-white">{conn.targetSkill}</h5>
                        <span className="text-[10px] px-2 py-0.2 rounded bg-slate-900 text-sky-300 border border-slate-800">
                          {conn.relationship}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        Dependency weight: {conn.importanceWeight}/5 on production delivery
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigateTab('pathways')}
                    className="self-start sm:self-auto flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span>View Learning Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => onNavigateTab('pathways')}
                className="text-xs font-semibold text-slate-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                Explore all granular skill learning pathways with official documentation links <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
