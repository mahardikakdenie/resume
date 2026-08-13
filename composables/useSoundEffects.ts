import { ref } from 'vue'

const isMuted = ref<boolean>(false)
let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

export function useSoundEffects() {
  if (typeof window !== 'undefined') {
    const savedMute = localStorage.getItem('app_sound_muted')
    if (savedMute !== null) {
      isMuted.value = savedMute === 'true'
    }
  }

  const toggleMute = () => {
    isMuted.value = !isMuted.value
    if (typeof window !== 'undefined') {
      localStorage.setItem('app_sound_muted', isMuted.value ? 'true' : 'false')
    }
  }

  const playHover = () => {
    if (isMuted.value) return
    try {
      const ctx = getAudioContext()
      if (!ctx) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(440, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05)
      gain.gain.setValueAtTime(0.02, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.05)
    } catch {
      // Ignore audio context autoplay restrictions
    }
  }

  const playClick = () => {
    if (isMuted.value) return
    try {
      const ctx = getAudioContext()
      if (!ctx) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(600, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08)
      gain.gain.setValueAtTime(0.05, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.08)
    } catch {
      // Ignore audio context autoplay restrictions
    }
  }

  const playSuccess = () => {
    if (isMuted.value) return
    try {
      const ctx = getAudioContext()
      if (!ctx) return
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(523.25, now)
      osc.frequency.setValueAtTime(659.25, now + 0.08)
      osc.frequency.setValueAtTime(783.99, now + 0.16)
      gain.gain.setValueAtTime(0.04, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(now + 0.3)
    } catch {
      // Ignore audio context autoplay restrictions
    }
  }

  const playKeypress = () => {
    if (isMuted.value) return
    try {
      const ctx = getAudioContext()
      if (!ctx) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(800 + Math.random() * 200, ctx.currentTime)
      gain.gain.setValueAtTime(0.015, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.03)
    } catch {
      // Ignore audio context autoplay restrictions
    }
  }

  return {
    isMuted,
    toggleMute,
    playHover,
    playClick,
    playSuccess,
    playKeypress
  }
}
