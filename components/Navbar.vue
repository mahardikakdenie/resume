<template>
	<header
		class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
		<nav
			data-aos="flip-up"
			class="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
			<div
				class="relative flex items-center justify-center py-[2.125rem]">
				<div
					class="absolute inset-x-0 bottom-0 h-px bg-slate-900/5"></div>
				<div class="flex gap-5">
					<div
						v-for="(list, index) in lists"
						:key="index"
						class="cursor-pointer hover:text-purple-600 hidden lg:flex lg:items-center">
						<span
							:class="{
								'text-purple-600 font-bold':
									$route.path === list?.link || ($route.path.includes(list?.link) && list.link !== '/'),
								'text-neutral-700':
									$route.path !== list.link,
							}"
							class="text-[13px] hover:text-purple-600"
							@click="$router.push(list?.link)"
							>{{ list?.label }}</span
						>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';

interface Navigator {
	label: string;
	link: string;
}

const lists = ref<Array<Navigator>>([
	{
		label: 'About Me',
		link: '/',
	},
	{
		label: 'Skils',
		link: '/skills',
	},
	{
		label: 'Experiences',
		link: '/experiences',
	},
	{
		label: 'Educations',
		link: '/educations'
	},
	{
		label: 'Project',
		link: '/project',
	},
	{
		label: 'Blogs',
		link: '/blogs',
	},
	{
		label: 'Contact',
		link: '/contact',
	},
]);
</script>
