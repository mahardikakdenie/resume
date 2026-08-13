<template>
  <canvas 
    ref="canvasRef" 
    class="fixed inset-0 pointer-events-none z-0 w-full h-full"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Snowflake {
  x: number
  y: number
  radius: number
  speedY: number
  speedX: number
  opacity: number
  color: string
  step: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null
let ctx: CanvasRenderingContext2D | null = null
let snowflakes: Snowflake[] = []
let canvasWidth = 0
let canvasHeight = 0

// Palette matching bg-slate-50 with subtle purple and blue background accents
const SNOW_COLORS = [
  'rgba(255, 255, 255, ',    // Pure soft white
  'rgba(168, 85, 247, ',    // Soft Purple matching bg-purple-200
  'rgba(96, 165, 250, '     // Soft Blue matching bg-blue-200
]

/**
 * Calculates optimal particle count based on CPU cores and screen size
 * to maintain 60 FPS on older or low-power devices.
 */
const getOptimalParticleCount = (): number => {
  if (typeof window === 'undefined') return 30
  
  const isMobile = window.innerWidth < 768
  const cores = navigator.hardwareConcurrency || 4
  
  if (cores <= 2 || isMobile) {
    return 25 // Light workload for dual-core CPUs / mobile devices
  } else if (cores <= 4) {
    return 40 // Medium workload
  }
  return 60 // Full desktop workload
}

const createSnowflake = (): Snowflake => {
  const baseColor = SNOW_COLORS[Math.floor(Math.random() * SNOW_COLORS.length)]
  const opacity = (Math.random() * 0.45 + 0.25).toFixed(2)
  
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    radius: Math.random() * 2.5 + 1, // Snowflake size between 1px and 3.5px
    speedY: Math.random() * 0.8 + 0.3, // Falling speed (smooth & gentle)
    speedX: Math.random() * 0.4 - 0.2, // Subtle horizontal wind sway
    opacity: parseFloat(opacity),
    color: `${baseColor}${opacity})`,
    step: Math.random() * Math.PI * 2
  }
}

const initSnowflakes = () => {
  const count = getOptimalParticleCount()
  snowflakes = Array.from({ length: count }, createSnowflake)
}

const updateCanvasDimensions = () => {
  if (!canvasRef.value) return
  const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap DPR at 2 to avoid 4K overhead
  canvasWidth = window.innerWidth
  canvasHeight = window.innerHeight
  
  canvasRef.value.width = canvasWidth * dpr
  canvasRef.value.height = canvasHeight * dpr
  
  if (ctx) {
    ctx.scale(dpr, dpr)
  }
  
  initSnowflakes()
}

const render = () => {
  if (!ctx || !canvasRef.value) return

  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  for (let i = 0; i < snowflakes.length; i++) {
    const flake = snowflakes[i]

    // Update position with dynamic sway
    flake.step += 0.015
    flake.x += flake.speedX + Math.sin(flake.step) * 0.3
    flake.y += flake.speedY

    // Wrap particles seamlessly around screen boundaries
    if (flake.y > canvasHeight + flake.radius) {
      flake.y = -flake.radius
      flake.x = Math.random() * canvasWidth
    }
    if (flake.x > canvasWidth + flake.radius) {
      flake.x = -flake.radius
    } else if (flake.x < -flake.radius) {
      flake.x = canvasWidth + flake.radius
    }

    // Render particle
    ctx.beginPath()
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
    ctx.fillStyle = flake.color
    ctx.fill()
  }

  animationFrameId = requestAnimationFrame(render)
}

const handleVisibilityChange = () => {
  if (document.hidden) {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  } else {
    if (animationFrameId === null) {
      render()
    }
  }
}

onMounted(() => {
  if (!canvasRef.value) return

  // Check user motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  ctx = canvasRef.value.getContext('2d', { alpha: true })
  updateCanvasDimensions()

  window.addEventListener('resize', updateCanvasDimensions, { passive: true })
  document.addEventListener('visibilitychange', handleVisibilityChange)

  render()
})

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', updateCanvasDimensions)
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<style scoped>
canvas {
  will-change: transform;
}
</style>
