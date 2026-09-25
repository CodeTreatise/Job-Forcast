/**
 * Comprehensive Legacy Technology & Traditional Job Title Progression Intelligence
 * Backed by Stack Overflow Developer Survey, Levels.fyi, CompTIA, GitHub Octoverse, and Dice Tech Reports.
 */

export interface ProgressivePath {
  id: string;
  targetRole: string;
  category: 'Modern Evolution' | 'High-Growth Pivot' | 'Enterprise Architecture' | 'Platform / SRE';
  tagline: string;
  transitionDifficulty: 'Low-Medium' | 'Medium' | 'Medium-High' | 'High';
  estimatedTimelineMonths: number;
  matchScorePct: number; // Transferable skills %
  openJobPostingsShare: number; // % of total tech job postings
  postingsGrowthYoY: number; // % YoY hiring volume change
  avgSalaryUSD: number; // Base reference in USD (converts dynamically with currency & PPP)
  salaryIncreasePct: number; // Projected compensation uplift
  demandVerdict: 'Explosive' | 'Very High' | 'High' | 'Solid';
  
  marketContextWhySuccess: string;
  trendLongevityYears: string;
  
  transferableStrengths: { skill: string; howItHelps: string }[];
  criticalSkillGaps: { skill: string; whyNeeded: string; priority: 'Critical' | 'High' | 'Medium' }[];
  
  actionPhases: {
    phase: string;
    weeks: string;
    focus: string;
    topics: string[];
    deliverable: string;
  }[];
  
  capstoneProject: {
    title: string;
    description: string;
    techStack: string[];
    measurableImpact: string;
  };
  
  learningResources: {
    title: string;
    url: string;
    type: 'Official Documentation' | 'Interactive Course' | 'Architecture Whitepaper' | 'Open Source Repo';
    free: boolean;
  }[];
  
  recognizedCertifications?: string[];
}

export interface LegacyTechProfile {
  id: string;
  legacyTitle: string;
  primaryTechStack: string[];
  historicalEra: string;
  currentMarketStatus: {
    hiringTrajectory: 'Cooling Fast' | 'Severe Compression' | 'Legacy Maintenance Only' | 'Shrinking Footprint';
    postingsDeclineYoY: number;
    marketRiskLevel: 'Critical' | 'High' | 'Moderate';
    stagnationWarning: string;
    timeWindowToTransition: string;
    salaryCapInsight: string;
  };
  reasonsForShift: string[];
  progressivePaths: ProgressivePath[];
  stayOrSwitchVerdict: {
    stayRisk: string;
    switchReward: string;
    bottomLine: string;
  };
}

export const LEGACY_TECH_PROFILES: LegacyTechProfile[] = [
  {
    id: 'legacy-angular-dev',
    legacyTitle: 'Frontend Angular Developer (AngularJS / Angular 2-16)',
    primaryTechStack: ['AngularJS / Angular 2-16', 'RxJS 6', 'NgRx', 'TypeScript', 'Karma / Jasmine', 'Webpack'],
    historicalEra: '2015 – 2022 Enterprise Hegemony',
    currentMarketStatus: {
      hiringTrajectory: 'Cooling Fast',
      postingsDeclineYoY: -24,
      marketRiskLevel: 'High',
      stagnationWarning: 'Legacy Angular (versions 2-15 without modern Signals or SSR) is increasingly relegated to maintenance banking and insurance apps. Green-field projects overwhelmingly favor modern Next.js/React or Angular 18+ Signals.',
      timeWindowToTransition: '6 – 12 Months',
      salaryCapInsight: 'Median US Base $118k, compressed at senior band ($140k ceiling) compared to $175k+ for Next.js/AI UX engineers.',
    },
    reasonsForShift: [
      'Angular underwent a radical paradigm shift in v17/v18 towards reactivity via Signals, control flow (@if, @for), and deferrable views, rendering RxJS-heavy patterns legacy.',
      'Startups and venture-backed scaleups overwhelmingly build on React/Next.js and Vercel AI SDK for generative interfaces.',
      'Companies are shedding complex NgRx boilerplate in favor of lightweight local signals and server state management (TanStack Query).',
      'Massive proliferation of AI streaming UI components with native React server components support.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Continuing exclusively on older Angular patterns limits your hiring funnel to legacy enterprise refactoring teams with below-market equity and slower career velocity.',
      switchReward: 'Transitioning to Next.js or modern Angular 18+ Signals unlocks 3.8x more active job openings and a 30-45% compensation uplift.',
      bottomLine: 'Do not abandon your TypeScript and component-driven discipline—leverage them to either upgrade to Angular 18+ Signals or jump to React/Next.js 15 Full-Stack.'
    },
    progressivePaths: [
      {
        id: 'ang-to-nextjs',
        targetRole: 'Next.js 15 & React Full-Stack Engineer',
        category: 'High-Growth Pivot',
        tagline: 'Leverage strong TypeScript & architecture skills to dominate the highest-volume frontend job market.',
        transitionDifficulty: 'Low-Medium',
        estimatedTimelineMonths: 3,
        matchScorePct: 82,
        openJobPostingsShare: 42.6,
        postingsGrowthYoY: 28,
        avgSalaryUSD: 165000,
        salaryIncreasePct: 35,
        demandVerdict: 'Explosive',
        marketContextWhySuccess: 'React and Next.js represent the undisputed standard across startups, scaleups, and FAANG tech. Next.js App Router and Server Components unify frontend and backend API layers.',
        trendLongevityYears: '6–8+ Years (Industry Default Standard)',
        transferableStrengths: [
          { skill: 'Deep TypeScript Mastery', howItHelps: 'React 19 & Next.js 15 are built TypeScript-first; your type safety knowledge gives you immediate parity with senior React devs.' },
          { skill: 'Component Architecture', howItHelps: 'Experience decomposing complex enterprise views into reusable, isolated UI components directly maps to React.' },
          { skill: 'State Management Rigor', howItHelps: 'Having managed complex NgRx stores makes Zustand, Redux Toolkit, or TanStack Query feel refreshingly simple.' },
          { skill: 'Enterprise Routing & Guards', howItHelps: 'Angular router resolvers and guards translate directly to Next.js Middleware and Server Component layout boundaries.' }
        ],
        criticalSkillGaps: [
          { skill: 'React Mental Model (Hooks & Fiber)', whyNeeded: 'Understanding reconciliation, dependency arrays, and avoiding unnecessary re-renders without RxJS streams.', priority: 'Critical' },
          { skill: 'React Server Components (RSC)', whyNeeded: 'Knowing when code executes on server vs client boundary in Next.js App Router.', priority: 'Critical' },
          { skill: 'Modern CSS (Tailwind CSS)', whyNeeded: 'Replacing heavy SCSS/Angular Material with utility-first Tailwind CSS and Radix/shadcn UI.', priority: 'High' },
          { skill: 'Server Actions & API Routes', whyNeeded: 'Building full-stack mutations and streaming responses without a separate backend service.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Core React Mental Model & Hooks',
            topics: ['useState, useEffect, useMemo, useCallback mechanics', 'Custom hooks and compound component patterns', 'TanStack Query (React Query) for server state', 'Tailwind CSS and modern responsive design'],
            deliverable: 'Build a feature-complete collaborative dashboard with real-time optimistic updates using TanStack Query and Tailwind.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–8',
            focus: 'Next.js 15 App Router & Server Components',
            topics: ['Server vs Client components boundary', 'Server Actions with Zod validation', 'Dynamic routing, parallel routes, and intercepting routes', 'Next-Auth / Clerk authentication integration'],
            deliverable: 'Deploy a multi-tenant SaaS application with stripe billing, server actions, and protected dashboard routes on Vercel.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 9–12',
            focus: 'Performance, Edge & Production Polish',
            topics: ['Streaming SSR with Suspense', 'Caching strategy (stale-while-revalidate, revalidatePath)', 'Playwright end-to-end integration tests', 'OpenTelemetry performance tracing'],
            deliverable: 'Publish a production-grade open-source Next.js template with 98+ Lighthouse scores and CI/CD automation.'
          }
        ],
        capstoneProject: {
          title: 'Full-Stack Enterprise Analytics Platform (Next.js 15 + Server Actions + Tailwind)',
          description: 'A multi-tenant analytics dashboard featuring real-time data streaming, optimistic mutation rollbacks, server-side PDF exports, and team permission controls.',
          techStack: ['Next.js 15 App Router', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM / Postgres', 'Zustand', 'Playwright'],
          measurableImpact: 'Achieved sub-100ms Largest Contentful Paint (LCP) with streaming SSR and reduced bundle size by 62% compared to equivalent Angular bundle.'
        },
        learningResources: [
          { title: 'Official Next.js Learn Tutorial', url: 'https://nextjs.org/learn', type: 'Interactive Course', free: true },
          { title: 'React Official Documentation (react.dev)', url: 'https://react.dev', type: 'Official Documentation', free: true },
          { title: 'TkDodo’s Practical React Query Blog', url: 'https://tkdodo.eu/blog/practical-react-query', type: 'Architecture Whitepaper', free: true }
        ],
        recognizedCertifications: ['AWS Certified Cloud Practitioner (Optional for hosting)', 'Meta Frontend Developer Certificate']
      },
      {
        id: 'ang-to-modern-ang18',
        targetRole: 'Modern Angular 18+ / AnalogJS Enterprise Architect',
        category: 'Modern Evolution',
        tagline: 'Modernize within the ecosystem: master Signals, zoneless reactivity, and AnalogJS SSR to command top enterprise contract rates.',
        transitionDifficulty: 'Low-Medium',
        estimatedTimelineMonths: 2,
        matchScorePct: 92,
        openJobPostingsShare: 18.4,
        postingsGrowthYoY: 14,
        avgSalaryUSD: 152000,
        salaryIncreasePct: 28,
        demandVerdict: 'High',
        marketContextWhySuccess: 'Fortune 500 banks, healthcare providers, and defense contractors with millions of lines of Angular code desperately need engineers who can modernize them to Signals and Zoneless Angular without rewriting.',
        trendLongevityYears: '5–7 Years (Enterprise Stability)',
        transferableStrengths: [
          { skill: 'Existing Angular Dependency Injection', howItHelps: 'Retain 100% of your knowledge of hierarchical injectors, services, and tokens.' },
          { skill: 'Angular CLI & Workspace Architecture', howItHelps: 'Monorepos (Nx) and build setups remain consistent.' },
          { skill: 'TypeScript Enterprise Patterns', howItHelps: 'Immediate comprehension of strict typing in modern standalone components.' }
        ],
        criticalSkillGaps: [
          { skill: 'Angular Signals & Signal Inputs/Outputs', whyNeeded: 'Replacing RxJS Subject/BehaviorSubject with signal(), computed(), and effect().', priority: 'Critical' },
          { skill: 'Zoneless Change Detection', whyNeeded: 'Eliminating zone.js overhead for 2-3x faster runtime performance.', priority: 'Critical' },
          { skill: 'New Control Flow & Deferrable Views', whyNeeded: 'Migrating from *ngIf/*ngFor to @if/@for and lazy loading with @defer.', priority: 'High' },
          { skill: 'AnalogJS Full-Stack SSR', whyNeeded: 'Bringing file-based routing and Vite-powered SSR to Angular applications.', priority: 'Medium' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–3',
            focus: 'Standalone Components & New Control Flow',
            topics: ['Migrating NgModule to Standalone components', 'New built-in control flow (@if, @for, @switch)', 'Deferrable views (@defer, @placeholder, @loading)', 'Vite-powered esbuild build system'],
            deliverable: 'Refactor an existing NgModule-based app to 100% standalone components with deferrable views.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 4–6',
            focus: 'Signals & Reactive Architecture',
            topics: ['signal(), computed(), effect() primitives', 'Signal inputs, model inputs, and signal queries', 'Interoperability: toSignal() and toObservable()', 'Zoneless Angular experimentation'],
            deliverable: 'Build a high-frequency financial trading table updated 60 times/sec with zero zone.js overhead.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 7–8',
            focus: 'AnalogJS & Enterprise Micro-Frontends',
            topics: ['AnalogJS file-based routing and SSR', 'Nx monorepo micro-frontend module federation', 'Automated migration schematics creation'],
            deliverable: 'Create an automated migration schematic CLI that refactors *ngIf to @if across an enterprise codebase.'
          }
        ],
        capstoneProject: {
          title: 'Zoneless Enterprise Trading Terminal in Angular 18',
          description: 'A real-time financial market console built with standalone components, Signals-based state, WebSocket streaming, and AnalogJS SSR.',
          techStack: ['Angular 18+', 'Signals', 'AnalogJS', 'Tailwind CSS', 'Vite', 'Nx Monorepo'],
          measurableImpact: 'Reduced initial JavaScript bundle by 44% and improved frame-rate from 32 FPS to solid 60 FPS under heavy WebSocket churn.'
        },
        learningResources: [
          { title: 'Official Angular.dev Documentation & Interactive Tutorials', url: 'https://angular.dev', type: 'Official Documentation', free: true },
          { title: 'AnalogJS Full-Stack Framework Docs', url: 'https://analogjs.org', type: 'Official Documentation', free: true },
          { title: 'Angular Signals Deep Dive Guide', url: 'https://blog.angular.dev/signals-in-angular', type: 'Architecture Whitepaper', free: true }
        ]
      },
      {
        id: 'ang-to-ai-ux',
        targetRole: 'AI Systems UX & Generative Interface Engineer',
        category: 'High-Growth Pivot',
        tagline: 'Combine frontend architecture with LLM orchestration (streaming tokens, generative UI, client tools) for maximum market premium.',
        transitionDifficulty: 'Medium',
        estimatedTimelineMonths: 4,
        matchScorePct: 70,
        openJobPostingsShare: 24.8,
        postingsGrowthYoY: 65,
        avgSalaryUSD: 185000,
        salaryIncreasePct: 48,
        demandVerdict: 'Explosive',
        marketContextWhySuccess: 'Every enterprise is building AI-powered customer interfaces. However, raw backend LLMs provide terrible UX unless paired with skilled frontend engineers who master streaming, backpressure, and generative UI widgets.',
        trendLongevityYears: '7–10+ Years (AI Platform Paradigm)',
        transferableStrengths: [
          { skill: 'Handling Asynchronous Data Streams', howItHelps: 'Your experience with RxJS streams makes handling Server-Sent Events (SSE) and token chunks intuitive.' },
          { skill: 'Complex State & Optimistic UI', howItHelps: 'AI agent reasoning steps require complex hierarchical state and optimistic user interruption handling.' }
        ],
        criticalSkillGaps: [
          { skill: 'Vercel AI SDK & Streaming Protocols', whyNeeded: 'Building chat and generative UI with useChat, useCompletion, and streamUI.', priority: 'Critical' },
          { skill: 'Client Tool Calling & Agentic UI', whyNeeded: 'Allowing the LLM to trigger frontend widgets, interactive charts, and forms dynamically.', priority: 'Critical' },
          { skill: 'Vector Search & Client-side RAG UX', whyNeeded: 'Designing citation popups, source verification chips, and document diffing interfaces.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Streaming Mechanics & LLM SDKs',
            topics: ['HTTP streaming and Server-Sent Events (SSE)', 'Vercel AI SDK Core & React hooks', 'Direct Gemini & OpenAI API streaming', 'Markdown and code syntax highlighting with streaming cursors'],
            deliverable: 'Build a streaming AI conversational interface that renders live markdown, syntax-highlighted code, and token generation speed metrics.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–10',
            focus: 'Generative UI & Client-Side Function Calling',
            topics: ['Dynamic component rendering via LLM tool calls', 'Generative UI (rendering interactive charts and buttons on the fly)', 'Error boundaries and fallback states during model hallucination'],
            deliverable: 'Build an autonomous Travel Booking Assistant that generates interactive flight cards and seat selectors directly inside the chat stream.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 11–16',
            focus: 'Enterprise Guardrails & Evaluation',
            topics: ['Grounding citation verification UI', 'Latency optimization and token usage telemetry', 'Human-in-the-loop approval workflows for dangerous actions'],
            deliverable: 'Deploy a multi-model comparison workbench that benchmarks Gemini, Claude, and GPT-4o side-by-side with latency graphs.'
          }
        ],
        capstoneProject: {
          title: 'Generative Market Intelligence Agent with Dynamic Charting & Citation Footnotes',
          description: 'An AI financial analyst interface that streams natural language synthesis while dynamically rendering interactive interactive stock charts and verified source footnotes.',
          techStack: ['Next.js 15', 'Vercel AI SDK', 'Gemini 3.8 / OpenAI APIs', 'Tailwind CSS', 'Recharts / Tremor', 'TypeScript'],
          measurableImpact: 'Enabled zero-latency optimistic perception with token streaming and 100% interactive grounded visual cards.'
        },
        learningResources: [
          { title: 'Vercel AI SDK Documentation', url: 'https://sdk.vercel.ai/docs', type: 'Official Documentation', free: true },
          { title: 'Google Gemini API TypeScript Quickstart', url: 'https://ai.google.dev/gemini-api/docs', type: 'Official Documentation', free: true }
        ]
      }
    ]
  },
  {
    id: 'legacy-manual-qa',
    legacyTitle: 'Manual QA / Functional Test Specialist',
    primaryTechStack: ['Manual Regression Test Plans', 'Jira / TestRail', 'Postman (Manual Requests)', 'Excel Test Suites', 'UAT Coordination'],
    historicalEra: '2005 – 2020 Manual Testing Era',
    currentMarketStatus: {
      hiringTrajectory: 'Severe Compression',
      postingsDeclineYoY: -32,
      marketRiskLevel: 'Critical',
      stagnationWarning: 'Pure manual QA roles are experiencing the steepest contraction across tech (-32% YoY). AI coding assistants (Cursor, GitHub Copilot) and modern headless frameworks write unit tests automatically. Teams now demand SDETs who code.',
      timeWindowToTransition: '3 – 6 Months (Immediate Priority)',
      salaryCapInsight: 'Median US Base $72k, capped at $90k senior level. Transitioning to SDET jumps median to $138k-$165k (+60%).',
    },
    reasonsForShift: [
      'Playwright and Cypress enabled engineers to author reliable, flake-free end-to-end tests in minutes.',
      'Continuous Deployment (CD) cycles require automated test gates that run in under 5 minutes on every PR.',
      'GenAI agents can ingest screen recordings or user stories and auto-generate Playwright scripts.',
      'Engineering organizations are shifting testing left, expecting developers and SDETs to co-own quality automation.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Remaining purely manual leaves you acutely vulnerable to layoffs and offshore labor arbitrage; job postings are dropping every single quarter.',
      switchReward: 'SDETs who combine domain testing wisdom with TypeScript/Python automation command a 50-70% salary uplift and have immense job stability.',
      bottomLine: 'You already possess the hardest part of testing: edge-case intuition and understanding how real users break software. You only need to learn to express that intuition in code.'
    },
    progressivePaths: [
      {
        id: 'qa-to-sdet-playwright',
        targetRole: 'Software Development Engineer in Test (SDET)',
        category: 'Modern Evolution',
        tagline: 'Master TypeScript, Playwright, and GitHub Actions CI/CD to become an indispensable automated testing engineer.',
        transitionDifficulty: 'Medium',
        estimatedTimelineMonths: 4,
        matchScorePct: 75,
        openJobPostingsShare: 29.5,
        postingsGrowthYoY: 34,
        avgSalaryUSD: 145000,
        salaryIncreasePct: 58,
        demandVerdict: 'Very High',
        marketContextWhySuccess: 'Playwright has decisively beaten Selenium and Cypress as the industry standard. Companies are actively converting manual QA headcounts into SDET positions.',
        trendLongevityYears: '6–8+ Years (Testing Standard)',
        transferableStrengths: [
          { skill: 'Test Strategy & Edge Case Discovery', howItHelps: 'Developers often write tests that only verify happy paths; your manual testing background ensures robust negative and edge case coverage.' },
          { skill: 'Understanding of Business Workflows', howItHelps: 'You already know the critical user journeys (checkout, authentication, checkout flows) that must never break.' },
          { skill: 'Bug Reporting Rigor', howItHelps: 'Clear repro steps translate directly into automated reproduction scripts.' }
        ],
        criticalSkillGaps: [
          { skill: 'Programming Fundamentals (TypeScript / JavaScript)', whyNeeded: 'Writing clean, asynchronous code with async/await, loops, and objects.', priority: 'Critical' },
          { skill: 'Playwright Framework Architecture', whyNeeded: 'Page Object Model (POM), fixture generation, network interception, and auto-waiting.', priority: 'Critical' },
          { skill: 'CI/CD Integration (GitHub Actions)', whyNeeded: 'Triggering parallel headless test runs on pull requests with artifact failure recordings.', priority: 'Critical' },
          { skill: 'API Test Automation', whyNeeded: 'Automating REST and GraphQL endpoints before running slow browser tests.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'TypeScript & Programming Foundations',
            topics: ['Variables, types, functions, and array methods (map, filter)', 'Promises and async/await mechanics', 'Object-Oriented Programming & Page Object Model concepts', 'Git version control basics (branches, commits, PRs)'],
            deliverable: 'Write 10 automated TypeScript scripts that fetch API data and assert schema properties.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–10',
            focus: 'Playwright End-to-End Automation Mastery',
            topics: ['Playwright locators (user-visible locators like getByRole, getByText)', 'Page Object Model (POM) architectural design', 'Network mocking, route interception, and authentication state reuse', 'Cross-browser testing (Chromium, Firefox, WebKit, Mobile emulation)'],
            deliverable: 'Automate a complete e-commerce test suite (Login, Product Search, Cart, Checkout) with zero flakiness.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 11–16',
            focus: 'CI/CD Pipelines, Sharding & Reporting',
            topics: ['GitHub Actions YAML workflow configuration', 'Test sharding across 4 parallel runners to cut execution time by 75%', 'Allure / Playwright HTML reporter integration with Slack notifications', 'Performance load testing basics with k6'],
            deliverable: 'Deploy a production CI pipeline on GitHub that runs automated smoke tests in under 3 minutes with video recordings on failure.'
          }
        ],
        capstoneProject: {
          title: 'Production-Grade Playwright E2E Automation Suite with Matrix CI/CD',
          description: 'A complete test automation framework featuring Page Object Models, API seed data setup, parallel test sharding across multiple matrix runners, and Slack alerts on failure.',
          techStack: ['Playwright', 'TypeScript', 'GitHub Actions', 'Allure Reports', 'Docker', 'k6'],
          measurableImpact: 'Replaced 16 hours of weekly manual regression testing with a 6-minute automated parallel CI test suite.'
        },
        learningResources: [
          { title: 'Playwright Official Documentation', url: 'https://playwright.dev/docs/intro', type: 'Official Documentation', free: true },
          { title: 'TypeScript for JavaScript Programmers', url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html', type: 'Official Documentation', free: true },
          { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions', type: 'Official Documentation', free: true }
        ],
        recognizedCertifications: ['ISTQB Certified Tester (Foundation - if needed for legacy filters)', 'GitHub Actions Certification']
      },
      {
        id: 'qa-to-ai-qa-engineer',
        targetRole: 'AI-Driven QA & LLM Systems Evaluation Engineer',
        category: 'High-Growth Pivot',
        tagline: 'Lead the frontier of quality: evaluate LLM application accuracy, synthetic test generation, and prompt regressions.',
        transitionDifficulty: 'Medium-High',
        estimatedTimelineMonths: 5,
        matchScorePct: 65,
        openJobPostingsShare: 16.8,
        postingsGrowthYoY: 72,
        avgSalaryUSD: 160000,
        salaryIncreasePct: 68,
        demandVerdict: 'Explosive',
        marketContextWhySuccess: 'Every enterprise deploying LLM applications is terrified of hallucinations, prompt injection, and output regressions. Testing non-deterministic AI systems requires a dedicated new breed of QA engineer.',
        trendLongevityYears: '7–10+ Years (AI Safety Standard)',
        transferableStrengths: [
          { skill: 'Subjective Quality Assessment', howItHelps: 'Evaluating whether an AI output meets nuanced brand and factual standards requires deep human quality acumen.' },
          { skill: 'Adversarial Thinking', howItHelps: 'You know how to stress-test systems and break them, which is exactly what red-teaming and prompt-injection testing requires.' }
        ],
        criticalSkillGaps: [
          { skill: 'Python for Data & Automation', whyNeeded: 'Writing evaluation scripts and orchestrating evaluation datasets with pandas and pytest.', priority: 'Critical' },
          { skill: 'LLM Evaluation Frameworks (Ragas, TruLens, DeepEval)', whyNeeded: 'Benchmarking faithfulness, answer relevancy, and context recall.', priority: 'Critical' },
          { skill: 'Synthetic Test Data Generation', whyNeeded: 'Using LLMs to generate thousands of realistic edge-case user profiles and conversation trajectories.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–6',
            focus: 'Python & Automated API Testing',
            topics: ['Python fundamentals, pytest, and requests/httpx', 'JSON schema validation and data assertions', 'Creating synthetic golden test sets with pandas'],
            deliverable: 'Build a pytest suite that runs automated assertions against REST endpoints with dynamic test parameterization.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 7–14',
            focus: 'LLM Benchmarking & Evaluation Metrics',
            topics: ['DeepEval / Ragas evaluation framework', 'Evaluating Faithfulness, Hallucination Rate, and Answer Correctness', 'Red-teaming prompts for security vulnerabilities (Jailbreaks, PII leakage)'],
            deliverable: 'Create an automated evaluation benchmark that scores an enterprise customer support bot across 200 real-world customer inquiries.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 15–20',
            focus: 'Continuous AI Regression CI/CD',
            topics: ['Embedding evaluation into GitHub Actions PR pipelines', 'Cost and token regression tracking', 'Automated drift alerts'],
            deliverable: 'Implement a CI gate that blocks model prompt changes if the faithfulness metric drops below 95%.'
          }
        ],
        capstoneProject: {
          title: 'Automated LLM Red-Teaming & Benchmark Evaluation Harness',
          description: 'A quality platform that subjects conversational AI agents to 500+ adversarial prompt injections, tracks semantic drift, and generates compliance audit reports.',
          techStack: ['Python', 'pytest', 'DeepEval', 'Gemini / OpenAI API', 'Docker', 'GitHub Actions'],
          measurableImpact: 'Identified 18 hallucination edge-cases before production release and reduced model deployment risk by 80%.'
        },
        learningResources: [
          { title: 'DeepEval: The Open-Source LLM Evaluation Framework', url: 'https://github.com/confident-ai/deepeval', type: 'Open Source Repo', free: true },
          { title: 'Ragas: Evaluation Framework for RAG Pipelines', url: 'https://docs.ragas.io', type: 'Official Documentation', free: true }
        ]
      }
    ]
  },
  {
    id: 'legacy-java-monolith',
    legacyTitle: 'Traditional Java Monolith Developer (J2EE / Java 8 / Spring XML)',
    primaryTechStack: ['Java 8 / 11', 'Spring MVC (XML configs)', 'Hibernate / JPA', 'Oracle / MySQL on-prem', 'Tomcat / WebLogic', 'Ant / Maven'],
    historicalEra: '2010 – 2021 Enterprise Core',
    currentMarketStatus: {
      hiringTrajectory: 'Legacy Maintenance Only',
      postingsDeclineYoY: -18,
      marketRiskLevel: 'Moderate',
      stagnationWarning: 'Large enterprise systems still run on older Java, so jobs exist, but salaries are strictly capped ($115k-$135k) and the work consists mostly of slow bug fixes and compliance updates. Greenfield microservices use Spring Boot 3 + Virtual Threads or Go.',
      timeWindowToTransition: '12 – 18 Months',
      salaryCapInsight: 'Senior Legacy Java median base $128k vs $170k+ for modern Cloud-Native Java 21 or Go Distributed Systems.',
    },
    reasonsForShift: [
      'Java 21 Virtual Threads (Project Loom) completely revolutionized Java concurrency, making reactive programming (WebFlux) largely redundant for high throughput.',
      'Spring Boot 3 requires Java 17+ and provides built-in native compilation via GraalVM, cutting memory footprint by 80% and startup time to milliseconds.',
      'Containerization (Docker, Kubernetes) replaced heavyweight application servers (WebLogic, WebSphere, JBoss).',
      'High-performance cloud services increasingly pick Go for microservices and Kubernetes infrastructure.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Remaining stuck in XML-configured Java 8 monoliths traps you in the slowest, most bureaucratic IT departments.',
      switchReward: 'Modernizing to Java 21+ with Spring Boot 3 or transitioning to Go unlocks cloud infrastructure and distributed systems roles with top-tier compensation.',
      bottomLine: 'Your deep understanding of OOP, concurrency, transactions, and relational database schema design is gold—modernize the runtime and deployment model.'
    },
    progressivePaths: [
      {
        id: 'java-to-spring-boot-3',
        targetRole: 'Cloud-Native Java 21+ & Spring Boot 3 Architect',
        category: 'Modern Evolution',
        tagline: 'Modernize without leaving Java: master Java 21 Virtual Threads, Spring Boot 3, GraalVM native images, and Docker/K8s.',
        transitionDifficulty: 'Low-Medium',
        estimatedTimelineMonths: 3,
        matchScorePct: 88,
        openJobPostingsShare: 36.2,
        postingsGrowthYoY: 22,
        avgSalaryUSD: 168000,
        salaryIncreasePct: 32,
        demandVerdict: 'Very High',
        marketContextWhySuccess: 'Enterprises do not want to rewrite millions of lines of Java in another language; they want to modernize them to Java 21 and deploy them as lean Kubernetes microservices.',
        trendLongevityYears: '7–10 Years (Enterprise Core Modernization)',
        transferableStrengths: [
          { skill: 'Deep Java & JVM Understanding', howItHelps: 'Garbage collection tuning, classloaders, and memory profiling skills remain directly applicable.' },
          { skill: 'Relational DB & Transaction Management', howItHelps: 'ACID transactions, optimistic locking, and JPA/Hibernate knowledge remain essential.' },
          { skill: 'Enterprise Domain Knowledge', howItHelps: 'Understanding complex business logic in banking, insurance, or logistics.' }
        ],
        criticalSkillGaps: [
          { skill: 'Java 21 Features (Virtual Threads, Records, Pattern Matching)', whyNeeded: 'Writing cleaner, 10x higher-throughput code without reactive complexity.', priority: 'Critical' },
          { skill: 'Spring Boot 3 & Annotation-based Config', whyNeeded: 'Replacing old XML configurations with sleek autoconfiguration and Spring Data.', priority: 'Critical' },
          { skill: 'Docker Containerization & Kubernetes Helm', whyNeeded: 'Packaging JVM apps as small containers (GraalVM native or Temurin JRE).', priority: 'High' },
          { skill: 'Observability (Micrometer, OpenTelemetry, Prometheus)', whyNeeded: 'Instrumenting microservices for production cloud metrics.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Modern Java (17/21) & Clean Syntax',
            topics: ['Java Records, Sealed classes, and Pattern Matching for switch', 'Project Loom & Virtual Threads (structured concurrency)', 'Spring Boot 3.3 fundamentals and dependency injection without XML'],
            deliverable: 'Refactor a legacy Java 8 REST service to Java 21 records and virtual thread executors.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–8',
            focus: 'Spring Boot 3 Ecosystem & Cloud Microservices',
            topics: ['Spring Data JPA with Testcontainers (real Postgres tests in Docker)', 'Spring Security 6 with OAuth2 / JWT stateless authentication', 'Resilience4j circuit breakers and rate limiting'],
            deliverable: 'Build a secure, resilient banking transaction microservice with automated Dockerized integration tests.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 9–12',
            focus: 'Native Images, Kubernetes & Observability',
            topics: ['GraalVM native compilation (sub-second cold start)', 'Deploying to Kubernetes with Helm and readiness/liveness probes', 'Micrometer, Prometheus, and Grafana dashboard telemetry'],
            deliverable: 'Deploy a GraalVM native Spring Boot 3 service on a Kubernetes cluster with Prometheus metrics.'
          }
        ],
        capstoneProject: {
          title: 'High-Throughput Financial Ledger Microservice in Java 21 & Spring Boot 3',
          description: 'A cloud-native financial ledger processing 10,000 requests/sec utilizing Java 21 Virtual Threads, Spring Boot 3, PostgreSQL with Testcontainers, and GraalVM native packaging.',
          techStack: ['Java 21', 'Spring Boot 3', 'Virtual Threads', 'PostgreSQL', 'Docker / Testcontainers', 'Grafana'],
          measurableImpact: 'Reduced container memory footprint from 850MB to 78MB and achieved 4.2x higher transaction throughput.'
        },
        learningResources: [
          { title: 'Baeldung Spring Boot 3 & Java 21 Guides', url: 'https://www.baeldung.com', type: 'Interactive Course', free: true },
          { title: 'Spring Official Guides', url: 'https://spring.io/guides', type: 'Official Documentation', free: true },
          { title: 'Inside Java (Oracle JVM Team Podcast & Articles)', url: 'https://inside.java', type: 'Architecture Whitepaper', free: true }
        ],
        recognizedCertifications: ['Oracle Certified Professional: Java SE 17/21 Developer', 'Spring Certified Professional']
      },
      {
        id: 'java-to-go-distributed',
        targetRole: 'Go Distributed Systems & Cloud Microservices Engineer',
        category: 'High-Growth Pivot',
        tagline: 'Transition from JVM heavyweight services to ultra-light, high-concurrency Go microservices favored by cloud platforms.',
        transitionDifficulty: 'Medium',
        estimatedTimelineMonths: 4,
        matchScorePct: 78,
        openJobPostingsShare: 28.4,
        postingsGrowthYoY: 38,
        avgSalaryUSD: 178000,
        salaryIncreasePct: 42,
        demandVerdict: 'Explosive',
        marketContextWhySuccess: 'Cloud infrastructure (Docker, Kubernetes, Terraform, Prometheus) is built in Go. Modern high-throughput fintech and SaaS backends increasingly build in Go for predictable latency and simple concurrency.',
        trendLongevityYears: '8–10+ Years (Cloud Infrastructure Core)',
        transferableStrengths: [
          { skill: 'Backend Architecture Experience', howItHelps: 'RESTful API design, database connection pooling, and caching principles transfer 1:1.' },
          { skill: 'Concurrency Concepts', howItHelps: 'Understanding thread safety, mutexes, and deadlocks makes learning Goroutines and Channels fast.' }
        ],
        criticalSkillGaps: [
          { skill: 'Go Idiomatic Concurrency (Goroutines & Channels)', whyNeeded: 'Mastering select statements, context propagation, and worker pools.', priority: 'Critical' },
          { skill: 'gRPC & Protocol Buffers', whyNeeded: 'High-performance internal service-to-service binary communication.', priority: 'Critical' },
          { skill: 'Memory Management without Heavy Garbage Collection', whyNeeded: 'Pointers, stack vs heap allocation, and value vs reference receivers.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Go Syntax, Pointers & Idioms',
            topics: ['Go standard library, structs, interfaces, and error handling', 'Pointers, memory layout, and slices vs arrays', 'Building RESTful APIs with net/http and Chi/Gin router'],
            deliverable: 'Build a production REST API with custom middleware, JWT auth, and clean error handling in pure Go.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–10',
            focus: 'Concurrency, Context & gRPC',
            topics: ['Goroutines, channels, sync.WaitGroup, sync.Mutex', 'Context cancellation and timeouts across distributed requests', 'gRPC services with Protocol Buffers schema generation'],
            deliverable: 'Build a distributed worker pool that processes 50,000 asynchronous tasks with graceful shutdown and rate limiting.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 11–16',
            focus: 'Distributed Systems & Cloud Deployment',
            topics: ['Distributed locking with Redis, Kafka consumer groups', 'Docker scratch multi-stage builds (15MB binary containers)', 'Prometheus metrics export and OpenTelemetry tracing'],
            deliverable: 'Deploy a high-throughput event ingestion engine with Kafka, Redis, and Prometheus in a Kubernetes cluster.'
          }
        ],
        capstoneProject: {
          title: 'Distributed Real-Time Notification & Event Ingestion Engine in Go',
          description: 'A gRPC and WebSocket streaming service capable of handling 100,000 concurrent connections, ingesting Kafka events, and persisting to ClickHouse/Postgres.',
          techStack: ['Go (Golang)', 'gRPC / Protobuf', 'Apache Kafka', 'Redis', 'Docker', 'Kubernetes'],
          measurableImpact: 'Maintained steady 4ms p99 latency under 25,000 requests/sec with only 45MB of RAM per instance.'
        },
        learningResources: [
          { title: 'A Tour of Go (Official Interactive Tutorial)', url: 'https://go.dev/tour/', type: 'Interactive Course', free: true },
          { title: 'Go by Example', url: 'https://gobyexample.com', type: 'Official Documentation', free: true }
        ]
      }
    ]
  },
  {
    id: 'legacy-sysadmin',
    legacyTitle: 'Traditional Sysadmin / On-Premises Systems Administrator',
    primaryTechStack: ['On-Premises Linux (CentOS / RHEL) / Windows Server', 'Active Directory / LDAP', 'VMware ESXi / vSphere', 'Manual Shell/PowerShell scripts', 'Physical SAN/NAS Storage'],
    historicalEra: '2000 – 2018 Datacenter Era',
    currentMarketStatus: {
      hiringTrajectory: 'Severe Compression',
      postingsDeclineYoY: -29,
      marketRiskLevel: 'Critical',
      stagnationWarning: 'Traditional datacenter administrator roles are fading as companies complete cloud migrations. Hardware maintenance and manual OS configuration is now done by hyperscalers (AWS, Azure, GCP).',
      timeWindowToTransition: '6 – 12 Months',
      salaryCapInsight: 'Median US Base $85k, capped at $105k. Platform Engineers and Cloud Security specialists command $160k-$200k+.',
    },
    reasonsForShift: [
      'Infrastructure as Code (Terraform, OpenTofu) made manual server configuration obsolete.',
      'Kubernetes became the operating system of the cloud, abstracting away individual virtual machines.',
      'GitOps (ArgoCD, Flux) replaced manual SSH deployments with automated Git pull-request synchronizations.',
      'Enterprise budgets shifted 100% from physical datacenter capex to cloud and platform engineering.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Remaining an on-prem sysadmin locks you into shrinking municipal, regional hospital, or legacy manufacturing IT departments with dwindling budgets.',
      switchReward: 'Sysadmins make phenomenal Platform Engineers, SREs, and Cloud Security Engineers because you understand networking, kernels, and troubleshooting deep in your bones.',
      bottomLine: 'You already know DNS, subnets, Linux internals, and incident triage—wrap those foundational skills in Terraform, Kubernetes, and Cloud IAM.'
    },
    progressivePaths: [
      {
        id: 'sysadmin-to-platform-devops',
        targetRole: 'Cloud Platform & DevOps Engineer (AWS/K8s/Terraform)',
        category: 'Modern Evolution',
        tagline: 'Translate Linux, networking, and server administration into automated Infrastructure as Code and Kubernetes platform orchestration.',
        transitionDifficulty: 'Medium',
        estimatedTimelineMonths: 4,
        matchScorePct: 80,
        openJobPostingsShare: 38.5,
        postingsGrowthYoY: 31,
        avgSalaryUSD: 165000,
        salaryIncreasePct: 45,
        demandVerdict: 'Explosive',
        marketContextWhySuccess: 'Software engineers struggle with networking, security, and OS boundaries. A sysadmin who knows Terraform and Kubernetes provides tremendous platform leverage for entire development organizations.',
        trendLongevityYears: '8–10 Years (Infrastructure Core)',
        transferableStrengths: [
          { skill: 'Deep Linux & Kernel Troubleshooting', howItHelps: 'strace, journalctl, systemd, memory/disk I/O bottlenecks are second nature to you.' },
          { skill: 'Networking Fundamentals', howItHelps: 'Subnets, CIDR blocks, TCP/IP, DNS, VPN tunnels, and firewalls map directly into AWS VPCs and Kubernetes CNIs.' },
          { skill: 'Production Incident Composure', howItHelps: 'You already have experience managing outages under pressure and conducting post-mortems.' }
        ],
        criticalSkillGaps: [
          { skill: 'Infrastructure as Code (Terraform / OpenTofu)', whyNeeded: 'Provisioning multi-cloud resources declaratively rather than clicking consoles.', priority: 'Critical' },
          { skill: 'Kubernetes Architecture & Helm', whyNeeded: 'Deploying, scaling, and managing containerized applications with ingress and network policies.', priority: 'Critical' },
          { skill: 'CI/CD Pipelines (GitHub Actions / GitLab CI)', whyNeeded: 'Automating build, test, and container packaging pipelines.', priority: 'Critical' },
          { skill: 'GitOps (ArgoCD)', whyNeeded: 'Continuous delivery based on Git state declarations.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Cloud Foundations & Terraform IaC',
            topics: ['AWS Solutions Architect Core (VPC, EC2, S3, IAM, Route53)', 'Modular Terraform: state management, remote backends, and loops', 'GitHub Actions workflow automation for terraform plan/apply'],
            deliverable: 'Write reusable Terraform modules that provision a secure AWS multi-AZ VPC with public/private subnets and NAT gateways.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–10',
            focus: 'Containers & Kubernetes Deep Dive (CKA Focus)',
            topics: ['Docker container optimization & multi-stage builds', 'Kubernetes core: Pods, Deployments, Services, Ingress, ConfigMaps, Secrets', 'Persistent Volumes and CSI drivers (storage)', 'Helm package management'],
            deliverable: 'Deploy a multi-node Kubernetes cluster (EKS or Kind) running an automated ingress controller with Let’s Encrypt SSL.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 11–16',
            focus: 'GitOps, Observability & Platform Self-Service',
            topics: ['ArgoCD GitOps deployment pipelines', 'Prometheus, Grafana, and Loki log aggregation setup', 'FinOps cloud cost monitoring and rightsizing'],
            deliverable: 'Implement a zero-touch GitOps pipeline where pushing to main deploys an app to staging and production automatically.'
          }
        ],
        capstoneProject: {
          title: 'Production-Ready AWS EKS Kubernetes Platform with GitOps (ArgoCD & Terraform)',
          description: 'A complete end-to-end cloud platform provisioned via Terraform containing an Amazon EKS cluster, cert-manager, external-dns, Prometheus monitoring, and automated ArgoCD GitOps synchronizations.',
          techStack: ['AWS', 'Terraform', 'Kubernetes (EKS)', 'ArgoCD', 'Helm', 'Prometheus / Grafana'],
          measurableImpact: 'Eliminated manual server provisioning time from 4 days to an automated 12-minute Terraform run with 100% audit logging.'
        },
        learningResources: [
          { title: 'Learn Terraform by HashiCorp', url: 'https://developer.hashicorp.com/terraform/tutorials', type: 'Interactive Course', free: true },
          { title: 'Kubernetes The Hard Way by Kelsey Hightower', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way', type: 'Open Source Repo', free: true },
          { title: 'Mumshad Mannambeth CKA Course (KodeKloud)', url: 'https://kodekloud.com', type: 'Interactive Course', free: false }
        ],
        recognizedCertifications: ['AWS Certified Solutions Architect – Associate', 'Certified Kubernetes Administrator (CKA)']
      }
    ]
  },
  {
    id: 'legacy-php-cms',
    legacyTitle: 'Traditional PHP / WordPress / Drupal / Joomla Developer',
    primaryTechStack: ['PHP 5/7', 'WordPress (Custom themes/plugins)', 'Drupal / Joomla', 'cPanel / Shared Apache Hosting', 'MySQL (phpMyAdmin)', 'jQuery'],
    historicalEra: '2008 – 2019 Web Era',
    currentMarketStatus: {
      hiringTrajectory: 'Cooling Fast',
      postingsDeclineYoY: -26,
      marketRiskLevel: 'High',
      stagnationWarning: 'Low-end WordPress and CMS work is being devoured by modern no-code builders (Webflow, Framer, Shopify) and overseas agency commoditization. To sustain healthy engineering rates, developers must pivot to modern Full-Stack Laravel or Next.js Headless architectures.',
      timeWindowToTransition: '6 – 12 Months',
      salaryCapInsight: 'WordPress developer median US Base $68k-$82k. Modern Full-Stack Laravel/Next.js engineers earn $135k-$165k+.',
    },
    reasonsForShift: [
      'Visual web builders and headless CMS platforms (Sanity, Contentful, Strapi) replaced traditional theme hacking.',
      'Modern web applications require reactive, real-time client experiences that PHP server-rendered HTML cannot easily deliver alone.',
      'Laravel 11, Inertia.js, and Livewire modernized the PHP ecosystem into a high-octane SaaS framework.',
      'Serverless and edge computing architectures replaced traditional cPanel/Apache shared hosting.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Continuing to build monolithic WordPress themes leaves you competing against $15/hr global freelance rates and drag-and-drop website builders.',
      switchReward: 'Stepping up to Modern Laravel 11 SaaS or Next.js Headless architectures puts you directly in line for enterprise product engineering roles.',
      bottomLine: 'You understand web fundamentals (HTTP, headers, SQL, client-server lifecycle). Upgrade your tooling to build real applications instead of static sites.'
    },
    progressivePaths: [
      {
        id: 'php-to-laravel-saas',
        targetRole: 'Modern Full-Stack Laravel 11 & Vue/Inertia SaaS Engineer',
        category: 'Modern Evolution',
        tagline: 'Modernize within PHP: master Laravel 11, Inertia.js, Vue 3 / React, and build high-margin SaaS applications.',
        transitionDifficulty: 'Low-Medium',
        estimatedTimelineMonths: 3,
        matchScorePct: 85,
        openJobPostingsShare: 21.4,
        postingsGrowthYoY: 18,
        avgSalaryUSD: 140000,
        salaryIncreasePct: 38,
        demandVerdict: 'High',
        marketContextWhySuccess: 'Laravel is the undisputed king of rapid SaaS development and enterprise PHP. Startups and bootstrapped software companies love Laravel for its speed to market.',
        trendLongevityYears: '6–8 Years (SaaS Standard)',
        transferableStrengths: [
          { skill: 'PHP Language Proficiency', howItHelps: 'PHP 8.2+ with typed properties, enums, and match expressions will feel clean and familiar.' },
          { skill: 'Relational Database / MySQL', howItHelps: 'Eloquent ORM will feel like an absolute superpower compared to raw wpdb queries.' }
        ],
        criticalSkillGaps: [
          { skill: 'Laravel 11 Architecture & Ecosystem', whyNeeded: 'Service containers, queues (Redis), event listeners, and Eloquent relationships.', priority: 'Critical' },
          { skill: 'Inertia.js & Vue 3 / React SPA Integration', whyNeeded: 'Building modern reactive frontends without abandoning server-side routing.', priority: 'Critical' },
          { skill: 'Automated Testing (Pest PHP)', whyNeeded: 'Writing reliable unit and feature tests instead of manual browser clicking.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Modern PHP 8.3 & Laravel 11 Core',
            topics: ['PHP 8 features: Enums, attributes, constructor promotion', 'Laravel 11 simplified skeleton, routing, and controllers', 'Eloquent ORM: relationships, scopes, and migrations', 'Pest PHP for automated unit and feature testing'],
            deliverable: 'Build a feature-tested REST API with authentication and automated Pest tests.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–8',
            focus: 'Inertia.js, Vue/React & Tailwind CSS',
            topics: ['Inertia.js protocol: connecting Laravel backends with modern reactive Vue/React frontends', 'Tailwind CSS utility styling', 'Form handling, validation errors, and optimistic updates'],
            deliverable: 'Build a full-stack SaaS product catalog with instant search, filtering, and pagination powered by Inertia.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 9–12',
            focus: 'Queues, Payments & Cloud Deployment',
            topics: ['Redis queues, background jobs, and scheduled tasks', 'Stripe billing integration with Laravel Cashier', 'Deploying on Laravel Forge or AWS Fly.io'],
            deliverable: 'Deploy a multi-tenant subscription SaaS app with Stripe checkout and automated background email jobs.'
          }
        ],
        capstoneProject: {
          title: 'Full-Stack Multi-Tenant SaaS Billing Platform (Laravel 11 + Inertia + Vue 3)',
          description: 'A multi-tenant subscription platform with team management, Stripe billing portal, asynchronous export queues, and automated Pest test coverage.',
          techStack: ['PHP 8.3', 'Laravel 11', 'Inertia.js', 'Vue 3', 'Tailwind CSS', 'Pest PHP', 'Redis'],
          measurableImpact: 'Built in 3 weeks what would take 3 months in older frameworks; achieved 96% automated test coverage.'
        },
        learningResources: [
          { title: 'Laracasts: The Best Web Development Screencasts', url: 'https://laracasts.com', type: 'Interactive Course', free: false },
          { title: 'Laravel Official Documentation', url: 'https://laravel.com/docs', type: 'Official Documentation', free: true },
          { title: 'Pest PHP Official Testing Framework Docs', url: 'https://pestphp.com', type: 'Official Documentation', free: true }
        ]
      }
    ]
  },
  {
    id: 'legacy-relational-dba',
    legacyTitle: 'Relational Database Administrator (Oracle / MS SQL Server / MySQL DBA)',
    primaryTechStack: ['Oracle 11g/12c / SQL Server / MySQL', 'Physical SAN storage tuning', 'Manual Backup & Restore (RMAN)', 'PL/SQL / T-SQL Stored Procedures', 'Index tuning & execution plans'],
    historicalEra: '2000 – 2019 On-Premises DBA Era',
    currentMarketStatus: {
      hiringTrajectory: 'Severe Compression',
      postingsDeclineYoY: -25,
      marketRiskLevel: 'High',
      stagnationWarning: 'Cloud managed database services (AWS RDS/Aurora, GCP Cloud SQL, Azure SQL) handle routine patching, backups, and failovers automatically with zero human DBA intervention. Specialized Cloud Data Lakehouse and Vector DB architects are where budgets moved.',
      timeWindowToTransition: '6 – 12 Months',
      salaryCapInsight: 'Traditional DBA median $105k-$120k. Cloud Data Architects & Lakehouse Engineers command $175k-$220k+.',
    },
    reasonsForShift: [
      'Hyperscaler automated failover, auto-scaling storage, and automated patching reduced the need for physical DBAs by 70%.',
      'The rise of Analytical Lakehouses (Snowflake, Databricks, BigQuery) separated compute from storage for massive parallel analytics.',
      'Vector databases (pgvector, Qdrant, Pinecone) became mandatory infrastructure for enterprise AI retrieval.',
      'Database Reliability Engineering (DBRE) replaced manual DBA checklists with Infrastructure as Code and automated GitOps migrations.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Remaining a traditional on-prem DBA leaves you fighting a losing battle against cloud-managed database services.',
      switchReward: 'Your deep intuition for query execution plans, indexing strategies, locks, and schema design makes you an extraordinary Cloud Data Architect or Lakehouse Specialist.',
      bottomLine: 'Take your database mastery into the cloud era: Snowflake/Databricks for analytics, or pgvector/distributed databases for AI.'
    },
    progressivePaths: [
      {
        id: 'dba-to-data-lakehouse',
        targetRole: 'Cloud Data Architect & Lakehouse Specialist (Snowflake / Databricks / dbt)',
        category: 'High-Growth Pivot',
        tagline: 'Leverage SQL and schema optimization into modern cloud analytics lakehouses commanding elite compensation.',
        transitionDifficulty: 'Medium',
        estimatedTimelineMonths: 4,
        matchScorePct: 82,
        openJobPostingsShare: 31.8,
        postingsGrowthYoY: 36,
        avgSalaryUSD: 182000,
        salaryIncreasePct: 46,
        demandVerdict: 'Explosive',
        marketContextWhySuccess: 'Every enterprise is centralizing data into Snowflake or Databricks to feed BI dashboards and train proprietary AI models. Skilled architects who know how to optimize queries and avoid runaway cloud bills are in extreme demand.',
        trendLongevityYears: '8–10+ Years (Data Infrastructure Core)',
        transferableStrengths: [
          { skill: 'Advanced SQL & Query Optimization', howItHelps: 'Writing complex window functions, CTEs, and tuning join algorithms transfers directly.' },
          { skill: 'Data Modeling (Star Schema / 3NF)', howItHelps: 'Dimensional modeling for data marts and data warehouses is fundamental to dbt and Snowflake.' },
          { skill: 'Data Governance & RBAC Security', howItHelps: 'Row-level security, masking policies, and audit logging are key enterprise requirements.' }
        ],
        criticalSkillGaps: [
          { skill: 'Modern Data Stack Tooling (dbt - data build tool)', whyNeeded: 'Version-controlling SQL transformations in Git with automated testing and documentation.', priority: 'Critical' },
          { skill: 'Cloud Analytical Architectures (Snowflake / BigQuery / Databricks)', whyNeeded: 'Separation of compute and storage, clustering keys, and virtual warehouse sizing.', priority: 'Critical' },
          { skill: 'Data Orchestration (Airflow / Dagster)', whyNeeded: 'Managing directed acyclic graphs (DAGs) of data pipelines programmatically.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Snowflake & Modern Analytical Architecture',
            topics: ['Snowflake architecture: storage, virtual warehouses, caching layers', 'Micro-partitions, clustering, and Zero-Copy Cloning', 'Data loading with Snowpipe and external stages (S3)'],
            deliverable: 'Configure an automated data ingestion pipeline in Snowflake with cost-governed virtual warehouse auto-suspend.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–10',
            focus: 'dbt (Data Build Tool) & Version-Controlled Analytics',
            topics: ['dbt project structure, models, sources, and staging layers', 'Testing data freshness, uniqueness, and referential integrity in dbt', 'Semantic layers and automated data lineage documentation generation'],
            deliverable: 'Build a production dbt project modeling marketing and revenue data with automated CI tests on pull requests.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 11–16',
            focus: 'Data Orchestration & Cloud Lakehouses',
            topics: ['Orchestrating pipelines with Dagster / Apache Airflow', 'Databricks Delta Lake fundamentals (time travel, ACID on Parquet)', 'FinOps: analyzing query cost per department and eliminating runaway queries'],
            deliverable: 'Deploy an automated end-to-end data pipeline from S3 to Snowflake using dbt and Dagster with Slack alerts.'
          }
        ],
        capstoneProject: {
          title: 'Enterprise Analytics Lakehouse with dbt, Snowflake, and Automated Cost Governance',
          description: 'An enterprise data platform modeling millions of customer transactions, generating automated data lineage diagrams, and enforcing strict FinOps credit spend controls.',
          techStack: ['Snowflake', 'dbt Core', 'Dagster', 'SQL', 'AWS S3', 'GitHub Actions'],
          measurableImpact: 'Reduced quarterly analytical cloud spend by 41% through warehouse auto-suspend tuning and clustering optimization.'
        },
        learningResources: [
          { title: 'dbt Learn Official Free Courses', url: 'https://learn.getdbt.com', type: 'Interactive Course', free: true },
          { title: 'Snowflake University / Hands-on Labs', url: 'https://quickstarts.snowflake.com', type: 'Official Documentation', free: true }
        ],
        recognizedCertifications: ['SnowPro Core Certification', 'dbt Certified Developer']
      }
    ]
  },
  {
    id: 'legacy-etl-developer',
    legacyTitle: 'Traditional ETL Developer (Informatica / SSIS / DataStage)',
    primaryTechStack: ['Informatica PowerCenter / SSIS / DataStage', 'Oracle / Teradata / DB2', 'Batch processing scripts', 'Control-M scheduler', 'Stored procedures'],
    historicalEra: '2005 – 2018 Legacy Data Warehouse',
    currentMarketStatus: {
      hiringTrajectory: 'Cooling Fast',
      postingsDeclineYoY: -27,
      marketRiskLevel: 'High',
      stagnationWarning: 'Proprietary GUI drag-and-drop ETL tools carry exorbitant licensing fees and don’t integrate with Git or modern CI/CD. The industry has standardized on code-first pipelines (Python, PySpark, dbt, SQL) running in the cloud.',
      timeWindowToTransition: '6 – 12 Months',
      salaryCapInsight: 'Informatica/SSIS developer base $95k-$110k. Modern Data Engineers with PySpark/Kafka earn $155k-$190k.',
    },
    reasonsForShift: [
      'High software licensing costs led Fortune 500s to migrate off Informatica to open-source or cloud-native tooling.',
      'Shift from batch overnight ETL (Extract-Transform-Load) to ELT (Extract-Load-Transform inside cloud warehouses).',
      'Real-time streaming demand (Kafka, Flink) surpassed slow 24-hour batch processing.',
      'Software engineering best practices (unit testing, Git version control, CI/CD) became mandatory for data.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Remaining dependent on proprietary GUI ETL tools restricts your career options to legacy enterprise maintenance contracts.',
      switchReward: 'Transitioning to PySpark or the modern dbt/Snowflake ecosystem positions you directly at the center of the AI data engineering revolution.',
      bottomLine: 'You already understand data mapping, joins, aggregations, and pipeline scheduling. Simply replace GUI drag-and-drop with Python and SQL code.'
    },
    progressivePaths: [
      {
        id: 'etl-to-pyspark-data-engineer',
        targetRole: 'Big Data & Cloud Data Platform Engineer (PySpark / Databricks / Kafka)',
        category: 'High-Growth Pivot',
        tagline: 'Replace proprietary GUI tools with Python, Apache Spark, and real-time streaming to process terabytes of data.',
        transitionDifficulty: 'Medium',
        estimatedTimelineMonths: 4,
        matchScorePct: 76,
        openJobPostingsShare: 34.2,
        postingsGrowthYoY: 32,
        avgSalaryUSD: 172000,
        salaryIncreasePct: 48,
        demandVerdict: 'Explosive',
        marketContextWhySuccess: 'Apache Spark / Databricks is the workhorse of enterprise big data and AI dataset preparation. Teams need engineers who can write performant distributed code rather than click boxes.',
        trendLongevityYears: '8–10+ Years (Data Platform Standard)',
        transferableStrengths: [
          { skill: 'Data Transformation Logic', howItHelps: 'Lookups, aggregations, deduplication, and slowly changing dimensions (SCD Type 2) transfer directly.' },
          { skill: 'Pipeline Scheduling & Dependencies', howItHelps: 'Understanding job execution order, retries, and data lineage.' }
        ],
        criticalSkillGaps: [
          { skill: 'Python for Data Engineering', whyNeeded: 'Writing clean, modular Python functions, tests, and object-oriented pipeline code.', priority: 'Critical' },
          { skill: 'Apache Spark / PySpark Architecture', whyNeeded: 'Resilient Distributed Datasets (RDDs), DataFrames, partitioning, and avoiding data skew.', priority: 'Critical' },
          { skill: 'Delta Lake & Lakehouse Formats', whyNeeded: 'ACID transactions, time travel, and schema enforcement on object storage (S3/ADLS).', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Python & Data Structures Foundations',
            topics: ['Python data structures, decorators, and OOP', 'pandas vs SQL mental models', 'Packaging code with Poetry and unit testing with pytest'],
            deliverable: 'Write a modular Python package that ingests CSV/JSON, validates records, and outputs clean Parquet files.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–10',
            focus: 'PySpark & Distributed Compute (Databricks)',
            topics: ['Spark architecture: Driver, Executors, Tasks, and Stages', 'PySpark DataFrame transformations, windowing, and UDFs', 'Optimizing Spark: repartitioning, broadcast joins, and resolving data skew', 'Delta Lake features: MERGE operations and time-travel querying'],
            deliverable: 'Build a distributed PySpark pipeline on Databricks processing 100 million records with optimized broadcast joins.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 11–16',
            focus: 'Real-Time Streaming & Cloud Deployment',
            topics: ['Structured Streaming with Apache Kafka', 'Automated data orchestration with Apache Airflow', 'Deploying pipelines to AWS EMR / Databricks with Terraform'],
            deliverable: 'Create a live streaming pipeline that reads IoT sensor events from Kafka and writes to a Delta Lake table in real time.'
          }
        ],
        capstoneProject: {
          title: 'High-Volume Streaming Lakehouse Pipeline with PySpark, Kafka & Delta Lake',
          description: 'An enterprise data pipeline that streams 50,000 events/second from Apache Kafka into Databricks Delta Lake, applying deduplication and automated schema evolution.',
          techStack: ['Python', 'PySpark', 'Databricks', 'Apache Kafka', 'Delta Lake', 'Docker'],
          measurableImpact: 'Cut overnight batch processing window from 6 hours to 4 minutes of real-time streaming with zero data loss.'
        },
        learningResources: [
          { title: 'Databricks Academy Free Training', url: 'https://academy.databricks.com', type: 'Interactive Course', free: true },
          { title: 'Spark: The Definitive Guide (O’Reilly)', url: 'https://spark.apache.org/docs/latest/', type: 'Official Documentation', free: true }
        ],
        recognizedCertifications: ['Databricks Certified Data Engineer Associate', 'AWS Certified Data Engineer']
      }
    ]
  },
  {
    id: 'legacy-data-analyst',
    legacyTitle: 'Traditional Data Analyst / Static BI Specialist (Excel / Pure Tableau / Power BI)',
    primaryTechStack: ['Excel (VLOOKUP, Pivot Tables)', 'Tableau / Power BI (Static reports)', 'Basic SQL (SELECT / JOIN queries)', 'PowerPoint decks'],
    historicalEra: '2010 – 2022 Business Intelligence Era',
    currentMarketStatus: {
      hiringTrajectory: 'Cooling Fast',
      postingsDeclineYoY: -21,
      marketRiskLevel: 'Moderate',
      stagnationWarning: 'Generative AI tools (Claude, ChatGPT Code Interpreter, Copilot for Power BI) can now instantly write SQL queries, create visualizations, and summarize business trends from raw CSVs. Analysts who only produce static charts are facing severe salary compression.',
      timeWindowToTransition: '6 – 12 Months',
      salaryCapInsight: 'Traditional BI Analyst base $75k-$92k. Analytics Engineers and Product Data Scientists command $140k-$175k+.',
    },
    reasonsForShift: [
      'LLMs automate routine descriptive analytics: asking "show me revenue by region last month" no longer requires a human ticket.',
      'The modern data stack requires code-driven metrics layers (Cube, dbt Semantic Layer) instead of disconnected dashboard calculations.',
      'Companies demand predictive and causal insights (A/B testing, incrementality) rather than rear-view mirror reporting.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Focusing solely on building static drag-and-drop dashboards leaves you easily replaceable by automated self-serve AI analytics.',
      switchReward: 'Stepping up to Analytics Engineering (dbt + SQL modeling) or Product Data Science provides strong job security and high strategic influence.',
      bottomLine: 'You understand executive communication, stakeholder priorities, and business metrics. Anchor those strengths in Git, dbt, and rigorous statistical testing.'
    },
    progressivePaths: [
      {
        id: 'analyst-to-analytics-engineer',
        targetRole: 'Analytics Engineer (dbt, SQL Data Modeling & Semantic Layers)',
        category: 'Modern Evolution',
        tagline: 'Bridge the gap between data engineering and business analysis by creating reliable, version-controlled data models with dbt.',
        transitionDifficulty: 'Low-Medium',
        estimatedTimelineMonths: 3,
        matchScorePct: 84,
        openJobPostingsShare: 27.5,
        postingsGrowthYoY: 30,
        avgSalaryUSD: 148000,
        salaryIncreasePct: 42,
        demandVerdict: 'Very High',
        marketContextWhySuccess: 'Analytics Engineers are the rockstars who make company data trustworthy. Instead of 10 analysts writing 10 different SQL definitions for "Active User", the Analytics Engineer establishes one version-controlled truth in dbt.',
        trendLongevityYears: '7–9 Years (Analytics Standard)',
        transferableStrengths: [
          { skill: 'Business Domain Intuition', howItHelps: 'You know what metrics matter to leadership and how customer churn or ARR is calculated.' },
          { skill: 'SQL Competency', howItHelps: 'You already write SELECT queries; dbt simply teaches you to organize, test, and document them like a software engineer.' }
        ],
        criticalSkillGaps: [
          { skill: 'dbt Core & Modeling Patterns', whyNeeded: 'Staging, intermediate, and marts layers; creating reusable Jinja macros.', priority: 'Critical' },
          { skill: 'Git & Version Control Workflows', whyNeeded: 'Collaborating on code with pull requests, code reviews, and automated CI tests.', priority: 'Critical' },
          { skill: 'Automated Data Quality Testing', whyNeeded: 'Asserting primary keys, foreign key relationships, and valid value sets.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Advanced SQL & Git Fundamentals',
            topics: ['Window functions, CTEs, and query execution plans', 'Git fundamentals: branches, pull requests, resolving merge conflicts', 'Dimensional modeling principles (Kimball methodology)'],
            deliverable: 'Complete a complex multi-table SQL modeling project with modular CTEs on GitHub.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–8',
            focus: 'dbt (Data Build Tool) Mastery',
            topics: ['dbt project architecture, staging vs core marts', 'Jinja templating and writing reusable dbt macros', 'Automated testing with dbt-expectations', 'Generating interactive documentation and lineage graphs'],
            deliverable: 'Build a production dbt repo for an e-commerce platform with automated pull-request tests.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 9–12',
            focus: 'Semantic Layers & Modern BI Integration',
            topics: ['dbt Semantic Layer / Cube metrics configuration', 'Connecting clean marts to self-serve BI tools (Lightdash, Evidence.dev, Metabase)', 'CI/CD with GitHub Actions for data transformations'],
            deliverable: 'Deploy a code-governed metrics layer that feeds interactive executive dashboards with 100% verified numbers.'
          }
        ],
        capstoneProject: {
          title: 'Version-Controlled Analytics Foundation with dbt, Snowflake & GitHub Actions',
          description: 'A complete analytics engineering pipeline transforming raw SaaS event streams into clean, tested executive marts with automated schema tests on every Git pull request.',
          techStack: ['dbt Core', 'Snowflake', 'SQL', 'GitHub Actions', 'Evidence.dev / Lightdash'],
          measurableImpact: 'Eliminated dashboard discrepancy tickets by 85% and established a unified company-wide Single Source of Truth.'
        },
        learningResources: [
          { title: 'dbt Fundamentals Official Course', url: 'https://learn.getdbt.com/courses/dbt-fundamentals', type: 'Interactive Course', free: true },
          { title: 'Locally Optimistic: Analytics Engineering Community', url: 'https://locallyoptimistic.com', type: 'Architecture Whitepaper', free: true }
        ],
        recognizedCertifications: ['dbt Certified Developer', 'Snowflake SnowPro Core']
      }
    ]
  },
  {
    id: 'legacy-network-engineer',
    legacyTitle: 'Traditional Network Engineer (Cisco CLI / Hardware Switches & Routers)',
    primaryTechStack: ['Cisco IOS / Junos CLI', 'VLANs, Trunks, Spanning Tree', 'BGP / OSPF routing protocols', 'Hardware firewalls (ASA / Palo Alto physical appliances)', 'Manual console cable racking'],
    historicalEra: '2000 – 2018 Hardware Networking',
    currentMarketStatus: {
      hiringTrajectory: 'Cooling Fast',
      postingsDeclineYoY: -22,
      marketRiskLevel: 'Moderate',
      stagnationWarning: 'Hardware-only network engineers who configure switches one box at a time via SSH are seeing budgets dry up. Modern enterprise networks are software-defined (SD-WAN), cloud-native (AWS Transit Gateway), and automated via Python/Ansible.',
      timeWindowToTransition: '6 – 12 Months',
      salaryCapInsight: 'Traditional CCNA base $78k-$95k. NetDevOps and Cloud Network Architects earn $155k-$195k+.',
    },
    reasonsForShift: [
      'Cloud transitions shifted network perimeter defense from physical hardware to cloud security groups and Virtual Private Clouds (VPCs).',
      'Network Automation (NetDevOps via Python and Ansible) made manual CLI configuration too slow and error-prone.',
      'Zero Trust Network Access (ZTNA / SASE) replaced traditional site-to-site VPN concentrators.'
    ],
    stayOrSwitchVerdict: {
      stayRisk: 'Manual box-by-box CLI configuration is rapidly becoming an obsolete skill set as networks become code-defined.',
      switchReward: 'Network engineers who learn Python and cloud networking become indispensable because cloud developers notoriously misunderstand networking fundamentals.',
      bottomLine: 'Take your deep understanding of packets, routing, TCP handshakes, and MTUs and automate them with Python and Cloud IaC.'
    },
    progressivePaths: [
      {
        id: 'network-to-netdevops',
        targetRole: 'NetDevOps & Network Automation Engineer (Python, Ansible & Cloud Transit)',
        category: 'Modern Evolution',
        tagline: 'Automate network configuration across hybrid clouds with Python, Ansible, and Terraform.',
        transitionDifficulty: 'Medium',
        estimatedTimelineMonths: 4,
        matchScorePct: 82,
        openJobPostingsShare: 22.8,
        postingsGrowthYoY: 28,
        avgSalaryUSD: 160000,
        salaryIncreasePct: 40,
        demandVerdict: 'Very High',
        marketContextWhySuccess: 'Enterprises need to connect thousands of on-premises branches securely to AWS and Azure. Doing this manually is impossible; companies hire NetDevOps specialists to automate routing policies.',
        trendLongevityYears: '7–10 Years (Infrastructure Core)',
        transferableStrengths: [
          { skill: 'Deep Routing & Switching Mastery', howItHelps: 'BGP peering, OSPF, and subnetting remain identical whether configured on hardware or AWS Direct Connect.' },
          { skill: 'Packet-Level Troubleshooting', howItHelps: 'Wireshark analysis and debugging asymmetric routing are skills software developers rarely possess.' }
        ],
        criticalSkillGaps: [
          { skill: 'Python for Network Automation (Netmiko, Scrapli, Nornir)', whyNeeded: 'Automating device discovery, configuration pushes, and state verification.', priority: 'Critical' },
          { skill: 'Ansible for Network Infrastructure', whyNeeded: 'Declarative configuration management across multi-vendor networks.', priority: 'Critical' },
          { skill: 'Cloud Networking (AWS VPC, Transit Gateway, Direct Connect)', whyNeeded: 'Extending enterprise networks seamlessly into public cloud providers.', priority: 'High' }
        ],
        actionPhases: [
          {
            phase: 'Phase 1',
            weeks: 'Weeks 1–4',
            focus: 'Python for Network Engineers',
            topics: ['Python fundamentals, data structures, and regex for parsing CLI output', 'Netmiko and Scrapli for automated multi-device SSH sessions', 'Structured data formats: JSON, YAML, and Jinja2 templating'],
            deliverable: 'Write a Python automation tool that audits ACL configurations across 50 simulated network devices and flags non-compliant rules.'
          },
          {
            phase: 'Phase 2',
            weeks: 'Weeks 5–10',
            focus: 'Ansible & Infrastructure as Code for Networks',
            topics: ['Ansible playbooks for Cisco/Juniper/Arista configuration', 'Git-controlled network state and CI/CD validation pipelines', 'pyATS for automated pre- and post-change network state verification'],
            deliverable: 'Create an Ansible playbook that deploys standard VLAN and interface configurations with automated rollback on failure.'
          },
          {
            phase: 'Phase 3',
            weeks: 'Weeks 11–16',
            focus: 'Cloud Hybrid Networking & Zero Trust',
            topics: ['AWS Transit Gateway, Direct Connect, and VPC Peering', 'Terraform for provisioning cloud network resources', 'Zero Trust Architecture (ZTNA) and Tailscale/Cloudflare Access'],
            deliverable: 'Deploy a hybrid cloud network connecting an on-prem lab to AWS using Terraform and automated BGP peering.'
          }
        ],
        capstoneProject: {
          title: 'GitOps-Driven Multi-Cloud Network Automation Engine (Python + Ansible + Terraform)',
          description: 'An automated network pipeline that tests and deploys routing updates and firewall rules across hybrid Cisco on-prem and AWS Transit Gateway environments with zero downtime.',
          techStack: ['Python', 'Ansible', 'Terraform', 'AWS Transit Gateway', 'pyATS', 'Git'],
          measurableImpact: 'Reduced network maintenance change window from 5 hours to a verified 3-minute automated deployment with 100% compliance audit trail.'
        },
        learningResources: [
          { title: 'Cisco DevNet Official Free Learning Tracks', url: 'https://developer.cisco.com/start-now/', type: 'Interactive Course', free: true },
          { title: 'Kirk Byers Python for Network Engineers Free Email Course', url: 'https://pynet.twb-tech.com/email-signup.html', type: 'Interactive Course', free: true }
        ],
        recognizedCertifications: ['Cisco Certified DevNet Associate / Professional', 'AWS Certified Advanced Networking – Specialty']
      }
    ]
  }
];
