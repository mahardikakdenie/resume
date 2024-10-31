<template>
    <div class="mt-5 px-20">
        <div class="p-3">
            <contact-info />
            <div class="mt-10 border p-5 rounded">
                <div>
                    <span>
                        Contact Me !!
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div class="w-full mt-4">
                        <label for="" class="relative">
                            <input placeholder="Fullname" type="text" class="border w-full py-3 px-2 rounded-lg text-sm">
                        </label>
                    </div>
                    <div class="w-full mt-4">
                        <label for="" class="relative">
                            <input placeholder="Fullname" type="text" class="border w-full py-3 px-2 rounded-lg text-sm">
                        </label>
                    </div>
                </div>

                <div class="grid grid-cols-1">
                    <textarea name="" id="" class="border mt-4 h-20 rounded-lg p-2" placeholder="Message" />
                </div>

                <div class="flex justify-end mt-4">
                    <button class="border-purple-500 bg-purple-900 hover:bg-purple-600 text-white font-bold px-7 py-2 rounded-lg">
                        submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const description = 'If you are interested in collaborating with me, feel free to contact me using the details below or fill out the form.';

const onFocusInput = () => {};
</script>
