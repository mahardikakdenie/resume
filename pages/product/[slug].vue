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

				<div>
					<button
						class="rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold py-3 w-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
						<span class="flex items-center justify-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24">
								<path
									d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15s-.767.966-.94 1.164c-.173.198-.347.223-.644.074-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.607.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.614-.916-2.212-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.571-.011s-.521.075-.795.372c-.273.297-1.041 1.016-1.041 2.479s1.065 2.872 1.213 3.07c.148.198 2.1 3.206 5.08 4.492.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.086 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.075-.124-.272-.198-.57-.347z" />
							</svg>
							Order via WhatsApp
						</span>
					</button>
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
