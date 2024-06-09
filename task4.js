function divideAndSort(deretAngka) {
    // Ubah deretAngka menjadi string
    let deretAngkaString = deretAngka.toString();

    // Pisahkan string berdasarkan angka 0 (nol)
    let potonganBilangan = deretAngkaString.split('0');

    // Untuk setiap potongan bilangan, urutkan karakternya
    for (let i = 0; i < potonganBilangan.length; i++) {
        potonganBilangan[i] = potonganBilangan[i].split('').sort().join('');
    }

    // Gabungkan semua potongan bilangan yang telah diurutkan kembali menjadi satu string
    let hasilGabungan = potonganBilangan.join('');

    // Ubah string hasil penggabungan menjadi integer
    let hasilInteger = parseInt(hasilGabungan);

    // Kembalikan hasilInteger sebagai output
    return hasilInteger;
}

// Contoh penggunaan
let input = 5956560159466056;
let output = divideAndSort(input);
console.log(output); // Output: 55566914566956s