import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Search,
  Filter,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Building2,
  MapPin,
  DollarSign,
  Clock,
  Sparkles,
  CheckCircle2,
  Globe2,
  Send,
  HelpCircle,
} from 'lucide-react';
import { JOB_OPENINGS_DATA, JobOpening } from '../data/jobOpeningsData';
import { convertUSDToCurrency } from '../data/currencyData';

interface JobHunterBoardProps {
  selectedCurrency: string;
  isPPPEnabled: boolean;
  onLaunchResearch: (query: string) => void;
}

export const JobHunterBoard: React.FC<JobHunterBoardProps> = ({
  selectedCurrency,
  isPPPEnabled,
  onLaunchResearch,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [workModeFilter, setWorkModeFilter] = useState('All');
  const [companyTypeFilter, setCompanyTypeFilter] = useState('All');

  // Application tracker states saved in localStorage
  const [jobStatusMap, setJobStatusMap] = useState<Record<string, 'None' | 'Saved' | 'Applied' | 'Interviewing' | 'Offer'>>(() => {
    try {
      const saved = localStorage.getItem('techtalentiq_job_tracker');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('techtalentiq_job_tracker', JSON.stringify(jobStatusMap));
    } catch (e) {
      console.warn('Unable to persist job tracker:', e);
    }
  }, [jobStatusMap]);

  const updateJobStatus = (jobId: string, status: 'None' | 'Saved' | 'Applied' | 'Interviewing' | 'Offer') => {
    setJobStatusMap((prev) => ({
      ...prev,
      [jobId]: status,
    }));
  };

  const filteredJobs = JOB_OPENINGS_DATA.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.techStack.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesRegion = regionFilter === 'All' || job.region === regionFilter;
    const matchesWorkMode = workModeFilter === 'All' || job.workMode === workModeFilter;
    const matchesCompanyType = companyTypeFilter === 'All' || job.companyType === companyTypeFilter;

    return matchesSearch && matchesRegion && matchesWorkMode && matchesCompanyType;
  });

  const formatSalary = (minUSD: number, maxUSD: number) => {
    const minConverted = convertUSDToCurrency(minUSD, selectedCurrency, isPPPEnabled).formatted;
    const maxConverted = convertUSDToCurrency(maxUSD, selectedCurrency, isPPPEnabled).formatted;
    return `${minConverted} - ${maxConverted}`;
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-sky-400" />
            Global Tech Job Hunter & Application Portal
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Curated high-compensation engineering roles across US, Europe, India GCCs, China, and LatAm with salary benchmarks and apply links.
          </p>
        </div>

        <button
          onClick={() =>
            onLaunchResearch(
              `Live research on recent tech job postings, hiring companies, and interview question trends for software engineers in ${selectedCurrency}`
            )
          }
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-600/20 transition-all cursor-pointer shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Research Active Job Postings</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 shadow-xl space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by role title, company, or tech stack (e.g. vLLM, Rust, Kubernetes)..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3.5" />
          </div>

          {/* Region Filter */}
          <div className="sm:w-44">
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
            >
              <option value="All">All Regions</option>
              <option value="US">🇺🇸 United States</option>
              <option value="Europe">🇪🇺 Europe</option>
              <option value="India">🇮🇳 India GCCs</option>
              <option value="China">🇨🇳 China AI Hubs</option>
              <option value="LatAm">🌎 Latin America</option>
            </select>
          </div>

          {/* Work Mode Filter */}
          <div className="sm:w-36">
            <select
              value={workModeFilter}
              onChange={(e) => setWorkModeFilter(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
            >
              <option value="All">All Work Modes</option>
              <option value="Remote">Remote Only</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">On-site</option>
            </select>
          </div>

          {/* Company Type Filter */}
          <div className="sm:w-48">
            <select
              value={companyTypeFilter}
              onChange={(e) => setCompanyTypeFilter(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 focus:outline-none focus:border-sky-500"
            >
              <option value="All">All Company Archetypes</option>
              <option value="New AI/Venture Startup">New AI/Venture Startup</option>
              <option value="Global Capability Center (GCC)">Global Capability Center (GCC)</option>
              <option value="Old Fortune 500 & Banking">Old Fortune 500 & Banking</option>
              <option value="Sovereign & State-Backed Lab">Sovereign & State-Backed Lab</option>
            </select>
          </div>
        </div>
      </div>

      {/* Jobs Feed List */}
      <div className="space-y-4">
        {filteredJobs.map((job) => {
          const currentStatus = jobStatusMap[job.id] || 'None';

          return (
            <div
              key={job.id}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-xl hover:border-sky-500/40 transition-all space-y-4"
            >
              {/* Job Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400">
                    <span className="font-semibold text-white flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-sky-400" />
                      {job.company}
                    </span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 text-[11px]">
                      {job.companyType}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span
                      className={`font-semibold px-2 py-0.2 rounded text-[11px] ${
                        job.workMode === 'Remote'
                          ? 'bg-sky-950 text-sky-300 border border-sky-800'
                          : job.workMode === 'Hybrid'
                          ? 'bg-indigo-950 text-indigo-300 border border-indigo-800'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {job.workMode}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-1.5">{job.title}</h3>
                </div>

                {/* Salary Display Box with Live Conversion */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 shrink-0 text-left sm:text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Target Total Comp ({selectedCurrency} {isPPPEnabled ? '• PPP' : ''})
                  </span>
                  <div className="text-lg font-bold text-emerald-400 font-mono">
                    {formatSalary(job.salaryUSD.min, job.salaryUSD.max)}
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    Native: {job.nativeSalaryDisplay}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">{job.description}</p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {job.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-sky-200 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hiring Team Notes & Interview Expectations */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                <span className="font-semibold text-amber-400 flex items-center gap-1.5 mb-0.5">
                  <Sparkles className="w-3.5 h-3.5" /> Hiring Team Interview Bar & Screening Expectation:
                </span>
                <p className="text-slate-400">{job.hiringTeamNotes}</p>
              </div>

              {/* Action Ribbon & Tracker */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Application State Tracker Select */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">My Status:</span>
                  <select
                    value={currentStatus}
                    onChange={(e) => updateJobStatus(job.id, e.target.value as any)}
                    className="py-1 px-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-semibold text-white focus:outline-none focus:border-sky-500 cursor-pointer"
                  >
                    <option value="None">Not Tracked</option>
                    <option value="Saved">📌 Saved for Later</option>
                    <option value="Applied">📬 Applied</option>
                    <option value="Interviewing">💬 Interviewing</option>
                    <option value="Offer">🎉 Received Offer</option>
                  </select>
                </div>

                {/* Direct Apply & Quick Research Enquiry */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      onLaunchResearch(
                        `Deep interview preparation, recent salary data, and system design expectations for ${job.title} at ${job.company}`
                      )
                    }
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-medium border border-slate-700 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Prep Interview Brief</span>
                  </button>

                  <a
                    href={job.directApplyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md shadow-sky-600/20 transition-all"
                  >
                    <span>Apply / Search Openings</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {filteredJobs.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-slate-900 border border-slate-800">
            <p className="text-slate-400 text-sm">No job openings found matching your filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};
