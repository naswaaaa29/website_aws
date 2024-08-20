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
        'Apa Itu Kesehatan Mental?',
        'Kesehatan mental adalah kondisi kesejahteraan emosional, psikologis, dan sosial yang memengaruhi bagaimana seseorang berpikir, merasa, dan bertindak. Kesehatan mental yang baik memungkinkan individu untuk menghadapi stres, membangun hubungan yang sehat, dan membuat keputusan yang bijaksana. Ini juga mempengaruhi kualitas hidup dan kesejahteraan secara keseluruhan.'
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
        'Apa yang Harus Dilakukan Jika Merasa Kesepian?',
        'Jika merasa kesepian, cobalah untuk terhubung dengan orang lain, seperti teman atau keluarga, atau bergabung dengan kelompok atau komunitas yang memiliki minat yang sama. Berbicara dengan seorang profesional seperti psikolog atau konselor juga dapat membantu mengatasi perasaan kesepian.'
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
        'Bagaimana Cara Mendapatkan Bantuan Profesional untuk Kesehatan Mental?',
        'Untuk mendapatkan bantuan profesional, Anda dapat menghubungi psikolog, psikiater, atau konselor yang memiliki kualifikasi dan lisensi. Anda juga dapat mencari referensi dari dokter umum atau menggunakan layanan kesehatan mental online untuk konsultasi awal.'
    );
});
