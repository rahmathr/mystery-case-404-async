
function periksaBarangBukti(barangBukti) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (barangBukti) {
                resolve(barangBukti);
            } else {
                reject("Pemeriksaan barang bukti gagal!");
            }
        }, 2000);
    });
}

function cariBarangBukti(barangBukti) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (barangBukti) {
                resolve(barangBukti)
            } else {
                reject("Barang bukti tidak ditemukan pada tahap pencarian!");
            }
        }, 1000);
    });
}

function tampilkanLaporan(barangBukti, status){
    console.log("\n=== LAPORAN INVESTIGASI ===")
    console.log("Barang bukti:", barangBukti)
    console.log("Status:", status)
}

async function mulaiInvestigasi(barangBukti) {
    try {
        console.log("Memulai pencarian barang bukti...");

        const hasilPencarian = await cariBarangBukti(barangBukti);
        console.log("Pencarian berhasil:", hasilPencarian)

        console.log("Memulai pemeriksaan barang bukti...");

        const hasilPemeriksaan = await periksaBarangBukti(hasilPencarian);
        console.log("Barang bukti ditemukan:", hasilPemeriksaan)

        console.log("Investigasi selesai.")
        tampilkanLaporan(hasilPemeriksaan, "Investigasi berhasil");

    } catch (error) {
        console.log("Investigasi gagal:", error)
        tampilkanLaporan(barangBukti, "Investigasi gagal")
    }
}

console.log("=== MYSTERY CASE 404 ===");
mulaiInvestigasi("Surat Rahasia");
