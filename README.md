# Setup & Run Project Angular

Berikut adalah panduan langkah-langkah untuk mengatur dan menjalankan proyek Angular:

## Prasyarat

Sebelum memulai, pastikan bahwa Anda telah memenuhi prasyarat berikut:

1. **Node.js dan npm:** Pastikan Node.js dan npm telah terinstal di sistem Anda. Anda dapat mengunduhnya dari [situs resmi Node.js](https://nodejs.org/).

2. **Angular CLI:** Instal Angular CLI untuk memudahkan pengelolaan proyek Angular. Buka terminal atau command prompt dan jalankan perintah:

    ```bash
    npm install -g @angular/cli
    ```

## Langkah 2: Jalankan Proyek

1. Jalankan proyek NPM dengan perintah:
   ```bash
    npm i
    ```
3. Jalankan proyek Angular dengan perintah:

    ```bash
    ng serve
    ```

4. Proyek akan dijalankan di mode pengembangan dan dapat diakses melalui browser dengan membuka `http://localhost:4200/`.

## Catatan Tambahan

- Jika Anda ingin menggunakan port lain, Anda dapat menyertakan opsi `-p` diikuti oleh nomor port, misalnya `ng serve -p 3000`.
- Untuk membangun proyek untuk produksi, gunakan perintah `ng build --prod`.
- Point point tast yang sudah di kerjakan
  Task Wajib :
  1. Fitur "Mark as Favorite": Pastikan pengguna dapat menandai film sebagai favorit.
     => Terdapat fitur untuk memilih dan memasukan film kedalam list favorit.
  3. Integrasi dengan API TMDb: Memanfaatkan API TMDb untuk mengambil data film yang diperlukan.
     => Penggunaan beberapa API dari TMDb yang terdapat pada `api-service.ts`.
  5. Tampilan Film: Menampilkan daftar film dengan informasi penting seperti poster, judul, dan deskripsi.
     => Menampilakn film berdasarkan API TMdb pada dashboard atau halaman pertama website.
  7. Tampilan Detail Film: Menyediakan halaman detail untuk setiap film yang berisi informasi lebih lanjut.
  8. => Memiliki komponen atau page khusus detail yang menyesuaikan dengan film yang dipilih.
  9. Daftar Film Favorit: Menyimpan dan menampilkan daftar film favorit pengguna dengan baik.
      => Memisahkan komponen atau page favorit menjadi komponen sendiri untuk membuat user lebih mudah untuk add/delete favorit.
  11. Responsif: Tampilan harus responsif untuk mendukung penggunaan di berbagai perangkat, seperti desktop, tablet, dan ponsel.
      => Setiap konfigurasi style width dan height memperhitungkan dari lebar layarnya, dan otomatis menyesuaikan dengan layar.
  13. Penyimpanan Data Favorit secara Lokal: Mengimplementasikan penyimpanan data favorit pengguna secara lokal agar tetap tersedia saat pengguna mengakses kembali aplikasi.
      => Menggunakan localstorage fitur browser, agar ketika page dibuka kembali dapat menampilkan data yang sebelumnya.
  15. Interaksi Pengguna: Memastikan interaksi pengguna yang nyaman dan intuitif dalam menandai dan menghapus film dari daftar favorit.
      => Button button dan navigasi di buat sefleksibel mungkin, agar dari user tidak perlu repot melakukan banyak klik
  17. Pemeliharaan: Membuat kode yang mudah dipelihara dan memastikan fitur tetap berfungsi dengan baik seiring waktu.
      => Kode dibuat dengan ringkas dan menerapkan OOP agar dapat selalu menyesuaikan dengan waktu atau perkembangan versi angular.
  19. Menggunakan frontend framework Angular dengan versi minimal 7 atau yg lebih tinggi.
      => Menggunakan Angular 16 TS 
  21. Menggunakan Git dan Github dengan rapi, detail dan jelas
      => Memberikan penjelasan untuk setiap point yang diperlukan
  23. Membuat dokumentasi project / readme dalam bentuk markdown (.md) file
      => Memberikan beberapa image untuk gambaran dari beberapa point

  Tast Optional :
  1. Menuliskan kode yang bersih dan mudah dibaca,
     => Sudah melakukan pengecekan dan menghapus comment dan import yang tidak diperlukan,
     => Melakukan pengecekan code dengan Eslint bawaan dari VS Code
  3. Frontend menggunakan reuse component,
     => Terdapat beberapa komponen reuse component seperti contohnya header yang dipanggil di komponen lainnya
  5. Mengimplementasikan testing, contohnya unit testing atau integration testing,
     => menggunakan unit test milih angular yaitu karma.
  7. Implementasi PWA (Progressive Web App) menggunakan fitur caching, mode offline, dll,
     => Implementasi PWA dengan menambahkan `ng add @angular/pwa`
  9. Mengimplementasikan load on scroll / Infinite scrolling
     => Setiap melakukan scroll website akan otomatis meload API TMDb 

