function FazzFood(harga, voucher, jarak, pajak) {
    let diskon = 0;
    let biaya_pengiriman = 5000;
    let pajak_makanan = 0;
  
    // Pengecekan voucher
    if (voucher === 'FAZZFOOD50') {
      // pengecekan harga
      if (harga >= 50000) {
        // Pengecekan diskon
        // 0.5 itu hasil dari 50%
        if (harga * 0.5 > 50000) {
          diskon = 50000
        } else {
          diskon = harga * 0.5
        }
      }
      // Pengecekan voucher
    } else if (voucher === 'DITRAKTIR60') {
      // Pengecekan harga
      if (harga >= 25000) {
        // Pengecekan diskount
        // 0.6 itu hasil dari 60%
        if (harga * 0.6 > 30000) {
          diskon = 30000
        } else {
          diskon = harga * 0.6
        }
      }
    }
  
    // Pengecekan biaya pengiriman
    if (jarak > 0) {
      biaya_pengiriman += (jarak - 2) * 3000;
    }
  
    // Pengecekan pajak
    if (pajak) {
      pajak_makanan = harga * 0.05;
    }
  
    const subtotal_biaya = harga - diskon + biaya_pengiriman + pajak_makanan;
  
    console.log("Harga : " + harga);
    console.log("Potongan : " + diskon);
    console.log("Biaya Antar : " + biaya_pengiriman);
    console.log("Pajak : " + pajak_makanan);
    console.log("SubTotal : " + subtotal_biaya);
  
  }
  
  // Contoh penggunaan fungsi
  const harga = 75000;
  const voucher = 'FAZZFOOD50';
  const jarak = 5;
  const pajak = true;
  
  // const total_pembayaran = 
  FazzFood(harga, voucher, jarak, pajak);
  // console.log("Total pembayaran:", total_pembayaran);