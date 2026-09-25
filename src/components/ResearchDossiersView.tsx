import React, { useState } from 'react';
import {
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  BookOpen,
  Share2,
  Check,
  Search,
} from 'lucide-react';
import { RESEARCH_DOSSIERS, ResearchDossierArticle } from '../data/marketResearchData';
import { MarkdownRenderer } from './MarkdownRenderer';

interface ResearchDossiersViewProps {
  onLaunchResearch: (query: string) => void;
}

export const ResearchDossiersView: React.FC<ResearchDossiersViewProps> = ({ onLaunchResearch }) => {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(RESEARCH_DOSSIERS[0].id);
  const [copied, setCopied] = useState(false);

  const activeArticle =
    RESEARCH_DOSSIERS.find((a) => a.id === selectedArticleId) || RESEARCH_DOSSIERS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(`# ${activeArticle.title}\n\n${activeArticle.contentMarkdown}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-sky-400" />
            Curated Research Dossiers & Whitepapers
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Authoritative long-form market analyses covering macroeconomic shifts, global talent centers, and automation dynamics.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              `Live research update on: ${activeArticle.title} in the 2026 tech employment landscape`
            )
          }
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-700/20 transition-all cursor-pointer shrink-0"
        >
          <Search className="w-3.5 h-3.5" />
          <span>Research Fresh Updates on this Topic</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Dossier Article List */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block px-1">
            Select Research Paper ({RESEARCH_DOSSIERS.length})
          </span>

          <div className="space-y-2">
            {RESEARCH_DOSSIERS.map((art) => {
              const isSelected = art.id === selectedArticleId;
              return (
                <button
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-sky-500 shadow-lg shadow-sky-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span className="text-sky-400 font-semibold">{art.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readingTime}
                    </span>
                  </div>

                  <h4
                    className={`text-sm font-bold leading-snug ${
                      isSelected ? 'text-white' : 'text-slate-200'
                    }`}
                  >
                    {art.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {art.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Full Reading Mode */}
        <div className="lg:col-span-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
            {/* Paper Header */}
            <div className="bg-slate-950 border-b border-slate-800 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3 text-xs text-slate-400 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-sky-950 border border-sky-800/60 text-sky-300 font-medium">
                  {activeArticle.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {activeArticle.readingTime}
                  </span>
                  <span>{activeArticle.date}</span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-all cursor-pointer"
                    title="Copy article markdown"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 leading-tight">
                {activeArticle.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 italic border-l-2 border-sky-500 pl-3">
                {activeArticle.summary}
              </p>
            </div>

            {/* Paper Body */}
            <div className="p-6 sm:p-8 bg-slate-900/70 text-slate-200">
              <MarkdownRenderer content={activeArticle.contentMarkdown} />
            </div>

            {/* Bottom Paper Footer */}
            <div className="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-400">
                Researched and validated against 2026 tech hiring datasets and economic filings.
              </span>
              <button
                onClick={() =>
                  onLaunchResearch(
                    `In-depth research on recent developments regarding: ${activeArticle.title}`
                  )
                }
                className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
              >
                Deep research on this topic <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
