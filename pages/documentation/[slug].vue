<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 text-left">
    <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <!-- Main Content -->
      <main class="flex-1 max-w-4xl w-full">
        <NuxtLink 
          data-aos="fade-right"
          to="/documentation" 
          class="inline-flex items-center text-sm font-bold text-slate-400 hover:text-purple-600 transition-colors mb-6 md:mb-8 group uppercase tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {{ $t('common.back') }}
        </NuxtLink>

        <ContentDoc v-slot="{ doc }">
          <article>
            <header class="mb-8 md:mb-12 text-left" data-aos="fade-up">
              <div class="flex flex-wrap items-center gap-3 mb-4">
                <span class="px-3 py-1 text-[10px] font-black uppercase tracking-widest text-purple-600 bg-purple-50 rounded-full border border-purple-100">
                  {{ doc.category }}
                </span>
                <span class="text-xs text-slate-400 font-bold uppercase tracking-widest">
                  {{ formatDate(doc.date) }}
                </span>
              </div>
              <h1 class="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 leading-tight tracking-tighter">
                {{ doc.title }}
              </h1>
              <p class="text-lg md:text-2xl text-slate-500 leading-relaxed font-medium">
                {{ doc.description }}
              </p>
            </header>

            <!-- Table of Contents for Mobile -->
            <div v-if="doc.body?.toc?.links?.length" class="lg:hidden mb-10 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                <h4 class="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6">On this page</h4>
                <ul class="space-y-4">
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
              class="prose prose-purple prose-base md:prose-xl max-w-none 
              prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tighter
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
              prose-code:text-purple-600 prose-code:bg-purple-50 prose-code:px-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
              prose-img:rounded-[2.5rem] prose-img:shadow-2xl
              prose-th:text-slate-900 prose-td:text-slate-600 text-left"
            >
              <ContentRenderer :value="doc" />
            </div>
          </article>
        </ContentDoc>
      </main>

      <!-- Sidebar Table of Contents -->
      <aside class="hidden lg:block w-72 shrink-0">
        <div class="sticky top-32" data-aos="fade-left" data-aos-delay="400">
          <h4 class="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
            <span class="w-1 h-5 bg-purple-600 rounded-full"></span>
            Table of Contents
          </h4>
          
          <ContentDoc v-slot="{ doc }">
            <nav v-if="doc.body?.toc?.links?.length">
              <ul class="space-y-5 border-l-2 border-slate-50">
                <li v-for="link in doc.body.toc.links" :key="link.id" class="pl-6 relative group">
                  <a 
                    :href="`#${link.id}`"
                    class="block text-xs font-black text-slate-400 hover:text-purple-600 transition-all uppercase tracking-widest group-hover:translate-x-1"
                  >
                    {{ link.text }}
                  </a>
                  <ul v-if="link.children" class="mt-4 space-y-4">
                    <li v-for="sublink in link.children" :key="sublink.id" class="pl-4">
                      <a 
                        :href="`#${sublink.id}`"
                        class="block text-[10px] font-bold text-slate-300 hover:text-purple-500 transition-all"
                      >
                        {{ sublink.text }}
                      </a>
                    </li>
                  </ul>
                  <div class="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-purple-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                </li>
              </ul>
            </nav>
          </ContentDoc>

          <!-- Extra Widget -->
          <div class="mt-16 p-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative group shadow-2xl shadow-purple-900/20 text-left">
            <div class="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full"></div>
            <p class="text-[10px] font-black text-purple-400 mb-4 uppercase tracking-[0.3em] relative z-10">Collaboration</p>
            <p class="text-base font-bold mb-8 relative z-10 leading-relaxed">Punya pertanyaan seputar teknis ini?</p>
            <NuxtLink to="/contact" class="inline-flex items-center gap-2 text-[10px] font-black text-white hover:text-purple-400 transition-all relative z-10 group/link uppercase tracking-widest">
              HUBUNGI SAYA
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { data: doc } = await useAsyncData(`content-${route.path}`, () => queryContent(route.path).findOne())

const getAbsoluteImageUrl = (url?: string) => {
    if (!url) return 'https://i.ibb.co.com/8mSD7K6/og-image-mahardika.png' // Default fallback
    if (url.startsWith('http')) return url
    return `https://mahardikakdenie.my.id${url.startsWith('/') ? '' : '/'}${url}`
}

useSeoMeta({
  title: () => `${doc.value?.title || 'Documentation'} | Mahardika Portfolio`,
  ogTitle: () => `${doc.value?.title || 'Documentation'} | Mahardika Portfolio`,
  description: () => doc.value?.description || 'Technical documentation and articles by Mahardika Kessuma Denie',
  ogDescription: () => doc.value?.description || 'Technical documentation and articles by Mahardika Kessuma Denie',
  ogType: 'article',
  ogImage: () => getAbsoluteImageUrl(doc.value?.image),
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
})

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
  @apply w-full border-collapse my-12 overflow-hidden rounded-[1.5rem] border border-slate-100 shadow-sm;
}
.prose th {
  @apply bg-slate-50 text-left px-6 py-4 font-black uppercase text-[10px] tracking-[0.2em] text-slate-500 border-b border-slate-100;
}
.prose td {
  @apply px-6 py-5 text-sm text-slate-600 border-b border-slate-50 font-medium;
}
</style>
