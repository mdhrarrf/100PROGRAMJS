let siswa = {
    nama: "Budi",
    sapa: function() {
        console.log("Halo, saya " + this.nama)
    }
};

siswa.sapa()