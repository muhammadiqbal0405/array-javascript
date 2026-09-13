function hitungTotal(harga, jumlah) {
    let totalBelanja = harga * jumlah;
    return totalBelanja;
}

let total = hitungTotal(25000 , 4);
console.log("Total: " + total);