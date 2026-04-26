---
title: "Automating Workflow: Integrasi Ticketing Portal + GitHub Apps"
description: "Cerita di balik layar gimana cara saya bikin sistem ticketing yang bisa 'ngobrol' otomatis sama GitHub biar gak ada lagi drama lupa update status tiket."
date: "2026-04-26"
category: "Tutorial & Story"
---

# Automating Workflow: Integrasi Ticketing Portal + GitHub Apps 🚀

Pernah nggak sih ngerasa capek karena harus update status tiket manual setiap kali selesai nge-push code atau merge Pull Request (PR)? Kalau iya, berarti kita satu server. 

Di salah satu project saya, saya kepikiran: *"Kenapa nggak kita bikin sistemnya otomatis aja?"*. Akhirnya, saya bangun integrasi antara **Ticketing Portal** dengan **GitHub Apps** lewat **Webhooks**. 

Nah, di artikel ini saya mau share gimana cara saya bikin itu semua jadi kenyataan.

---

## 🛠️ Kenapa Pakai GitHub Apps, Bukan Personal Token?

Dulu saya sempat pakai *Personal Access Token*, tapi jujur aja, itu ribet kalau buat skala tim. Pakai **GitHub Apps** itu jauh lebih "elegan" karena:
1. **Granular Permissions**: Kita bisa milih cuma butuh akses ke PR atau Branch doang.
2. **Lebih Aman**: Nggak terikat sama akun personal siapapun.
3. **Webhook Support**: Ini dia bumbu rahasianya.

---

## 🛰️ Gimana Cara Kerjanya? (The Logic)

Bayangin GitHub itu kayak kurir yang ngirim paket. Setiap ada kejadian di repository (kayak bikin branch baru), GitHub bakal ngirim "paket" data (JSON) ke URL server kita.

### 1. Setting Up the Webhook
Di dashboard GitHub Apps, saya arahkan Webhook URL ke endpoint API di Ticketing Portal saya, misal: `https://api.myticket.com/webhook/github`. Jangan lupa tambahkan **Webhook Secret** biar nggak sembarang orang bisa nembak API kita.

### 2. Event yang Saya Pantau
Nggak semua kejadian harus direspon. Saya fokus ke 3 hal:
- `Create`: Buat deteksi kalau ada branch baru.
- `Push`: Buat tracking aktivitas commit.
- `Pull Request`: Ini yang paling krusial buat update status tiket ke *Review* atau *Done*.

---

## 🧠 Magic Part: Smart Mapping ("Anti Salah Kamar")

Ini fitur yang paling saya banggain. Kadang developer suka lupa atau salah nulis nomor tiket di PR. Jadi saya bikin logikanya begini:

```typescript
// Contoh logika sederhana deteksi tiket
const branchName = payload.pull_request.head.ref; // feature/TASK-123-login-page
const ticketId = extractTicketNumber(branchName); // Hasilnya: TASK-123

if (ticketId) {
   // Update status tiket di database otomatis!
   await updateTicketStatus(ticketId, 'IN_PROGRESS');
}
```

Tapi gimana kalau dev-nya nulisnya di Parent Task padahal harusnya di Sub-task? Sistem saya otomatis nge-cek: *"Siapa yang nge-push? Dia dapet tugas di sub-task mana di bawah parent ini?"*. Kalau ketemu, sistem langsung belokin update-nya ke sub-task yang bener. **Smart, right?** 😎

---

## 🚀 Hasil Akhirnya?

Setelah integrasi ini jalan:
- **Status Tiket Real-time**: Begitu PR di-merge, tiket langsung pindah ke kolom *Testing*.
- **Data Akurat**: Gak ada lagi drama "Lupa update progress", karena sistem yang ngitungin.
- **Developer Happy**: Mereka cuma perlu fokus ngoding, urusan admin biar sistem yang urus.

---

## 📝 Kesimpulan

Bikin otomatisasi kayak gini emang butuh usaha di awal, tapi *payoff*-nya luar biasa buat produktivitas tim. Kalau kamu mau coba, mulailah dengan memahami struktur JSON dari Webhook GitHub, sisanya tinggal mainin logika di backend kamu.

Ada pertanyaan atau mau diskusi soal integrasi GitHub? Chat saya lewat halaman [Contact](/contact) ya! 

Happy Coding! ☕
