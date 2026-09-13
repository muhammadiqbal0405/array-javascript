function cekNilai(nilai) {
    if (nilai >= 70) {
        return "lulus";
    } else {
        return "tidak Lulus";
    }
}

let hasil = cekNilai(84)
console.log("totol Nilai " + hasil);