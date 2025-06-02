<template>
	<div class="container mx-auto px-4 py-6">
		<div class="grid grid-cols-3">
			<div>
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="200"
					class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
					<div class="relative overflow-hidden">
						<img
							:src="product.image"
							class="object-fill w-full h-full rounded-2xl transform transition-transform duration-300 hover:scale-105"
							alt="Product 1" />
					</div>
				</div>

				<div class="flex mt-4 gap-4">
					<div
						class="border rounded-2xl border-purple-300 w-[110px]"
						v-for="i in 1"
						:key="i">
						<img
							:src="product.image"
							class="object-fill w-full h-full rounded-2xl transform transition-transform duration-300 hover:scale-105"
							alt="Product 1" />
					</div>
				</div>
			</div>
			<div class="col-span-2 px-4 flex flex-col">
				<h2 class="text-2xl font-bold mb-2">{{ product.name }}</h2>
				<p class="text-xl font-semibold text-blue-600">
					{{ formatPrice(product.price) }}
				</p>
				<p class="text-md text-gray-700 mb-4 mt-8 text-justify">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Enim reiciendis assumenda praesentium totam nobis, repellat
					hic earum explicabo vero quis voluptate deserunt tempore
					laborum modi veritatis optio, voluptatem veniam quae ipsa.
					Sunt maxime, consequuntur tenetur, aspernatur laudantium
					quae aperiam similique optio explicabo quia modi ab,
					blanditiis animi harum. Omnis veniam placeat perferendis
					alias? Expedita quisquam doloremque impedit laudantium nisi
					deserunt veritatis dolorem culpa magnam et atque sapiente
					quos, est corporis, incidunt consectetur adipisci quasi,
					aliquid maiores. Consectetur soluta eligendi pariatur
					excepturi doloribus amet quisquam dolor. Ut, a nihil ipsa
					recusandae aut earum illo, error ab ex itaque accusantium
					beatae reprehenderit?
				</p>

				<div class="p-4 rounded-2xl bg-green-500">
					<a
						href="https://wa.me/62081226601858?text=Halo%20saya%20tertarik%20untuk%20order"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full">
						<span class="flex items-center justify-center gap-2 text-white">
							Order via WhatsApp
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import product1 from '@/assets/baju.jpg';

// Dummy product data
const product = {
	name: 'Baju Anak Ukuran XS-XL',
	description:
		'Baju anak berkualitas tinggi dengan berbagai ukuran mulai dari XS hingga XL. Terbuat dari bahan katun lembut dan nyaman dipakai sehari-hari.',
	price: 70000,
	image: product1,
};

// Utility function to format price
function formatPrice(price: number): string {
	return `Rp.${price.toLocaleString('id-ID')}`;
}
</script>
