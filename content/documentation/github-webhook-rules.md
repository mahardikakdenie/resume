---
title: "GitHub Webhook Automation Rules"
description: "Dokumen ini menjelaskan logika otomatisasi yang berjalan saat ada aktivitas di GitHub (Branch, Push, Pull Request) yang terhubung dengan sistem tiket."
date: "2026-04-26"
category: "Automation"
---

# GitHub Webhook Automation Rules

Dokumen ini menjelaskan logika otomatisasi yang berjalan saat ada aktivitas di GitHub (Branch, Push, Pull Request) yang terhubung dengan sistem tiket.

## 1. Deteksi Tiket
Sistem mendeteksi nomor tiket dari:
- Nama branch (contoh: `feature/TASK-123-login-page`)
- Judul Pull Request (contoh: `[TASK-123] Implement login logic`)
- Pesan Commit (contoh: `fix: resolve issue in TASK-123`)

## 2. Smart Auto-Correction ("Salah Kamar")
Jika developer menautkan PR ke **Parent Task** padahal tugasnya ada di **Subtask** (misal FE atau BE):
- Sistem akan mengecek siapa yang melakukan aktivitas tersebut di GitHub.
- Sistem mencari Subtask di bawah Parent tersebut yang di-assign ke developer yang bersangkutan.
- Jika ketemu, metrik dan status akan di-update di **Subtask** tersebut, bukan di Parent.
- Jika tidak ketemu, link tetap di Parent tapi otomatisasi metrik (progress/status) tidak dijalankan untuk menjaga akurasi data.

## 3. Aturan Status & Metrik (Pull Request)

### A. Saat PR Dibuka (Opened / Reopened / Ready for Review)
- **Start Date:** Jika `start_date` tiket masih kosong, otomatis diisi dengan waktu sekarang.
- **Draft PR:** Jika PR berstatus *Draft*, status tiket tidak berubah.
- **Subtask:** Status tetap `in progress` (Bypass `review code`). Progress otomatis naik ke **90%**.
- **Standalone Task:** Status berubah menjadi `review code`.

### B. Saat PR Di-Merge (Closed & Merged)
- **Status:** Berubah menjadi `todo testing`.
- **Progress:** Otomatis menjadi **100%**.
- **End Date:** Jika `end_date` masih kosong, otomatis diisi dengan waktu merge.
- **Multi-PR Check:** Jika satu tiket punya lebih dari satu PR, status `todo testing` hanya akan dipicu jika **SEMUA** PR terkait sudah berstatus *merged* atau *closed*.

### C. Saat PR Ditutup Tanpa Merge (Closed & Unmerged)
- Status tiket dikembalikan ke `in progress`.
- Progress diturunkan dari 100% kembali ke 90% (atau tetap jika sebelumnya memang belum 100%).

## 4. Parent Ticket Auto-Sync (Roll-up)
Setiap kali ada perubahan pada Subtask, Parent Task akan melakukan sinkronisasi otomatis:
- **Progress:** Mengambil rata-rata progress dari semua Subtask.
- **Status:** Jika **SEMUA** Subtask sudah berstatus minimal `todo testing`, maka Parent Task otomatis ikut menjadi `todo testing`.
- **Timeline:** 
  - `start_date` Parent diambil dari subtask tercepat yang mulai.
  - `end_date` Parent diisi saat subtask terakhir selesai 100%.

## 5. Activity Mirroring
Semua riwayat aktivitas (Pembuatan Branch, Push Commit, Aktivitas PR) yang terjadi di Subtask akan **otomatis ditampilkan juga di riwayat aktivitas Parent Task**. Ini memastikan Parent Task menjadi sumber kebenaran tunggal (*Single Source of Truth*) untuk seluruh progres fitur.
