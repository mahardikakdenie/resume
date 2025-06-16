<template>
    <div class="mt-4">
      <div class="flex justify-center items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/10262/10262300.png"
          width="30"
          alt=""
        />
        <span class="text-2xl font-bold">
          Skill &
        </span>
        <span class="text-purple-500 text-2xl font-bold">Abilities</span>
      </div>
  
      <div class="mt-9 px-3">
        <div class="grid grid-cols-6 px-2 gap-4">
          <div
            v-for="(ability, index) in abilities"
            :key="index"
            class="border p-5 rounded-md border-wrapper"
            @mouseover="onMouseOver(ability.key, 'hover')"
            @mouseleave="onMouseOver(ability.key, 'hover-leave')"
          >
            <div class="flex justify-center relative">
              <img
                v-if="ability.thumb"
                :src="ability.thumb"
                width="40"
                class="ability-image"
                alt="skill image"
              />
              <div v-else class="ability-image"></div>
            </div>
            <div class="text-center mt-4">
              <span class="font-bold text-sm">
                {{ ability.title }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { skillDatas } from '~/lib/static';
  import { type ISkillDatas } from '@/lib/staticInterface';

  const abilities = ref<Array<ISkillDatas>>(skillDatas);

  const onMouseOver = (key: string, type: string) => {
    const index = abilities.value.findIndex(curr => curr?.key === key);

    if (type === 'hover') {
        // abilities.value[index].thumb = abilities.value[index].thumb_active;
    } else {
        console.log(key);
        
        // console.log("🚀 ~ onMouseOver ~ abilities.value[index].thumb:", abilities.value[index].thumb)
        // abilities.value[index].thumb = abilities.value[index].thumb;
    }
  };
  </script>
  
  <style scoped lang="scss">
  .border-wrapper {
    @apply hover:border-purple-500;

    &:hover {
        span {
            @apply text-purple-600;
        }
    }
  }
  .ability-image {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
  }
  
  .ability-image::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #e0e0e0;
    animation: pulse 1.5s infinite ease-in-out;
    z-index: 1;
    border-radius: 100%;
}

.ability-image:loading::after {
    display: block;
}

.ability-image:loaded::after {
    display: none;
}

@keyframes pulse {
    0% {
        background-color: #e0e0e0;
        transform: translateY(0);
    }
    50% {
        background-color: #f0f0f0;
        transform: translateY(-10px); /* Move upwards */
    }
    100% {
        background-color: #e0e0e0;
        transform: translateY(0);
    }
}

  </style>
  