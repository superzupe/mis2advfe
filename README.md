# 🎓 VideoBelajar - E-Learning Platform

**VideoBelajar** adalah platform pembelajaran mandiri berbasis web yang
dirancang untuk memberikan pengalaman eksplorasi kursus yang interaktif dan
responsif. Aplikasi ini mengintegrasikan manajemen state yang kompleks dan
antarmuka modern untuk memudahkan pengguna dalam belajar.

## 🚀 Fitur Utama

- **Katalog Kursus Dinamis**: Menampilkan daftar kursus dengan sistem filter
  berdasarkan kategori, harga, dan durasi secara real-time.
- **State Management Global**: Menggunakan **Redux Toolkit** untuk sinkronisasi
  data yang konsisten di seluruh komponen aplikasi.
- **Sistem Autentikasi**: Fitur Login dan Register yang aman dengan implementasi
  **Axios Interceptors** untuk menangani token.
- **Admin Dashboard (CRUD)**: Halaman khusus admin yang memungkinkan pengelolaan
  data kursus (Tambah, Edit, Hapus) secara langsung.
- **UI/UX Responsif**: Antarmuka yang dioptimalkan untuk berbagai perangkat
  (Mobile & Desktop) menggunakan **Tailwind CSS**.

## 🛠️ Tech Stack

- **Core Framework**: [React.js](https://reactjs.org/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **API Handling**: [Axios](https://axios-http.com/) (dengan Request/Response
  Interceptors)
- **Routing**: [React Router Dom v6](https://reactrouter.com/)

## ⚙️ Instalasi & Menjalankan Proyek

1. **Clone repositori**
   ```
   git clone [https://github.com/username/video-belajar.git](https://github.com/username/video-belajar.git)
   ```
2. **Masuk ke direktori proyek**
  ```
  cd video-belajar
  ```
3. **Instal dependensi**
  ```
  npm install
  ```
3. **Jalankan aplikasi (Mode Development)**
  ```
  npm run dev
  ```

## 📁 Struktur Folder Utama
  ```
  src/
├── components/     # Komponen UI reusable (Header, Card, Button, dsb)
├── hooks/          # Custom hooks untuk logika bisnis (e.g., useCourses)
├── pages/          # Halaman utama (Home, Login, Admin Dashboard)
├── services/       # Integrasi API dan konfigurasi Axios Interceptors
├── store/          # Manajemen state global (Redux Store & Slices)
└── utils/          # Fungsi pembantu dan utilitas lainnya
  ```

Dibuat dengan ❤️ oleh zupp
