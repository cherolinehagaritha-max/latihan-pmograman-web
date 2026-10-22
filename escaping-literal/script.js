// Literal adalah nilai yang ditulis langsung di dalam kode.
const literalDenganPetikGanda = "Halo, dunia!";
const literalDenganPetikTunggal = "Belajar JavaScript";

// Backslash (\\) melakukan escaping agar tanda petik menjadi bagian dari string.
const kutipan = "Dia berkata: 'Halo!'";

// Escape sequence umum: \n untuk baris baru dan \\ untuk karakter backslash.
const teksDuaBaris = "Baris pertama\nBaris kedua";
const alamatFolder = "Folder\\Dokumen";

// Template literal menggunakan backtick dan menyisipkan ekspresi dengan ${...}.
const nama = "Elliot";
const sapaan = `Halo, ${nama}!`;
document.getElementById("literal-output").textContent =
  `${literalDenganPetikGanda} — ${literalDenganPetikTunggal}`;
document.getElementById("escape-output").textContent =
  `${kutipan}\n${teksDuaBaris}\n${alamatFolder}`;
document.getElementById("template-output").textContent = sapaan;