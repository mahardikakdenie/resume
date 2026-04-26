<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col lg:flex-row gap-12">
      <!-- Main Content -->
      <main class="flex-1 max-w-4xl">
        <NuxtLink 
          data-aos="fade-right"
          to="/documentation" 
          class="inline-flex items-center text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors mb-8 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Documentation
        </NuxtLink>

        <ContentDoc v-slot="{ doc }">
          <article>
            <header class="mb-12" data-aos="fade-up">
              <div class="flex items-center space-x-4 mb-4">
                <span class="px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full border border-purple-100">
                  {{ doc.category }}
                </span>
                <span class="text-sm text-slate-400 font-medium">
                  {{ formatDate(doc.date) }}
                </span>
              </div>
              <h1 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {{ doc.title }}
              </h1>
              <p class="text-xl text-slate-600 leading-relaxed">
                {{ doc.description }}
              </p>
            </header>

            <div 
              data-aos="fade-up" 
              data-aos-delay="200"
              class="prose prose-purple prose-lg max-w-none 
              prose-headings:font-black prose-headings:text-slate-900
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
              prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-img:rounded-3xl prose-img:shadow-lg
              prose-th:text-slate-900 prose-td:text-slate-600"
            >
              <ContentRenderer :value="doc" />
            </div>
          </article>
        </ContentDoc>
      </main>

      <!-- Sidebar Table of Contents -->
      <aside class="hidden lg:block w-64 shrink-0">
        <div class="sticky top-32" data-aos="fade-left" data-aos-delay="400">
          <h4 class="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
            <span class="w-1 h-4 bg-purple-500 rounded-full"></span>
            Table of Contents
          </h4>
          
          <ContentDoc v-slot="{ doc }">
            <nav v-if="doc.body?.toc?.links?.length">
              <ul class="space-y-4 border-l border-slate-100">
                <li v-for="link in doc.body.toc.links" :key="link.id" class="pl-4 relative group">
                  <a 
                    :href="`#${link.id}`"
                    class="block text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors"
                  >
                    {{ link.text }}
                  </a>
                  <!-- Sub-links for H3 -->
                  <ul v-if="link.children" class="mt-3 space-y-3">
                    <li v-for="sublink in link.children" :key="sublink.id" class="pl-4">
                      <a 
                        :href="`#${sublink.id}`"
                        class="block text-xs font-medium text-slate-400 hover:text-purple-600 transition-colors"
                      >
                        {{ sublink.text }}
                      </a>
                    </li>
                  </ul>
                  <!-- Hover Indicator -->
                  <div class="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-purple-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                </li>
              </ul>
            </nav>
            <div v-else class="text-sm text-slate-400 italic">
              No sections found.
            </div>
          </ContentDoc>

          <!-- Extra Widget (Optional) -->
          <div class="mt-12 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100/50">
            <p class="text-xs font-bold text-purple-600 mb-2 uppercase tracking-wide">Need Help?</p>
            <p class="text-sm text-slate-600 mb-4 leading-relaxed">Punya pertanyaan seputar dokumentasi ini?</p>
            <NuxtLink to="/contact" class="text-sm font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 group">
              Hubungi Saya
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style>
/* Custom prose overrides */
.prose table {
  @apply w-full border-collapse;
}
.prose th, .prose td {
  @apply border-b border-slate-100 py-4;
}
</style>
