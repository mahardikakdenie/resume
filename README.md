# 🚀 Mahardika Kessuma Denie - Personal Portfolio

![Nuxt 3](https://img.shields.io/badge/Nuxt-3.12-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

Sebuah situs web portofolio modern, responsif, dan interaktif yang dibangun menggunakan **Nuxt 3**. Proyek ini dirancang untuk menampilkan perjalanan karier, keahlian teknis, dan galeri proyek saya sebagai Software Engineer dengan estetika desain **Glassmorphism** dan **Clean Minimalist**.

🔗 **Live Demo:** [Tulis Link Demo/Vercel Anda di Sini]

## ✨ Fitur Utama

* **🎨 Modern Glassmorphism UI:** Desain antarmuka modern dengan efek blur, gradasi warna, dan *floating cards*.
* **📱 Fully Responsive:** Tampilan optimal di semua perangkat (Desktop, Tablet, Mobile) menggunakan **Tailwind CSS**.
* **⚡ High Performance:** Dibangun di atas Nuxt 3 dengan dukungan **SSR (Server-Side Rendering)** untuk SEO yang lebih baik.
* **✨ Interactive Animations:** Integrasi **AOS (Animate On Scroll)** untuk transisi elemen yang halus saat digulir.
* **💼 Dynamic Project Gallery:** Fitur pencarian dan filter kategori (Web, Mobile, UI/UX) untuk portofolio proyek.
* **⏳ Experience Timeline:** Visualisasi perjalanan karier dan pendidikan dengan desain *snake timeline* yang interaktif.
* **🛠️ Tech Stack Marquee:** Animasi *infinite scroll* untuk menampilkan logo-logo teknologi yang dikuasai.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi terkini:

* **Core:** [Nuxt 3](https://nuxt.com/) (Vue 3 Framework)
* **Language:** TypeScript
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & SASS/SCSS
* **Animation:** [Nuxt AOS](https://www.npmjs.com/package/nuxt-aos)
* **Icons:** DevIcon & Flaticon (via CDN mapping)

## 📂 Struktur Folder

```bash
.
├── assets/          # Aset statis (CSS, Images, SVG lokal)
├── components/      # Komponen Vue yang dapat digunakan kembali (Navbar, Footer, Timeline, dll)
├── layouts/         # Layout dasar aplikasi (Default)
├── lib/             # Data statis (static.ts) dan interface TypeScript
├── pages/           # Halaman aplikasi (Routing otomatis Nuxt)
│   ├── index.vue            # Homepage
│   ├── about.vue            # Halaman About
│   ├── contact.vue          # Halaman Contact
│   ├── experiences/         # Halaman Pengalaman Kerja
│   ├── educations/          # Halaman Pendidikan
│   ├── projects/            # Halaman Galeri Proyek
│   └── skills/              # Halaman Skill
├── public/          # File statis publik (CV PDF, Favicon, Fallback images)
├── server/          # API Routes (jika ada)1
└── nuxt.config.ts   # Konfigurasi utama Nuxt1
