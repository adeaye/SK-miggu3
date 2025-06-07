// ini adalah untuk perbaikan soal yang diberikan
const nilaiUjian = [80, 50, 70, 80, 40];
let totalNilai = 0;

// Perulangan sebanyak panjang array
for (let i = 0; i < nilaiUjian.length; i++) {
  // Tambahkan nilai pada indeks ke-i ke totalNilai
  totalNilai = totalNilai + nilaiUjian[i];
}

// Hitung rata-rata dengan membagi total nilai dengan jumlah elemen array
const nilaiRatarata = totalNilai / nilaiUjian.length;

// Cek apakah rata-rata >= 60
if (nilaiRatarata >= 60) {
  console.log("Selamat Anda Lulus");
} else {
  console.log("Maaf Anda Tidak Lulus");
}

// nilaiUjian.length digunakan agar loop menyesuaikan jumlah elemen dalam array.

// nilaiUjian[i] mengambil nilai di indeks ke-i.

// nilaiRatarata >= 60 adalah kondisi kelulusan.
