<template>
  <div class="py-20 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-[120px] -z-10"></div>
    
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 border border-purple-100 mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
          </span>
          <span class="text-[10px] font-black uppercase tracking-[0.2em]">{{ $t('contact.connect_title') }}</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Ready to start your <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 uppercase italic">Next Big Thing?</span>
        </h2>
        <p class="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
          Choose your preferred way to connect. I typically respond within a few hours for business inquiries.
        </p>
      </div>

      <!-- Contact Hub Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="(contact, i) in contacts"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
          class="group relative"
        >
          <!-- Card Glow Effect -->
          <div :class="['absolute -inset-0.5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10', contact.glowColor]"></div>
          
          <div class="relative h-full bg-white border border-slate-100 rounded-[2.5rem] p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col items-center text-center overflow-hidden">
            <!-- Glass Overlay -->
            <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-300">Fast Response</span>
            </div>

            <!-- Icon Container -->
            <div :class="['w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-slate-100', contact.iconBg]">
               <img :src="contact.img" :alt="contact.title" class="w-10 h-10 object-contain drop-shadow-md" />
            </div>

            <!-- Content -->
            <h3 class="text-xl font-black text-slate-900 mb-2">{{ contact.title }}</h3>
            <p class="text-sm text-slate-400 font-bold mb-8 break-all max-w-full px-2">{{ contact.value }}</p>

            <!-- CTA Button -->
            <div class="mt-auto w-full space-y-3">
              <a
                :href="getLink(contact)"
                target="_blank"
                :class="['flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300', contact.buttonClass]"
              >
                {{ contact.buttonText }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <button 
                v-if="contact.type === 'email'"
                @click="copyEmail(contact.value)"
                class="flex items-center justify-center gap-2 w-full py-2 text-[9px] font-black text-slate-400 hover:text-purple-600 uppercase tracking-widest transition-colors"
              >
                <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                {{ copied ? 'Copied!' : 'Copy Address' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const copied = ref(false)

const contacts = ref([
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg', 
    value: '+62 851-5087-9310',
    title: 'WhatsApp',
    buttonText: 'Direct Message',
    iconBg: 'bg-green-50',
    glowColor: 'bg-green-400/20',
    buttonClass: 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30',
    type: 'whatsapp'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 
    value: 'dikamahar884@gmail.com',
    title: 'Business Email',
    buttonText: 'Send Inquiry',
    iconBg: 'bg-red-50',
    glowColor: 'bg-red-400/20',
    buttonClass: 'bg-slate-900 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30',
    type: 'email'
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg', 
    value: '@dikamahar',
    title: 'Telegram',
    buttonText: 'Start Chat',
    iconBg: 'bg-blue-50',
    glowColor: 'bg-blue-400/20',
    buttonClass: 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30',
    type: 'telegram'
  }
])

const getLink = (contact: any): string => {
  switch (contact.type) {
    case 'whatsapp':
      return `https://wa.me/${contact.value.replace(/\D/g,  '')}`
    case 'email':
      return `mailto:${contact.value}`
    case 'telegram':
      return `https://t.me/${contact.value.replace('@',  '')}`
    default:
      return '#'
  }
}

const copyEmail = (email: string) => {
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}
</script>

<style scoped>
/* Efek glassy */
.backdrop-blur-sm {
  backdrop-filter: blur(10px);
}

/* Efek glow pada tombol */
button:hover::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 9999px;
  background: linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0));
  z-index: -1;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(168, 85, 247, 0);
  }
}
</style>
