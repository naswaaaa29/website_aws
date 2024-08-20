const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector('.ocfe');
const pcfe = document.querySelector('.pcfe');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const content = document.querySelectorAll('.content');

// Function to update the content
function updateContent(title, text) {
    content.forEach((item) => {
        item.querySelector('h1').textContent = title;
        item.querySelector('p').textContent = text;
    });
}

gcfe.addEventListener('click', () => {
    img1.style.opacity = '1';
    img1.style.transform = 'rotate(0deg)';
    img3.style.opacity = '0';
    img3.style.transform = 'rotate(-90deg)';
    img2.style.opacity = '0';
    img2.style.transform = 'rotate(-90deg)';

    // Update content for img1
    updateContent(
        'Mengapa Imunisasi Itu Penting?',
        'Imunisasi adalah salah satu cara paling efektif untuk mencegah penyakit menular yang berbahaya. Dengan mendapatkan vaksin, tubuh kita dilatih untuk melawan infeksi tertentu tanpa harus mengalami sakit yang sebenarnya. Vaksinasi membuat tubuh siap melawan penyakit dengan menciptakan kekebalan terhadap patogen tertentu.'
    );
});

ocfe.addEventListener('click', () => {
    img2.style.opacity = '1';
    img2.style.transform = 'rotate(0deg)';
    img3.style.opacity = '0';
    img3.style.transform = 'rotate(-90deg)';
    img1.style.opacity = '0';
    img1.style.transform = 'rotate(-90deg)';

    // Update content for img2
    updateContent(
        'Bagaimana Cara Mendapatkan Imunisasi??',
        'Imunisasi bisa didapatkan di berbagai fasilitas kesehatan seperti: Puskesmas, Rumah Sakit, Klinik Kesehatan, dan Program Imunisasi Nasional.'
    );
});

pcfe.addEventListener('click', () => {
    img3.style.opacity = '1';
    img3.style.transform = 'rotate(0deg)';
    img1.style.opacity = '0';
    img1.style.transform = 'rotate(-90deg)';
    img2.style.opacity = '0';
    img2.style.transform = 'rotate(-90deg)';

    // Update content for img3
    updateContent(
        'Tetap Sehat, Tetap Terlindungi dengan Imunisasi!',
        'Imunisasi adalah investasi penting untuk masa depan yang sehat. Pastikan Anda dan orang-orang yang Anda cintai mendapatkan vaksinasi sesuai jadwal dan tetap terlindungi dari berbagai penyakit berbahaya.'
    );
});
