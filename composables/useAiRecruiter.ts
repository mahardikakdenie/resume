import { ref, computed } from 'vue'

export interface RecruiterQuery {
  id: string
  question: string
  category: 'Overview' | 'Experience' | 'Stack' | 'Logistics'
  answer: string
  highlights: string[]
}

export interface ArchitectureNode {
  id: string
  name: string
  role: string
  tech: string
  latency: string
  throughput: string
  status: 'optimal' | 'healthy' | 'standby'
  description: string
  codeSnippet: string
}

export interface TechSkillOption {
  id: string
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps'
  required: boolean
}

const isOpen = ref<boolean>(false)
const activeTab = ref<'assistant' | 'architecture' | 'matcher'>('assistant')
const selectedNodeId = ref<string>('node-nuxt')
const currentQueryId = ref<string>('q-overview')

const recruiterQueries: RecruiterQuery[] = [
  {
    id: 'q-overview',
    question: 'What is Mahardika’s core background & seniority level?',
    category: 'Overview',
    answer: 'Mahardika Kessuma Denie is a Senior Software Engineer with 5+ years of experience specializing in high-performance web applications, enterprise microservices, and cross-platform mobile apps.',
    highlights: ['5+ Years Full-Stack Experience', 'Lead Software Engineer Experience', 'Production Microservices Architecture']
  },
  {
    id: 'q-stack',
    question: 'What primary tech stacks does he master?',
    category: 'Stack',
    answer: 'Frontend: Vue 3 / Nuxt 3, React / Next.js, TypeScript, TailwindCSS.\nBackend: NestJS, Express, Node.js, Laravel, Go.\nMobile & Cloud: Flutter, Docker, Kubernetes, PostgreSQL, Redis, AWS.',
    highlights: ['Vue / Nuxt Ecosystem', 'React / Next.js Frameworks', 'NestJS & Microservices', 'DevOps & Docker Deployment']
  },
  {
    id: 'q-achievements',
    question: 'What are key engineering impacts & achievements?',
    category: 'Experience',
    answer: 'Engineered multi-tenant SaaS platforms serving 100k+ monthly active users, reduced server latency by 45% through Redis caching, and optimized frontend bundle size by 38%.',
    highlights: ['45% Latency Reduction', '100k+ MAU Scalability', '38% Frontend Bundle Optimization']
  },
  {
    id: 'q-logistics',
    question: 'What are availability, work format, and contract terms?',
    category: 'Logistics',
    answer: 'Available for Full-time, Hybrid, or Remote roles globally. Flexible time zone coverage (GMT+7 with overlaps for US/EU/APAC shifts).',
    highlights: ['Immediate / Short Notice Availability', 'Remote / Hybrid Flexibility', 'Global Timezone Adaptability']
  }
]

const architectureNodes: ArchitectureNode[] = [
  {
    id: 'node-nuxt',
    name: 'Frontend SSR Engine',
    role: 'Presentation & UI Layer',
    tech: 'Nuxt 3 + Vue 3 + TailwindCSS',
    latency: '18ms',
    throughput: '12,500 req/s',
    status: 'optimal',
    description: 'High-performance SSR & SSG frontend rendering dynamic pages with automatic asset optimization, localized state management, and smooth motion transitions.',
    codeSnippet: `// Server-Side Rendered Route Handler\nexport default defineEventHandler(async (event) => {\n  const config = useRuntimeConfig()\n  const data = await $fetch('/api/v1/profile', { baseURL: config.apiBase })\n  return { success: true, data }\n})`
  },
  {
    id: 'node-nestjs',
    name: 'Microservices Gateway',
    role: 'API Orchestration & Security',
    tech: 'NestJS + TypeScript + JWT + REST/gRPC',
    latency: '24ms',
    throughput: '8,400 req/s',
    status: 'optimal',
    description: 'Decoupled API gateway executing JWT auth validation, rate limiting, payload sanitization, and routing requests to specialized microservices.',
    codeSnippet: `@Injectable()\nexport class AuthService {\n  constructor(private readonly jwtService: JwtService) {}\n  async validateUser(payload: JwtPayload) {\n    return await this.userService.findById(payload.sub)\n  }\n}`
  },
  {
    id: 'node-redis',
    name: 'Distributed Cache Layer',
    role: 'High-Speed In-Memory Storage',
    tech: 'Redis v7.0 Cluster',
    latency: '2ms',
    throughput: '45,000 req/s',
    status: 'optimal',
    description: 'Sub-millisecond latency cache layer storing active session tokens, hot data queries, and rate limit counters to minimize DB load.',
    codeSnippet: `// Redis Caching Strategy\nasync function getCachedProfile(userId: string) {\n  const cached = await redis.get(\`user:\${userId}\`)\n  if (cached) return JSON.parse(cached)\n  const fresh = await db.user.findUnique({ where: { id: userId } })\n  await redis.set(\`user:\${userId}\`, JSON.stringify(fresh), 'EX', 3600)\n  return fresh\n}`
  },
  {
    id: 'node-db',
    name: 'Relational Database',
    role: 'Persistent Storage Layer',
    tech: 'PostgreSQL 15 + Prisma ORM',
    latency: '12ms',
    throughput: '3,200 req/s',
    status: 'healthy',
    description: 'ACID-compliant relational database with automated index optimization, connection pooling, and automated failover replicas.',
    codeSnippet: `// Optimized Prisma Query with Select Projections\nconst projectDetails = await prisma.project.findUnique({\n  where: { slug },\n  select: { id: true, title: true, metrics: true, techStack: true }\n})`
  },
  {
    id: 'node-k8s',
    name: 'Cloud & Container DevOps',
    role: 'CI/CD & Infrastructure',
    tech: 'Docker + Kubernetes + GitHub Actions',
    latency: '< 1ms',
    throughput: 'Auto-scaling',
    status: 'optimal',
    description: 'Automated CI/CD pipelines deploying zero-downtime containerized workloads with horizontal pod autoscaling (HPA) and automated health probes.',
    codeSnippet: `# Kubernetes Deployment Manifest Snippet\nspec:\n  replicas: 3\n  strategy:\n    type: RollingUpdate\n  template:\n    spec:\n      containers:\n      - name: api-service\n        image: registry.mahardikakdenie.dev/api:latest`
  }
]

const skillOptions = ref<TechSkillOption[]>([
  { id: 's-vue', name: 'Vue 3 / Nuxt 3', category: 'Frontend', required: true },
  { id: 's-react', name: 'React / Next.js', category: 'Frontend', required: true },
  { id: 's-ts', name: 'TypeScript', category: 'Frontend', required: true },
  { id: 's-nest', name: 'NestJS / Node.js', category: 'Backend', required: true },
  { id: 's-laravel', name: 'Laravel / PHP', category: 'Backend', required: false },
  { id: 's-pg', name: 'PostgreSQL', category: 'Database', required: true },
  { id: 's-redis', name: 'Redis', category: 'Database', required: false },
  { id: 's-docker', name: 'Docker / K8s', category: 'DevOps', required: true }
])

export function useAiRecruiter() {
  const openRecruiterModal = (tab: 'assistant' | 'architecture' | 'matcher' = 'assistant') => {
    activeTab.value = tab
    isOpen.value = true
  }

  const closeRecruiterModal = () => {
    isOpen.value = false
  }

  const toggleSkillRequirement = (skillId: string) => {
    const item = skillOptions.value.find(s => s.id === skillId)
    if (item) {
      item.required = !item.required
    }
  }

  const compatibilityScore = computed(() => {
    const requiredSkills = skillOptions.value.filter(s => s.required)
    if (requiredSkills.length === 0) return 100
    const matchedCount = requiredSkills.length // All skills in options are part of Mahardika's expertise
    return Math.round((matchedCount / requiredSkills.length) * 100)
  })

  const activeQuery = computed(() => {
    return recruiterQueries.find(q => q.id === currentQueryId.value) || recruiterQueries[0]
  })

  const activeNode = computed(() => {
    return architectureNodes.find(n => n.id === selectedNodeId.value) || architectureNodes[0]
  })

  return {
    isOpen,
    activeTab,
    selectedNodeId,
    currentQueryId,
    recruiterQueries,
    architectureNodes,
    skillOptions,
    activeQuery,
    activeNode,
    compatibilityScore,
    openRecruiterModal,
    closeRecruiterModal,
    toggleSkillRequirement
  }
}
