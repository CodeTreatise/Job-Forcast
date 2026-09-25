import React from 'react';
import {
  ShieldCheck,
  ExternalLink,
  BookOpen,
  Calendar,
  Layers,
  Database,
  RefreshCw,
  X,
  FileCheck,
} from 'lucide-react';
import { DATA_SOURCES_REGISTRY, DataSource } from '../data/sourcesRegistryData';

interface SourcesRegistryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshData?: () => void;
  isRefreshing?: boolean;
}

export const SourcesRegistryModal: React.FC<SourcesRegistryModalProps> = ({
  isOpen,
  onClose,
  onRefreshData,
  isRefreshing = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Verified Data Sources & Methodology Registry
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 uppercase tracking-wider">
                  Audited 2026
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Transparent documentation of the authoritative surveys, labor registries, and benchmarks powering this platform.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onRefreshData && (
              <button
                onClick={onRefreshData}
                disabled={isRefreshing}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow transition-all cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>{isRefreshing ? 'Refreshing...' : 'Refresh Feed'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Source Cards List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
            <Database className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Our Data Verification Standard:</strong> Every metric displayed in TechTalentIQ—from regional salary distributions and tech stack growth rates to remote policies—is cross-referenced against multi-source quantitative indices (salary submissions with pay stubs, national labor bureau censuses, and open repository commit telemetry).
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {DATA_SOURCES_REGISTRY.map((source) => (
              <div
                key={source.id}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider block">
                      {source.category} • {source.organization}
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">{source.name}</h4>
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-500/50 text-sky-300 text-xs font-medium self-start sm:self-auto transition-colors"
                  >
                    <span>Verify Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{source.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800/70 text-[11px] text-slate-400">
                  <div>
                    <span className="block text-slate-500">Coverage:</span>
                    <span className="text-slate-300 font-medium">{source.coverage}</span>
                  </div>
                  <div>
                    <span className="block text-slate-500">Sample Depth:</span>
                    <span className="text-slate-300 font-medium">{source.sampleSize}</span>
                  </div>
                  <div>
                    <span className="block text-slate-500">Cadence:</span>
                    <span className="text-emerald-400 font-medium">{source.updateFrequency} ({source.lastUpdated})</span>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                  <span className="font-semibold text-slate-300 block mb-1">Methodology & Extraction:</span>
                  <p>{source.methodologyNotes}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {source.extractedMetrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-300"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>TechTalentIQ Data Integrity Assurance Protocol</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors cursor-pointer"
          >
            Close Registry
          </button>
        </div>
      </div>
    </div>
  );
};
