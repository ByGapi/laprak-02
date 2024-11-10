document.addEventListener("DOMContentLoaded", function() {
    // JavaScript untuk mengatur efek scroll header
    let lastScrollY = 0;
    const banner = document.getElementById('banner');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollY > lastScrollY && currentScrollY > 150) {
            // Jika scroll ke bawah dan lebih dari 150px
            banner.classList.add('hidden');
        } else {
            // Jika scroll ke atas
            banner.classList.remove('hidden');
        }

        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY; // Cegah nilai negatif
    });

    // JavaScript untuk konfirmasi sembunyikan atau tampilkan konten artikel
    document.querySelectorAll('.toggle-content').forEach((heading) => {
        heading.addEventListener('click', function() {
            // Temukan konten terkait (elemen berikutnya)
            const content = this.nextElementSibling;

            if (content.classList.contains('hidden')) {
                // Jika konten tersembunyi, konfirmasi untuk menampilkannya
                const shouldShow = confirm("Konten ini disembunyikan. Apakah Anda ingin menampilkannya kembali?");
                if (shouldShow) {
                    content.classList.remove('hidden');
                }
            } else {
                // Jika konten terlihat, konfirmasi untuk menyembunyikannya
                const shouldHide = confirm("Apakah Anda ingin menyembunyikan bagian ini?");
                if (shouldHide) {
                    content.classList.add('hidden');
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Mode Berantakan
    const messyModeButton = document.getElementById('messyModeButton');
    const chaosImage = document.getElementById('chaosImage');
    
    messyModeButton.addEventListener('click', function() {
        // Toggle kelas messy-mode pada elemen body
        document.body.classList.toggle('messy-mode');
        
        // Tampilkan atau sembunyikan gambar chaos
        chaosImage.classList.toggle('hidden');
    });
});

