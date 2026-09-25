import React, { useState } from 'react';
import {
  Zap,
  TrendingUp,
  Search,
  Filter,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { SKILLS_MATRIX, SkillItem } from '../data/marketResearchData';

interface SkillVelocityMatrixProps {
  onLaunchResearch: (query: string) => void;
}

export const SkillVelocityMatrix: React.FC<SkillVelocityMatrixProps> = ({ onLaunchResearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTrend, setSelectedTrend] = useState<string>('All');

  const categories = ['All', 'AI/ML', 'Cloud & Infra', 'Programming Languages', 'Data', 'Security', 'Frontend'];
  const trends = ['All', 'Surging', 'Growing', 'Stable', 'Cooling'];

  const filteredSkills = SKILLS_MATRIX.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesTrend = selectedTrend === 'All' || item.trend === selectedTrend;
    return matchesSearch && matchesCategory && matchesTrend;
  });

  const getTrendBadge = (trend: SkillItem['trend']) => {
    switch (trend) {
      case 'Surging':
        return 'bg-purple-950/80 text-purple-300 border-purple-800/80';
      case 'Growing':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80';
      case 'Stable':
        return 'bg-sky-950/80 text-sky-300 border-sky-800/80';
      case 'Cooling':
        return 'bg-amber-950/80 text-amber-300 border-amber-800/80';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Zap className="w-6 h-6 text-sky-400" />
            Skill Velocity & Market Trajectory Matrix
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Tracking posting frequency, Year-over-Year demand acceleration, and compensation premiums for critical IT competencies.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              'Deep research on the fastest growing programming languages and infrastructure tools in tech job postings for 2026'
            )
          }
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-semibold border border-slate-700 transition-all cursor-pointer shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Research Emerging Skills</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search skills (e.g. Rust, PyTorch, Kubernetes, SQL)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
          </div>

          {/* Category Dropdown */}
          <div className="sm:w-56">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  Category: {c}
                </option>
              ))}
            </select>
          </div>

          {/* Trend Filter Tabs */}
          <div className="inline-flex rounded-xl bg-slate-950 p-1 border border-slate-800 self-start sm:self-auto overflow-x-auto">
            {trends.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTrend(t)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedTrend === t
                    ? 'bg-sky-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-lg hover:border-sky-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-semibold text-slate-400">{skill.category}</span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${getTrendBadge(
                    skill.trend
                  )}`}
                >
                  {skill.trend}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mt-1.5 flex items-center justify-between">
                <span>{skill.name}</span>
                <span
                  className={`text-xs font-mono font-bold ${
                    skill.growthYoY >= 0 ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                >
                  {skill.growthYoY >= 0 ? `+${skill.growthYoY}%` : `${skill.growthYoY}%`} YoY
                </span>
              </h3>

              <p className="mt-2 text-xs text-slate-300 leading-relaxed">{skill.summary}</p>

              {/* Progress bar of Job Postings Share */}
              <div className="mt-4 space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>Job Postings Penetration</span>
                  <span className="text-slate-200">{skill.postingsShare}% of listings</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-sky-500 h-full rounded-full transition-all"
                    style={{ width: `${Math.min(100, skill.postingsShare * 2)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Salary Premium & Action */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs">
                Salary Premium:{' '}
                <strong
                  className={`font-mono ${
                    skill.salaryPremiumPct >= 0 ? 'text-emerald-400' : 'text-amber-400'
                  }`}
                >
                  {skill.salaryPremiumPct >= 0
                    ? `+${skill.salaryPremiumPct}%`
                    : `${skill.salaryPremiumPct}%`}
                </strong>
              </span>

              <button
                onClick={() =>
                  onLaunchResearch(
                    `Live research on enterprise demand, current hiring standards, and compensation for ${skill.name} developers in 2026`
                  )
                }
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
              >
                Research <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-slate-400 text-sm">No skills matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};
