<template>
  <footer class="relative z-10 bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden text-left border-t border-slate-800/60">
    <!-- Glow Divider Bar -->
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"></div>
    
    <!-- Ambient Background Light Orbs -->
    <div class="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
        
        <!-- Column 1: Brand & Bio -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
              <img src="/logo.svg" alt="Mahardika Logo" class="relative w-10 h-10 rounded-xl bg-slate-900 p-1.5 shadow-md border border-slate-700/50" />
            </div>
            <span class="text-2xl font-black tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-purple-200">
              Mahardika
            </span>
          </div>

          <p class="text-sm leading-relaxed text-slate-400 font-normal">
            {{ $t('footer.description') }}
          </p>

          <!-- Status Availability Badge -->
          <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for new projects</span>
          </div>

          <!-- Social Media Icons -->
          <div class="flex items-center space-x-3 pt-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              class="group relative p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <img :src="linkedinImage" class="w-4 h-4 filter invert opacity-70 group-hover:opacity-100 transition-opacity" alt="LinkedIn" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              class="group relative p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <img :src="githubImage" class="w-4 h-4 filter invert opacity-70 group-hover:opacity-100 transition-opacity" alt="GitHub" />
            </a>
            <a 
              href="mailto:hello@mahardika.dev" 
              aria-label="Email Contact"
              class="group relative p-2.5 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <img :src="emailImage" class="w-4 h-4 filter invert opacity-70 group-hover:opacity-100 transition-opacity" alt="Email" />
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            {{ $t('footer.quick_links') }}
          </h4>
          <ul class="space-y-3.5 text-sm">
            <li>
              <router-link to="/" class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
                <span class="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">›</span>
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ $t('nav.about') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/skills" class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
                <span class="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">›</span>
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ $t('nav.skills') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/project" class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
                <span class="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">›</span>
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ $t('nav.projects') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/experiences" class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
                <span class="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">›</span>
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ $t('nav.experience') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/documentation" class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200">
                <span class="text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">›</span>
                <span class="group-hover:translate-x-1 transition-transform duration-200">{{ $t('nav.docs') }}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Services -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-purple-400 mb-6 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            {{ $t('footer.services') }}
          </h4>
          <ul class="space-y-3.5 text-sm">
            <li class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span class="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-purple-400 group-hover:scale-150 transition-all duration-200"></span>
              <span>{{ $t('footer.web_dev') }}</span>
            </li>
            <li class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span class="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-purple-400 group-hover:scale-150 transition-all duration-200"></span>
              <span>{{ $t('footer.mobile_dev') }}</span>
            </li>
            <li class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span class="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-purple-400 group-hover:scale-150 transition-all duration-200"></span>
              <span>{{ $t('footer.ui_ux') }}</span>
            </li>
            <li class="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer">
              <span class="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-purple-400 group-hover:scale-150 transition-all duration-200"></span>
              <span>{{ $t('footer.system_arch') }}</span>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info Card -->
        <div class="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:border-purple-500/40 transition-colors duration-300">
          <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
          
          <h4 class="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            {{ $t('footer.get_in_touch') }}
          </h4>
          
          <div class="space-y-4">
            <div>
              <span class="text-xs text-slate-500 uppercase tracking-wider block mb-1">Location</span>
              <p class="text-sm font-medium text-slate-300 flex items-center gap-2">
                <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Jakarta, Indonesia
              </p>
            </div>

            <div>
              <span class="text-xs text-slate-500 uppercase tracking-wider block mb-1">Direct Contact</span>
              <a 
                href="mailto:hello@mahardika.dev" 
                class="text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1.5 group/mail"
              >
                hello@mahardika.dev
                <span class="group-hover/mail:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p class="text-center md:text-left">
          &copy; {{ new Date().getFullYear() }} Mahardika Kessuma Denie. {{ $t('footer.rights_reserved') }}
        </p>

        <div class="flex items-center gap-6">
          <span class="hover:text-slate-300 transition-colors cursor-pointer">{{ $t('footer.privacy_policy') }}</span>
          <span class="w-1 h-1 rounded-full bg-slate-800"></span>
          <span class="hover:text-slate-300 transition-colors cursor-pointer">{{ $t('footer.terms_of_service') }}</span>
          <span class="w-1 h-1 rounded-full bg-slate-800"></span>
          <!-- Back to top button -->
          <button 
            @click="scrollToTop" 
            aria-label="Scroll to top"
            class="group p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/20 transition-all duration-300"
          >
            <svg class="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import linkedinImage from '@/assets/linkedin.svg';
import githubImage from '@/assets/github.svg';
import emailImage from '@/assets/email.svg';

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};
</script>
