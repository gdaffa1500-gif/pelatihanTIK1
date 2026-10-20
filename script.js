// Menunggu dokumen HTML selesai dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', () => {
    
    // Mengambil elemen tombol dan teks berdasarkan ID
    const tombol = document.getElementById('btn-aksi');
    const teksInfo = document.getElementById('teks-info');

    // Memastikan elemen ada sebelum menambahkan event listener
    if (tombol && teksInfo) {
        tombol.addEventListener('click', () => {
            teksInfo.textContent = 'Selamat! Tombol berhasil diklik dan JavaScript berjalan tanpa error.';
            teksInfo.style.color = '#27ae60';
            teksInfo.style.fontWeight = 'bold';
        });
    } else {
        console.warn('Elemen tombol atau teks tidak ditemukan di dalam HTML.');
    }

});
