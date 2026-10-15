
function periksaBarangBukti(barangBukti) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (barangBukti) {
                resolve(barangBukti);
            } else {
                reject("Barang bukti tidak ditemukan!");
            }
        }, 2000);
    });
}

async function mulaiInvestigasi() {
    try {
        const hasil = await periksaBarangBukti("Surat Rahasia");

        console.log("Barang bukti ditemukan:", hasil)

    } catch (error) {
        console.log("Pemeriksaan gagal:", error)
    }
}

console.log("=== MYSTERY CASE 404 ===");
console.log("Memulai pemeriksaan barang bukti...");

mulaiInvestigasi();

console.log("Menganalisis barang bukti...");
