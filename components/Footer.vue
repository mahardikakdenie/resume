<template>
  <footer class="relative bg-white dark:bg-[#080C14] border-t border-slate-100 dark:border-slate-800/80 pt-20 pb-12 overflow-hidden transition-colors duration-500">
    <!-- Ambient Background Glows -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-tr from-purple-500/5 via-indigo-500/5 to-blue-500/5 dark:from-purple-950/20 dark:via-indigo-950/20 dark:to-cyan-950/10 blur-3xl pointer-events-none"></div>

    <div class="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-100 dark:border-slate-800/60">
        
        <!-- Brand Info Column -->
        <div class="md:col-span-5 space-y-6 text-left">
          <div class="flex items-center gap-3 cursor-pointer group" @click="$router.push('/')">
            <div class="w-10 h-10 rounded-2xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
              <img src="/logo.svg" alt="Logo" class="w-6 h-6 object-contain" />
            </div>
            <span class="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              Mahardika<span class="text-purple-600 dark:text-purple-400">.</span>
            </span>
          </div>

          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
            Building high-performance multi-tenant SaaS applications, real-time dashboards, and resilient microservices architectures.
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              href="https://github.com/mahardikakdenie" 
              target="_blank"
              class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500 transition-all shadow-xs"
              title="GitHub"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/mahardikakdenie/" 
              target="_blank"
              class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500 transition-all shadow-xs"
              title="LinkedIn"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div class="md:col-span-3 text-left space-y-4">
          <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Quick Navigation</h4>
          <ul class="space-y-2.5 text-xs font-semibold">
            <li><NuxtLink to="/" class="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About & Overview</NuxtLink></li>
            <li><NuxtLink to="/skills" class="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Tech Skills & Stack</NuxtLink></li>
            <li><NuxtLink to="/experiences" class="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Career Timeline</NuxtLink></li>
            <li><NuxtLink to="/project" class="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Featured Projects</NuxtLink></li>
            <li><NuxtLink to="/documentation" class="text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Documentation</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact & Status Column -->
        <div class="md:col-span-4 text-left space-y-4">
          <h4 class="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Availability</h4>
          <div class="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100/80 dark:border-purple-900/50 space-y-2">
            <div class="flex items-center gap-2">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-extrabold text-slate-900 dark:text-slate-100">Open for Opportunities</span>
            </div>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-normal font-medium">
              Available for full-time senior software engineering roles, technical advisory, and high-impact SaaS development.
            </p>
          </div>
        </div>

      </div>

      <!-- Copyright & Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400 dark:text-slate-500">
        <p>© {{ new Date().getFullYear() }} Mahardika Kessuma Denie. All rights reserved.</p>
        <p class="flex items-center gap-1">
          Built with <span class="text-purple-600 dark:text-purple-400 font-bold">Nuxt 3</span> & <span class="text-purple-600 dark:text-purple-400 font-bold">Tailwind CSS</span>
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

