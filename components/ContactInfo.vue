<template>
  <div class="my-4 px-4 md:px-10">
    <!-- Judul -->
    <div class="flex justify-center mb-6">
      <h3 class="text-4xl text-purple-500 font-bold">Kontak</h3>
    </div>

    <!-- Grid Kontak -->
    <div data-aos="fade-up" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(contact, i) in contacts"
        :key="i"
        :class="[
          'relative backdrop-blur-sm bg-white/30 p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl',
        ]"
      >
        <!-- Ikon -->
        <div class="flex justify-center mb-4">
          <div class="relative group">
            <img
              :src="contact.img"
              :alt="contact.title"
              class="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span
              class="absolute inset-0 bg-current opacity-20 rounded-full blur-md transform scale-75 group-hover:scale-100 transition-all duration-300"
              :class="[contact.iconBg]"
            ></span>
          </div>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-semibold text-center text-gray-800 mb-2">{{ contact.title }}</h3>

        <!-- Value -->
        <p class="text-base text-center text-gray-700 mb-4">{{ contact.value }}</p>

        <!-- Button -->
        <div class="flex justify-center">
          <a
            :href="getLink(contact)"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 bg-white text-gray-900 text-sm font-medium py-2 px-6 rounded-full shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="contact.buttonHoverClass"
          >
            {{ contact.buttonText }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// Daftar kontak
const contacts = ref([
  {
    img: 'https://farhan-gunawan.vercel.app/assets/svg/whatsapp.svg', 
    value: '+62 851-5087-9310',
    title: 'WhatsApp',
    buttonText: 'Kirim Pesan',
    bgColor: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-400',
    buttonHoverClass: 'hover:bg-green-50',
    type: 'whatsapp'
  },
  {
    img: 'https://farhan-gunawan.vercel.app/assets/svg/gmail.svg', 
    value: 'dikamahar884@gmail.com',
    title: 'Email',
    buttonText: 'Kirim Email',
    bgColor: 'bg-red-50 border-red-100',
    iconBg: 'bg-red-400',
    buttonHoverClass: 'hover:bg-red-50',
    type: 'email'
  },
  {
    img: 'https://farhan-gunawan.vercel.app/assets/svg/telegram.svg', 
    value: '@dikamahar',
    title: 'Telegram',
    buttonText: 'Kirim Pesan',
    bgColor: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-400',
    buttonHoverClass: 'hover:bg-blue-50',
    type: 'telegram'
  }
])

// Fungsi untuk generate link dinamis
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
