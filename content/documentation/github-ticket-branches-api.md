---
title: "GitHub Ticket Branches API"
description: "Endpoint ini digunakan untuk mengelola dan mengambil data branch GitHub yang terkait dengan tiket di sistem."
date: "2026-04-26"
category: "API Documentation"
---

# GitHub Ticket Branches API

Endpoint ini digunakan untuk mengelola dan mengambil data branch GitHub yang terkait dengan tiket di sistem.

## 1. Get Ticket Branches
Mengambil daftar branch yang telah dibuat melalui sistem untuk tiket tertentu.

- **URL:** `/github/tickets/:ticketId/branches`
- **Method:** `GET`
- **Auth Required:** Yes (Bearer Token)

### URL Parameters
| Parameter | Tipe | Deskripsi |
|-----------|------|-----------|
| `ticketId` | `string` (UUID) | ID unik tiket yang ingin dicari branch-nya. |

### Success Response (200 OK)
Diterjemahkan dari tabel `ticket_github_branches`.

```json
{
  "data": [
    {
      "id": "e5692cda-b0a0-4eff-be8d-ff990c966475",
      "ticket_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      "repo_name": "friendsure/ticket-service",
      "branch_name": "KA-123-feat-fix-bug",
      "created_by": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "created_at": "2026-04-25T10:00:00.000Z"
    }
  ],
  "meta": {
    "total": 1,
    "ticket_id": "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    "has_branches": true
  }
}
```

### Error Responses

**401 Unauthorized**
Terjadi jika token tidak disertakan atau sudah kadaluarsa.
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

**404 Not Found**
Terjadi jika endpoint salah atau format ID tidak dikenal. Jika tiket ada tapi tidak punya branch, response akan tetap 200 dengan `data: []`.

---

## 2. Create Ticket Branch
Membuat branch baru di GitHub dan mencatatnya di database sistem.

- **URL:** `/github/tickets/:ticketId/branches`
- **Method:** `POST`
- **Auth Required:** Yes (Bearer Token)

### Request Body
```json
{
  "repo_name": "string",
  "base_branch": "string",
  "new_branch_name": "string"
}
```
