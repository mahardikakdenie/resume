<template>
    <div class="mt-5">
        <div class="p-3">
            <div class="text-center">
                <span class="text-sm text-center">{{ description }}</span>
            </div>
            <contact-info />
            <div class="mt-10 border p-5 rounded">
                <div>
                    <span>
                        Contact Me !!
                    </span>
                </div>
                <div class="w-full mt-4">
                    <label for="" class="relative">
                        <small class="font-thin absolute top-2 left-3">Fullname</small>
                        <input placeholder="Fullname" type="text" class="border w-full py-2 px-2">
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const description = 'If you are interested in collaborating with me, feel free to contact me using the details below or fill out the form.';

const onFocusInput = () => {};
</script>
