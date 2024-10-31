<template>
	<div>
		<timeline :experiences="experiences" />
	</div>
</template>

<script setup lang="ts">
const experiences = ref<
	{
		name: string;
		type: string;
		job: string;
		since: string;
		until: string;
		description: string;
		icon?: string;
	}[]
>([
	{
		name: 'PT Ordivo Technology Indonesia',
		type: 'Contract',
		job: 'Fullstack Engineer',
		since: 'November 2022',
		until: 'Present',
		description: `
           <div class="p-2 mx-auto bg-white rounded-xl">
  <ul class="list-disc list-inside space-y-4 text-gray-700">
    <li>
      <strong class="text-indigo-600">Revamping Dashboard Funnel and Storefront:</strong>
      <span class="text-gray-600">Enhanced user engagement and interest by redesigning the dashboard funnel and storefront, creating a more intuitive and visually appealing user experience.</span>
    </li>
    <li>
      <strong class="text-indigo-600">Improving UI/UX for Orderonline:</strong>
      <span class="text-gray-600">Revamped key features to provide a superior user interface and user experience, making the platform more user-friendly and aesthetically pleasing.</span>
    </li>
    <li>
      <strong class="text-indigo-600">E2E Testing with Cypress:</strong>
      <span class="text-gray-600">Contributed to seamless functionality across the platform by assisting in end-to-end testing with Cypress.</span>
    </li>
    <li>
      <strong class="text-indigo-600">Unit Testing:</strong>
      <span class="text-gray-600">Developed unit tests to ensure component reliability and maintain platform stability.</span>
    </li>
    <li>
      <strong class="text-indigo-600">Tool Development for Streamlining:</strong>
      <span class="text-gray-600">Built tools to simplify and accelerate the Orderonline development process, improving overall efficiency and productivity.</span>
    </li>
  </ul>
</div>

`,
	},
	{
		name: 'Dinas Pekerjaan Umum dan Penataan Ruang Kabupaten Bandung',
		type: 'Contract',
		job: 'Fullstack Engineer',
		since: 'November 2023',
		until: 'Juny 2024',
		description: `
            <div class="p-2 max-w-2xl mx-auto bg-white rounded-xl space-y-6">
  <ul class="space-y-4 text-gray-700">
    <li>
      <strong class="text-indigo-600">DPUTR Internal Web Report Absensi (Vue, Laravel, MySQL):</strong>
      <p class="mt-2 ml-5 text-gray-600">
        A web-based application for the Department of Public Works and Spatial Planning of Bandung Regency, built with Vue, Laravel, and MySQL. It enables partners to create, submit, and track reports in real-time, enhancing transparency and operational efficiency in infrastructure project management.
      </p>
    </li>
    <li>
      <strong class="text-indigo-600">DPUTR Silandak Dashboard (Vue, Laravel, MongoDB):</strong>
      <p class="mt-2 ml-5 text-gray-600">
        This web-based dashboard visualizes infrastructure project data for the Department of Public Works and Spatial Planning. Developed with Vue, Laravel, and MongoDB, it provides daily, monthly, and yearly reports for real-time project tracking, featuring interactive charts and tables that enhance decision-making and strategic planning.
      </p>
    </li>
  </ul>
</div>

        `,
	},
	{
		name: 'Icreativelabs - PT Idekreatif Menusa Teknologi',
		type: 'Contract',
		job: 'Fullstack Engineer',
		since: 'Mei 2022',
		until: 'November 2022',
		description: `
            <div class="p-2 max-w-xl mx-auto bg-white rounded-xl space-y-6">
  <ul class="space-y-4 text-gray-700">
    <li>
      <strong class="text-indigo-600">PT Pos Indonesia:</strong>
      <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
        <li>Developed a comprehensive dashboard website to monitor business growth and progress.</li>
        <li>Created a detailed Dashboard Report Monitoring system to provide real-time insights and analytics.</li>
        <li>Enabled better decision-making and strategic planning through data-driven insights.</li>
      </ul>
    </li>
    <li>
      <strong class="text-indigo-600">Floucloud CMS:</strong>
      <ul class="list-disc list-inside ml-5 mt-2 space-y-2">
        <li>Built a CMS dashboard website for managing landing page content, similar to WordPress.</li>
        <li>Ensured smooth and efficient operation of the CMS.</li>
        <li>Provided a user-friendly platform for content management and updates.</li>
      </ul>
    </li>
  </ul>
</div>

        `,
	},
	{
		name: 'Ensiklotari',
		type: 'Hybrid',
		job: 'Fullstack Engineer',
		since: 'Mei 2021',
		until: 'December 2023',
		description: `
        <div class="p-2 max-w-xl mx-auto bg-white rounded-xl space-y-4">
  <p class="text-sm text-gray-700">
    I am the founder of <strong class="text-indigo-600">Ensiklotari.id</strong>, a pioneering startup dedicated to preserving and promoting Indonesian dance. Our startup was recognized as one of the top ten in the IEEE 2021 startup competition and proudly won funding from the Matching Fund Kedaireka. You can find more about our journey in these articles:
  </p>

  <ul class="list-disc list-inside space-y-2 text-gray-700">
    <li>
      <a href="https://bandung.viva.co.id/fakta-unik/11354-melestarikan-dan-merawat-tari-indonesia-lewat-ensiklotari?page=2" target="_blank" class="text-blue-500 hover:text-blue-700">
        Viva Bandung: Melestarikan dan Merawat Tari Indonesia Lewat Ensiklotari
      </a>
    </li>
    <li>
      <a href="https://republika.co.id/berita/rf92i0396/ars-university-lolos-pendanaan-matching-fund-kedaireka" target="_blank" class="text-blue-500 hover:text-blue-700">
        Republika: Ars University Lolos Pendanaan Matching Fund Kedaireka
      </a>
    </li>
  </ul>

  <p class="text-sm text-gray-700">
    I am possibly the sole engineer responsible for developing this website, collaborating closely with two friends and our supervising professor. Our collective effort has made <strong class="text-indigo-600">Ensiklotari.id</strong> a valuable digital platform for the cultural preservation of Indonesian dance.
  </p>
</div>

        `,
	},
	{
		name: 'Klosing.id',
		type: 'Hybrid',
		job: 'Fullstack Engineer',
		since: 'July 2021',
		until: 'July 2022',
		description: `
             <div class="mx-auto p-2">
        <ul class="space-y-4">
            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Manajemen Konten</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Kemampuan untuk <strong>menambahkan konten baru</strong> (artikel, gambar, video).</li>
                    <li>Kemampuan untuk <strong>memperbarui konten yang ada</strong>.</li>
                    <li>Kemampuan untuk <strong>menghapus konten</strong>.</li>
                    <li><strong>Pratinjau</strong> perubahan konten sebelum diterbitkan.</li>
                    <li>Mengelola konten untuk <strong>halaman utama website</strong> dan <strong>aplikasi mobile</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Pemantauan Aktivitas Pengguna</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Dasbor analitik <strong>real-time</strong> untuk <strong>memantau aktivitas pengguna</strong>.</li>
                    <li>Melihat <strong>log aktivitas pengguna</strong> (waktu login, tindakan yang diambil).</li>
                    <li>Menghasilkan laporan tentang <strong>keterlibatan pengguna</strong> dan <strong>kinerja konten</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Navigasi Dasbor</h2>
                <ul class="list-disc list-inside mt-2">
                    <li><strong>Sidebar yang ramah pengguna</strong> untuk akses mudah ke berbagai bagian.</li>
                    <li>Desain <strong>responsif</strong> untuk <strong>perangkat seluler</strong> dan <strong>tablet</strong>.</li>
                    <li>Fitur <strong>pencarian</strong> untuk cepat menemukan konten atau pengguna.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Notifikasi dan Peringatan</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Memberikan <strong>notifikasi kepada admin</strong> tentang pembaruan konten.</li>
                    <li>Mengeluarkan <strong>peringatan tentang aktivitas pengguna</strong> yang tidak biasa.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Pengaturan dan Konfigurasi</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Mengelola <strong>pengaturan akun admin</strong>.</li>
                    <li>Mengonfigurasi <strong>pengaturan CMS</strong> (SEO, kunci API, dll.).</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Keamanan</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Sistem <strong>autentikasi yang aman</strong> untuk akses admin.</li>
                    <li>Pengaturan <strong>izin untuk pengguna yang berbeda</strong> (admin, editor, dsb.).</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">User Experience</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Antarmuka yang <strong>intuitif</strong> dan mudah dinavigasi.</li>
                    <li>Penggunaan <strong>desain modern</strong> dan <strong>estetika visual</strong> yang menarik.</li>
                    <li><strong>Dokumentasi bantuan</strong> dan <strong>panduan pengguna</strong> untuk admin.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Integrasi</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Kemampuan untuk mengintegrasikan dengan <strong>API eksternal</strong>.</li>
                    <li>Dukungan untuk <strong>plugin atau modul tambahan</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Analisis Kinerja Konten</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Melacak <strong>metrik performa konten</strong> (views, likes, shares).</li>
                    <li>Menyediakan analitik yang mendalam tentang <strong>trends konten</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Backup dan Pemulihan</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Fitur untuk <strong>backup data</strong> secara teratur.</li>
                    <li>Opsi untuk <strong>memulihkan data</strong> dari cadangan jika terjadi kesalahan.</li>
                </ul>
            </li>
        </ul>
    </div>
        
        `,
	},
	{
		name: 'CV Notiva Indonesia',
		type: 'Magang',
		job: 'Frontend Engineer',
		since: 'January 2021',
		until: 'Juny 2021',
		description: `
             <div class="mx-auto p-2">
        <ul class="space-y-4">
            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Manajemen Konten</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Kemampuan untuk <strong>menambahkan konten baru</strong> (artikel, gambar, video).</li>
                    <li>Kemampuan untuk <strong>memperbarui konten yang ada</strong>.</li>
                    <li>Kemampuan untuk <strong>menghapus konten</strong>.</li>
                    <li><strong>Pratinjau</strong> perubahan konten sebelum diterbitkan.</li>
                    <li>Mengelola konten untuk <strong>halaman utama website</strong> dan <strong>aplikasi mobile</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Pemantauan Aktivitas Pengguna</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Dasbor analitik <strong>real-time</strong> untuk <strong>memantau aktivitas pengguna</strong>.</li>
                    <li>Melihat <strong>log aktivitas pengguna</strong> (waktu login, tindakan yang diambil).</li>
                    <li>Menghasilkan laporan tentang <strong>keterlibatan pengguna</strong> dan <strong>kinerja konten</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Navigasi Dasbor</h2>
                <ul class="list-disc list-inside mt-2">
                    <li><strong>Sidebar yang ramah pengguna</strong> untuk akses mudah ke berbagai bagian.</li>
                    <li>Desain <strong>responsif</strong> untuk <strong>perangkat seluler</strong> dan <strong>tablet</strong>.</li>
                    <li>Fitur <strong>pencarian</strong> untuk cepat menemukan konten atau pengguna.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Notifikasi dan Peringatan</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Memberikan <strong>notifikasi kepada admin</strong> tentang pembaruan konten.</li>
                    <li>Mengeluarkan <strong>peringatan tentang aktivitas pengguna</strong> yang tidak biasa.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Pengaturan dan Konfigurasi</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Mengelola <strong>pengaturan akun admin</strong>.</li>
                    <li>Mengonfigurasi <strong>pengaturan CMS</strong> (SEO, kunci API, dll.).</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Keamanan</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Sistem <strong>autentikasi yang aman</strong> untuk akses admin.</li>
                    <li>Pengaturan <strong>izin untuk pengguna yang berbeda</strong> (admin, editor, dsb.).</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">User Experience</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Antarmuka yang <strong>intuitif</strong> dan mudah dinavigasi.</li>
                    <li>Penggunaan <strong>desain modern</strong> dan <strong>estetika visual</strong> yang menarik.</li>
                    <li><strong>Dokumentasi bantuan</strong> dan <strong>panduan pengguna</strong> untuk admin.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Integrasi</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Kemampuan untuk mengintegrasikan dengan <strong>API eksternal</strong>.</li>
                    <li>Dukungan untuk <strong>plugin atau modul tambahan</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Analisis Kinerja Konten</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Melacak <strong>metrik performa konten</strong> (views, likes, shares).</li>
                    <li>Menyediakan analitik yang mendalam tentang <strong>trends konten</strong>.</li>
                </ul>
            </li>

            <li class="bg-white rounded-md">
                <h2 class="text-md font-semibold text-gray-800">Backup dan Pemulihan</h2>
                <ul class="list-disc list-inside mt-2">
                    <li>Fitur untuk <strong>backup data</strong> secara teratur.</li>
                    <li>Opsi untuk <strong>memulihkan data</strong> dari cadangan jika terjadi kesalahan.</li>
                </ul>
            </li>
        </ul>
    </div>
        
        `,
	},
]);
</script>
