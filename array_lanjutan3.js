let nilai = [80, 70, 90, 60, 85]
    console.log(nilai);

    nilai.splice(1, 1, 75);
let pilihannilai = nilai.slice(0, 3);
    console.log(nilai);
    console.log(pilihannilai);

let nilaiTambahan = [95, 100]
let semuaNilai = nilai.concat(nilaiTambahan);

console.log(semuaNilai);