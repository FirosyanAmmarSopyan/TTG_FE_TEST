function pyramid(jumlahBaris) {
  for (let i = jumlahBaris; i >= 1; i--) {

    let spasi = jumlahBaris - i;

    let baris = "";

    for (let j = 0; j < spasi; j++) {
      baris += " ";
    }

    for (let j = 0; j < 2 * i - 1; j++) {
      baris += "*";
    }
    console.log(baris);
  }
  return `Jumlah Baris : ${jumlahBaris} baris`
}

console.log(pyramid(5));
