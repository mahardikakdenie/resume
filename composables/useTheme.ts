import { ref, computed, watch, onMounted } from 'vue'

export type ThemeMode = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'theme_preference'
const themeMode = ref<ThemeMode>('system')
const systemIsDark = ref(false)

export const useTheme = () => {
  const currentTheme = computed<'light' | 'dark'>(() => {
    if (themeMode.value === 'system') {
      return systemIsDark.value ? 'dark' : 'light'
    }
    return themeMode.value
  })

  const applyThemeToDOM = () => {
    if (import.meta.server) return
    const root = document.documentElement
    if (currentTheme.value === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const setTheme = (mode: ThemeMode) => {
    themeMode.value = mode
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, mode)
    }
    applyThemeToDOM()
  }

  const toggleTheme = () => {
    if (themeMode.value === 'light') {
      setTheme('dark')
    } else if (themeMode.value === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const initTheme = () => {
    if (import.meta.server) return

    // 1. Read stored preference
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      themeMode.value = stored
    } else {
      themeMode.value = 'system'
    }

    // 2. Check system media query
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemIsDark.value = mediaQuery.matches

    const handleSystemChange = (e: MediaQueryListEvent) => {
      systemIsDark.value = e.matches
      if (themeMode.value === 'system') {
        applyThemeToDOM()
      }
    }

    try {
      mediaQuery.addEventListener('change', handleSystemChange)
    } catch {
      mediaQuery.addListener(handleSystemChange)
    }

    applyThemeToDOM()
  }

  return {
    themeMode,
    currentTheme,
    setTheme,
    toggleTheme,
    initTheme
  }
}
