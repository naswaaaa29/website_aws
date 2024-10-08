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
        'Mengapa Kesehatan Lingkungan Itu Penting?',
        'Gizi seimbang adalah kunci untuk menjaga kesehatan tubuh dan pikiran. Dengan mengonsumsi makanan yang tepat, tubuh Anda mendapatkan semua nutrisi yang dibutuhkan untuk berfungsi dengan optimal. Gizi seimbang membantu: Meningkatkan Sistem Kekebalan Tubuh, Menjaga Berat Badan Ideal, dan Meningkatkan Energi.'
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
        'Apa Peran Masyarakat dalam Menjaga Kesehatan Lingkungan?',
        'Masyarakat dapat berperan dalam menjaga kesehatan lingkungan dengan mengadopsi kebiasaan ramah lingkungan, seperti mengurangi sampah, mendukung produk ramah lingkungan, dan terlibat dalam kegiatan komunitas terkait lingkungan. Kesadaran dan tindakan sehari-hari setiap orang berkontribusi pada kesehatan lingkungan secara keseluruhan.'
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
        'Ayo Mulai Sekarang!',
        'Lingkungan yang sehat dimulai dari tindakan sederhana yang dilakukan setiap hari. Mari bersama-sama menjaga dan melestarikan lingkungan demi masa depan yang lebih baik untuk kita semua.'
    );
});