<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <!-- Main Content -->
      <main class="flex-1 max-w-4xl w-full">
        <NuxtLink 
          data-aos="fade-right"
          to="/documentation" 
          class="inline-flex items-center text-sm font-bold text-slate-400 hover:text-purple-600 transition-colors mb-6 md:mb-8 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Documentation
        </NuxtLink>

        <ContentDoc v-slot="{ doc }">
          <article>
            <header class="mb-8 md:mb-12" data-aos="fade-up">
              <div class="flex flex-wrap items-center gap-3 mb-4">
                <span class="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 rounded-full border border-purple-100">
                  {{ doc.category }}
                </span>
                <span class="text-xs text-slate-400 font-bold">
                  {{ formatDate(doc.date) }}
                </span>
              </div>
              <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
                {{ doc.title }}
              </h1>
              <p class="text-lg md:text-xl text-slate-500 leading-relaxed">
                {{ doc.description }}
              </p>
            </header>

            <!-- Table of Contents for Mobile -->
            <div v-if="doc.body?.toc?.links?.length" class="lg:hidden mb-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <h4 class="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">On this page</h4>
                <ul class="space-y-3">
                    <li v-for="link in doc.body.toc.links" :key="link.id">
                        <a :href="`#${link.id}`" class="text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors block">
                            {{ link.text }}
                        </a>
                    </li>
                </ul>
            </div>

            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              class="prose prose-purple prose-base md:prose-lg max-w-none 
              prose-headings:font-black prose-headings:text-slate-900
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
              prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-img:rounded-[2rem] prose-img:shadow-2xl
              prose-th:text-slate-900 prose-td:text-slate-600"
            >
              <ContentRenderer :value="doc" />
            </div>
          </article>
        </ContentDoc>
      </main>

      <!-- Sidebar Table of Contents (Desktop Only) -->
      <aside class="hidden lg:block w-64 shrink-0">
        <div class="sticky top-32" data-aos="fade-left" data-aos-delay="400">
          <h4 class="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-purple-500 rounded-full"></span>
            Table of Contents
          </h4>
          
          <ContentDoc v-slot="{ doc }">
            <nav v-if="doc.body?.toc?.links?.length">
              <ul class="space-y-4 border-l border-slate-100">
                <li v-for="link in doc.body.toc.links" :key="link.id" class="pl-4 relative group">
                  <a 
                    :href="`#${link.id}`"
                    class="block text-sm font-bold text-slate-400 hover:text-purple-600 transition-colors uppercase tracking-tight"
                  >
                    {{ link.text }}
                  </a>
                  <ul v-if="link.children" class="mt-3 space-y-3">
                    <li v-for="sublink in link.children" :key="sublink.id" class="pl-4">
                      <a 
                        :href="`#${sublink.id}`"
                        class="block text-xs font-bold text-slate-400 hover:text-purple-600 transition-colors"
                      >
                        {{ sublink.text }}
                      </a>
                    </li>
                  </ul>
                  <div class="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                </li>
              </ul>
            </nav>
          </ContentDoc>

          <!-- Extra Widget -->
          <div class="mt-12 p-8 bg-slate-900 rounded-[2rem] text-white overflow-hidden relative group">
            <div class="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
            <p class="text-[10px] font-black text-purple-400 mb-4 uppercase tracking-[0.2em] relative z-10">Collaboration</p>
            <p class="text-sm font-bold mb-6 relative z-10 leading-relaxed">Punya pertanyaan seputar teknis ini?</p>
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-xs font-black text-white hover:text-purple-400 transition-colors relative z-10 group/link">
              HUBUNGI SAYA
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
const formatDate = (date: string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>

<style>
/* Custom prose overrides */
.prose table {
  @apply w-full border-collapse my-8 overflow-hidden rounded-xl border border-slate-100;
}
.prose th {
  @apply bg-slate-50 text-left px-4 py-3 font-black uppercase text-[10px] tracking-widest text-slate-500;
}
.prose td {
  @apply border-t border-slate-100 px-4 py-3 text-sm;
}
</style>
