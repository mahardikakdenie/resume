<template>
    <div class="mt-4 px-4 md:px-10">
        <div class="flex justify-center">
            <h3 class="text-4xl text-purple-500 font-bold">
                Kontak
            </h3>
        </div>

        <div data-ao="fade-up" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
                v-for="(contact, i) in contacts"
                :key="i"
                :class="['rounded-md p-6 text-white transition duration-300 transform hover:scale-105', contact.bgColor]"
            >
                <div class="flex flex-col items-center text-center">
                    <img :src="contact.img" :alt="contact.title" class="w-16 h-16 mb-4" />
                    <h3 class="text-xl font-semibold mb-2">{{ contact.title }}</h3>
                    <div class="text-base mb-4">{{ contact.value }}</div>
                    <button class="bg-white text-gray-800 font-medium py-2 px-4 rounded-full hover:bg-gray-100">
                        {{ contact.buttonText }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const contacts = ref([
    {
        img: 'https://farhan-gunawan.vercel.app/assets/svg/whatsapp.svg',
        value: '+62 851-5087-9310',
        title: 'WhatsApp',
        buttonText: 'Kirim Pesan',
        bgColor: 'bg-green-500',
    },
    {
        img: 'https://farhan-gunawan.vercel.app/assets/svg/gmail.svg',
        value: 'dikamahar884@gmail.com',
        title: 'Email',
        buttonText: 'Kirim Email',
        bgColor: 'bg-red-500',
    },
    {
        img: 'https://farhan-gunawan.vercel.app/assets/svg/telegram.svg',
        title: 'Telegram',
        value: '@dikamahar',
        buttonText: 'Kirim Pesan',
        bgColor: 'bg-blue-500',
    },
]);
</script>

<style scoped>
/* Menghilangkan efek default pada button */
button {
    @apply focus:outline-none;
}
</style>
