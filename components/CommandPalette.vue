<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-md"
        @click.self="closePalette"
      >
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95 -translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 -translate-y-4"
        >
          <div 
            v-if="isOpen"
            class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[80vh]"
          >
            <!-- Search Input Bar -->
            <div class="relative flex items-center px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Type a command or search pages, skills, projects..."
                class="w-full bg-transparent text-slate-800 placeholder-slate-400 text-base font-medium focus:outline-none"
                @keydown.down.prevent="navigateDown"
                @keydown.up.prevent="navigateUp"
                @keydown.enter.prevent="selectActiveItem"
                @keydown.esc="closePalette"
              />
              <kbd class="hidden sm:inline-block px-2 py-1 text-[10px] font-bold text-slate-400 bg-white border border-slate-200 rounded-md shadow-xs ml-2">
                ESC
              </kbd>
            </div>

            <!-- Command List -->
            <div class="overflow-y-auto p-4 space-y-4 custom-scrollbar">
              <div v-if="filteredGroups.length === 0" class="py-12 text-center text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto mb-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm font-medium">No results found for "{{ searchQuery }}"</p>
              </div>

              <div 
                v-for="group in filteredGroups" 
                :key="group.category" 
                class="space-y-1"
              >
                <div class="px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-400">
                  {{ group.category }}
                </div>
                <div
                  v-for="item in group.items"
                  :key="item.id"
                  :id="`cmd-item-${item.flatIndex}`"
                  @click="executeItem(item)"
                  @mouseenter="selectedIndex = item.flatIndex"
                  :class="[
                    'flex items-center justify-between px-4 py-3 rounded-2xl cursor-pointer transition-all duration-150',
                    selectedIndex === item.flatIndex ? 'bg-purple-50 text-purple-900 border border-purple-100 shadow-xs' : 'text-slate-700 hover:bg-slate-50'
                  ]"
                >
                  <div class="flex items-center gap-3">
                    <div 
                      :class="[
                        'w-9 h-9 rounded-xl flex items-center justify-center transition-colors',
                        selectedIndex === item.flatIndex ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20' : 'bg-slate-100 text-slate-600'
                      ]"
                    >
                      <component :is="item.icon" class="h-4 w-4" />
                    </div>
                    <div>
                      <div class="text-sm font-bold leading-tight">{{ item.title }}</div>
                      <div class="text-xs text-slate-400 font-normal mt-0.5">{{ item.subtitle }}</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <span v-if="item.badge" class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-100 text-slate-600">
                      {{ item.badge }}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Info -->
            <div class="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <div class="flex items-center gap-3">
                <span class="flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">↑</kbd>
                  <kbd class="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span class="flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-600">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <div class="text-[11px] font-semibold text-purple-600">
                Mahardika Kessuma Denie
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted, h } from 'vue'
import { useRouter } from 'vue-router'
import { useCommandPalette } from '~/composables/useCommandPalette'
import { useCvModal } from '~/composables/useCvModal'

import { useAiRecruiter } from '~/composables/useAiRecruiter'

const router = useRouter()
const { isOpen, closePalette } = useCommandPalette()
const { openCvModal } = useCvModal()
const { locale, setLocale } = useI18n()

const searchQuery = ref('')
const selectedIndex = ref(0)
const searchInput = ref<HTMLInputElement | null>(null)

// Functional SVG Icons
const HomeIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
])
const SkillsIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
])
const BriefcaseIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
])
const FolderIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' })
])
const DocumentIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])
const MailIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
])
const GlobeIcon = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, [
  h('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' })
])

interface CommandItem {
  id: string
  title: string
  subtitle: string
  category: string
  icon: any
  badge?: string
  action: () => void
}

const rawCommands: CommandItem[] = [
  // Navigation
  { id: 'nav-home', title: 'Go to Home / About', subtitle: 'Overview, Tech Stack, & Biography', category: 'Navigation', icon: HomeIcon, action: () => router.push('/') },
  { id: 'nav-skills', title: 'View Tech Skills', subtitle: 'Frontend, Backend, DevOps, & Tools', category: 'Navigation', icon: SkillsIcon, action: () => router.push('/skills') },
  { id: 'nav-exp', title: 'View Work Experience', subtitle: 'Professional career history timeline', category: 'Navigation', icon: BriefcaseIcon, action: () => router.push('/experiences') },
  { id: 'nav-projects', title: 'Explore Featured Projects', subtitle: 'Web, mobile apps, & open source', category: 'Navigation', icon: FolderIcon, action: () => router.push('/project') },
  { id: 'nav-docs', title: 'Browse Documentation', subtitle: 'Architecture guides & code notes', category: 'Navigation', icon: DocumentIcon, action: () => router.push('/documentation') },
  { id: 'nav-contact', title: 'Get in Touch / Contact', subtitle: 'Direct message & email form', category: 'Navigation', icon: MailIcon, action: () => router.push('/contact') },
  
  // Quick Actions
  { id: 'act-ai-recruiter', title: 'Open AI Recruiter & System Architecture', subtitle: 'Fast-track candidate evaluation & tech topology', category: 'Quick Actions', icon: DocumentIcon, badge: 'AI', action: () => useAiRecruiter().openRecruiterModal() },
  { id: 'act-cv', title: 'Preview & Download CV / Resume', subtitle: 'Open interactive PDF resume viewer', category: 'Quick Actions', icon: DocumentIcon, badge: 'PDF', action: () => openCvModal('/cv_mahardikakdenie.pdf') },
  { id: 'act-lang', title: 'Switch Language (ID / EN)', subtitle: 'Toggle language between English & Indonesian', category: 'Quick Actions', icon: GlobeIcon, badge: 'i18n', action: () => setLocale(locale.value === 'en' ? 'id' : 'en') },
  { id: 'act-github', title: 'Visit GitHub Profile', subtitle: 'Check repositories & open source projects', category: 'Quick Actions', icon: FolderIcon, badge: 'External', action: () => window.open('https://github.com/mahardikakdenie', '_blank') },
  { id: 'act-linkedin', title: 'Connect on LinkedIn', subtitle: 'View professional profile & networks', category: 'Quick Actions', icon: BriefcaseIcon, badge: 'External', action: () => window.open('https://www.linkedin.com/in/mahardikakdenie/', '_blank') },
]

const filteredGroups = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const filtered = rawCommands.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.subtitle.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  )

  const groupsMap: Record<string, CommandItem[]> = {}
  let counter = 0

  filtered.forEach(item => {
    if (!groupsMap[item.category]) {
      groupsMap[item.category] = []
    }
    groupsMap[item.category].push({
      ...item,
      flatIndex: counter++
    } as any)
  })

  return Object.keys(groupsMap).map(category => ({
    category,
    items: groupsMap[category] as (CommandItem & { flatIndex: number })[]
  }))
})

const totalItems = computed(() => {
  return filteredGroups.value.reduce((acc, group) => acc + group.items.length, 0)
})

const navigateDown = () => {
  if (totalItems.value === 0) return
  selectedIndex.value = (selectedIndex.value + 1) % totalItems.value
}

const navigateUp = () => {
  if (totalItems.value === 0) return
  selectedIndex.value = (selectedIndex.value - 1 + totalItems.value) % totalItems.value
}

const selectActiveItem = () => {
  for (const group of filteredGroups.value) {
    for (const item of group.items) {
      if (item.flatIndex === selectedIndex.value) {
        executeItem(item)
        return
      }
    }
  }
}

const executeItem = (item: CommandItem) => {
  item.action()
  closePalette()
  searchQuery.value = ''
}

const handleGlobalKeyDown = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    if (isOpen.value) {
      closePalette()
    } else {
      useCommandPalette().openPalette()
    }
  }
}

watch(isOpen, (newVal) => {
  if (newVal) {
    selectedIndex.value = 0
    searchQuery.value = ''
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleGlobalKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleGlobalKeyDown)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}
</style>
