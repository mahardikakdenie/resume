import { ref } from 'vue'

export interface LogEntry {
  id: string
  type: 'command' | 'response' | 'error' | 'system'
  text: string
  timestamp: string
}

const isConsoleOpen = ref<boolean>(false)
const activeTab = ref<'cli' | 'api'>('cli')
const commandLogs = ref<LogEntry[]>([
  {
    id: '1',
    type: 'system',
    text: 'Mahardika Developer CLI v2.4.0 [Type "help" or "curl /api/v1/profile"]',
    timestamp: new Date().toLocaleTimeString()
  }
])

export function useDeveloperConsole() {
  const toggleConsole = () => {
    isConsoleOpen.value = !isConsoleOpen.value
  }

  const openConsole = () => {
    isConsoleOpen.value = true
  }

  const closeConsole = () => {
    isConsoleOpen.value = false
  }

  const clearLogs = () => {
    commandLogs.value = []
  }

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim()
    if (!trimmed) return

    const time = new Date().toLocaleTimeString()
    commandLogs.value.push({
      id: Math.random().toString(),
      type: 'command',
      text: `$ ${trimmed}`,
      timestamp: time
    })

    const lower = trimmed.toLowerCase()

    if (lower === 'help') {
      commandLogs.value.push({
        id: Math.random().toString(),
        type: 'response',
        text: `Available CLI Commands:
  • help            - List available terminal commands
  • bio             - Display brief summary about Mahardika
  • skills          - Print core technical stack
  • projects        - List featured portfolio projects
  • contact         - Show direct contact channels & email
  • cv              - Trigger CV / Resume download modal
  • curl /api/v1/profile  - Execute mock HTTP request for user profile
  • curl /api/v1/skills   - Fetch JSON array of skills
  • clear           - Clear terminal screen`,
        timestamp: time
      })
    } else if (lower === 'bio') {
      commandLogs.value.push({
        id: Math.random().toString(),
        type: 'response',
        text: 'Mahardika Kessuma Denie | Senior Software Engineer with 5+ years building scalable SaaS, enterprise APIs, real-time dashboards, and web/mobile apps.',
        timestamp: time
      })
    } else if (lower === 'skills') {
      commandLogs.value.push({
        id: Math.random().toString(),
        type: 'response',
        text: 'Frontend: React, Next.js, Vue 3, Nuxt 3, TypeScript, TailwindCSS\nBackend: NestJS, Node.js, Express, Laravel, Go, REST APIs, GraphQL\nDatabase/Cloud: PostgreSQL, Redis, Docker, Kubernetes, AWS, CI/CD',
        timestamp: time
      })
    } else if (lower === 'projects') {
      commandLogs.value.push({
        id: Math.random().toString(),
        type: 'response',
        text: '1. Multi-Tenant SaaS ERP Platform\n2. Real-Time Analytics Dashboard\n3. Cross-Platform Mobile Telemedicine App\n4. AI-Powered Resume & Portfolio Generator',
        timestamp: time
      })
    } else if (lower === 'contact') {
      commandLogs.value.push({
        id: Math.random().toString(),
        type: 'response',
        text: 'Email: mahardikakdenie@gmail.com | LinkedIn: /in/mahardikakdenie | GitHub: @mahardikakdenie',
        timestamp: time
      })
    } else if (lower === 'cv') {
      const { openCvModal } = useCvModal()
      openCvModal('/cv_mahardikakdenie.pdf')
      commandLogs.value.push({
        id: Math.random().toString(),
        type: 'response',
        text: 'Opening Interactive CV / Resume Viewer Modal...',
        timestamp: time
      })
    } else if (lower === 'clear') {
      clearLogs()
    } else if (lower.startsWith('curl')) {
      if (lower.includes('/api/v1/profile')) {
        commandLogs.value.push({
          id: Math.random().toString(),
          type: 'response',
          text: JSON.stringify({ status: 200, name: "Mahardika Kessuma Denie", title: "Senior Software Engineer", location: "Bandung, Indonesia", experience_years: 5 }, null, 2),
          timestamp: time
        })
      } else if (lower.includes('/api/v1/skills')) {
        commandLogs.value.push({
          id: Math.random().toString(),
          type: 'response',
          text: JSON.stringify({ status: 200, categories: ["Frontend", "Backend", "Mobile", "DevOps"], total_skills: 24 }, null, 2),
          timestamp: time
        })
      } else {
        commandLogs.value.push({
          id: Math.random().toString(),
          type: 'error',
          text: 'HTTP 404: Endpoint not found. Try "curl /api/v1/profile" or "curl /api/v1/skills"',
          timestamp: time
        })
      }
    } else {
      commandLogs.value.push({
        id: Math.random().toString(),
        type: 'error',
        text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`,
        timestamp: time
      })
    }
  }

  return {
    isConsoleOpen,
    activeTab,
    commandLogs,
    toggleConsole,
    openConsole,
    closeConsole,
    clearLogs,
    executeCommand
  }
}
