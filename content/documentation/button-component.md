---
title: "Vue Button Component Library"
description: "Sebuah lightweight UI component library khusus untuk Button yang dibangun dengan Vue 3, fokus pada kustomisasi dan aksesibilitas."
date: "2026-04-26"
category: "Library"
---

# Vue Button Component Library 🎨

Selamat datang di dokumentasi **mahardikakdenie-vue-button**. Ini adalah library komponen Vue 3 yang saya bangun untuk mempermudah standarisasi tombol di berbagai project saya.

::npm-package{name="mahardikakdenie-vue-button" url="https://www.npmjs.com/package/mahardikakdenie-vue-button"}
::

---

## 🚀 Fitur Utama

- **Lightweight**: Ukuran sangat kecil dan tidak ada dependensi eksternal yang berat.
- **Vue 3 Powered**: Memanfaatkan Composition API untuk performa maksimal.
- **Customizable**: Mendukung berbagai varian warna, ukuran, dan state (loading, disabled).
- **TypeScript Support**: Full type definitions untuk pengalaman developer yang lebih baik.

---

## 📦 Instalasi

Gunakan package manager favorit Anda untuk menginstall library ini:

```bash
# Menggunakan NPM
npm install mahardikakdenie-vue-button

# Menggunakan Yarn
yarn add mahardikakdenie-vue-button

# Menggunakan PNPM
pnpm add mahardikakdenie-vue-button
```

---

## 🛠️ Cara Penggunaan

Cukup import komponennya dan gunakan langsung di aplikasi Vue Anda:

```vue [App.vue]
<template>
  <VueButton 
    variant="primary" 
    size="medium" 
    @click="handleClick"
  >
    Click Me!
  </VueButton>
</template>

<script setup>
import { VueButton } from 'mahardikakdenie-vue-button'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

---

## 🎨 Varian Tersedia

Library ini mendukung beberapa varian out-of-the-box:

| Varian | Deskripsi |
| --- | --- |
| `primary` | Warna utama (Purple) |
| `secondary` | Warna sekunder (Slate) |
| `danger` | Warna peringatan (Red) |
| `outline` | Border transparan |

---

## 📄 Lisensi

Project ini berada di bawah lisensi MIT. Silakan gunakan untuk project personal maupun komersial Anda.

Ada feedback atau bug? Buka issue di [GitHub Repository](https://github.com/mahardikakdenie/mahardikakdenie-vue-button-lib) saya!
