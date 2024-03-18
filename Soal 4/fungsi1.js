function kelompokGenap(jumlahBilangan, jumlahKelompok) {
  const bilanganGenap = [];

  for (let i = 2; i <= jumlahBilangan * 2; i += 2) {
    bilanganGenap.push(i);
  }

  const panjangKelompok = Math.floor(bilanganGenap.length / jumlahKelompok);

  const kelompokBilanganGenap = [];
  for (let i = 0; i < bilanganGenap.length; i += panjangKelompok) {
    kelompokBilanganGenap.push(bilanganGenap.slice(i, i + panjangKelompok));
  }

  return kelompokBilanganGenap;
}

console.log(kelompokGenap(10, 2));
console.log(kelompokGenap(7,3))