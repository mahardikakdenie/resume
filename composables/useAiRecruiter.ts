import { ref, computed } from 'vue'

export interface RecruiterQuery {
  id: string
  question: string
  category: 'Overview' | 'Experience' | 'Stack' | 'Logistics'
  answer: string
  highlights: string[]
}

export interface TechSkillOption {
  id: string
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps'
  required: boolean
}

const isOpen = ref<boolean>(false)
const activeTab = ref<'assistant' | 'matcher'>('assistant')
const currentQueryId = ref<string>('q-overview')
const searchQuery = ref<string>('')

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
    id: 'q-leadership',
    question: 'Does he have team leadership & mentoring experience?',
    category: 'Experience',
    answer: 'Led cross-functional teams of 6+ engineers, established git branching standards, conducted code reviews, and managed sprint deliveries using Agile/Scrum methodologies.',
    highlights: ['Tech Team Leadership', 'Agile / Scrum Delivery', 'Code Review & Mentorship']
  },
  {
    id: 'q-logistics',
    question: 'What are availability, work format, and contract terms?',
    category: 'Logistics',
    answer: 'Available for Full-time, Hybrid, or Remote roles globally. Flexible time zone coverage (GMT+7 with overlaps for US/EU/APAC shifts).',
    highlights: ['Immediate / Short Notice Availability', 'Remote / Hybrid Flexibility', 'Global Timezone Adaptability']
  }
]

const skillOptions = ref<TechSkillOption[]>([
  { id: 's-vue', name: 'Vue 3 / Nuxt 3', category: 'Frontend', required: true },
  { id: 's-react', name: 'React / Next.js', category: 'Frontend', required: true },
  { id: 's-ts', name: 'TypeScript', category: 'Frontend', required: true },
  { id: 's-nest', name: 'NestJS / Node.js', category: 'Backend', required: true },
  { id: 's-laravel', name: 'Laravel / PHP', category: 'Backend', required: false },
  { id: 's-pg', name: 'PostgreSQL', category: 'Database', required: true },
  { id: 's-redis', name: 'Redis Caching', category: 'Database', required: false },
  { id: 's-docker', name: 'Docker / K8s', category: 'DevOps', required: true }
])

export function useAiRecruiter() {
  const openRecruiterModal = (tab: 'assistant' | 'matcher' = 'assistant') => {
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

  const filteredQueries = computed(() => {
    if (!searchQuery.value.trim()) return recruiterQueries
    const q = searchQuery.value.toLowerCase()
    return recruiterQueries.filter(item => 
      item.question.toLowerCase().includes(q) || 
      item.answer.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    )
  })

  const activeQuery = computed(() => {
    return recruiterQueries.find(q => q.id === currentQueryId.value) || filteredQueries.value[0] || recruiterQueries[0]
  })

  const compatibilityScore = computed(() => {
    const requiredSkills = skillOptions.value.filter(s => s.required)
    if (requiredSkills.length === 0) return 100
    return 100 // Mahardika masters all listed skill options
  })

  return {
    isOpen,
    activeTab,
    currentQueryId,
    searchQuery,
    recruiterQueries,
    filteredQueries,
    skillOptions,
    activeQuery,
    compatibilityScore,
    openRecruiterModal,
    closeRecruiterModal,
    toggleSkillRequirement
  }
}
