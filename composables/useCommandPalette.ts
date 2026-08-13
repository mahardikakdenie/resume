import { useState } from '#imports'

export const useCommandPalette = () => {
  const isOpen = useState<boolean>('isCommandPaletteOpen', () => false)

  const openPalette = () => {
    isOpen.value = true
  }

  const closePalette = () => {
    isOpen.value = false
  }

  const togglePalette = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    openPalette,
    closePalette,
    togglePalette
  }
}
