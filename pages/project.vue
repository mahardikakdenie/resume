<template>
    <div class="mt-4">
        <div>
            <span class="text-[30px]">My Portfolio</span>
        </div>
        <div class="grid grid-cols-3 mt-5 gap-6">
            <div v-for="(list, i) in lists" :key="i" class="border-2 p-3 rounded-md cursor-pointer">
                <div class="flex justify-center">
                    <img :src="list.image" :width="list.type === 'mobile' ? '100' : '100%'"  alt="">
                </div>
                <div class="mt-4">
                    <h3>{{ list.name }}</h3>
                </div>
                <div class="overflow-hidden text-ellipsis whitespace-nowrap break-words">
                    <span>Link: <a :href="list.link" class="hover:text-indigo-500" target="_blank">{{ list.link }}</a></span>
                </div>
                <div class="mt-3">
                    <small class="text-ellipsis-multiline">
                        {{ list.description }}
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

useHead({
    title: 'Mahardikakdenie Portofolio - My project',
});

const lists = ref<{ name: string, link: string,image: string ,description: string }[]>([
    {
        name: 'Ensiklotari',
        link: 'https://ensiklotari.id',
        image: '/ensiklotari.png',
        description: 'Ensiklotari ini merupakan aplikasi yang bertujuan untuk menjembatani para seniman tari dan pembelajar tari dalam mengenal dan mempelajari tari tradisional Indonesia khususnya, dan tari internasional pada umumnya.'
    },
    {
        name: 'BujanggaManik Appointment App',
        link: 'https://buanggamanik.my.id',
        image: '/bujanggamanik.png',
        description: 'Bujangga Manik adalah aplikasi berbasis website yang dirancang khusus untuk mempermudah proses temu janji serta memperkenalkan profil perusahaan dalam sektor jasa konstruksi bangunan dan gedung. Dengan fitur-fitur yang intuitif dan user-friendly, aplikasi ini memungkinkan pengguna untuk menjadwalkan pertemuan dengan para profesional konstruksi, mengeksplorasi berbagai layanan yang ditawarkan, serta mendapatkan informasi mendetail mengenai pengalaman dan keahlian perusahaan. Bujangga Manik bertujuan untuk meningkatkan efisiensi komunikasi antara klien dan penyedia jasa, sekaligus memberikan transparansi dan kemudahan akses kepada semua pihak yang terlibat dalam proyek konstruksi.',
    },
    {
        name: 'Next Movie',
        link: 'Ofline',
        image: '/next-movie.png',
        description: 'List Movie And Ratting',
    },
    {
        name: 'Library Vue Button',
        link: 'https://www.npmjs.com/package/mahardikakdenie-vue-button',
        image: '/lib-btn.png',
        description: 'Library Vue in Node Package Manager',
    },
    {
        name: 'Uniqlo Theme',
        type: 'mobile',
        link: 'https://uniqlo-theme.mahardikakdenie.my.id',
        image: '/uniqlo-theme.png',
        description: 'Slicing Uniqlo Theme',
    },
    {
        name: 'Learning Management System Smile Learning Center',
        link: 'https://lms.mahardikakdenie.my.id',
        image: '/lms.png',
        description: 'Learning Management System',
    },
    {
        name: 'Store Vue',
        link: 'https://mahardika-store.vercel.app/',
        image: '/store-slicing.png',
        description: 'Store',
    },
    {
        name: 'Dikti Appplication',
        link: 'https://dikti.mahardikakdenie.my.id/',
        image: '/dikti.png',
        description: 'Store',
    },
]);
</script>

<style>
.text-ellipsis-multiline {
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Menentukan jumlah baris yang ditampilkan */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5; /* Menentukan jarak antar baris */
    max-height: 3em; /* Menentukan tinggi maksimal untuk dua baris */
}
</style>
