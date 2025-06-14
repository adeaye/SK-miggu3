const nilaiUjian = [80, 30, 30, 80, 40];
let totalNilai = 0;

// lengkapi kondisi berhenti perulangan
for (let i = 0; i < nilaiUjian.length; i++) {
    // lengkapi rumus penambahan dengan nilai yang sedang diiterasi
    totalNilai = totalNilai + nilaiUjian[i];
}

// lengkapi rumus
const nilaiRatarata = totalNilai / nilaiUjian.length;

// isi kondisi ketika nilai rata-rata 
// lebih besar dari atau sama dengan 60 maka lulus
if (nilaiRatarata >= 60) {
    console.log(`nilai anda adalah ${nilaiRatarata}. selamat anda dinyatakan lulus`);
} else {
    console.log(`nilai anda adalah ${nilaiRatarata}. maaf anda dinyatakan tidak lulus`);
}
