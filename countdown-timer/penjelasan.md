Berikut adalah penjelasan rinci untuk kode js:

```javascript
// Array berisi nama-nama bulan dalam bahasa Inggris
const months = [
    'January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 'October', 
    'November', 'December'
];

// Array berisi nama-nama hari dalam bahasa Inggris
const weekDays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'
];
```
- Array `months` berisi nama-nama bulan dari Januari hingga Desember.
- Array `weekDays` berisi nama-nama hari dari Minggu hingga Sabtu.
- Kedua array ini akan digunakan nanti untuk menampilkan bulan dan hari dalam format teks.

```javascript
// Mendapatkan elemen dengan class 'timeSet' dan 'content-wrapper'
const timeSet = document.querySelector('.timeSet');
const content = document.querySelector('.content-wrapper');

// Mendapatkan semua elemen h1 dalam elemen dengan class 'deadline'
const items = document.querySelectorAll('.deadline h1');
```
- `timeSet` menyimpan elemen DOM yang memiliki kelas `timeSet`, tempat di mana waktu berakhir akan ditampilkan.
- `content` menyimpan elemen DOM yang memiliki kelas `content-wrapper`, yang akan diubah isinya ketika waktu habis.
- `items` adalah NodeList dari elemen-elemen `<h1>` di dalam elemen dengan kelas `deadline`, yang akan digunakan untuk menampilkan sisa hari, jam, menit, dan detik.

```javascript
// Mendapatkan tanggal saat ini
let tempDate = new Date();
let futureDate = new Date(tempDate);  // Salin `tempDate`
futureDate.setDate(tempDate.getDate());  // Tambahkan 11 hari ke `tempDate`
futureDate.setHours(11, 37, 0, 0);  // Set waktu ke 11:37:00
```
- `tempDate` menyimpan tanggal dan waktu saat ini.
- `futureDate` adalah salinan dari `tempDate` yang nantinya akan diubah untuk menentukan waktu berakhirnya hitungan mundur.
- `futureDate.setDate(tempDate.getDate())` menyalin tanggal saat ini ke `futureDate`.
- `futureDate.setHours(11, 37, 0, 0)` menetapkan waktu pada `futureDate` menjadi pukul 11:37:00.

```javascript
// Mendapatkan bagian-bagian dari tanggal `futureDate`
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekDay = weekDays[futureDate.getDay()];
```
- `year`, `hours`, dan `minutes` menyimpan tahun, jam, dan menit dari `futureDate`.
- `month` awalnya menyimpan indeks bulan, kemudian diubah menjadi nama bulan dari array `months`.
- `date` menyimpan tanggal (hari) dari `futureDate`.
- `weekDay` menyimpan nama hari dari array `weekDays` sesuai dengan indeks hari dalam `futureDate`.

```javascript
// Menampilkan waktu berakhirnya hitungan mundur dalam format teks
timeSet.textContent = `Time ends on ${weekDay} ${date} ${month} ${year} ${hours}:${minutes}`;
```
- `timeSet.textContent` menampilkan waktu berakhir dalam format teks seperti “Time ends on Friday 20 October 2023 11:37”.

```javascript
// Mendapatkan waktu milidetik dari `futureDate`
const futureTime = futureDate.getTime();
```
- `futureTime` menyimpan nilai `futureDate` dalam bentuk milidetik sejak 1 Januari 1970.

```javascript
function getRemainingTime() {
    const today = new Date().getTime(); // Mendapatkan waktu saat ini dalam milidetik
    const t = futureTime - today; // Menghitung selisih antara waktu sekarang dan waktu masa depan

    // Konversi hari, jam, menit, dan detik dalam milidetik
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Menghitung sisa hari, jam, menit, dan detik
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];
```
- Fungsi `getRemainingTime` menghitung sisa waktu menuju `futureDate`.
- `today` menyimpan waktu saat ini dalam milidetik.
- `t` menyimpan selisih waktu antara `futureTime` dan `today`.
- `oneDay`, `oneHour`, dan `oneMinute` menyimpan nilai dalam milidetik untuk sehari, sejam, dan semenit.
- `days`, `hours`, `minutes`, dan `seconds` menyimpan sisa hari, jam, menit, dan detik berdasarkan selisih `t`.
- `values` adalah array yang berisi `days`, `hours`, `minutes`, dan `seconds` yang nantinya akan digunakan untuk menampilkan sisa waktu.

```javascript
    // Fungsi untuk menambahkan nol di depan angka jika kurang dari 10
    function format(item) {
        return item < 10 ? `0${item}` : item;
    }

    // Memperbarui teks elemen `<h1>` dengan sisa waktu
    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });
```
- Fungsi `format` menambahkan nol di depan angka jika kurang dari 10.
- `items.forEach` iterasi pada setiap elemen `<h1>` di `items`, mengisi masing-masing elemen dengan waktu format `days:hours:minutes:seconds`.

```javascript
    // Jika waktu sudah habis
    if (t < 0) {
        clearInterval(countdown); // Menghentikan interval
        content.innerHTML = `<h4 class="expired">Sorry, Time's ended!</h4>`; // Menampilkan pesan berakhir
    }
}
```
- `if (t < 0)` mengecek apakah hitungan mundur sudah habis (`t < 0`), jika ya:
  - `clearInterval(countdown)` menghentikan interval waktu.
  - `content.innerHTML` menampilkan pesan "Sorry, Time's ended!".

```javascript
// Menginisialisasi interval hitungan mundur setiap 1 detik
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
```
- `setInterval(getRemainingTime, 1000)` memanggil fungsi `getRemainingTime` setiap 1 detik untuk memperbarui sisa waktu.
- `getRemainingTime()` dipanggil sekali di luar `setInterval` untuk menampilkan waktu yang tersisa segera saat halaman dimuat tanpa harus menunggu 1 detik pertama.