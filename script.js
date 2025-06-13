// Lengkapi kode supaya kode dapat berjalan, ganti ... dengan kode yang diperlukan.

const nilaiUjian = [80, 50, 70, 80, 40];
let totalNilai = 0;

// lengkapi kondisi berhenti perulangan
for (let i = 0; i < nilaiUjian.length; i++) {
  // lengkapi rumus penambahan dengan nilai yang sedang diiterasi
  totalNilai = totalNilai + nilaiUjian[i];
}

console.log("Total Nilai", totalNilai);

// lengkapi rumus
const nilaiRatarata = totalNilai / nilaiUjian.length;

console.log("Nilai Rata-rata", nilaiRatarata);

// isi kondisi ketika nilai rata-rata
// lebih besar dari atau sama dengan 60 maka lulus
if (nilaiRatarata >= 60) {
  console.log("Selamat Anda Lulus");
} else {
  console.log("Maaf Anda Tidak Lulus");
}
