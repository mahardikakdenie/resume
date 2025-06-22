<template>
  <div class="mt-5 px-4 md:px-20">
    <div class="p-5">
      <!-- Contact Card -->
      <div data-aos="fade-up" class="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- Background Gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-100 opacity-70"></div>

        <!-- Content -->
        <div class="relative z-10 p-6 md:p-10">
          <!-- <contact-info /> -->

          <!-- Heading -->
          <div class="mb-8 text-center">
            <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Hubungi Saya!</h2>
            <p class="text-gray-600 mt-2 max-w-lg mx-auto">{{ description }}</p>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="max-w-3xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Full Name -->
              <div>
                <label for="fullname" class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input v-model="fullname" type="text" id="fullname" placeholder="Masukkan nama lengkap Anda"
                  class="w-full border border-gray-300 py-3 px-4 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300" required />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input v-model="email" type="email" id="email" placeholder="Masukkan email Anda"
                  class="w-full border border-gray-300 py-3 px-4 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300" required />
              </div>
            </div>

            <!-- Message -->
            <div class="mt-6">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
              <textarea v-model="message" id="message" rows="5" placeholder="Tulis pesan Anda di sini"
                class="w-full border border-gray-300 rounded-lg p-4 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end mt-6">
              <button type="submit"
                class="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Kirim
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="submitted"
            class="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center animate-fade-in-down">
            Terima kasih! Pesan Anda telah terkirim.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const description = 'Jika Anda tertarik untuk berkolaborasi dengan saya, silakan hubungi saya menggunakan detail di bawah ini atau isi formulir.';
const fullname = ref('');
const email = ref('');
const message = ref('');
const submitted = ref(false);

function handleSubmit() {
    // Logika pengiriman data ke server dapat ditambahkan di sini
    submitted.value = true;

    // Reset form setelah submit
    fullname.value = '';
    email.value = '';
    message.value = '';

    // Menghilangkan pesan konfirmasi setelah beberapa detik (opsional)
    setTimeout(() => {
        submitted.value = false;
    }, 5000);
}
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
