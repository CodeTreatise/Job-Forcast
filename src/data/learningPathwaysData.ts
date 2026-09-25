export interface LearningResource {
  title: string;
  type: 'Official Documentation' | 'Seminal Paper' | 'Interactive Lab / Course' | 'GitHub Repository' | 'RFC Specification';
  url: string;
  isFree: boolean;
  annotation: string;
}

export interface LearningSubTopic {
  id: string;
  name: string;
  description: string;
  keyConcepts: string[];
  referenceResources: LearningResource[];
}

export interface LearningTopic {
  id: string;
  title: string;
  estimatedHours: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
  summary: string;
  subTopics: LearningSubTopic[];
}

export interface DomainLearningPathway {
  id: string;
  title: string;
  discipline: string;
  tagline: string;
  whyUnique: string; // Explains the specific domain nuance (e.g. why Python for AI Research differs from Python for LLMOps)
  targetRoles: string[];
  prerequisites: string[];
  estimatedTotalWeeks: number;
  standoutCapstoneProject: {
    title: string;
    description: string;
    architectureBlueprint: string;
    evaluationCriteria: string[];
  };
  topics: LearningTopic[];
}

export const LEARNING_PATHWAYS_DATA: DomainLearningPathway[] = [
  {
    id: 'python-ai-research-deep-learning',
    title: 'Python for AI/ML Research & Deep Learning Systems',
    discipline: 'AI Research & Model Architecture',
    tagline: 'Vector math, autograd internals, custom PyTorch layers, and training loss optimization',
    whyUnique: 'Unlike web or scripting Python, AI Research Python focuses heavily on computational graph mechanics, tensor memory layout (strides, contiguous memory), autograd backwards hooks, CUDA stream synchronization, and mathematical loss formulations.',
    targetRoles: ['AI Research Scientist', 'Deep Learning Engineer', 'Foundation Model Pre-training Engineer'],
    prerequisites: ['Linear algebra (matrix decomposition, eigenvalues)', 'Calculus (multivariate partial derivatives)', 'Basic Python syntax'],
    estimatedTotalWeeks: 12,
    standoutCapstoneProject: {
      title: 'Build a Mini-Transformer from Scratch with Custom CUDA/Triton Attention',
      description: 'Implement a complete generative decoder transformer from first principles in pure PyTorch, with Multi-Head Latent Attention (MLA), RoPE positional embeddings, and a custom Triton flash-attention kernel.',
      architectureBlueprint: 'Tokenizer -> Embedding + RoPE -> Transformer Blocks (MLA + SwiGLU MLP with RMSNorm) -> LM Head -> KV Caching Layer.',
      evaluationCriteria: [
        'Perplexity benchmarking on Wikitext-103 dataset',
        'Memory profiling showing O(N) attention footprint via tiling',
        'Verification of gradient flow without vanishing or exploding norms'
      ]
    },
    topics: [
      {
        id: 't-dl-1',
        title: 'Tensors, Memory Layouts & The Autograd Computational Graph',
        estimatedHours: 24,
        difficulty: 'Intermediate',
        summary: 'Mastering tensor storage under the hood: storage buffers, strides, views vs copies, and how PyTorch builds reverse-mode automatic differentiation DAGs.',
        subTopics: [
          {
            id: 'st-dl-1-1',
            name: 'Tensor Stride & Memory Alignment Mechanics',
            description: 'Understanding how PyTorch maps multi-dimensional tensors to linear physical memory buffers without copying data.',
            keyConcepts: ['strides() and storage_offset()', 'contiguous() and memory fragmentation', 'Broadcasting rules and zero-stride expansions'],
            referenceResources: [
              {
                title: 'PyTorch Internals by Edward Z. Yang',
                type: 'Official Documentation',
                url: 'http://blog.ezyang.com/2019/05/pytorch-internals/',
                isFree: true,
                annotation: 'The foundational architectural writeup of how PyTorch C++ core manages TensorImpl and storage buffers.'
              },
              {
                title: 'PyTorch Official Tensor Documentation',
                type: 'Official Documentation',
                url: 'https://pytorch.org/docs/stable/tensors.html',
                isFree: true,
                annotation: 'Complete official reference for stride, memory format, and in-place tensor mutations.'
              }
            ]
          },
          {
            id: 'st-dl-1-2',
            name: 'Autograd Engine & Custom Function Backward Passes',
            description: 'How nodes in the computational graph execute topological sorts and propagate vector-Jacobian products (VJPs).',
            keyConcepts: ['torch.autograd.Function implementation', 'save_for_backward memory management', 'register_hook for gradient inspection'],
            referenceResources: [
              {
                title: 'Autograd Mechanics Deep Dive',
                type: 'Official Documentation',
                url: 'https://pytorch.org/docs/stable/notes/autograd.html',
                isFree: true,
                annotation: 'Detailed walkthrough of the forward and backward graph execution lifecycle.'
              },
              {
                title: 'Micrograd by Andrej Karpathy',
                type: 'GitHub Repository',
                url: 'https://github.com/karpathy/micrograd',
                isFree: true,
                annotation: 'A tiny 100-line scalar autograd engine that makes backpropagation completely crystal clear.'
              }
            ]
          }
        ]
      },
      {
        id: 't-dl-2',
        title: 'Modern Attention Architectures & Positional Encodings',
        estimatedHours: 32,
        difficulty: 'Advanced',
        summary: 'Deconstructing Multi-Query Attention (MQA), Grouped-Query Attention (GQA), Multi-Head Latent Attention (MLA), and Rotary Position Embeddings (RoPE).',
        subTopics: [
          {
            id: 'st-dl-2-1',
            name: 'KV Cache Memory Reduction: MHA vs GQA vs MLA',
            description: 'Why standard Multi-Head Attention exhausts GPU memory during long-context generation and how modern architectures compress key-value states.',
            keyConcepts: ['Memory footprint formula: 2 * b * s * l * d_model', 'DeepSeek Multi-Head Latent Attention low-rank compression', 'GQA group sharing'],
            referenceResources: [
              {
                title: 'DeepSeek-V3 Technical Report (MLA & MoE Architecture)',
                type: 'Seminal Paper',
                url: 'https://arxiv.org/abs/2412.19437',
                isFree: true,
                annotation: 'The breakthrough paper detailing Multi-Head Latent Attention and FP8 mixed precision training.'
              },
              {
                title: 'LLaMA: Open and Efficient Foundation Language Models',
                type: 'Seminal Paper',
                url: 'https://arxiv.org/abs/2302.13971',
                isFree: true,
                annotation: 'Standard architecture reference for RoPE, RMSNorm, and SwiGLU activation.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'python-llmops-inference-systems',
    title: 'Python for LLMOps, Inference Acceleration & Production Systems',
    discipline: 'AI Infrastructure & LLMOps',
    tagline: 'Asyncio event loops, vLLM engine, PagedAttention, streaming backpressure, and evaluation harnesses',
    whyUnique: 'AI Ops / LLMOps Python is fundamentally distributed systems and networking engineering. It does not train models from scratch; instead, it optimizes inference latency, handles asynchronous streaming token yields, mitigates non-deterministic model failures, manages vector databases, and deploys evaluation guardrails.',
    targetRoles: ['LLMOps Engineer', 'AI Infrastructure Engineer', 'AI Systems Software Engineer'],
    prerequisites: ['Python asynchronous programming (asyncio, uvloop)', 'REST & WebSocket protocols', 'Docker and Linux fundamentals'],
    estimatedTotalWeeks: 10,
    standoutCapstoneProject: {
      title: 'Enterprise Agentic RAG Platform with vLLM, Semantic Cache & Automated TruLens Evaluation',
      description: 'Architect a production inference gateway using FastAPI + vLLM serving Llama/DeepSeek models, integrated with Redis semantic caching, Qdrant vector retrieval with hybrid re-ranking, and automated real-time hallucination evaluation.',
      architectureBlueprint: 'Client -> Envoy Gateway -> FastAPI Async Router -> Redis Semantic Embedding Cache -> Hybrid Qdrant Vector Retrieval -> vLLM PagedAttention GPU Engine -> SSE Token Streaming -> Background TruLens Guardrail Worker.',
      evaluationCriteria: [
        'Time to First Token (TTFT) < 180ms under 50 concurrent client streams',
        'Cache hit rate > 30% reducing GPU compute cost',
        'Automatic rejection of hallucinations with Ragas context relevance score < 0.85'
      ]
    },
    topics: [
      {
        id: 't-ops-1',
        title: 'Asynchronous Python (asyncio) & Token Streaming Lifecycle',
        estimatedHours: 20,
        difficulty: 'Intermediate',
        summary: 'Writing high-throughput, non-blocking Python services capable of handling thousands of concurrent open Server-Sent Events (SSE) connections without thread starvation.',
        subTopics: [
          {
            id: 'st-ops-1-1',
            name: 'Non-blocking Generators, Async Iterators & Backpressure',
            description: 'How to stream tokens from an inference server to client frontends with proper backpressure handling and cancellation cleanup.',
            keyConcepts: ['async for and AsyncGenerator yield', 'FastAPI StreamingResponse & EventSourceResponse', 'Client disconnection task cancellation (asyncio.CancelledError)'],
            referenceResources: [
              {
                title: 'Official Python Asyncio Documentation',
                type: 'Official Documentation',
                url: 'https://docs.python.org/3/library/asyncio.html',
                isFree: true,
                annotation: 'Complete reference for tasks, event loops, semaphores, and asynchronous coroutines.'
              },
              {
                title: 'FastAPI Streaming Response Guide',
                type: 'Official Documentation',
                url: 'https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse',
                isFree: true,
                annotation: 'Official guide on streaming responses and real-time Server-Sent Events (SSE).'
              }
            ]
          }
        ]
      },
      {
        id: 't-ops-2',
        title: 'Inference Engines: vLLM, PagedAttention & Continuous Batching',
        estimatedHours: 28,
        difficulty: 'Advanced',
        summary: 'Understanding how modern inference engines achieve 10x-20x throughput over basic HuggingFace pipelines through dynamic KV memory paging.',
        subTopics: [
          {
            id: 'st-ops-2-1',
            name: 'PagedAttention Virtual Memory Management',
            description: 'Solving GPU memory waste from internal and external fragmentation by allocating KV cache in non-contiguous physical memory blocks.',
            keyConcepts: ['Logical vs physical KV blocks', 'Continuous / dynamic batching', 'Prefix caching and context sharing across requests'],
            referenceResources: [
              {
                title: 'vLLM Official Documentation & Architecture Overview',
                type: 'Official Documentation',
                url: 'https://docs.vllm.ai/en/latest/',
                isFree: true,
                annotation: 'Comprehensive guide to vLLM installation, continuous batching, and distributed tensor parallelism.'
              },
              {
                title: 'PagedAttention: Efficient Memory Management for Large Language Model Serving',
                type: 'Seminal Paper',
                url: 'https://arxiv.org/abs/2309.06180',
                isFree: true,
                annotation: 'The original UC Berkeley research paper that revolutionized high-throughput LLM serving.'
              }
            ]
          }
        ]
      },
      {
        id: 't-ops-3',
        title: 'Deterministic LLM Evaluation & Guardrails (Ragas / TruLens / DSPy)',
        estimatedHours: 24,
        difficulty: 'Intermediate',
        summary: 'Moving beyond "vibe checks" to empirical, automated scoring of faithfulness, answer relevancy, and context recall in production.',
        subTopics: [
          {
            id: 'st-ops-3-1',
            name: 'Automated RAG Triad Evaluation',
            description: 'Measuring context precision, context recall, faithfulness, and answer relevance on every release.',
            keyConcepts: ['Ground-truth synthetic test set generation', 'LLM-as-a-judge statistical bias mitigation', 'Continuous CI/CD quality gate enforcement'],
            referenceResources: [
              {
                title: 'Ragas Documentation: Evaluation Framework for RAG',
                type: 'Official Documentation',
                url: 'https://docs.ragas.io/en/stable/',
                isFree: true,
                annotation: 'Industry-standard metrics for context precision, faithfulness, and semantic similarity.'
              },
              {
                title: 'DSPy: Compiling Declarative Language Model Calls',
                type: 'GitHub Repository',
                url: 'https://github.com/stanfordnlp/dspy',
                isFree: true,
                annotation: 'Stanford NLP framework for programmatically optimizing prompts and multi-stage LM pipelines.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rust-systems-concurrency',
    title: 'Rust for High-Performance Systems & Cloud Runtimes',
    discipline: 'Backend & Systems Engineering',
    tagline: 'Memory safety without garbage collection, Tokio async runtime, lock-free concurrency, and low-latency engines',
    whyUnique: 'Rust provides C++ speeds with zero memory vulnerabilities. In high demand across cloud hypervisors, trading engines, cryptographic protocols, and infrastructure tools (such as Ruff, Polars, and Turbopack).',
    targetRoles: ['Systems Engineer', 'Rust Infrastructure Developer', 'Low-Latency Backend Engineer'],
    prerequisites: ['Strong understanding of memory allocation (stack vs heap)', 'Basic C/C++ or systems programming exposure'],
    estimatedTotalWeeks: 12,
    standoutCapstoneProject: {
      title: 'High-Throughput Distributed Key-Value Store with Raft Consensus in Pure Rust',
      description: 'Build an in-memory and persistent distributed storage engine supporting linearizable reads, write-ahead logging (WAL), snapshotting, and Raft leader election using Tokio and gRPC (Tonic).',
      architectureBlueprint: 'Client -> Tonic gRPC -> Raft Consensus FSM -> WAL Write-Ahead Log (O_DIRECT) -> MemTable (SkipList) -> SSTables on Disk.',
      evaluationCriteria: [
        'Zero data corruption during simulated node partition and kill-9 chaos tests',
        'Sub-millisecond p99 write latency under 100,000 requests/second',
        'Zero compile-time unsafe code warnings outside of raw memory-mapped file access'
      ]
    },
    topics: [
      {
        id: 't-rust-1',
        title: 'Ownership, Borrowing & Lifetimes Deep Dive',
        estimatedHours: 26,
        difficulty: 'Intermediate',
        summary: 'Mastering the Rust borrow checker: moving semantics, references, interior mutability (RefCell, Mutex, RwLock), and complex lifetime annotations.',
        subTopics: [
          {
            id: 'st-rust-1-1',
            name: 'The Borrow Checker & Non-Lexical Lifetimes (NLL)',
            description: 'Why data races are eliminated at compile time and how to design clean API ownership boundaries.',
            keyConcepts: ['Move vs Copy traits', 'Aliasing XOR Mutability theorem', 'Lifetime elision rules and bounded quantification'],
            referenceResources: [
              {
                title: 'The Rust Programming Language (The Book)',
                type: 'Official Documentation',
                url: 'https://doc.rust-lang.org/book/',
                isFree: true,
                annotation: 'The official canonical guide to Rust syntax, ownership, and concurrency.'
              },
              {
                title: 'The Rustonomicon: The Dark Arts of Unsafe Rust',
                type: 'Official Documentation',
                url: 'https://doc.rust-lang.org/nomicon/',
                isFree: true,
                annotation: 'Deep dive into memory layouts, uninitialized memory, pointer arithmetic, and FFI.'
              }
            ]
          }
        ]
      },
      {
        id: 't-rust-2',
        title: 'Asynchronous Concurrency with Tokio & Actor Patterns',
        estimatedHours: 30,
        difficulty: 'Advanced',
        summary: 'How Tokio executes work-stealing multithreaded runtimes, cooperative task yielding, channels (mpsc/broadcast), and non-blocking I/O.',
        subTopics: [
          {
            id: 'st-rust-2-1',
            name: 'Tokio Runtime Internals & Future Polling',
            description: 'Understanding Pin<&mut Self>, Context, and how Rust state machines are driven to completion without OS thread overhead.',
            keyConcepts: ['Future trait and poll() contract', 'Tokio task spawning vs std::thread', 'Zero-allocation channel queues'],
            referenceResources: [
              {
                title: 'Tokio Official Documentation & Asynchronous Tutorial',
                type: 'Official Documentation',
                url: 'https://tokio.rs/tokio/tutorial',
                isFree: true,
                annotation: 'The standard asynchronous runtime reference for building fast, reliable networked applications.'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'kubernetes-platform-finops',
    title: 'Kubernetes Platform Engineering & FinOps Governance',
    discipline: 'Infrastructure & Reliability',
    tagline: 'Custom operators, eBPF networking, GitOps pipelines, and automated cloud cost optimization',
    whyUnique: 'Platform engineering abstracts cloud complexity. This pathway focuses on building Internal Developer Platforms (IDPs), authoring Kubernetes Controllers in Go, tuning network latency with eBPF/Cilium, and enforcing cloud spend guardrails via Kubecost.',
    targetRoles: ['Platform Engineer', 'Site Reliability Engineer (SRE)', 'Cloud Infrastructure Architect'],
    prerequisites: ['Linux system administration & networking (iptables, DNS, TCP)', 'Docker containerization', 'Basic Go or Python'],
    estimatedTotalWeeks: 10,
    standoutCapstoneProject: {
      title: 'Self-Service Developer Platform with Ephemeral Environments & Karpenter Autoscaling',
      description: 'Build a production multi-tenant Kubernetes platform with automated GitOps (ArgoCD), eBPF security policies (Cilium), Karpenter GPU spot autoscaling, and a Backstage developer portal enabling one-click environment provisioning.',
      architectureBlueprint: 'GitHub PR -> ArgoCD ApplicationSet -> Multi-tenant K8s Namespaces -> Cilium Network Policies -> Karpenter Dynamic Node Provisioning -> Kubecost Budget Alerts.',
      evaluationCriteria: [
        'Automated teardown of idle preview environments slashing cloud spend by 40%',
        'Zero-trust network isolation between tenant namespaces verified via Cilium Hubble',
        'Sub-60 second node provisioning time using Karpenter on AWS/GCP'
      ]
    },
    topics: [
      {
        id: 't-k8s-1',
        title: 'Kubernetes Control Plane Internals & Custom Controllers (Go)',
        estimatedHours: 28,
        difficulty: 'Advanced',
        summary: 'Writing Kubernetes Operators using controller-runtime and Operator SDK: reconciler loops, informers, workqueues, and Custom Resource Definitions (CRDs).',
        subTopics: [
          {
            id: 'st-k8s-1-1',
            name: 'Operator Pattern & Reconciler Idempotency',
            description: 'Building custom controllers that watch cluster events and continuously reconcile desired state with actual infrastructure state.',
            keyConcepts: ['controller-runtime Manager and Client', 'Level-triggered vs edge-triggered reconciliation', 'CRD validation schemas and finalizers'],
            referenceResources: [
              {
                title: 'Kubernetes Official Documentation: Custom Resources & Operators',
                type: 'Official Documentation',
                url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/operator/',
                isFree: true,
                annotation: 'Official architecture patterns for extending Kubernetes with custom business logic.'
              },
              {
                title: 'The Kubebuilder Book',
                type: 'Interactive Lab / Course',
                url: 'https://book.kubebuilder.io/',
                isFree: true,
                annotation: 'Step-by-step guide to building production Kubernetes APIs and controllers in Go.'
              }
            ]
          }
        ]
      }
    ]
  }
];
