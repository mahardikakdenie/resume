<template>
  <div class="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-50/50 text-left selection:bg-purple-200 selection:text-purple-900">
    <!-- Sophisticated background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Abstract Shapes -->
        <div class="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-purple-100/40 to-fuchsia-100/40 blur-[100px] animate-slow-spin"></div>
        <div class="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-blue-100/40 to-cyan-100/40 blur-[100px] animate-slow-spin-reverse"></div>
        
        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CgkJPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIi8+CgkJPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xNSkiLz4KCTwvc3ZnPg==')] opacity-[0.4]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      
      <!-- Hero Section -->
      <div data-aos="fade-down" data-aos-duration="1000" class="max-w-3xl mb-16 md:mb-24 text-center md:text-left mx-auto md:mx-0">
           <div class="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-purple-100 px-5 py-2 rounded-full shadow-sm mb-8 transition-all hover:shadow-md hover:border-purple-200">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <span class="text-[10px] sm:text-xs font-black text-purple-700 uppercase tracking-[0.25em]">{{ $t('contact.badge') || 'Available for Opportunities' }}</span>
           </div>
           <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
              {{ $t('contact.title') }}
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Together.</span>
           </h1>
           <p class="text-lg sm:text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto md:mx-0">
              {{ $t('contact.description') }}
           </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Side: Interactive Contact Methods -->
        <div class="lg:col-span-5 space-y-6" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <div 
                v-for="(method, i) in contactMethods" 
                :key="i"
                class="group relative bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200/60 p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-purple-200 hover:-translate-y-1 overflow-hidden flex items-center gap-5 sm:gap-6"
            >
                <div :class="['w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner', method.iconBg]">
                    <img :src="method.img" :alt="method.title" class="w-7 h-7 sm:w-8 sm:h-8 object-contain drop-shadow-sm" />
                </div>
                
                <div class="flex-grow min-w-0">
                    <h4 class="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 truncate">{{ method.title }}</h4>
                    <p class="text-base sm:text-lg font-black text-slate-800 tracking-tight truncate">{{ method.value }}</p>
                </div>

                <div class="flex flex-col sm:flex-row gap-2 shrink-0">
                    <a :href="getLink(method)" target="_blank" class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm" aria-label="Open Link">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                    <button 
                        v-if="method.type === 'email'" 
                        @click="copyText(method.value)"
                        class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-300 shadow-sm"
                        aria-label="Copy Email"
                    >
                        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                    </button>
                </div>

                <!-- Animated Background Gradient -->
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            <!-- Social Connect -->
            <div class="pt-8 sm:pt-10">
                <div class="flex items-center gap-4 mb-6">
                    <div class="h-px bg-slate-200 flex-grow"></div>
                    <h4 class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{{ $t('contact.connect_title') }}</h4>
                    <div class="h-px bg-slate-200 flex-grow"></div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <a href="https://www.linkedin.com/in/mahardikakdenie/" target="_blank" class="group px-4 py-4 sm:py-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center justify-center gap-3 hover:border-blue-300 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300">
                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" class="w-5 h-5" alt="LinkedIn">
                        </div>
                        <span class="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-slate-600 group-hover:text-blue-600 transition-colors">LinkedIn</span>
                    </a>
                    <a href="https://github.com/mahardikakdenie" target="_blank" class="group px-4 py-4 sm:py-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col items-center justify-center gap-3 hover:border-slate-400 hover:shadow-[0_10px_20px_-10px_rgba(15,23,42,0.15)] hover:-translate-y-1 transition-all duration-300">
                        <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" class="w-5 h-5 opacity-80" alt="GitHub">
                        </div>
                        <span class="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-slate-600 group-hover:text-slate-900 transition-colors">GitHub</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="lg:col-span-7" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
            <div class="bg-white rounded-[2rem] sm:rounded-[3rem] border border-slate-200/60 p-8 sm:p-12 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden group/form">
                <!-- Inner Glow -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/50 via-blue-50/20 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 transition-transform duration-1000 group-hover/form:translate-x-1/4"></div>
                
                <div class="mb-10 sm:mb-12">
                    <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">{{ $t('contact.form_title') }}</h2>
                    <p class="text-base sm:text-lg text-slate-500 font-medium">Ready to start your next big project? Drop me a line.</p>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6 sm:space-y-8">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div class="space-y-2.5">
                            <label class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-500 pl-1">{{ $t('contact.first_name') }}</label>
                            <input 
                                v-model="form.firstName" 
                                type="text" 
                                placeholder="John"
                                class="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-medium"
                                required
                            />
                        </div>
                        <div class="space-y-2.5">
                            <label class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-500 pl-1">{{ $t('contact.last_name') }}</label>
                            <input 
                                v-model="form.lastName" 
                                type="text" 
                                placeholder="Doe"
                                class="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-medium"
                                required
                            />
                        </div>
                    </div>

                    <div class="space-y-2.5">
                        <label class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-500 pl-1">{{ $t('contact.email_address') }}</label>
                        <input 
                            v-model="form.email" 
                            type="email" 
                            placeholder="john@example.com"
                            class="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-medium"
                            required
                        />
                    </div>

                    <div class="space-y-2.5">
                        <label class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-slate-500 pl-1">{{ $t('contact.your_message') }}</label>
                        <textarea 
                            v-model="form.message" 
                            rows="4" 
                            placeholder="Tell me about your project, goals, and timeline..."
                            class="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none resize-none font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-medium leading-relaxed"
                            required
                        ></textarea>
                    </div>

                    <div class="pt-4 sm:pt-6">
                        <button 
                            type="submit" 
                            :disabled="isSubmitting"
                            class="group relative w-full px-8 py-5 bg-slate-900 text-white text-xs sm:text-sm font-black uppercase tracking-[0.2em] rounded-2xl overflow-hidden shadow-[0_10px_20px_-10px_rgba(15,23,42,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(15,23,42,0.6)] hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                        >
                            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <template v-if="!isSubmitting">
                                <span class="relative z-10">{{ $t('contact.send_message') }}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </template>
                            
                            <template v-else>
                                <span class="relative z-10 flex items-center gap-2">
                                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    {{ $t('contact.sending') || 'Sending...' }}
                                </span>
                            </template>
                        </button>
                    </div>

                    <transition 
                        enter-active-class="transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)"
                        enter-from-class="opacity-0 translate-y-4 scale-95"
                        enter-to-class="opacity-100 translate-y-0 scale-100"
                        leave-active-class="transform transition-all duration-300 ease-in"
                        leave-from-class="opacity-100 scale-100"
                        leave-to-class="opacity-0 scale-95"
                    >
                        <div v-if="isSent" class="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 p-5 sm:p-6 bg-white/90 backdrop-blur-md text-slate-800 rounded-2xl flex items-center gap-4 border border-green-100 shadow-[0_20px_40px_-15px_rgba(34,197,94,0.2)] z-20">
                            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 text-white flex items-center justify-center shrink-0 shadow-inner">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div class="flex-grow">
                                <h5 class="font-black text-sm sm:text-base text-slate-900 tracking-tight mb-0.5">Message Sent Successfully!</h5>
                                <p class="font-medium text-xs sm:text-sm text-slate-500">{{ $t('contact.success_msg') || 'Thank you for reaching out. I will get back to you shortly.' }}</p>
                            </div>
                            <button @click="isSent = false" class="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </transition>
                </form>
            </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { t } = useI18n();

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
});

const isSubmitting = ref(false);
const isSent = ref(false);
const copied = ref(false);

const contactMethods = [
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg', 
    value: '+62 851-5087-9310',
    title: 'WhatsApp',
    iconBg: 'bg-green-100/50',
    type: 'whatsapp'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 
    value: 'dikamahar884@gmail.com',
    title: 'Business Email',
    iconBg: 'bg-red-100/50',
    type: 'email'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', 
    value: '@dikamahar',
    title: 'Telegram',
    iconBg: 'bg-blue-100/50',
    type: 'telegram'
  }
];

const getLink = (method: any): string => {
  switch (method.type) {
    case 'whatsapp':
      return `https://wa.me/${method.value.replace(/\D/g,  '')}`
    case 'email':
      return `mailto:${method.value}`
    case 'telegram':
      return `https://t.me/${method.value.replace('@',  '')}`
    default:
      return '#'
  }
}

const copyText = (text: string) => {
  navigator.clipboard.writeText(text);
  copied.value = true;
  setTimeout(() => copied.value = false, 2000);
};

const handleSubmit = () => {
    isSubmitting.value = true;

    // Simulate API Call
    setTimeout(() => {
        isSubmitting.value = false;
        isSent.value = true;
        
        // Reset form
        form.value = { firstName: '', lastName: '', email: '', message: '' };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            isSent.value = false;
        }, 5000);
    }, 1500);
};

useSeoMeta({
	title: () => `${t('nav.hire_me')} | Mahardika K. Denie`,
	description: () => t('contact.description'),
});
</script>

<style scoped>
@keyframes slow-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes slow-spin-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

.animate-slow-spin {
  animation: slow-spin 30s linear infinite;
}

.animate-slow-spin-reverse {
  animation: slow-spin-reverse 40s linear infinite;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

::placeholder {
  @apply text-slate-300 font-medium;
}
</style>