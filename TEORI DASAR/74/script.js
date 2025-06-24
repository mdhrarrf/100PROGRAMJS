let mahasiswa = {
    nama: "Ani",
    nim: "12345",
    tampil: function() {
        console.log("Nama:", this.nama, "| NIM:", this.nim)
    }
};

mahasiswa.tampil()