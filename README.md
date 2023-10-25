# DAPP MOVIE - Dokumentasi Proyek

Proyek ini adalah aplikasi web yang dibuat menggunakan Angular CLI versi 16.1.0. Aplikasi ini memungkinkan pengguna untuk menjelajahi film, menandai film sebagai favorit, dan melihat detail film. Di bawah ini adalah panduan untuk menjalankan, membangun, dan menguji aplikasi, serta deskripsi kriteria wajib dan opsional yang diterapkan dalam proyek ini.

## Menjalankan Aplikasi
Untuk menjalankan aplikasi ini, ikuti langkah-langkah berikut:

1. Pastikan Anda telah menginstal Angular CLI. Jika belum, instal dengan perintah:
   ```
   npm install -g @angular/cli
   ```

2. Clone repositori proyek ini dari GitHub.

3. Buka terminal dan masuk ke direktori proyek.

4. Jalankan perintah berikut untuk memulai server pengembangan:
   ```
   ng serve
   ```

5. Buka browser Anda dan akses aplikasi melalui URL [http://localhost:4200/](http://localhost:4200/).

Aplikasi akan secara otomatis memuat ulang jika ada perubahan pada berkas sumber.

## Membangun Aplikasi
Untuk membangun proyek, jalankan perintah berikut:

```
ng build
```

Berkas-berkas hasil pembangunan akan disimpan dalam direktori `dist/`.

## Menjalankan Unit Test
Aplikasi ini dilengkapi dengan uji unit yang dapat dieksekusi menggunakan Karma. Jalankan perintah berikut untuk menjalankan uji unit:

```
ng test
```

## Menjalankan Uji End-to-End
Proyek ini juga mendukung uji end-to-end. Untuk menjalankannya, jalankan perintah berikut:

```
ng e2e
```

Pastikan Anda telah menambahkan paket yang mengimplementasikan kemampuan pengujian end-to-end sebelum menggunakan perintah ini.

## Menjalankan Aplikasi Web Progresif (PWA)
Aplikasi ini juga dapat dijalankan sebagai Progressive Web App. Untuk melakukannya, jalankan perintah berikut:

```
npm run start-pwa
```

## Kriteria Wajib
Proyek ini memenuhi kriteria wajib sebagai berikut:

- **Fitur "Mark as Favorite"**: Pengguna dapat menandai film sebagai favorit.
- **Integrasi dengan API TMDb**: Proyek menggunakan API TMDb untuk mengambil data film.
- **Tampilan Film**: Aplikasi menampilkan daftar film dengan informasi penting seperti poster, judul, dan deskripsi.
- **Tampilan Detail Film**: Aplikasi menyediakan halaman detail untuk setiap film yang berisi informasi lebih lanjut.
- **Daftar Film Favorit**: Proyek ini menyimpan dan menampilkan daftar film favorit pengguna.
- **Responsif**: Tampilan aplikasi responsif untuk mendukung penggunaan di berbagai perangkat.
- **Penyimpanan Data Favorit secara Lokal**: Data film favorit pengguna disimpan secara lokal.
- **Interaksi Pengguna**: Proyek ini memastikan interaksi pengguna yang nyaman dan intuitif dalam menandai dan menghapus film dari daftar favorit.
- **Pemeliharaan**: Kode proyek mudah dipelihara dan fitur tetap berfungsi dengan baik seiring waktu.
- **Menggunakan frontend framework Angular dengan versi minimal 7 atau lebih tinggi**.
- **Menggunakan Git dan Github dengan rapi, detail, dan jelas**.
- **Membuat dokumentasi proyek / readme dalam bentuk markdown (.md) file**.

## Optional Task
Selain kriteria wajib, proyek ini juga memenuhi beberapa tugas opsional:

- **Kode yang Bersih dan Mudah Dibaca**: Kode proyek ini dijaga dengan baik, dengan menghapus kode atau komentar yang tidak digunakan, menjaga indentasi yang rapi, menghapus import yang tidak digunakan, dan menggunakan linter/Eslint.
- **Frontend Menggunakan Reuse Component**: Komponen yang dapat digunakan kembali digunakan dalam proyek ini.
- **Implementasi Testing**: Proyek ini mencakup pengujian unit atau pengujian integrasi.
- **Implementasi PWA (Progressive Web App)**: Proyek ini dapat berfungsi sebagai PWA dengan fitur caching, mode offline, dll.
- **Mengimplementasikan Load on Scroll / Infinite Scrolling**.

## Resource
- [Dokumentasi API TMDb](https://developer.themoviedb.org/reference/intro/getting-started)
- [Resource API TMDb](https://api.themoviedb.org)
- [Base URL TMDb](https://www.themoviedb.org/)
- Versi API: 3

Ini adalah dokumentasi proyek DAPP MOVIE. Semoga informasi ini membantu Anda memahami aplikasi dan kontribusi yang dilakukan dalam proyek ini.