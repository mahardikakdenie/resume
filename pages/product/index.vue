<template>
    <div class="container mx-auto px-4 py-6">
        <div data-aos="fade-down" data-aos-duration="1000"
            class="bg-gradient-to-r from-gray-600 to-blue-600 text-white py-10 px-6 rounded-2xl shadow-lg mb-8 text-center">
            <h1 class="text-3xl font-bold mb-2">Product</h1>
            <p class="text-lg">Temukan produk terbaik di sini</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <router-link to="/product/halo" v-for="i in 3" :key="i" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div class="relative overflow-hidden">
                    <img :src="product1"
                        class="object-fill w-full h-full rounded-2xl transform transition-transform duration-300 hover:scale-105"
                        alt="Product 1" />
                    <div
                        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-2xl">
                        <div class="text-white font-bold text-lg">
                            Product 1
                        </div>
                        <div class="text-white font-semibold">Rp.70.000</div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import product1 from '@/assets/baju.jpg';
</script>
