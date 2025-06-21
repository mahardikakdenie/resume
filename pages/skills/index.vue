<template>
	<div class="mt-12">
		<!-- Title -->
		<div
			data-aos="fade-down"
			class="flex justify-center items-center gap-2">
			<img
				src="https://cdn-icons-png.flaticon.com/512/10262/10262300.png"
				width="30"
				alt="Skill Icon" />
			<span class="text-3xl font-bold text-gray-800">Skill &</span>
			<span class="text-purple-600 text-3xl font-bold">Abilities</span>
		</div>

		<!-- Grid of Skills -->
		<div data-aos="fade-up" data-aos-delay="200" class="mt-9 px-3">
			<div
				class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 px-2">
				<div
					v-for="(ability, index) in abilities"
					:key="index"
					class="border border-gray-200 rounded-lg p-5 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-purple-500"
					@mouseover="onMouseOver(ability.key, 'hover')"
					@mouseleave="onMouseOver(ability.key, 'hover-leave')">
					<div class="relative w-16 h-16 flex justify-center">
						<img
							v-if="ability.thumb"
							:src="ability.thumb"
							width="40"
							class="w-full h-full object-contain ability-image"
							alt="skill image" />
						<div
							v-else
							class="w-full h-full bg-gray-200 rounded-md"></div>
					</div>
					<div class="text-center mt-4">
						<span class="font-semibold text-sm text-gray-700">{{
							ability.title
						}}</span>
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
	const index = abilities.value.findIndex((curr) => curr?.key === key);

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

  &:hover span {
    @apply text-purple-600;
  }
}

.ability-image {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
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
  opacity: 0.6;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.3;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
}
</style>
