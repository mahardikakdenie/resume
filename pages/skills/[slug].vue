<template>
	<div class="container mx-auto px-4 py-10">
		<div v-if="currentSkill" class="flex justify-center">
			<!-- Container untuk gambar dan deskripsi -->
			<div
				class="w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
				<!-- Gambar skill -->
				<div class="w-full flex justify-center p-5">
					<img
						class="object-cover rounded-xl w-full"
						:src="currentSkill?.image"
						alt="ReactJs Skill" />
				</div>

				<!-- Deskripsi skill -->
				<div class="p-6">
					<h2
						class="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
						{{ currentSkill?.title }} Skill Details
					</h2>
					<p
						class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
						{{ currentSkill?.description }}
					</p>

					<!-- Info lainnya -->
					<div
						class="flex items-center justify-between text-gray-700 dark:text-gray-300">
						<span class="font-semibold">Experience Level:</span>
						<span class="text-lg">{{ currentSkill?.experienceSkill }}</span>
					</div>

					<div
						class="flex items-center justify-between mt-2 text-gray-700 dark:text-gray-300">
						<span class="font-semibold">Years of Experience:</span>
						<span class="text-lg">{{ currentSkill?.yearExperience }} years</span>
					</div>
				</div>

				<hr />

				<!-- Project -->
				<div class="p-6">
					<div>
						<span class="font-bold">Project Terkait</span>
					</div>
					<div class="mt-2 grid grid-cols-4 gap-4">
						<div
                            v-for="(project, i) in currentSkill?.projectRelated"
                            :key="i"
							class="border p-4 rounded-lg flex flex-col justify-between h-full">
							<img
                                :src="project.image"
								alt="" />
							<div class="mt-4">
								<h3>{{ project.title }}</h3>
								<div class="mt-3">
									<small>
										{{ project.description }}
									</small>
								</div>
							</div>
							<div class="mt-4 grid grid-cols-2 gap-1">
								<button
                                    v-for="(i, key) in project.cta"
                                    :key="key"
									class="w-full py-2 rounded-lg  capitalize btn bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm">
									{{ key.replace(/([A-Z])/g, ' $1').trim() }}
								</button>
							</div>
						</div>
					</div>
				</div>

				<!-- Tombol CTA -->
				<!-- <div class="bg-gray-100 dark:bg-gray-700 p-4 flex justify-end">
            <button 
              class="px-5 capitalize py-4 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200 ease-in-out"
            >
              Learn More {{ route.params.slug }}
            </button>
          </div> -->
			</div>
		</div>
        <div v-else class="flex justify-center">
            <img 
                src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527130.jpg?w=1480&t=st=1729531434~exp=1729532034~hmac=20e25bef9f1a5904a1ac6e3eb87bd55cf5f2d5b6c1bda27dcb35fd46e8c0882e" 
                alt="no-data"
                width="600"
            >
        </div>
	</div>
</template>

<script setup lang="ts">
import { skillDatas } from '@/lib/static';
const route = useRoute();

const currentSkill = computed(() => skillDatas.find(curr => curr?.key === route?.params.slug))

const projects = ref<{}[]>();
</script>
