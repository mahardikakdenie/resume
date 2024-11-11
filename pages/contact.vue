<template>
    <div class="mt-5 px-4 md:px-20">
        <div class="p-5 bg-gray-50 rounded-lg">
            <!-- Bagian Heading -->
            <contact-info />
            <div class="mt-10 border border-gray-200 p-6 rounded-lg bg-white">
                <div class="mb-6">
                    <h2 class="text-2xl font-semibold text-gray-800">Hubungi Saya!</h2>
                    <p class="text-gray-600 mt-1">{{ description }}</p>
                </div>
                
                <!-- Formulir Kontak -->
                <form @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Input Nama Lengkap -->
                        <div class="w-full">
                            <label for="fullname" class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                            <input v-model="fullname" placeholder="Masukkan nama lengkap Anda" type="text" id="fullname" class="border border-gray-300 w-full py-3 px-4 rounded-lg text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
                        </div>
    
                        <!-- Input Email -->
                        <div class="w-full">
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input v-model="email" placeholder="Masukkan email Anda" type="email" id="email" class="border border-gray-300 w-full py-3 px-4 rounded-lg text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none" required />
                        </div>
                    </div>
    
                    <!-- Bidang Pesan -->
                    <div class="mt-6">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                        <textarea v-model="message" id="message" class="border border-gray-300 w-full h-28 rounded-lg p-4 text-sm transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none" placeholder="Tulis pesan Anda di sini" required></textarea>
                    </div>
    
                    <!-- Tombol Submit -->
                    <div class="flex justify-end mt-6">
                        <button type="submit" class="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                            Kirim
                        </button>
                    </div>
                </form>

                <!-- Pesan Konfirmasi -->
                <div v-if="submitted" class="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
                    Terima kasih! Pesan Anda telah terkirim.
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
/* Tambahkan gaya kustom jika diperlukan */
</style>
