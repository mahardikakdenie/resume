<template>
    <div class="flex flex-col md:flex-row justify-center items-center dark:bg-slate-900 bg-white rounded-lg p-6">
        <!-- Left: Text Section -->
        <div data-aos="fade-right" class="md:w-1/2">
            <h2 class="text-xl font-bold text-gray-800 dark:text-white">
                About <span class="text-green-600">Mahardika Kessuma Denie</span>
            </h2>
            <div class="mb-4 mt-5">
                <p class="text-gray-600 dark:text-white">I am a passionate software developer with a strong drive for continuous learning and improvement. Since starting my career in 2020, I’ve worked across frontend and backend development, adapting quickly to new tools and technologies. I’m committed to writing clean, modular code, breaking down complex tasks to ensure efficient, scalable solutions. By staying current with industry trends, I consistently deliver high-quality, innovative software while embracing new challenges and opportunities for growth.</p>
            </div>

            <div>
                <ul class="flex gap-2">
                    <li data-aos="flip-left" class="flex gap-1 opacity-50 hover:opacity-100 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" width="20" alt="">
                        <span class="text-gray-600 text-sm dark:text-white">
                            Mahardika Kessuma Denie
                        </span>
                    </li>
                    <li  data-aos="flip-right"class="flex gap-1 opacity-50 hover:opacity-100 cursor-pointer">
                        <img src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" width="20" alt="">
                        <span class="text-gray-600 text-sm dark:text-white">
                            @mahardikakdenie
                        </span>
                    </li>
                </ul>
            </div>

            <div class="mt-6 flex items-center space-x-4">
                <button class="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">See My Experiences</button>
                <button class="border border-gray-400 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-100 dark:text-white">Contact
                    us</button>
            </div>
        </div>

        <!-- Right: Image Section -->
        <div data-aos="flip-up" class="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <img src="https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a3VjaW5nfGVufDB8fDB8fHww"
                alt="Psychology Session" class="shadow-lg object-cover rounded-full w-[70%]">
        </div>
    </div>
</template>

<script setup lang="ts">
// Script logic (if needed) can be added here, though it's not necessary for this static content
</script>

<style scoped lang="scss">
/* Scoped styles (optional) */
</style>
