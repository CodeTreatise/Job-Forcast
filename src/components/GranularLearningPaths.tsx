import React, { useState, useEffect } from 'react';
import {
  Compass,
  BookOpen,
  ExternalLink,
  CheckCircle,
  Circle,
  Clock,
  Sparkles,
  Layers,
  ArrowRight,
  Code2,
  Cpu,
  Search,
  Award,
} from 'lucide-react';
import { LEARNING_PATHWAYS_DATA, DomainLearningPathway, LearningTopic, LearningSubTopic } from '../data/learningPathwaysData';

interface GranularLearningPathsProps {
  onLaunchResearch: (query: string) => void;
}

export const GranularLearningPaths: React.FC<GranularLearningPathsProps> = ({ onLaunchResearch }) => {
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>(LEARNING_PATHWAYS_DATA[0].id);
  const [completedSubTopics, setCompletedSubTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('techtalentiq_completed_topics');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('techtalentiq_completed_topics', JSON.stringify(completedSubTopics));
    } catch (e) {
      console.warn('Unable to persist topic completion:', e);
    }
  }, [completedSubTopics]);

  const activePathway =
    LEARNING_PATHWAYS_DATA.find((p) => p.id === selectedPathwayId) || LEARNING_PATHWAYS_DATA[0];

  const toggleSubTopic = (subTopicId: string) => {
    setCompletedSubTopics((prev) => ({
      ...prev,
      [subTopicId]: !prev[subTopicId],
    }));
  };

  // Calculate overall pathway progress
  const allSubTopicsInPathway = activePathway.topics.flatMap((t) => t.subTopics);
  const completedCount = allSubTopicsInPathway.filter((st) => completedSubTopics[st.id]).length;
  const progressPct =
    allSubTopicsInPathway.length > 0 ? Math.round((completedCount / allSubTopicsInPathway.length) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Compass className="w-6 h-6 text-sky-400" />
            Granular Skill-Up Learning Curricula
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Domain-differentiated, sub-topic curricula with official documentation links, seminal research papers, and capstone blueprints.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              `Live research on recommended learning roadmap, essential papers, and interview project standards for ${activePathway.title}`
            )
          }
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-600/20 transition-all cursor-pointer shrink-0"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Research This Curriculum</span>
        </button>
      </div>

      {/* Pathway Selector Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {LEARNING_PATHWAYS_DATA.map((p) => {
          const isSelected = p.id === selectedPathwayId;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPathwayId(p.id)}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              }`}
            >
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                {p.discipline}
              </span>
              <h4
                className={`text-xs font-bold mt-1 leading-snug ${
                  isSelected ? 'text-white' : 'text-slate-200'
                }`}
              >
                {p.title}
              </h4>
              <span className="text-[11px] text-slate-400 block mt-1 line-clamp-1">{p.tagline}</span>
            </button>
          );
        })}
      </div>

      {/* Active Pathway Deep Dive */}
      <div className="space-y-6">
        {/* Pathway Header & Domain Nuance Callout */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                {activePathway.discipline} Specialization
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">{activePathway.title}</h3>
              <p className="mt-1 text-xs text-slate-300 font-mono">{activePathway.tagline}</p>
            </div>

            {/* Progress Badge */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0 text-right min-w-36">
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Curriculum Progress</span>
              <div className="text-2xl font-bold text-emerald-400 font-mono mt-0.5">{progressPct}%</div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                <div className="bg-emerald-400 h-full transition-all" style={{ width: `${progressPct}%` }}></div>
              </div>
              <span className="text-[10px] text-slate-500 mt-1 block">
                {completedCount} of {allSubTopicsInPathway.length} sub-topics completed
              </span>
            </div>
          </div>

          {/* CRITICAL DOMAIN NUANCE: Why this skill differs */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-slate-950 border border-sky-800/50">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
              <div>
                <strong className="text-xs font-bold text-sky-300 uppercase tracking-wider block">
                  Domain Nuance & Specialization Rationale:
                </strong>
                <p className="mt-1 text-xs text-slate-200 leading-relaxed">{activePathway.whyUnique}</p>
              </div>
            </div>
          </div>

          {/* Target Roles & Prerequisites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1.5">
                Target Roles in Demand:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activePathway.targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-sky-200 text-xs font-medium"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1.5">
                Foundational Prerequisites:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activePathway.prerequisites.map((pre, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-xs"
                  >
                    • {pre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Granular Topics & Sub-Topics Curriculum Tree */}
        <div className="space-y-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            Detailed Granular Learning Modules ({activePathway.topics.length} Units)
          </h4>

          {activePathway.topics.map((topic, tIdx) => (
            <div key={topic.id} className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                    Module {tIdx + 1} • {topic.difficulty} Difficulty
                  </span>
                  <h5 className="text-lg font-bold text-white mt-0.5">{topic.title}</h5>
                </div>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> ~{topic.estimatedHours} hours
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">{topic.summary}</p>

              {/* Sub-Topics List with Reference Learning Material Links */}
              <div className="space-y-3 pt-2">
                {topic.subTopics.map((subTopic) => {
                  const isDone = !!completedSubTopics[subTopic.id];
                  return (
                    <div
                      key={subTopic.id}
                      className={`p-4 rounded-xl border transition-all ${
                        isDone
                          ? 'bg-slate-950/40 border-emerald-800/40'
                          : 'bg-slate-950 border-slate-800/90 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <button
                            onClick={() => toggleSubTopic(subTopic.id)}
                            className="mt-0.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                            title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                          >
                            {isDone ? (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-500" />
                            )}
                          </button>
                          <div>
                            <h6
                              className={`text-sm font-bold ${
                                isDone ? 'text-emerald-300 line-through' : 'text-white'
                              }`}
                            >
                              {subTopic.name}
                            </h6>
                            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                              {subTopic.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Key Concepts Pills */}
                      <div className="mt-3 pl-6 flex flex-wrap gap-1.5">
                        {subTopic.keyConcepts.map((concept, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>

                      {/* Reference Learning Material Links */}
                      {subTopic.referenceResources && subTopic.referenceResources.length > 0 && (
                        <div className="mt-4 pl-6 pt-3 border-t border-slate-800/60 space-y-1.5">
                          <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider block">
                            Direct Reference Learning Materials & Canonical Links:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {subTopic.referenceResources.map((res, rIdx) => (
                              <a
                                key={rIdx}
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-850 transition-all text-xs text-slate-200 group flex flex-col justify-between"
                              >
                                <div className="flex items-start justify-between gap-1">
                                  <span className="font-semibold text-sky-300 group-hover:text-white transition-colors truncate">
                                    {res.title}
                                  </span>
                                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 shrink-0" />
                                </div>
                                <span className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                                  {res.annotation}
                                </span>
                                <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-slate-500">
                                  <span>{res.type}</span>
                                  {res.isFree && <span className="text-emerald-400 font-bold">Free Resource</span>}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Standout Capstone Project Blueprint */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2.5">
            <Award className="w-6 h-6 text-amber-400" />
            <div>
              <h4 className="text-base font-bold text-white">
                Standout Portfolio Capstone Project: {activePathway.standoutCapstoneProject.title}
              </h4>
              <p className="text-xs text-slate-400">
                The exact project blueprint that passes technical screening rounds at Tier-1 tech companies.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed">
            {activePathway.standoutCapstoneProject.description}
          </p>

          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono">
            <span className="text-sky-400 font-semibold block mb-1">Architecture Blueprint:</span>
            <span className="text-slate-300">{activePathway.standoutCapstoneProject.architectureBlueprint}</span>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-300 block mb-1.5">
              Hiring Bar Evaluation Criteria:
            </span>
            <ul className="space-y-1">
              {activePathway.standoutCapstoneProject.evaluationCriteria.map((crit, crIdx) => (
                <li key={crIdx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{crit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
