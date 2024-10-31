<template>
    <div class="mt-4 px-10">
        <div class="flex justify-center">
            <h3 class="text-4xl text-purple-500 font-bold">
                Contact
            </h3>
        </div>

        <div data-ao="fade-up" class="grid grid-cols-3 gap-3 mt-4">
            <div v-for="(contact, i) in contacts" :key="i" class="border rounded-md px-3 py-8 box-contact border-b-2 border-b-purple-500 hover:shadow-2xl">
                <div class="flex gap-4">
                    <div class="flex items-center">
                        <img :src="contact.img" width="50" alt="">
                    </div>
                    <div class="">
                        <h3 class="text-md text-purple-900 font-bold">{{ contact.title }}</h3>
                        <div class="mt-4">
                            <div><span>{{ contact.value }}</span></div>
                            <button class="text-purple-500">
                                {{  contact.buttonText  }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const contacts = ref<{
    img: string;
    title: string;
    value: string;
    buttonText: string;
}[]>([
    {
        img: 'https://farhan-gunawan.vercel.app/assets/svg/whatsapp.svg',
        value: '+6285150879310',
        title: 'Whatsapp',
        buttonText: 'Send a message',
    },
    {
        img: 'https://farhan-gunawan.vercel.app/assets/svg/gmail.svg',
        value: 'dikamahar884@gmail.com',
        title: 'Google',
        buttonText: 'Send a message',
    },
    {
        img: 'https://farhan-gunawan.vercel.app/assets/svg/telegram.svg',
        title: 'Telegram',
        value: '+6285150879310',
        buttonText: 'Send a message',
    },
]);

</script>

<style lang="scss">
img {
    transition: transform 0.3s;
}
.box-contact {
    @apply cursor-pointer;
    &:hover {
        img {
            transform: translateY(-10px);
        }
    }
}
</style>
