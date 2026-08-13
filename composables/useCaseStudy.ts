import { ref } from 'vue'

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  category: string
  bannerImage: string
  architecture: {
    frontend: string[]
    backend: string[]
    database: string[]
    infrastructure: string[]
  }
  metrics: {
    label: string
    value: string
    change: string
  }[]
  overview: string
  challenges: string[]
  solutions: string[]
  liveUrl?: string
  githubUrl?: string
}

const isCaseStudyOpen = ref<boolean>(false)
const activeCaseStudy = ref<CaseStudy | null>(null)

export function useCaseStudy() {
  const openCaseStudy = (study: CaseStudy) => {
    activeCaseStudy.value = study
    isCaseStudyOpen.value = true
  }

  const closeCaseStudy = () => {
    isCaseStudyOpen.value = false
    activeCaseStudy.value = null
  }

  return {
    isCaseStudyOpen,
    activeCaseStudy,
    openCaseStudy,
    closeCaseStudy
  }
}
