<template>
  <div class="min-h-screen py-24 relative overflow-hidden bg-white text-left">
    <!-- Sophisticated background -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
      
      <!-- Hero Section -->
      <div data-aos="fade-right" class="max-w-3xl mb-20 text-left">
           <div class="inline-flex items-center gap-3 bg-purple-50 border border-purple-100 px-6 py-2 rounded-full shadow-sm mb-8">
              <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              <span class="text-[10px] font-black text-purple-600 uppercase tracking-[0.3em]">{{ $t('contact.badge') || 'Let\'s Connect' }}</span>
           </div>
           <h1 class="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-10 uppercase">
              {{ $t('contact.title') }}
           </h1>
           <p class="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
              {{ $t('contact.description') }}
           </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <!-- Left Side: Interactive Contact Methods -->
        <div class="lg:col-span-5 space-y-8" data-aos="fade-up">
            <div 
                v-for="(method, i) in contactMethods" 
                :key="i"
                class="group relative bg-white rounded-[2rem] border border-slate-100 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 overflow-hidden flex items-center gap-6 text-left"
            >
                <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6', method.iconBg]">
                    <img :src="method.img" :alt="method.title" class="w-8 h-8 object-contain" />
                </div>
                
                <div class="flex-grow text-left">
                    <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{{ method.title }}</h4>
                    <p class="text-lg font-black text-slate-900 tracking-tight">{{ method.value }}</p>
                </div>

                <div class="flex flex-col gap-2">
                    <a :href="getLink(method)" target="_blank" class="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-purple-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                    <button 
                        v-if="method.type === 'email'" 
                        @click="copyText(method.value)"
                        class="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:text-purple-600 transition-colors"
                    >
                        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                    </button>
                </div>

                <!-- Animated Background Gradient -->
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>

            <!-- Social Connect -->
            <div class="pt-10 text-left">
                <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">{{ $t('contact.connect_title') }}</h4>
                <div class="flex gap-4">
                    <a href="https://www.linkedin.com/in/mahardikakdenie/" target="_blank" class="px-8 py-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-3 font-black text-[10px] uppercase tracking-widest hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" class="w-4 h-4" alt="LinkedIn">
                        LinkedIn
                    </a>
                    <a href="https://github.com/mahardikakdenie" target="_blank" class="px-8 py-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-3 font-black text-[10px] uppercase tracking-widest hover:border-slate-300 hover:shadow-xl hover:shadow-slate-500/10 hover:-translate-y-1 transition-all duration-300">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" class="w-4 h-4" alt="GitHub">
                        GitHub
                    </a>
                </div>
            </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="lg:col-span-7" data-aos="fade-left">
            <div class="bg-white rounded-[3rem] border border-slate-100 p-10 md:p-16 shadow-2xl shadow-slate-200/50 text-left relative overflow-hidden">
                <!-- Inner Glow -->
                <div class="absolute -top-24 -right-24 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-10"></div>
                
                <h2 class="text-3xl font-black text-slate-900 mb-2 tracking-tight text-left">{{ $t('contact.form_title') }}</h2>
                <p class="text-slate-500 mb-12 font-medium text-left italic">Have a project? I'd love to help you bring it to life.</p>

                <form @submit.prevent="handleSubmit" class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div class="space-y-3">
                            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">{{ $t('contact.first_name') }}</label>
                            <input 
                                v-model="form.firstName" 
                                type="text" 
                                placeholder="e.g. John"
                                class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all outline-none font-bold text-slate-900"
                                required
                            />
                        </div>
                        <div class="space-y-3 text-left">
                            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">{{ $t('contact.last_name') }}</label>
                            <input 
                                v-model="form.lastName" 
                                type="text" 
                                placeholder="e.g. Doe"
                                class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all outline-none font-bold text-slate-900"
                                required
                            />
                        </div>
                    </div>

                    <div class="space-y-3 text-left">
                        <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">{{ $t('contact.email_address') }}</label>
                        <input 
                            v-model="form.email" 
                            type="email" 
                            placeholder="your@email.com"
                            class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all outline-none font-bold text-slate-900"
                            required
                        />
                    </div>

                    <div class="space-y-3 text-left">
                        <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pl-1">{{ $t('contact.your_message') }}</label>
                        <textarea 
                            v-model="form.message" 
                            rows="5" 
                            placeholder="What's on your mind?"
                            class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:bg-white focus:ring-2 focus:ring-purple-500 transition-all outline-none resize-none font-bold text-slate-900"
                            required
                        ></textarea>
                    </div>

                    <div class="pt-6">
                        <button 
                            type="submit" 
                            :disabled="isSubmitting"
                            class="group relative w-full px-10 py-6 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform active:scale-95 disabled:opacity-70 flex items-center justify-center gap-4"
                        >
                            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span class="relative z-10" v-if="!isSubmitting">{{ $t('contact.send_message') }}</span>
                            <span class="relative z-10" v-else>{{ $t('contact.sending') }}</span>
                            <svg v-if="!isSubmitting" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>

                    <transition name="fade">
                        <div v-if="isSent" class="p-6 bg-green-50 text-green-700 rounded-2xl flex items-center gap-4 border border-green-100 shadow-lg shadow-green-100/50">
                            <div class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <div>
                                <h5 class="font-black text-sm uppercase tracking-wider mb-0.5">Success!</h5>
                                <p class="font-bold text-xs opacity-80">{{ $t('contact.success_msg') }}</p>
                            </div>
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
    iconBg: 'bg-green-50',
    type: 'whatsapp'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 
    value: 'dikamahar884@gmail.com',
    title: 'Business Email',
    iconBg: 'bg-red-50',
    type: 'email'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', 
    value: '@dikamahar',
    title: 'Telegram',
    iconBg: 'bg-blue-50',
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
