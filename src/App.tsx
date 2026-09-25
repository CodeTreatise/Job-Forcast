import React, { useState } from 'react';
import { Header, ActiveTab } from './components/Header';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { MarketTerminalConsole } from './components/MarketTerminalConsole';
import { RegionalScopesView } from './components/RegionalScopesView';
import { ProductNetworkExplorer } from './components/ProductNetworkExplorer';
import { GranularLearningPaths } from './components/GranularLearningPaths';
import { JobHunterBoard } from './components/JobHunterBoard';
import { LiveDeepResearch } from './components/LiveDeepResearch';
import { DomainProfilesView } from './components/DomainProfilesView';
import { SalaryRadar } from './components/SalaryRadar';
import { SkillVelocityMatrix } from './components/SkillVelocityMatrix';
import { CareerPivotSimulator } from './components/CareerPivotSimulator';
import { ResearchDossiersView } from './components/ResearchDossiersView';
import { SourcesRegistryModal } from './components/SourcesRegistryModal';
import {
  Activity,
  Layers,
  Search,
  DollarSign,
  Zap,
  Compass,
  FileText,
  Globe2,
  Sparkles,
  ShieldCheck,
  BarChart2,
  Briefcase,
  Network,
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [customResearchQuery, setCustomResearchQuery] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [isPPPEnabled, setIsPPPEnabled] = useState<boolean>(false);
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState<boolean>(false);
  const [isRefreshingSources, setIsRefreshingSources] = useState<boolean>(false);

  const handleLaunchResearch = (query: string) => {
    setCustomResearchQuery(query);
    setActiveTab('research');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRefreshDataFeed = () => {
    setIsRefreshingSources(true);
    setTimeout(() => {
      setIsRefreshingSources(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white flex flex-col">
      {/* Top Fixed Header with Global Currency Selector & Data Sources Trigger */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedCurrency={selectedCurrency}
        onSelectCurrency={setSelectedCurrency}
        isPPPEnabled={isPPPEnabled}
        onTogglePPP={() => setIsPPPEnabled(!isPPPEnabled)}
        onOpenSourcesModal={() => setIsSourcesModalOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <ExecutiveOverview
            selectedCurrency={selectedCurrency}
            isPPPEnabled={isPPPEnabled}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onLaunchResearch={handleLaunchResearch}
          />
        )}

        {activeTab === 'terminal' && (
          <MarketTerminalConsole
            selectedCurrency={selectedCurrency}
            isPPPEnabled={isPPPEnabled}
            onLaunchResearch={handleLaunchResearch}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'regions' && (
          <RegionalScopesView
            selectedCurrency={selectedCurrency}
            isPPPEnabled={isPPPEnabled}
            onLaunchResearch={handleLaunchResearch}
          />
        )}

        {activeTab === 'products' && (
          <ProductNetworkExplorer
            onLaunchResearch={handleLaunchResearch}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'pathways' && (
          <GranularLearningPaths onLaunchResearch={handleLaunchResearch} />
        )}

        {activeTab === 'jobs' && (
          <JobHunterBoard
            selectedCurrency={selectedCurrency}
            isPPPEnabled={isPPPEnabled}
            onLaunchResearch={handleLaunchResearch}
          />
        )}

        {activeTab === 'research' && (
          <LiveDeepResearch key={customResearchQuery} initialQuery={customResearchQuery} />
        )}

        {activeTab === 'domains' && (
          <DomainProfilesView onLaunchResearch={handleLaunchResearch} />
        )}

        {activeTab === 'salaries' && (
          <SalaryRadar
            selectedCurrency={selectedCurrency}
            isPPPEnabled={isPPPEnabled}
            onLaunchResearch={handleLaunchResearch}
          />
        )}

        {activeTab === 'skills' && (
          <SkillVelocityMatrix onLaunchResearch={handleLaunchResearch} />
        )}

        {activeTab === 'pivots' && (
          <CareerPivotSimulator
            selectedCurrency={selectedCurrency}
            isPPPEnabled={isPPPEnabled}
            onLaunchResearch={handleLaunchResearch}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'dossiers' && (
          <ResearchDossiersView onLaunchResearch={handleLaunchResearch} />
        )}
      </main>

      {/* Verified Data Sources & Methodology Modal */}
      <SourcesRegistryModal
        isOpen={isSourcesModalOpen}
        onClose={() => setIsSourcesModalOpen(false)}
        onRefreshData={handleRefreshDataFeed}
        isRefreshing={isRefreshingSources}
      />

      {/* Global Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/90 text-xs text-slate-500 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-sky-500/20 flex items-center justify-center text-sky-400">
              <Activity className="w-3 h-3" />
            </div>
            <span className="font-semibold text-slate-300">TechTalentIQ</span>
            <span className="text-slate-600">|</span>
            <span>Global IT Labor, Capital & Skills Terminal</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 flex-wrap justify-center">
            <button
              onClick={() => setIsSourcesModalOpen(true)}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Data Sources Registry</span>
            </button>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1">
              <Globe2 className="w-3 h-3 text-sky-400" />
              Gemini 3.8 Grounded
            </span>
            <span className="text-slate-700">•</span>
            <span>US • Europe • India GCCs • China • LatAm</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
